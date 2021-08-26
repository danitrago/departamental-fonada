import { Dropdown } from "bootstrap";
import { BarGauge } from "devextreme-react";
import React from "react";
import {
  ButtonGroup,
  Button,
  Form,
  ProgressBar,
  Badge,
  Table,
  Card,
  Accordion,
  ListGroup,
} from "react-bootstrap";
import MapDepts from "../components/MapDepts";

const formatName = (name) => {
  return name.toLowerCase();
};

const MiniReportSub = (props) => {
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
      <div id="rep-budget" className="mb-4">
        <h5 className="mb-3">Valores Asociados al Departamento</h5>
        <div className="row g-3">
          <div className="col">
            <Card
              className="shadow-lg border-0"
              style={{ background: "linear-gradient(45deg, #224f84, #4073b0)" }}
            >
              <Card.Body>
                <p className="mb-2">
                  <i className="fa fa-money-bill-alt me-2"></i> Valor del
                  Producto
                </p>
                <h4 className="m-0">$1'489.456.465.55</h4>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className="bg-transparent border-0">
              <Card.Body>
                <p className="mb-2">
                  <i className="fa fa-comments-dollar me-2"></i> Total Asignado
                </p>
                <h4 className="m-0">$1'489.456.465.55</h4>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div id="rep-counter" className="mb-4">
        <h4 className="mb-3">123 Proyectos</h4>
        <div className="row g-0">
          <div className="col">
            <ListGroup variant="flush" className="borders">
              <ListGroup.Item variant="primary" className="align-items-center justify-content-between d-flex">
                Contratación
                <Badge className="ms-md-2 bg-danger float-end">63</Badge>
              </ListGroup.Item>
              <ListGroup.Item className="small">
                Por contratar <span className="float-end fw-bold">20</span>
              </ListGroup.Item>
              <ListGroup.Item className="small">
                Sin iniciar <span className="float-end fw-bold">19</span>
              </ListGroup.Item>
              <ListGroup.Item className="small">
                En estructuración <span className="float-end fw-bold">23</span>
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col">
            <ListGroup variant="flush" className="borders">
              <ListGroup.Item variant="primary" className="p-2 align-items-center justify-content-between d-flex">
                Ejecución <Badge className="ms-md-2 bg-info">215</Badge>
              </ListGroup.Item>
              <ListGroup.Item className="small">
                Normal<span className="float-end fw-bold">42</span>
              </ListGroup.Item>
              <ListGroup.Item className="small">
                No normal<span className="float-end fw-bold">52</span>
              </ListGroup.Item>
              <ListGroup.Item className="small">
                <div className="dropdown">
                  <button
                    className="bg-transparent p-0 border-0 w-100 text-start"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Con dificultad
                    <span className="float-end dropdown-toggle fw-bold">
                      121
                    </span>
                  </button>
                  <ul
                    className="dropdown-menu bg-light shadow-lg"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item">
                        <span
                          style={{ width: "35px" }}
                          className="fw-bold d-inline-block"
                        >
                          4
                        </span>
                        En proceso de demanda judicial
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        <span
                          style={{ width: "35px" }}
                          className="fw-bold d-inline-block"
                        >
                          81
                        </span>
                        En demanda judicial admitida
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        <span
                          style={{ width: "35px" }}
                          className="fw-bold d-inline-block"
                        >
                          5
                        </span>
                        Suspendido en incumplimiento
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        <span
                          style={{ width: "35px" }}
                          className="fw-bold d-inline-block"
                        >
                          26
                        </span>
                        Vencido en proceso de solución en liquidación
                      </a>
                    </li>
                  </ul>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className="col">
            <ListGroup variant="flush" className="borders">
              <ListGroup.Item variant="primary" className="p-2 align-items-center justify-content-between d-flex">
                Terminados <Badge className="ms-md-2 bg-success">49</Badge>
              </ListGroup.Item>
              <ListGroup.Item className="small">
                Sin entregar<span className="float-end fw-bold">43</span>
              </ListGroup.Item>
              <ListGroup.Item className="small">
                Sin recibir<span className="float-end fw-bold">5</span>
              </ListGroup.Item>
              <ListGroup.Item className="small">
                Entregados<span className="float-end fw-bold">0</span>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
      <div id="rep-benef">
        {/* <hr /> */}
        <h3>
          <i className="fa fa-thumbs-up me-3 text-success"></i>
          <small>123 Beneficiarios</small>
        </h3>
      </div>
      <div id="list" className="mt-4 d-none">
        <Card>
          <Card.Header className="text-dark">Departamentos</Card.Header>
          <Card.Body className="p-2">
            <Table striped bordered hover className="mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default MiniReportSub;
