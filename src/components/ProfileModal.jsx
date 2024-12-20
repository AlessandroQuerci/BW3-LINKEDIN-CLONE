import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProfileModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <textarea id="comment" name="comment" rows="10" cols="50" placeholder="Di cosa vorresti parlare?" className="fs-4 border-0 w-100" required></textarea>
          <br />
          <div className="d-flex justify-content-end">
            <input type="submit" value="Pubblica" className="btn btn-primary rounded-pill mt-5" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProfileModal;
