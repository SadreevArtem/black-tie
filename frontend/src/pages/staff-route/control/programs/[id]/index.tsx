
import { MasterDetailAdmin } from "@/components/MasterDetailAdmin/MasterDetailAdmin";
import { ProgrammDetailAdmin } from "@/components/ProgrammDetailAdmin/ProgrammDetailAdmin";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/router";


export default function ProgramsPage() {
  
    const router = useRouter();
    const id = router.query.id;
    if(!id) return null;
    
  return (
    <>
      <div className={` mt-8`}>
        <ProgrammDetailAdmin id={+id as unknown as number} />
      </div>
    </>
  );
}