import ProductCard from "../component/ProductCard";
import Button from "../component/Button";
import { useState } from "react";
const ProductPage = (props) => {
  const handleLogOut = () => {
    window.location.href = "/";
  };

  const addToChart = (id, productName, productHarga) => {
    setCart([
      ...cart,
      {
        id: id,
        nama: productName,
        harga: productHarga,
      },
    ]);
  };

  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      nama: "sepatu baru",
      harga: 50000,
    },
    {
      id: 2,
      nama: "baju baru",
      harga: 250000,
    },
    {
      id: 3,
      nama: "tas baru",
      harga: 150000,
    },
  ];
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {localStorage.getItem("username")}
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Button onClick={handleLogOut}>LogOut</Button>
          </div>
        </div>
      </nav>

      <div className="flex justify-center flex-wrap">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id} // Make sure key is set here
              namaProduk={product.nama}
              hargaProduk={product.harga}
              idProduk={product.id}
              onClick={addToChart}
            ></ProductCard>
          );
        })}
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex justify-center flex-col text-center">
          <h5 className="font-bold">Chart</h5>
          {cart.map((item) => {
            return (
              <li key={item.id} className="text-center">
                Nama: {item.nama}, Harga: {item.harga}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
