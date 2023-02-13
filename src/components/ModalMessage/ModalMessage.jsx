import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalMessage(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    console.log("handle close");
    setShow(false)
    props.handleClose();
  };
  
  useEffect(() => {
    setShow(props.handleShow)
  },[props.handleShow])

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eroare adaugare</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Toate câmpurile trebuie completate </p>
          <p>Salariul trebuie sa contina doar cifre</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalMessage;