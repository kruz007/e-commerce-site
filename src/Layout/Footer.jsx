import React from "react";
import { dataFooter } from "../FooterDB";

const Footer = () => {
  return (
    <div className="footer mt-5 bg-dark text-white p-4">
      <div className="container d-flex justify-content-between align-items-center">
        {dataFooter.map((datumFooter) => {
          const { id, title, contact, about, careers, blog } = datumFooter;
          return (
            <div key={id}>
              <h2>{title}</h2>
              <ul className="list-unstyled lh-lg">
                <li>{contact}</li>
                <li>{about}</li>
                <li>{careers}</li>
                <li>{blog}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <p className="text-center">Copyright ©kruz.com All rights reserved</p>{" "}
    </div>
  );
};

export default Footer;
