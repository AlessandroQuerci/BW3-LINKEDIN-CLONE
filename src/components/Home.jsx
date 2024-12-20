import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";

//ICONE
import ProfileModal from "./ProfileModal";
import PostList from "./PostList";

const Home = () => {
  return (
    <>
      <Container fluid className="mt-4 mb-5">
        <Row className="d-flex flex-column flex-md-row justify-content-center gap-3">
          {/*Sinistra*/}
          <Col className="col-12 col-md-3 col-lg-2 ">
            <div className="d-flex flex-column rounded bg-white position-relative">
              <div id="img-sfondo-profile" className="p-0 m-0 position-absolute ">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2h8ZW58MHwwfDB8fHww"
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
              <Button
                id="left-profile-btn"
                className="d-flex flex-column justify-content-center align-items-center bg-transparent rounded-0 border-0 border-bottom border-1 mt-4 pb-5 pt-0"
              >
                <div id="left-profile-img-btn" className="rounded-circle">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    className=" rounded-circle"
                  />
                </div>
                <p className="mb-0 mt-4 fw-bold">Nome e Cognome</p>
              </Button>
              <div className="mt-2 mb-2 px-2 border-bottom border-1">
                <p className="fs-7 mb-0 pt-1 fw-bold">Collegamento</p>
                <p className="fs-7 mb-0 pb-1 fw-bold">Espandi la tua rete</p>
              </div>
              <div className="mt-2 mb-2 px-2 border-bottom border-1">
                <p className="fs-7 mb-0 pt-1 fw-bold">Accedi a strumenti e informazioni in esclusiva</p>
                <div className="d-flex align-items-center gap-2 pb-2 border-bottom border-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#E7A33E" className="bi bi-coin" viewBox="0 0 16 16">
                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                  </svg>
                  <p className="fs-7 fw-bold m-0 p-0 ">Prova Premium per 0 EUR</p>
                </div>

                <div className="d-flex align-items-center gap-2 pt-2 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#5E5E5E" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                  </svg>
                  <p className="fs-7 fw-bold m-0 p-0 ">Elementi salvati</p>
                </div>
              </div>
            </div>
            <div id="see-more" className="d-flex flex-column mt-2 rounded bg-white">
              <a className="fs-7 fw-bold px-2 py-1 mt-3" href="">
                Gruppi
              </a>
              <div className="d-flex justify-content-between align-items-center">
                <a className="fs-7 fw-bold px-2 py-1 pb-2 mt-2 border-bottom border-1" href="">
                  Eventi
                </a>
                <div className=" rounded-circle align-middle me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#4a4949" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                  </svg>
                </div>
              </div>

              <Button className="m-0 py-2 border-0 fw-bold fs-6">Scopri di più</Button>
            </div>
          </Col>
          {/*Centro*/}
          <Col className="d-flex flex-column col.12 col-md-6 col-lg-4 ">
            <div id="user-box" className="bg-white rounded p-2">
              <div className="d-flex justify-content-around gap-2">
                <div id="profile-img-btn">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    className=" rounded-circle"
                  />
                </div>
                <ProfileModal />
              </div>
              <div className="d-flex justify-content-around mt-3">
                <Button size="sm d-flex justify-content-between align-items-center gap-2 border-0 bg-white text-secondary fw-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#5F9B41" className="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>
                  <p className="m-0">Video</p>
                </Button>
                <Button size="sm d-flex justify-content-between align-items-center gap-2 border-0 bg-white text-secondary fw-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#378FE9" className="bi bi-image" viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
                  </svg>
                  <p className="m-0">Foto</p>
                </Button>
                <Button size="sm d-flex justify-content-between align-items-center gap-2 border-0 bg-white text-secondary fw-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#E06847" className="bi bi-blockquote-left" viewBox="0 0 16 16">
                    <path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm.79-5.373q.168-.117.444-.275L3.524 6q-.183.111-.452.287-.27.176-.51.428a2.4 2.4 0 0 0-.398.562Q2 7.587 2 7.969q0 .54.217.873.217.328.72.328.322 0 .504-.211a.7.7 0 0 0 .188-.463q0-.345-.211-.521-.205-.182-.568-.182h-.282q.036-.305.123-.498a1.4 1.4 0 0 1 .252-.37 2 2 0 0 1 .346-.298zm2.167 0q.17-.117.445-.275L5.692 6q-.183.111-.452.287-.27.176-.51.428a2.4 2.4 0 0 0-.398.562q-.165.31-.164.692 0 .54.217.873.217.328.72.328.322 0 .504-.211a.7.7 0 0 0 .188-.463q0-.345-.211-.521-.205-.182-.568-.182h-.282a1.8 1.8 0 0 1 .118-.492q.087-.194.257-.375a2 2 0 0 1 .346-.3z" />
                  </svg>
                  <p className="m-0">Scrivi un articolo</p>
                </Button>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <hr className="w-25 me-5" />
              <p className="m-0 fs-7">Seleziona la visualizzazione del feed:</p>

              <Dropdown className="h-28">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <strong> Più rilevanti</strong>
                </Dropdown.Toggle>

                <Dropdown.Menu className="bg-white text-black">
                  <Dropdown.Item href="#/action-1" className="p-2">
                    <strong>
                      <p className="m-0 fs-6">Più rilevanti</p>
                    </strong>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="p-2">
                    <strong>
                      <p className="m-0 fs-6">Più recenti</p>
                    </strong>
                  </Dropdown.Item>
                  <p className="m-0 fs-7 px-2">
                    Questa opzione influirà soltanto sulla visualizzazione del tuo feed attuale su questo dispositivo. Puoi modificare la visualizzazione
                    predefinita nelle Impostazioni.
                  </p>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div id="user-box" className=" bg-white rounded p-2 position-relative">
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                </div>
              </div>

              <div className="d-flex align-items-center mt-3 position-relative">
                <PostList />
              </div>
            </div>
          </Col>
          {/*Destra*/}
          <Col className="d-none d-lg-block col-3 p-0">
            <div id="in-primo-piano" className="bg-white rounded">
              <h4 className="px-3 pt-2">In primo piano</h4>
              <p className="fw-bold mb-2 px-3">a cura di Linkedin Notizie</p>
              <div id="article-title" className="px-3 mb-2">
                <h6 className="m-0">Tech: le tendenze del 2025</h6>
                <p className="fs-7 m-0 d-inline">3 ore fa</p>
                <p className="fs-7 m-0 d-inline ms-1">1.760 lettori</p>
              </div>
              <div id="article-title" className="px-3 mb-2">
                <h6 className="m-0">Revolut</h6>
                <p className="fs-7 m-0 d-inline">1 giorno fa</p>
                <p className="fs-7 m-0 d-inline ms-1">624 lettori</p>
              </div>
              <div id="article-title" className="px-3 mb-2">
                <h6 className="m-0">Istantanee dal Maximall Pompeii</h6>
                <p className="fs-7 m-0 d-inline">3 ore fa</p>
                <p className="fs-7 m-0 d-inline ms-1">320 lettori</p>
              </div>
              <div id="article-title" className="px-3 mb-2">
                <h6 className="m-0">Come sarà il lavoro nel 2025</h6>
                <p className="fs-7 m-0 d-inline">59 minuti fa</p>
                <p className="fs-7 m-0 d-inline ms-1">47 lettori</p>
              </div>
              <div id="article-title" className="px-3 mb-2">
                <h6 className="m-0">Big Ideas: 15 spunti per il 2025</h6>
                <p className="fs-7 m-0 d-inline">3 ore fa</p>
                <p className="fs-7 m-0 d-inline ms-1">4.478 lettori</p>
              </div>
              <div id="vedi-altro" className="d-flex align-items-baseline gap-1 px-3">
                <p className="fw-bold">Vedi altro</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#8E8A8A" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </div>
            </div>
            <div className="bg-transparent">
              <div className="bg-white rounded mt-2 ">
                <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="" className="rounded" />
              </div>
              <div className="bg-white rounded mt-2 px-3 py-3 d-flex align-items-center justify-content-around">
                <p className="p-1 m-0 rounded fs-7">SUGGERIMENTO</p>
                <p className="m-0 fs-6 fw-bold">Prova Linkedin sull app per Windows</p>
              </div>
              <div className="d-flex flex-wrap justify-content-center gap-3 mt-3 px-7">
                <a href="" className="fs-7">
                  Informazioni
                </a>
                <a href="" className="fs-7">
                  Accessibilità
                </a>
                <a href="" className="fs-7">
                  Centro assistenza
                </a>
                <a href="" className="fs-7">
                  Privacy e Condizioni
                </a>
                <a href="" className="fs-7">
                  Opzioni per gli annunci pubblicitari
                </a>
                <a href="" className="fs-7">
                  Pubblicità
                </a>
                <a href="" className="fs-7">
                  Servizi alle aziende
                </a>
                <a href="" className="fs-7">
                  Scarica l app Linkedin
                </a>
                <a href="" className="fs-7">
                  Altro
                </a>
                <div className="d-flex align-items-center mt-2 gap-1">
                  <img src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" className="img-fluid"></img>
                  <p className="m-0 fs-7 fw-bold">Linkedin Corporation &copy;{new Date().getFullYear()} </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
