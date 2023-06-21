import React, { useContext } from "react";
import useFetch from "../Hooks/UseFetch";
import CartContext from "../Hooks/CartContext";
import BounceLoader from "react-spinners/BounceLoader";
import { ToastContainer, toast } from "react-toastify";
import "../Styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const { handleAddToCart } = useContext(CartContext);
  const { data: data2, loading: loading2 } = useFetch(
    "http://fakestoreapi.com/products/14"
  );
  const {
    data: data3,
    loading: loading3,
    error: error2,
  } = useFetch("http://fakestoreapi.com/products/category/men's clothing");
  const notify = () => {
    toast.success("An item has been added", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="container hero-container mt-4">
      <div className="row justify-content-between align-items-center gap-5">
        <div className="col-sm-12 col-lg-6">
          {loading2 && (
            <BounceLoader className="text-center" color={"red"} size={300} />
          )}
          {error2 && <h2> {error2.message} </h2>}
          <Link className="" to={`/SingleProduct/${data2.id}`}>
            <img className="w-100" src={data2.image} alt="" />
          </Link>
        </div>
        <div className="col-sm-12 col-lg-5 datum-container">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            {data3.map((datum3) => {
              const { id, title, image, price } = datum3;
              return (
                <div
                  className="w-50 text-center datum-inner shadow-sm"
                  key={id}
                >
                  <Link className="" to={`/SingleProduct/${id}`}>
                    <img
                      className="img-fluid w-75 p-4"
                      src={image}
                      alt={title}
                    />
                    <p className="'fw-bold">${price}</p>
                  </Link>
                  <button
                    onClick={() => {
                      handleAddToCart(datum3);
                      notify();
                    }}
                    className="btn text-white btn-primary"
                  >
                    Add to Cart
                  </button>
                  <ToastContainer />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
