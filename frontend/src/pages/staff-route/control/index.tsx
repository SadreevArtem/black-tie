import { AdminPanel } from "@/components/AdminPanel/AdminPanel";
import { AppToast } from "@/components/AppToast";
import { Login } from "@/components/Login/Login";
import { useAuthStore } from "@/store/auth";

import { Poiret_One } from "next/font/google";


export default function Admin() {
  const token = useAuthStore((state) => state.token);
    const isAuth = !!token;
  return (
    <>
      <div className={`h-[100vh] !bg-gray-500`}>
        {!isAuth ? <Login /> : <AdminPanel title="Управление контентом" />}
      </div>
      <AppToast />
    </>
  );
}