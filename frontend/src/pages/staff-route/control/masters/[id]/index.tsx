
import { MasterDetailAdmin } from "@/components/MasterDetailAdmin/MasterDetailAdmin";
import { useAuthStore } from "@/store/auth";
import { Poiret_One } from "next/font/google";
import { useRouter } from "next/router";

export const inter = Poiret_One({weight: "400", subsets: ['cyrillic']});

export default function MasterPage() {
  
    const router = useRouter();
    const id = router.query.id;
    if(!id) return null;
    
  return (
    <>
      <div className={` mt-8`}>
        <MasterDetailAdmin id={+id as unknown as number} />
      </div>
    </>
  );
}