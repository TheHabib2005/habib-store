import CategoryLists from "@/components/CategoryLists";
import HomeProduct from "@/components/HomeProductGrid";
import { Suspense } from "react";



export default function Home() {



  return (
    <main className="max-w-screen-2xl  mx-auto">
      <Suspense fallback={"loading"}>
        <HomeProduct />
        <CategoryLists />
      </Suspense>
    </main>
  );
}
