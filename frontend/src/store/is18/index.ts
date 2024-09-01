import { create } from "zustand";
import Cookies from "js-cookie";

const ageCheckChannel = new BroadcastChannel("age-check");

export type AgeCheckState = {
  isAgeVerified: boolean;
  verifyAge: () => void;
  resetAgeCheck: () => void;
  broadcastAgeCheck: () => void;
  broadcastResetAgeCheck: () => void;
};

export const ageCheckStorageKey = "__age_verified";

export const useAgeCheckStore = create<AgeCheckState>(
  (set): AgeCheckState => ({
    isAgeVerified: Cookies.get(ageCheckStorageKey) === "true",
    verifyAge: () => {
      Cookies.set(ageCheckStorageKey, "true");
      set(() => ({ isAgeVerified: true }));
      ageCheckChannel.postMessage("age-verified");
    },
    resetAgeCheck: () => {
      Cookies.remove(ageCheckStorageKey);
      set(() => ({ isAgeVerified: false }));
      ageCheckChannel.postMessage("age-reset");
    },
    broadcastAgeCheck: () => {
      set(() => ({ isAgeVerified: true }));
    },
    broadcastResetAgeCheck: () => {
      set(() => ({ isAgeVerified: false }));
    }
  })
);

ageCheckChannel.onmessage = (event) => {
  const message = event?.data;
  if (event.source === window.self) {
    return;
  }

  if (message === "age-verified") {
    useAgeCheckStore.getState().broadcastAgeCheck();
  } else if (message === "age-reset") {
    useAgeCheckStore.getState().broadcastResetAgeCheck();
  }
};
