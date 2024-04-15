import CategoryLists from "@/components/CategoryLists";
import HomeProduct from "@/components/HomeProductGrid";



export default function Home() {



  return (
    <main className="max-w-screen-2xl  mx-auto">
      <HomeProduct />
      <CategoryLists />
    </main>
  );
}
