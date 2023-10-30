/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { axiosInstance } from "../utils/axios";
import { useCartContext } from "../hooks/useCartContext";

const Card = ({ id, nama, harga, stok, gambar }) => {
  const navigate = useNavigate();

  const { addItemToCart } = useCartContext();

  const handleDelete = async (event) => {
    event.stopPropagation();

    try {
      await axiosInstance.delete(`/api/v1/produk?id=${id}`);

      alert("Berhasil menghapus produk");
      navigate("/");
    } catch (error) {
      alert("Gagal menghapus produk");
    }
  };

  return (
    <div
      className="bg-white rounded-md p-2 cursor-pointer"
      onClick={() => navigate(`/detail/${id}`)}
    >
      <div className="w-full h-48 bg-gray-300 rounded-md">
        <img
          src={gambar}
          alt={nama}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <h1 className="text-lg font-semibold mt-2">{nama}</h1>
      <p className="text-sm">Rp. {harga}</p>
      <p className="text-sm mt-5">Stok : {stok}</p>
      <div className="flex gap-3 justify-center mt-5 mb-3">
        <Button
          className={"bg-yellow-500"}
          onClick={(event) => {
            event.stopPropagation();
            navigate(`/edit/${id}`);
          }}
        >
          <p>Edit</p>
        </Button>
        <Button className={"bg-red-500"} onClick={handleDelete}>
          <p>Hapus</p>
        </Button>
        <Button
          onClick={(event) => {
            event.stopPropagation();
            addItemToCart({ id, nama, harga, stok, gambar });
          }}
        >
          <p>Beli</p>
        </Button>
      </div>
    </div>
  );
};

export default Card;
