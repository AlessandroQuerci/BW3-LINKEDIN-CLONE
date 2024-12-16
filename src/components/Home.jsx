import { Button, Col, Container, Row } from "react-bootstrap";
import { PiX } from "react-icons/pi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container fluid className="mt-3">
        <Row className="d-flex justify-content-center gap-3">
          <Col className="col-2 bg-secondary">
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt corrupti consectetur modi illum velit minus aut. Et, sint adipisci in repudiandae
              voluptas magni cum soluta corrupti! Consectetur, voluptatum alias? Esse?
            </div>
          </Col>

          <Col className="d-flex flex-column col-4 ">
            <div id="user-box" className="border border-1 border-secondary rounded p-2">
              <div className="d-flex justify-content-around gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="gray" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
                <Button className="border border-1 border-secondary rounded-pill bg-white text-secondary text-start w-100 ">Crea un post</Button>
              </div>
              <div className="d-flex justify-content-around mt-3">
                <Button size="sm d-flex justify-content-between align-items-center gap-2 border-0 bg-white text-secondary fw-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#5F9B41" class="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>
                  Video
                </Button>
                <Button size="sm d-flex justify-content-between align-items-center gap-2 border-0 bg-white text-secondary fw-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#378FE9" class="bi bi-image" viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
                  </svg>
                  Foto
                </Button>
                <Button size="sm d-flex justify-content-between align-items-center gap-2 border-0 bg-white text-secondary fw-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#E06847" class="bi bi-blockquote-left" viewBox="0 0 16 16">
                    <path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm.79-5.373q.168-.117.444-.275L3.524 6q-.183.111-.452.287-.27.176-.51.428a2.4 2.4 0 0 0-.398.562Q2 7.587 2 7.969q0 .54.217.873.217.328.72.328.322 0 .504-.211a.7.7 0 0 0 .188-.463q0-.345-.211-.521-.205-.182-.568-.182h-.282q.036-.305.123-.498a1.4 1.4 0 0 1 .252-.37 2 2 0 0 1 .346-.298zm2.167 0q.17-.117.445-.275L5.692 6q-.183.111-.452.287-.27.176-.51.428a2.4 2.4 0 0 0-.398.562q-.165.31-.164.692 0 .54.217.873.217.328.72.328.322 0 .504-.211a.7.7 0 0 0 .188-.463q0-.345-.211-.521-.205-.182-.568-.182h-.282a1.8 1.8 0 0 1 .118-.492q.087-.194.257-.375a2 2 0 0 1 .346-.3z" />
                  </svg>
                  Scrivi un articolo
                </Button>
              </div>
            </div>
            <div id="user-box" className="mt-3 border border-1 border-secondary rounded p-2 position-relative">
              <div className="d-flex align-items-center gap-1 ">
                <img
                  src="https://images.unsplash.com/photo-1467010234262-77bada75a47d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbmF8ZW58MHwxfDB8fHww"
                  alt=""
                  height={25}
                  width={25}
                />
                <p className="m-0 fs-7">
                  Ecco cosa festeggia <strong>Nome Cognome</strong>
                </p>
              </div>
              <div id="close-btn" className="position-absolute ">
                <div className="d-flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center mt-3 position-relative">
                  <div id="img-btn">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1680281937048-735543c5c0f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcGFueXxlbnwwfDF8MHx8fDA%3D"
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div id="user-info" className="d-flex flex-column">
                    <p className="m-0 fs-6 fw-bold d-block">Nome Azienda</p>

                    <p className="m-0 fs-7 ">10.000 follower</p>

                    <p className="m-0 fs-7">N. giorni</p>
                  </div>
                  <Button id="follow-btn" className="border-0 bg-transparent text-primary position-absolute fw-bold p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>
                    Segui
                  </Button>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, quaerat quam! Vero doloribus nemo non tempora, debitis recusandae!
                  Distinctio aperiam pariatur ipsum ea rerum. Nulla, quae. Enim, consequuntur incidunt. Tempora.
                </p>
                <div className="my-1">
                  <div className="text-center">
                    <img
                      src="https://images.unsplash.com/photo-1584448141569-69f342da535c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9zdGVyfGVufDB8MXwwfHx8MA%3D%3D"
                      alt=""
                    />
                  </div>
                </div>
                <img
                  src="https://static.licdn.com/aero-v1/sc/h/2uxqgankkcxm505qn812vqyss"
                  alt="like"
                  dattest-reactions-icon-type="LIKE"
                  data-test-reactions-icon-theme="light"
                  data-test-reactions-icon-style="consumption"
                  data-test-reactions-icon-size="medium"
                ></img>
                <img
                  src="https://static.licdn.com/aero-v1/sc/h/f58e354mjsjpdd67eq51cuh49"
                  alt="love"
                  data-test-reactions-icon-type="EMPATHY"
                  data-test-reactions-icon-theme="light"
                  data-test-reactions-icon-style="consumption"
                  data-test-reactions-icon-size="medium"
                ></img>
                <img
                  src="https://static.licdn.com/aero-v1/sc/h/cm8d2ytayynyhw5ieaare0tl3"
                  alt="celebrate"
                  data-test-reactions-icon-type="PRAISE"
                  data-test-reactions-icon-theme="light"
                  data-test-reactions-icon-style="consumption"
                  data-test-reactions-icon-size="medium"
                ></img>
              </div>
            </div>
          </Col>

          <Col className="col-3 bg-secondary">
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt corrupti consectetur modi illum velit minus aut. Et, sint adipisci in repudiandae
              voluptas magni cum soluta corrupti! Consectetur, voluptatum alias? Esse?
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
