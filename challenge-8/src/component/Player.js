import { Modal } from "react-bootstrap";
import { PlayerContext } from "../main/mainPlayer";
import { useContext, useState, useEffect } from "react";
import EditForm from "./updateForm";

const Player = ({ player }) => {
  const [show, setShow] = useState(false);
  const handlesShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [player]);

  const { deletePlayer } = useContext(PlayerContext);

  return (
    <>
      <td>{player.username}</td>
      <td>{player.email}</td>
      <td>{player.win}</td>
      <td>{player.lose}</td>
      <td className="d-flex">
        <div onClick={handlesShow} className="btn btn-success" data-toggle="modal">
          Edit
        </div>{" "}
        <span className="mx-3">||</span>
        <div onClick={() => deletePlayer(player.id)} className="btn btn-danger" data-toggle="modal" title="Image from freepnglogos.com">
          Delete
        </div>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm thePlayer={player} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Player;
