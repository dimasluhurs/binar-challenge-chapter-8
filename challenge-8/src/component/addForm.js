import { Button, Form } from "react-bootstrap";
import { PlayerContext } from "../main/mainPlayer";
import { useContext, useState } from "react";

const AddForm = () => {
  const { addPlayer } = useContext(PlayerContext);

  const [newPlayer, setNewPlayer] = useState({
    username: "",
    email: "",
    win: "",
    lose: "",
  });

  const { username, email, win, lose } = newPlayer;

  const onInputChange = (e) => {
    setNewPlayer({ ...newPlayer, [e.target.username]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(username, email, win, lose);
  };

  return (
    <>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control type="text" placeholder="Username" name="username" value={username} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Control type="text" placeholder="Win" name="win" value={win} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Control type="text" placeholder="Lose" name="lose" value={lose} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <br></br>

          <Button variant="success" type="submit" block>
            Add New Player
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddForm;
