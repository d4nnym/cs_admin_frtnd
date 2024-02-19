import Navbar from "./Navbar";

export default function Asaid() {


  return (
    <aside>
      <div role="sidebar" className="fixed w-64">
        <div className="w-full bg-blue-600">
          <Navbar />
        </div>
      </div>
    </aside>
  );
}
