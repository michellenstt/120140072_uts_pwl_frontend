import Button from "../components/Button";
import TitleWithBack from "../components/TitleWithBack";
import * as Icons from "react-icons/fa";
import useProduct from "../hooks/useProduct";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useProduct(id);

  return (
    <div>
      <TitleWithBack title={"Detail"} />

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        <div className="mt-5 flex gap-3 bg-white p-5 rounded-lg w-4/5 mx-auto">
          <div className="w-56 h-56 bg-gray-500 rounded-lg flex-1">
            <img
              src={data?.data?.gambar}
              alt={data?.data?.nama}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-semibold">{data?.data?.nama}</h1>
            <p className="text-lg">Rp. {data?.data?.harga}</p>
            <p className="text-lg mt-5">{data?.data?.deskripsi}</p>
            <p className="text-lg mt-5">Stok : {data?.data?.stok}</p>
            <Button className={"mt-5 flex items-center gap-3"}>
              Tambah ke Keranjang
              <Icons.FaShoppingCart />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
