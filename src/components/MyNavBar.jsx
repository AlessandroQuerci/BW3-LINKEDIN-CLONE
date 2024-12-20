import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../assets/logo/logo.svg";

import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
//ICONE
import { FaHome } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { BsBriefcaseFill } from "react-icons/bs";
import { TbMessageCircleFilled } from "react-icons/tb";
import { FaBell } from "react-icons/fa";

import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const MyNavBar = () => {
  const idUser = useSelector((state) => state.profile.user._id);
  return (
    <>
      <div id="NavBar" className="bg-white position-sticky top-0">
        <Container fluid className="d-flex justify-content-start justify-content-lg-center align-items-center ">
          <Navbar className="bg-white">
            <Container>
              <Link to={"/"}>
                <img src={logo} alt="Logo Linkedin" />
              </Link>
              <Form inline className="ms-2 d-none d-lg-block">
                <Row>
                  <Col xs="auto">
                    <Form.Control type="text" placeholder="Cerca" className=" mr-sm-2" />
                  </Col>
                </Row>
              </Form>

              <Nav className=" ms-4">
                <Link
                  id="link"
                  className=" d-flex flex-column justify-content-center align-items-center me-2 me-sm-5 text-secondary text-decoration-none"
                  to={"/"}
                >
                  <FaHome className="fs-3" />
                  <p className="d-none d-md-block m-0  fs-7 text-secondary text-decoration-none">Home</p>
                </Link>
                <Link
                  id="link"
                  className=" d-flex flex-column justify-content-center align-items-center me-2 me-sm-5 text-secondary text-decoration-none"
                  to={"/rete"}
                >
                  <HiUsers className="fs-3" />
                  <p className="d-none d-md-block m-0  fs-7 text-secondary text-decoration-none">Rete</p>
                </Link>
                <Link
                  id="link"
                  className=" d-flex flex-column justify-content-center align-items-center me-2 me-sm-5 text-secondary text-decoration-none"
                  to={"/lavoro"}
                >
                  <BsBriefcaseFill className="fs-3" />
                  <p className="d-none d-md-block m-0  fs-7 text-secondary text-decoration-none">Lavoro</p>
                </Link>
                <Link
                  id="link"
                  className=" d-flex flex-column justify-content-center align-items-center me-2 me-sm-5 text-secondary text-decoration-none"
                  to={"/messaggistica"}
                >
                  <TbMessageCircleFilled className="fs-3" />
                  <p className="d-none d-md-block m-0  fs-7 text-secondary text-decoration-none">Messaggistica</p>
                </Link>
                <Link
                  id="link"
                  className=" d-flex flex-column justify-content-center align-items-center me-2 me-sm-5 text-secondary text-decoration-none"
                  to={"/notifiche"}
                >
                  <FaBell className="fs-3" />
                  <p className="d-none d-md-block m-0  fs-7 text-secondary text-decoration-none">Notifiche</p>
                </Link>
                <Link
                  id="link"
                  className=" d-flex flex-column justify-content-center align-items-center me-2 me-sm-5 text-secondary text-decoration-none"
                  to={`/profile/${idUser}`}
                >
                  <p className="d-none d-md-block m-0  fs-7 text-secondary text-decoration-none">Tu</p>
                </Link>
                <Link
                  id="link"
                  className=" d-flex flex-column justify-content-center align-items-center me-2 me-sm-5 text-secondary text-decoration-none  border-start ps-4"
                  to={"/"}
                >
                  <BsFillGrid3X3GapFill className="fs-3" />
                  <p className="d-none d-md-block m-0  fs-7 text-secondary text-decoration-none">Per le aziende</p>
                </Link>
                <Link id="link" className=" d-flex flex-column justify-content-center align-items-center me-2 me-sm-5 text-secondary " to={"/subscriptions"}>
                  <p className="d-none d-md-block m-0  fs-7 text-secondary text-center">
                    Prova premium per 0 <br /> EUR
                  </p>
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </Container>
      </div>
    </>
  );
};

export default MyNavBar;
