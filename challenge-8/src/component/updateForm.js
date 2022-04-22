import { Button, Form } from "react-bootstrap";
import { PlayerContext } from "../main/mainPlayer";
import { useContext, useState } from "react";

const EditForm = ({ thePlayer }) => {
  const id = thePlayer.id;
  const [username, setUsername] = useState(thePlayer.username);
  const [email, setEmail] = useState(thePlayer.email);
  const [win, setWin] = useState(thePlayer.win);
  const [lose, setLose] = useState(thePlayer.lose);

  const { updatePlayer } = useContext(PlayerContext);

  const updatedPlayer = { id, username, email, win, lose };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePlayer(id, updatedPlayer);
  };

  return (
    <>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control type="text" placeholder="username" name="name" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Control type="text" placeholder="Win" name="win" value={win} onChange={(e) => setWin(e.target.value)} />
          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Control type="text" placeholder="Lose" name="lose" onChange={(e) => setLose(e.target.value)} value={lose} />
          </Form.Group>
          <br></br>

          <Button variant="success" type="submit" block>
            Edit Player
          </Button>
        </Form>
      </div>
    </>
  );
};

export default EditForm;
