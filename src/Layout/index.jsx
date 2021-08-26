import React from "react";
import Logo from "../static/logo-fonada.png";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col py-3">
              <img src={Logo} alt="Logo Fondo Adaptación" height="40" />
            </div>
            <div className="col d-flex justify-content-end align-items-center">
              <a href="/fonada" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-arrow-left me-2"></i>Volver al PSA
              </a>
            </div>
          </div>
        </div>
      </div>
      {props.children}
      <div className="bg-primary py-3 text-white">
        <p className="text-center m-0">Desarrollado por PwC Colombia</p>
      </div>
    </React.Fragment>
  );
};

export default Layout;
