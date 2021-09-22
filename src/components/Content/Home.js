import React, { useState } from "react";
import Login from "../../Login";
import { Backdrop, Fade, Modal } from "@material-ui/core";
import Game from "./Game";
import Tables from "./Tables";
import { Button } from "antd";
function Home() {
  const [open, setOpen] = useState(false);
  // const [table, setTable]= useState([{id:"",slot1:'',slot2:"",slot3:"",time:""}])
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>
        <Tables />
      </div>
      {/* <button onClick={handleOpen}>Start</button> */}
      <Button onClick={handleOpen} type="primary">
        Start Game
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div>
            <Game handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Home;
