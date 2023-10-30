import { useForm } from "react-hook-form";
import TitleWithBack from "../components/TitleWithBack";
import { axiosInstance } from "../utils/axios";
import { useNavigate } from "react-router-dom";

const TambahPage = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axiosInstance.post("/api/v1/produk", {
        nama: data.nama,
        harga: Number(data.harga),
        stok: Number(data.stok),
        deskripsi: data.deskripsi,
        gambar: data.gambar,
      });

      console.log(res);

      alert("Berhasil tambah produk");
      navigate("/");
    } catch (error) {
      alert("Gagal tambah produk");
    }
  };

  return (
    <div>
      <TitleWithBack title={"Tambah Produk"} />

      <form className="mt-5 max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <label className="block">Nama Produk</label>
        <input
          type="text"
          placeholder="Masukkan nama produk"
          className="border border-gray-400 rounded-md w-full px-3 py-2 outline-none"
          {...register("nama", { required: true })}
        />

        <label className="block mt-3">Harga Produk</label>
        <input
          type="number"
          placeholder="Masukkan harga produk"
          className="border border-gray-400 rounded-md w-full px-3 py-2 outline-none"
          {...register("harga", { required: true })}
        />

        <label className="block mt-3">Stok Produk</label>
        <input
          type="number"
          placeholder="Masukkan stok produk"
          className="border border-gray-400 rounded-md w-full px-3 py-2 outline-none"
          {...register("stok", { required: true })}
        />

        <label className="block mt-3">Deskripsi Produk</label>
        <textarea
          placeholder="Masukkan deskripsi produk"
          className="border border-gray-400 rounded-md w-full px-3 py-2 outline-none"
          {...register("deskripsi", { required: true })}
        />

        <label className="block mt-3">Gambar Produk</label>
        <input
          type="text"
          placeholder="Masukkan link gambar produk"
          className="border border-gray-400 rounded-md w-full px-3 py-2 outline-none"
          {...register("gambar", { required: true })}
        />

        <div className="flex gap-3 justify-center mt-5 mb-3">
          <button className="bg-blue-500 text-white px-3 py-2 rounded-md">
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahPage;
