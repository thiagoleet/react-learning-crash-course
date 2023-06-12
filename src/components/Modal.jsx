/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

function Modal(props) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}></div>

      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
