import { useForm } from "react-hook-form";
import TitleWithBack from "../components/TitleWithBack";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { axiosInstance } from "../utils/axios";
import { useNavigate } from "react-router-dom";

const EditPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useProduct(id);

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await axiosInstance.put("/api/v1/produk", {
        id: Number(id),
        nama: data.nama,
        harga: Number(data.harga),
        stok: Number(data.stok),
        deskripsi: data.deskripsi,
        gambar: data.gambar,
      });

      alert("Berhasil mengedit produk");
      navigate("/");
    } catch (error) {
      alert("Gagal mengedit produk");
    }
  };

  return (
    <div>
      <TitleWithBack title={"Edit Produk"} />

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        <form
          className="mt-5 max-w-md mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="block">Nama Produk</label>
          <input
            type="text"
            placeholder="Masukkan nama produk"
            className="border border-gray-400 rounded-md w-full px-3 py-2 outline-none"
            defaultValue={data?.data?.nama}
            {...register("nama", { required: true })}
          />

          <label className="block mt-3">Harga Produk</label>
          <input
            type="number"
            placeholder="Masukkan harga produk"
            className="border border-gray-400 rounded-md w-full px-3 py-2 outline-none"
            defaultValue={data?.data?.harga}
            {...register("harga", { required: true })}
          />

          <label className="block mt-3">Stok Produk</label>
          <input
            type="number"
            placeholder="Masukkan stok produk"
            className="border border-gray-400 rounded-md w-full px-3 py-2 outline-none"
            defaultValue={data?.data?.stok}
            {...register("stok", { required: true })}
          />

          <label className="block mt-3">Deskripsi Produk</label>
          <textarea
            placeholder="Masukkan deskripsi produk"
            className="border border-gray-400 rounded-md w-full px-3 py-2 outline-none"
            defaultValue={data?.data?.deskripsi}
            {...register("deskripsi", { required: true })}
          />

          <label className="block mt-3">Gambar Produk</label>
          <input
            type="text"
            placeholder="Masukkan link gambar produk"
            className="border border-gray-400 rounded-md w-full px-3 py-2 outline-none"
            defaultValue={data?.data?.gambar}
            {...register("gambar", { required: true })}
          />

          <div className="flex gap-3 justify-center mt-5 mb-3">
            <button className="bg-blue-500 text-white px-3 py-2 rounded-md">
              Simpan
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditPage;
