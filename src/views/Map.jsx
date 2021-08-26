import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import MapDepts from "../components/MapDepts";
import MiniReport from "../components/MiniReport";
import MiniReportSub from "../components/MiniReportSub";

const Map = () => {
  const [switchType, setSwitchType] = useState("depts");
  const [presentationMode, setPresentationMode] = useState(false);
  const [selectedDep, setSelectedDep] = useState({
    id: "dept-28",
    name: "BOLÍVAR",
  });

  useEffect(() => {
    fetch(
      "http://projects.co.pwc.com/api-fonada-portal-publico/api/dashboard-departamental",
      {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div
      id="map-container"
      className={`container-fluid ${
        presentationMode ? "presentation-fixed" : ""
      }`}
    >
      <div className="container text-white position-relative">
        <div className="row pt-3">
          <div className="col">
            <h5 className="mb-0">Informes Departamentales</h5>
            <p>Consolidado de Proyectos</p>
          </div>
          <div
            id="cont-type-report"
            className="col d-flex justify-content-lg-end align-items-center"
          >
            <ButtonGroup aria-label="Basic example" size="sm" className="me-3">
              <Button
                variant={switchType === "depts" ? "light" : "outline-light"}
                onClick={() => setSwitchType("depts")}
              >
                Departamentos
              </Button>
              <Button
                variant={switchType !== "depts" ? "light" : "outline-light"}
                onClick={() => setSwitchType("subs")}
              >
                Subgerencias
              </Button>
            </ButtonGroup>
            {switchType === "depts" ? (
              <Form.Check
                type="checkbox"
                id="presentation-mode"
                label="Modo presentación"
                className="d-none d-lg-block"
                onClick={(e) => {
                  setPresentationMode(e.target.checked);
                }}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="row align-items-center py-3">
          <div className="col-lg-6 text-center">
            {switchType === "depts" ? (
              <MapDepts
                selectedDep={selectedDep}
                setSelectedDep={setSelectedDep}
                presentationMode={presentationMode}
              />
            ) : (
              <MapDepts
                selectedDep={selectedDep}
                setSelectedDep={setSelectedDep}
                presentationMode={presentationMode}
              />
            )}
          </div>
          <div
            id="report-container"
            className="col-lg-5 pb-5 animate__animated animate__fadeIn"
          >
            {switchType === "depts" ? (
              <MiniReport selectedDep={selectedDep} />
            ) : (
              <MiniReportSub selectedDep={selectedDep} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
