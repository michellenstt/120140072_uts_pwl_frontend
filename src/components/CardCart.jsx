// eslint-disable-next-line react/prop-types
const CardCart = ({ nama, harga, gambar, quantity }) => {
  return (
    <div className="bg-white rounded-md p-2">
      <div className="w-full h-48 bg-gray-300 rounded-md">
        <img
          src={gambar}
          alt={nama}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <h1 className="text-lg font-semibold mt-2">{nama}</h1>
      <p className="text-sm">Rp. {harga}</p>
      <p className="text-sm mt-5">Jumlah : {quantity}</p>
    </div>
  );
};

export default CardCart;
