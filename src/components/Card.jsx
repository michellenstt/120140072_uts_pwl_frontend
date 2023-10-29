import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Card = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-md p-2 cursor-pointer"
      onClick={() => navigate("/detail/1")}
    >
      <div className="w-full h-48 bg-gray-300 rounded-md"></div>
      <h1 className="text-lg font-semibold mt-2">Nama Produk</h1>
      <p className="text-sm">Rp. 120.000</p>
      <p className="text-sm mt-5">Stok : 12</p>
      <div className="flex gap-3 justify-center mt-5 mb-3">
        <Button
          className={"bg-amber-500"}
          onClick={(event) => {
            event.stopPropagation();
            navigate("/edit/1");
          }}
        >
          <p>Edit</p>
        </Button>
        <Button className={"bg-red-500"}>
          <p>Hapus</p>
        </Button>
        <Button>
          <p>Beli</p>
        </Button>
      </div>
    </div>
  );
};

export default Card;
