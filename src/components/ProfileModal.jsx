import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProfileModal() {
  const [postContent, setPostContent] = useState("");
  const [show, setShow] = useState(false);
  const finalPost = {
    _id: "",
    text: "",
    username: "",
    user: {
      _id: "",
      username: "",
      createdAt: "",
      updatedAt: "",
      __v: 0,
    },
    createdAt: "",
    updatedAt: "",
    __v: 0,
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchCreatePosts = async () => {
    if (postContent.trim() === "") {
      alert("Il contenuto del post non può essere vuoto");
      return;
    }
    try {
      const createResponse = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        body: JSON.stringify(finalPost),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYyZTQ0NTUzMDRhNzAwMTUxNDhjNzUiLCJpYXQiOjE3MzQ1MzQyMTMsImV4cCI6MTczNTc0MzgxM30.Zo-V4M5-basIstgHFjKnRpXgfiqLigX90ro6SpVyFzI", // Inserisci qui il tuo token
          "Content-Type": "application/json",
        },
      });
      if (!createResponse.ok) throw new Error("Errore nella risposta dell'API");
      const data = await createResponse.json();
      console.log("Post creato:", data);
    } catch (error) {
      console.error("Errore nella creazione del post:", error);
      alert("C'è stato un errore nella creazione del post.");
    }
  };

  return (
    <>
      <Button id="create-post" className=" rounded-pill bg-white text-start w-100 " variant="primary" onClick={handleShow}>
        Crea un post
      </Button>

      <Modal className="" show={show} onHide={handleClose} animation={true} size="lg" id="modaleHome">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              fetchCreatePosts();
            }}
          >
            <Form.Group controlId="postContent">
              <Form.Control
                as="textarea"
                rows={5}
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="Di cosa vorresti parlare?"
                className="fs-4 border-0 w-100"
                required
              />
            </Form.Group>

            <Button className="mt-3">Pubblica</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProfileModal;
