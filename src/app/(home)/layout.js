import Header from "@/components/home/Header";
import Asaid from "@/components/home/Asaid";

export default function RootHome({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Header />
        <Asaid />
        
        <main className="fixed mx-64 mt-20 p-6 w-full h-full bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')]">
          {children}
        </main>
      </body>
    </html>
  );
}
