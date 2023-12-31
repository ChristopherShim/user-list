import classes from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

function ErrorModal(props) {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <Card propsClass={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}> Close Modal</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
