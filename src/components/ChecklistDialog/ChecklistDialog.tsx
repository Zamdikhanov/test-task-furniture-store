import { useEffect, useState } from "react";
import Modal from "react-modal";
import { ReactComponent as CloseSVG } from "../../assets/icons/close.svg";
import Button from "../Button/Button";
import css from "./ChecklistDialog.module.scss";
import Step1 from "./Step1/Step1";

const root = document.querySelector("#root");

Modal.setAppElement("#modal");

function ChecklistDialog({ isOpen = false, onClose = () => {} }) {
  const [modalIsOpen, setIsOpen] = useState(isOpen);
  const [progress, setProgress] = useState("11.6%");
  const [step, setStep] = useState(1);

  useEffect(() => {
    setIsOpen((prev) => isOpen);
    modalIsOpen && root?.classList.add("lock");
    modalIsOpen && setProgress("11.6%");
    modalIsOpen && setStep(1);
  }, [isOpen]);

  function openModal() {
    setIsOpen(true);
    root?.classList.add("lock");
  }

  function closeModal() {
    root?.classList.remove("lock");
    setIsOpen(false);
    onClose();
    setProgress("11.6%");
    setStep(1);
  }

  const nextClick = () => {
    switch (step + 1) {
      case 1:
        setProgress("50%");
        break;
      case 2:
        setProgress("50%");
        break;
      case 3:
        setProgress("84.3%");
        break;
      default:
        setProgress("100%");
    }
    setStep((prev) => prev + 1);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={1000}
      className={css.modal}
      overlayClassName={css.overlay}
      contentLabel="Modal"
    >
      <div className={css.modal__header}>
        <button className={css.modal__closeButton} onClick={closeModal}>
          <CloseSVG className={css.modal__closeButtonSvg} />
        </button>
        <div className={css.modal__progressContainer}>
          <div
            className={css.modal__progress}
            style={{ width: `${progress}` }}
          ></div>
        </div>
        <div className={css.modal__step}>Шаг {step} из 4</div>
      </div>
      <div className={css.modal__content}>{step === 1 && <Step1 />}</div>
      <div className={css.modal__buttonContainer}>
        <Button buttonType="button" disabled={false} onClick={nextClick}>
          Далее
        </Button>
      </div>
    </Modal>
  );
}

export default ChecklistDialog;
