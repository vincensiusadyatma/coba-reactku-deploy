import Button from "./Button";

const ProductCard = (props) => {
    const{idProduk,namaProduk,deskripsiProduk,hargaProduk,onClick} = props
    return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-3 mx-3 mt-5 text-white">
      <a href="#">
        <img className="rounded-t-lg" src="img/hero-img.png" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {namaProduk}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <p>{hargaProduk}</p>
        <Button onClick={() => onClick(idProduk,namaProduk,hargaProduk)}>add to chart</Button>
        
      </div>
    </div>
  );
};

export default ProductCard;
