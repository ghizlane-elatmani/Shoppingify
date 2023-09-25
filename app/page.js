import Drawer from "@/components/Drawer";
import { Header } from "@/components/Header";
import ItemsList from "@/components/ItemsList";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="sm:flex">
        <div className="px-16 py-10 flex-1">
          <Header />
          <ItemsList />
        </div>

        <Drawer />
      </div>
    </main>
  );
}
