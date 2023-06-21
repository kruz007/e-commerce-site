import UseFetch from "../Hooks/UseFetch";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Hooks/CartContext";
import "../styles/Electronics.css";

const Electronics = () => {
  const { cartItem, setCartItem, handleAddToCart } = useContext(CartContext);

  const { data, error, loading } = UseFetch(
    "https://fakestoreapi.com/products/category/electronics"
  );

  const notify = () => {
    toast.success("An item has been added !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="container electronics">
      {loading && <ClipLoader />}
      <div className="electronics-head">
        <h2>ELECTRONICS CATEGORY</h2>
      </div>
      <div className="electronics-body">
        {data.map((datumelectronics) => {
          const { id, image, price, title } = datumelectronics;
          return (
            <div
              className="h-100 p-1 text-center electronics-inner shadow-sm rounded border-3 border"
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
                  handleAddToCart(datumelectronics);
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

export default Electronics;
