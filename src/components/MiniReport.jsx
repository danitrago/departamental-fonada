import { BarGauge } from "devextreme-react";
import React from "react";
import { ButtonGroup, Button, Form, ProgressBar, Badge } from "react-bootstrap";
import MapDepts from "../components/MapDepts";

const formatName = (name) => {
  return name.toLowerCase();
};

const MiniReport = (props) => {
  return (
    <React.Fragment>
      <div id="rep-title">
        <h6 className="mb-0 text-warning">Departamento</h6>
        <h1>
          <span className="text-capitalize me-3">
            {formatName(props.selectedDep?.name) || "Departamento"}
          </span>
          <Button variant="success" className="shadow">
            <i className="fa fa-tachometer-alt me-2"></i>Ver informe
          </Button>
        </h1>
        <h4>
          60% <small>Completado</small>
        </h4>
        <ProgressBar
          now={Math.random() * 100}
          variant="success"
          className="rounded-max"
          style={{ height: "12px" }}
        />
        <hr />
      </div>
      <div id="rep-budget" className="row mb-3">
        <div className="col-lg-7">
          <h4 className="mb-3">Presupuesto</h4>
          <div className="mb-3">
            <h6>
              Valor contratado <span className="float-end">$1'856.963</span>
            </h6>
            <ProgressBar
              now={Math.random() * 100}
              variant="warning"
              className="rounded-max"
              style={{ height: "10px" }}
            />
          </div>
          <div className="mb-4 mb-lg-0">
            <h6>
              Valor pagado <span className="float-end">$1'856.963</span>
            </h6>
            <ProgressBar
              now={Math.random() * 100}
              variant="success"
              className="rounded-max"
              style={{ height: "10px" }}
            />
          </div>
        </div>
        <div className="col d-flex flex-column" style={{ minHeight: "160px" }}>
          <BarGauge
            id="gauge"
            startValue={0}
            endValue={100}
            values={[100, Math.random() * 100]}
            palette={["#2283f4", "#fcd20c"]}
            label={false}
            className="h-100"
          />
          <h5 className="text-center">
            <small>Planeado </small>
            <br />
            $654.903.789
          </h5>
        </div>
      </div>
      <div id="rep-counter" className="mb-4">
        <h4 className="mb-3">123 Proyectos</h4>
        <div className="d-flex">
          <Button variant="dark" className="xxx">
            Al día <Badge className="ms-md-2 bg-success">962</Badge>
          </Button>
          <Button variant="dark" className="mx-3 xxx">
            Moderados{" "}
            <Badge className="ms-md-2 text-dark bg-warning">9.863</Badge>
          </Button>
          <Button variant="dark" className="xxx">
            Críticos <Badge className="ms-md-2 bg-danger">240</Badge>
          </Button>
        </div>
      </div>
      <div id="rep-benef">
        <hr />
        <h3>
          <i className="fa fa-thumbs-up me-3 text-success"></i>
          <small>123 Beneficiarios</small>
        </h3>
      </div>
    </React.Fragment>
  );
};

export default MiniReport;
