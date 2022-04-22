import { Modal, Button } from "react-bootstrap";
import Player from "./Player";
import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../main/mainPlayer";
import AddForm from "./addForm";

const PlayerList = () => {
  const { players } = useContext(PlayerContext);

  const [show, setShow] = useState(false);
  const handlesShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [players]);

  return (
    <>
      <div className="table-title pb-2 pt-4">
        <div className="row">
          <div className="col-sm-6">
            <h2>DAFTAR PEMAIN</h2>
          </div>
        </div>
      </div>
      <div className="pb-2">
        <div>
          <Button onClick={handlesShow} className="btn btn-secondary" data-toggle="modal">
            Add Player
          </Button>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr className="table-secondary">
            <th>Username</th>
            <th>Email</th>
            <th>Win</th>
            <th>Lose</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id} className="shelf-container">
              <Player player={player} />
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PlayerList;
