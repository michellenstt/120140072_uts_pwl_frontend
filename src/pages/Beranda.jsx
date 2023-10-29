import Button from "../components/Button";
import Card from "../components/Card";
import * as Icons from "react-icons/fa";

const Beranda = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Produk Kami</h1>
        <Button className={"flex items-center gap-2"}>
          Tambah Produk
          <Icons.FaPlus />
        </Button>
      </div>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Beranda;
