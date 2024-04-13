import CategoryLists from "@/components/CategoryLists";
import HomeProduct from "@/components/HomeProductGrid";
import Link from "next/link";


export default function Home() {
  return (
    <main className="max-w-screen-2xl  mx-auto">
      <HomeProduct />
      <CategoryLists />
    </main>
  );
}
