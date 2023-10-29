import { useForm } from "react-hook-form";
import TitleWithBack from "../components/TitleWithBack";

const TambahPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <TitleWithBack title={"Edit Produk"} />

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
