import Header from "@/components/home/Header";
import Asaid from "@/components/home/Asaid";

export default function RootHome({ children }) {

  return (
    
      <div className="h-screen bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')]">
        <Header />
        <Asaid  />
        <main className="">
          {children}
        </main>
      </div>
    
  );
}
