import { Button, Col, Container, Row } from "react-bootstrap";
import userEmpty from "../assets/image/empty-user.png";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import MyFooter from "./MyFooter";

import Modal from "react-bootstrap/Modal";
//MEDIA
import littleHouse from "../assets/image/little-house.png";
import littleCamera from "../assets/image/little-camera.png";
import littleWindow from "../assets/image/window.png";
import hiring from "../assets/image/hiring.png";
import users from "../assets/image/users.png";
import fotoChange from "../assets/image/foto-change.png";

//ACTIONS
import {
  SET_AREA,
  SET_BIO,
  SET_EMAIL,
  SET_ID,
  SET_IMAGE,
  SET_NAME,
  SET_SURNAME,
  SET_TITLE,
  SET_USERNAME,
  UPDATE_AREA,
  UPDATE_BIO,
  UPDATE_EMAIL,
  UPDATE_ID,
  UPDATE_IMAGE,
  UPDATE_NAME,
  UPDATE_SURNAME,
  UPDATE_TITLE,
  UPDATE_USERNAME,
} from "../redux/actions";

//ICONE
import { FaCamera } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ImPencil } from "react-icons/im";

const ProfilePage = () => {
  //PARAMETRI
  let params = useParams();

  //UPLOAD PHOTO

  const fileUpload = useRef(null);
  const uploadProfilePic = (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.log("No file selected");
      return;
    }
    updatedProfile.image = file;
  };
  const handleUpload = () => {
    console.log(fileUpload.current.click(), "fileUpload");
  };

  //REDUX
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.profile.user.name);
  const userSurname = useSelector((state) => state.profile.user.surname);
  const userUsername = useSelector((state) => state.profile.user.username);
  const userImage = useSelector((state) => state.profile.user.image);
  const userId = useSelector((state) => state.profile.user._id);
  const userArea = useSelector((state) => state.profile.user.area);
  const userTitle = useSelector((state) => state.profile.user.title);
  const userBio = useSelector((state) => state.profile.user.bio);
  const updateName = useSelector((state) => state.updateProfile.user.name);
  const updateSurname = useSelector((state) => state.updateProfile.user.surname);
  const updateUsername = useSelector((state) => state.updateProfile.user.username);
  const updateImage = useSelector((state) => state.updateProfile.user.image);
  const updateId = useSelector((state) => state.updateProfile.user._id);
  const updateArea = useSelector((state) => state.updateProfile.user.area);
  const updateTitle = useSelector((state) => state.updateProfile.user.title);
  const updateBio = useSelector((state) => state.updateProfile.user.bio);

  const updatedProfile = {
    name: updateName,
    surname: updateSurname,
    email: "",
    username: updateUsername,
    bio: updateBio,
    title: updateTitle,
    area: updateArea,
    image: null,
  };

  //MODALS

  //PHOTO MODAL
  const [photoModal, setPhotoModal] = useState(false);

  const closePhotoModal = () => setPhotoModal(false);
  const showPhotoModal = () => setPhotoModal(true);

  //BACKGROUND-PHOTO MODAL
  const [backgroundModal, setBackgroundModal] = useState(false);

  const closeBackgroundModal = () => setBackgroundModal(false);
  const showBackgroundModal = () => setBackgroundModal(true);

  //PROFILE MODAL
  const [profileModal, setProfileModal] = useState(false);

  const closeProfileModal = () => setProfileModal(false);
  const showProfileModal = () => setProfileModal(true);

  //FORM
  const handleChange = (actionType, value) => {
    dispatch({ type: actionType, newValue: value });
  };

  //FETCH
  const fetchMe = () => {
    const URL = `https://striveschool-api.herokuapp.com/api/profile/${params.id}`;
    fetch(URL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyYWYzMjUzMDRhNzAwMTUxNDhiZTAiLCJpYXQiOjE3MzQ1MjA2MjcsImV4cCI6MTczNTczMDIyN30.mhSupLJTXzuAHLaVzdr8ERg_CfF7bu8V2VsSxBuTB-s",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella richiesta!");
        }
      })
      .then((profileData) => {
        console.log(profileData);
        dispatch({
          type: SET_NAME,
          newName: profileData.name,
        });
        dispatch({
          type: SET_SURNAME,
          newSurname: profileData.surname,
        });
        dispatch({
          type: SET_USERNAME,
          newUsername: profileData.username,
        });
        dispatch({
          type: SET_TITLE,
          newTitle: profileData.title,
        });
        dispatch({
          type: SET_EMAIL,
          newEmail: profileData.email,
        });
        dispatch({
          type: SET_BIO,
          newBio: profileData.bio,
        });
        dispatch({
          type: SET_AREA,
          newArea: profileData.area,
        });
        dispatch({
          type: SET_IMAGE,
          newImage: profileData.image,
        });
        dispatch({
          type: SET_ID,
          newId: profileData._id,
        });
      });
  };

  const fetchUpdate = () => {
    const URL = `https://striveschool-api.herokuapp.com/api/profile/`;
    fetch(URL, {
      method: "PUT",
      body: JSON.stringify(updatedProfile),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyYWYzMjUzMDRhNzAwMTUxNDhiZTAiLCJpYXQiOjE3MzQ1MjA2MjcsImV4cCI6MTczNTczMDIyN30.mhSupLJTXzuAHLaVzdr8ERg_CfF7bu8V2VsSxBuTB-s",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella richiesta!");
        }
      })
      .then((profileUpdate) => {
        console.log("Profilo aggiornato con successo!");
      });
  };

  useEffect(() => {
    fetchMe();
  }, []);

  //SLICK SETTINGS
  const settings = {
    dots: false,
    infinite: false,
    speed: 250,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container fluid className="bg-linkedin pt-4">
        <Row className="d-flex justify-content-center">
          <Col xs={5}>
            <div className="d-flex flex-column bg-white border border-1 rounded-3 mb-2">
              <div id="userField">
                <img src={userEmpty} alt="" className="img-fluid object-fit-cover rounded-top-3 w-100" />
                <Button className="p-2 bg-white border-0 z-1 rounded-circle d-flex justify-content-center" id="btn-camera" onClick={showBackgroundModal}>
                  <FaCamera className="text-primary" />
                </Button>
                <Modal show={backgroundModal} onHide={closeBackgroundModal} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title className="fs-5">Aggiungi Foto</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="py-5 px-5 d-flex justify-content-center align-items-center text-center flex-column">
                    <img src={fotoChange} alt="" className="pb-4" />
                    <p className="fs-5  px-5">
                      Mostra la tua personalità, i tuoi interessi, <br />
                      istantanee del tuo team o traguardi degni di nota
                    </p>
                    <p className="fs-7 text-secondary px-5">
                      Una bella foto di sfondo ti aiuterà a risaltare.{" "}
                      <a href="" className="text-decoration-none text-primary">
                        Per saperne di più
                      </a>
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button className="rounded-pill bg-blu-linkedin text-white fw-bold fs-6 py-1 px-3 d-flex justify-content-center align-items-center me-2 deepBtns">
                      Modifica lo sfondo del profilo
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div className="mb-4" id="userNoPhoto">
                <Button className="rounded-circle bg-transparent border-0 " id="addPhoto" onClick={showPhotoModal}>
                  <img src={userImage} alt="" className="img-fluid object-fit-cover rounded-circle " id="userImage" />
                </Button>

                <Modal show={photoModal} onHide={closePhotoModal} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title className="fs-5">Aggiungi Foto</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="py-5 px-5 d-flex justify-content-center align-items-center text-center flex-column">
                    <p className="fs-4 pb-3">
                      La tua foto non deve per forza essere <br /> un tuo primo piano! <br /> Ma qualcosa che ti rappresenti.
                    </p>
                    <img src={users} alt="" className="pb-4" />
                    <p className="fs-7 text-secondary px-5">
                      Chiediamo agli utenti di LinkedIn di utilizzare le loro vere identità, quindi scatta o carica una tua foto. Poi ritagliala, applica dei
                      filtri e perfezionala come vuoi.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <div className="App">
                      <input type="file" ref={fileUpload} onChange={uploadProfilePic} style={{ opacity: "0", display: "none" }} />
                      <Button
                        onClick={() => {
                          handleUpload();
                        }}
                        className="rounded-pill bg-blu-linkedin text-white fw-bold fs-6 py-1 px-3 d-flex justify-content-center align-items-center me-2 deepBtns"
                      >
                        Carica Foto
                      </Button>
                    </div>
                  </Modal.Footer>
                </Modal>
              </div>
              <div className=" d-flex justify-content-start flex-column mx-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className=" d-flex justify-content-start align-items-center">
                    <h4 className="h4  me-2 mb-0">{userName + " " + userSurname}</h4>
                    <Button className="rounded-pill bg-white text-linkedin fw-bold fs-7 p-0 px-2 d-flex justify-content-center align-items-center blueBtns ">
                      <IoShieldCheckmarkOutline className="fs-6 me-1" />
                      Aggiungi badge di verifica
                    </Button>
                  </div>
                  <Button
                    className="border-0 bg-transparent rounded-circle d-flex justify-content-center align-items-center p-3 pencilBtns"
                    onClick={showProfileModal}
                  >
                    <ImPencil className="fs-5 text-black  " />
                  </Button>
                  <Modal show={profileModal} onHide={closeProfileModal} size="lg">
                    <Modal.Header closeButton>
                      <Modal.Title className="fs-5">Modifica Presentazione</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="py-3 px-3 d-flex justify-content-start flex-column">
                      <p className="py-3 text-secondary fs-7">* Indica che è obbligatorio</p>
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          fetchUpdate();
                          fetchMe();
                        }}
                      >
                        <Form.Group className="mb-3">
                          <Form.Label className="fs-7 text-secondary m-o">Nome*</Form.Label>
                          <Form.Control
                            placeholder="Scrivi il tuo nome qui..."
                            className="border-1 border-black fs-7 profileControls"
                            onChange={(e) => handleChange(UPDATE_NAME, e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label className="fs-7 text-secondary m-o">Cognome*</Form.Label>
                          <Form.Control
                            placeholder="Scrivi il tuo cognome qui..."
                            className="border-1 border-black fs-7 profileControls"
                            onChange={(e) => handleChange(UPDATE_SURNAME, e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label className="fs-7 text-secondary m-o">Username*</Form.Label>
                          <Form.Control
                            placeholder="Scrivi il tuo username qui..."
                            className="border-1 border-black fs-7 profileControls"
                            onChange={(e) => handleChange(UPDATE_USERNAME, e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label className="fs-7 text-secondary m-o">Sommario*</Form.Label>
                          <Form.Control
                            placeholder="Scrivi il tuo sommario qui..."
                            className="border-1 border-black fs-7 profileControls"
                            onChange={(e) => handleChange(UPDATE_BIO, e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label className="fs-7 text-secondary m-o">Settore*</Form.Label>
                          <Form.Control
                            placeholder="Scrivi il tuo settore qui..."
                            className="border-1 border-black fs-7 profileControls"
                            onChange={(e) => handleChange(UPDATE_TITLE, e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label className="fs-7 text-secondary m-o">Città*</Form.Label>
                          <Form.Control
                            placeholder="Scrivi la tua città qui..."
                            className="border-1 border-black fs-7 profileControls"
                            onChange={(e) => handleChange(UPDATE_AREA, e.target.value)}
                          />
                        </Form.Group>
                        <Button
                          type="submit"
                          className="rounded-pill bg-blu-linkedin text-white fw-bold fs-6 py-1 px-3 d-flex justify-content-center align-items-center me-2 deepBtns"
                        >
                          Salva
                        </Button>
                      </Form>
                    </Modal.Body>
                  </Modal>
                </div>
                <p className="mb-3 fw-bold fs-6">{userTitle}</p>
                <p className="mb-3 text-truncate w-50">{userBio}</p>
                <p className="mb-3 text-secondary fs-7">
                  {userArea} •{" "}
                  <a href="" className="text-decoration-none">
                    Informazioni di contatto
                  </a>
                </p>
                <div className="d-flex justify-content-start align-items-center mb-3">
                  <Button className="rounded-pill bg-blu-linkedin text-white fw-bold fs-6 py-1 px-3 d-flex justify-content-center align-items-center me-2 deepBtns">
                    Disponibile per
                  </Button>
                  <Button className="rounded-pill bg-white text-linkedin fw-bold fs-6 py-1 px-3 d-flex justify-content-center align-items-center me-2 blueBtns ">
                    Aggiungi sezione del profilo
                  </Button>
                  <Button
                    className="rounded-pill bg-white text-linkedin fw-bold fs-6 py-1 px-3 d-flex justify-content-center align-items-center me-2  blueBtns"
                    onClick={showProfileModal}
                  >
                    Migliora profilo
                  </Button>
                  <Button className="rounded-pill bg-white text-secondary fw-bold fs-6 py-1 px-3 d-flex justify-content-center align-items-center me-2 border-secondary blackBtns ">
                    Risorse
                  </Button>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column bg-white border border-1 rounded-3 px-3 py-4 mb-2">
              <h3 className="fs-5 ">Consigliato per te</h3>
              <p className="text-secondary mb-3 d-flex justify-content-start align-items-center">
                <FaEye className="me-1 " /> Solo per te
              </p>
              <div className="slider-container ">
                <Slider {...settings}>
                  <div>
                    <div className="border border-1 rounded px-3 py-3 me-3">
                      <div className="d-flex justify-content-start align-items-center mb-3">
                        <img src={littleHouse} alt="" />
                        <p className="m-0 ms-2">In quale settore lavori?</p>
                      </div>
                      <p className="text-secondary fs-7 mb-4  fw-bold ">
                        Gli utenti che aggiungono un settore ricevono fino a 2,5 volte più visualizzazioni del profilo.
                      </p>
                      <Button
                        className="rounded-pill bg-white text-secondary fw-bold fs-6 py-1 px-2 d-flex justify-content-center align-items-center me-2 border-secondary blackBtns "
                        onClick={showProfileModal}
                      >
                        Aggiungi settore
                      </Button>
                    </div>
                  </div>
                  <div>
                    <div className="border border-1 rounded px-3 py-3 me-3">
                      <div className="d-flex justify-content-start align-items-center mb-3">
                        <img src={littleCamera} alt="" />
                        <p className="m-0 ms-2">Aggiungi una foto al tuo profilo per aiutare gli altri a riconoscerti</p>
                      </div>
                      <p className="text-secondary fs-7 mb-4  fw-bold ">
                        Gli utenti con una foto del profilo ricevono fino a 2,3 volte più visualizzazioni del profilo.
                      </p>
                      <Button
                        className="rounded-pill bg-white text-secondary fw-bold fs-6 py-1 px-2 d-flex justify-content-center align-items-center me-2 border-secondary  blackBtns"
                        onClick={showPhotoModal}
                      >
                        Aggiungi foto
                      </Button>
                    </div>
                  </div>
                  <div>
                    <div className="border border-1 rounded px-3 py-3 me-3">
                      <div className="d-flex justify-content-start align-items-center mb-3">
                        <img src={littleWindow} alt="" />
                        <p className="m-0 ms-2 text-truncate">Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa</p>
                      </div>
                      <p className="text-secondary fs-7 mb-4  fw-bold ">
                        Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo.
                      </p>
                      <Button className="rounded-pill bg-white text-secondary fw-bold fs-6 py-1 px-2 d-flex justify-content-center align-items-center me-2 border-secondary blackBtns">
                        Aggiungi un riepilogo
                      </Button>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="d-flex flex-column bg-white border border-1 rounded-3  mb-2">
              <div className="px-3 pt-4">
                <h3 className="fs-5 ">Analisi</h3>
                <p className="text-secondary mb-3 d-flex justify-content-start align-items-center">
                  <FaEye className="me-1 " /> Solo per te
                </p>
                <Container>
                  <Row>
                    <Col xs={4}>
                      <div className="d-flex justify-content-start align-items-top">
                        <BsFillPeopleFill className="fs-3 me-2" />
                        <div className="d-flex flex-column">
                          <p className="fw-bold m-0 fs-6 ">3 visualizzazioni del profilo</p>
                          <p className="fs-7">Scopri chi ha visitato il tuo profilo</p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div className="d-flex justify-content-start align-items-top">
                        <IoStatsChartSharp className="fs-3 me-2" />
                        <div className="d-flex flex-column">
                          <p className="fw-bold m-0 fs-6 ">0 impressioni del post</p>
                          <p className="fs-7 m-0">Crea un post per aumentare l'interesse</p>
                          <p className="fs-7 text-secondary">Ultimi 7 giorni</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <Button className="border-0 bg-transparent text-secondary w-100 rounded-0 rounded-bottom border-top p-0 m-0 py-2 d-flex justify-content-center align-items-center  fw-bold showBtns">
                Mostra tutte le analisi <FaLongArrowAltRight className="ms-1" />
              </Button>
            </div>
            <div className="d-flex flex-column bg-white border border-1 rounded-3  mb-2">
              <div className="px-3 pt-2">
                <div className="d-flex justify-content-between align-items-top mb-3">
                  <div className="pt-2">
                    <h3 className="fs-5 m-0 ">Attività</h3>
                    <a href="#" className="text-primary d-flex justify-content-start align-items-center text-decoration-none">
                      0 follower
                    </a>
                  </div>
                  <div className=" d-flex justify-content-end align-items-center">
                    <Button className="rounded-pill bg-white text-linkedin fw-bold fs-6 py-1 px-2 d-flex justify-content-center align-items-center me-2 border-primary blueBtns ">
                      Crea un post
                    </Button>
                    <Button className="border-0 bg-transparent rounded-circle d-flex justify-content-center align-items-center p-3 pencilBtns">
                      <ImPencil className="fs-5 text-black  " />
                    </Button>
                  </div>
                </div>
                <p className="text-black m-0 ">Non hai ancora pubblicato nulla</p>
                <p className="text-secondary  fs-7 fw-light mb-2">I posti che condividi appariranno qui</p>
              </div>
              <Button className="border-0 bg-transparent text-secondary w-100 rounded-0 rounded-bottom border-top p-0 m-0 py-2 d-flex justify-content-center align-items-center  fw-bold showBtns">
                Mostra tutte le attività <FaLongArrowAltRight className="ms-1" />
              </Button>
            </div>
          </Col>
          <Col xs={2}>
            <div className="bg-white border border-1 rounded p-3 mb-2">
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-bold m-0 ">Lingua del profilo</p>
                <Button className="border-0 bg-transparent rounded-circle d-flex justify-content-center align-items-center p-3 pencilBtns">
                  <ImPencil className="fs-5 text-black  " />
                </Button>
              </div>
              <p className="text-secondary fw-light mb-3 ">Italiano</p>
              <hr className="opacity-1 mb-3" />
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-bold m-0 ">Profilo pubblico e URL</p>
                <Button className="border-0 bg-transparent rounded-circle d-flex justify-content-center align-items-center p-3 pencilBtns">
                  <ImPencil className="fs-5 text-black  " />
                </Button>
              </div>
              <p className="text-secondary fw-light mb-3 ">www.linkedin.com/in/alessandro-querci-887a28239</p>
            </div>
            <div className="sticky-top top-50">
              <img src={hiring} alt="" className="w-100 rounded sticky-top " />
            </div>
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};
export default ProfilePage;
