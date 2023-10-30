import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import * as Icons from "react-icons/fa";
import useProducts from "../hooks/useProducts";

const Beranda = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useProducts();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Produk Kami</h1>
            <Button
              className={"flex items-center gap-2"}
              onClick={() => navigate("/tambah")}
            >
              Tambah Produk
              <Icons.FaPlus />
            </Button>
          </div>
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
            {data?.data?.length === 0 && (
              <p className="col-span-full text-center">Tidak ada produk</p>
            )}
            {data?.data?.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Beranda;
