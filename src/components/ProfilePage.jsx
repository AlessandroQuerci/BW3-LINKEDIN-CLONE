import { Button, Col, Container, Row } from "react-bootstrap";
import userEmpty from "../assets/image/empty-user.png";
import userNoPhoto from "../assets/image/no-photo.png";
import { FaCamera } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const ProfilePage = () => {
  return (
    <>
      <Container fluid className="bg-linkedin pt-4">
        <Row className="d-flex justify-content-center">
          <Col xs={5}>
            <div className="d-flex flex-column bg-white border border-1 rounded-3">
              <div id="userField">
                <img src={userEmpty} alt="" className="img-fluid object-fit-cover rounded-top-3 w-100" />
                <Button className="p-2 bg-white border-0 z-1 rounded-circle d-flex justify-content-center" id="btn-camera">
                  <FaCamera className="text-success" />
                </Button>
              </div>
              <div className="mb-5">
                <Button className="rounded-circle bg-transparent border-0 " id="addPhoto">
                  <img src={userNoPhoto} alt="" className="img-fluid object-fit-cover rounded-circle" />
                </Button>
              </div>
              <div className=" d-flex justify-content-start flex-column ms-4">
                <div className=" d-flex justify-content-start align-items-center">
                  <h4 className="h4  me-2 mb-0">Alessandro Querci</h4>
                  <Button className="rounded-pill bg-transparent text-primary fw-bold fs-7 p-0 px-2 d-flex justify-content-center align-items-center  ">
                    <IoShieldCheckmarkOutline className="fs-6 me-1" />
                    Aggiungi badge di verifica
                  </Button>
                </div>
                <p className="mb-2">In love with Supply Chain | Junior Functional Consultant</p>
                <p className="mb-2 text-secondary fs-7">
                  Caserta, Campania, Italia •{" "}
                  <a href="" className="text-decoration-none">
                    Informazioni di contatto
                  </a>
                </p>
              </div>
            </div>
          </Col>
          <Col xs={2}>
            <div className="bg-white border border-1 rounded">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis, fugit sunt nemo tenetur perspiciatis. Beatae labore deserunt, mollitia fuga
                veritatis voluptatem soluta fugit quasi doloremque molestiae laborum facilis adipisci!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfilePage;
