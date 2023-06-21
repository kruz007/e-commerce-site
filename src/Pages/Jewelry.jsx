import UseFetch from "../Hooks/UseFetch";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Hooks/CartContext";
import "../styles/Jewelry.css";

const Jewelry = () => {
  const { cartItem, setCartItem, handleAddToCart } = useContext(CartContext);

  const { data, error, loading } = UseFetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );

  const notify = () => {
    toast.success("An item has been added !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="container jewelry">
      {loading && <ClipLoader />}
      <div className="jewelry-head">
        <h2>JEWELRY CATEGORY</h2>
      </div>
      <div className="jewelry-body">
        {data.map((datumJewelry) => {
          const { id, image, price, title } = datumJewelry;
          return (
            <div
              className="p-1 text-center jewelry-inner shadow-sm rounded border-3 border"
              key={id}
            >
              <Link
                className="text-decoration-none"
                to={`/SingleProduct/${id}`}
              >
                <img className="img-fluid" src={image} alt={title} />
                <p className="fw-bold">${price} </p>
              </Link>
              <button
                onClick={() => {
                  handleAddToCart(datumJewelry);
                  notify();
                }}
                className="btn btn-primary text-white"
              >
                add to cart
              </button>
              <ToastContainer />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jewelry;
