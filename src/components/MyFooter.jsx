import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

//ICONE
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";

const MyFooter = () => {
  return (
    <>
      <Container fluid className="bg-linkedin px-footer fixed-bottom" id="myFooter">
        <Row>
          <Col xs={2}>
            <div className="d-flex flex-column justify-content-start">
              <a href="#" className="text-decoration-none text-secondary fw-bold fs-6 mb-3">
                Informazioni
              </a>
              <a href="#" className="text-decoration-none text-secondary fw-bold fs-6 mb-3">
                Informazioni sulla community professionale
              </a>
              <a href="#" className="text-decoration-none text-secondary fw-bold fs-6 mb-3">
                Privacy e condizioni
              </a>
              <a href="#" className="text-decoration-none text-secondary fw-bold fs-6 mb-3">
                Sales Solutions
              </a>
              <a href="#" className="text-decoration-none text-secondary fw-bold fs-6 mb-5">
                Centro Sicurezza
              </a>
              <p className="text-decoration-none text-secondary fs-7 ">LinkedIn Corporation © 2024</p>
            </div>
          </Col>
          <Col xs={2}>
            <div className="d-flex flex-column justify-content-start">
              <a href="#" className="text-decoration-none text-secondary fw-bold fs-6 mb-3">
                Accessibilità
              </a>
              <a href="#" className="text-decoration-none text-secondary fw-bold fs-6 mb-3">
                Carriera
              </a>
              <a href="#" className="text-decoration-none text-secondary fw-bold fs-6 mb-3">
                Opzioni per gli annunci pubblicitari
              </a>
              <a href="#" className="text-decoration-none text-secondary fw-bold fs-6 mb-3">
                Mobile
              </a>
            </div>
          </Col>
          <Col xs={2}>
            <div className="d-flex flex-column justify-content-start">
              <a href="#" className="text-decoration-none text-secondary fw-bold fs-6 mb-3">
                Talent Solutions
              </a>
              <a href="#" className="text-decoration-none text-secondary fw-bold fs-6 mb-3">
                Soluzioni di marketing
              </a>
              <a href="#" className="text-decoration-none text-secondary fw-bold fs-6 mb-3">
                Pubblicità
              </a>
              <a href="#" className="text-decoration-none text-secondary fw-bold fs-6 mb-3">
                Piccole imprese
              </a>
            </div>
          </Col>
          <Col xs={3}>
            <a href="" className="text-decoration-none text-secondary  mb-3">
              <div className="d-flex justify-content-start align-items-center mb-3">
                <BsFillQuestionCircleFill className="fs-5 align-middle me-2" />
                <div>
                  <p className="text-decoration-none text-secondary fw-bold fs-6 m-0">Domande?</p>
                  <p className="text-decoration-none text-secondary  fs-7 m-0">Visita il nostro Centro assistenza.</p>
                </div>
              </div>
            </a>
            <a href="" className="text-decoration-none text-secondary  mb-3">
              <div className="d-flex justify-content-start align-items-center mb-3">
                <FaGear className="fs-4 align-middle me-2" />
                <div>
                  <p className="text-decoration-none text-secondary fw-bold fs-6 m-0 text-truncate">Gestisci il tuo account e la tua privacy</p>
                  <p className="text-decoration-none text-secondary  fs-7 m-0">Vai alle impostazioni.</p>
                </div>
              </div>
            </a>
            <a href="" className="text-decoration-none text-secondary  mb-3">
              <div className="d-flex justify-content-start align-items-center mb-3">
                <FaShieldAlt className="fs-5 align-middle me-2" />
                <div>
                  <p className="text-decoration-none text-secondary fw-bold fs-6 m-0">Trasparenza sui contenuti consigliati</p>
                  <p className="text-decoration-none text-secondary  fs-7 m-0">Scopri di più sui contenuti consigliati</p>
                </div>
              </div>
            </a>
          </Col>
          <Col xs={3}>
            <p className="text-decoration-none text-secondary fs-7 mb-1">Selezione Lingua</p>
            <Dropdown>
              <Dropdown.Toggle variant="white" id="dropdown-basic" className="fs-7">
                Italiano (Italiano)
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyFooter;
