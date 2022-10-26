import { useEffect, useState } from "react";
import Modal from "react-modal";
import { ReactComponent as CloseSVG } from "../../assets/icons/close.svg";
import Button from "../Button/Button";
import css from "./ChecklistDialog.module.scss";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import Step5 from "./Step5/Step5";

const root = document.querySelector("#root");

Modal.setAppElement("#modal");

function ChecklistDialog({ isOpen = false, onClose = () => {} }) {
  const [modalIsOpen, setIsOpen] = useState(isOpen);
  const [progress, setProgress] = useState("11.6%");
  const [step, setStep] = useState(1);
  const [isDisabledNextButton, setIsDisabledNextButton] = useState(true);
  const stepReady = (bool: boolean) => {
    bool ? setIsDisabledNextButton(false) : setIsDisabledNextButton(true);
  };

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
    setIsDisabledNextButton(true);
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
        {step !== 5 && (
          <>
            <div className={css.modal__progressContainer}>
              <div
                className={css.modal__progress}
                style={{ width: `${progress}` }}
              ></div>
            </div>
            <div className={css.modal__step}>Шаг {step} из 4</div>
          </>
        )}
      </div>
      <div className={css.modal__content}>
        {step === 1 && <Step1 setIsReady={stepReady} />}
        {step === 2 && <Step2 setIsReady={stepReady} />}
        {step === 3 && <Step3 setIsReady={stepReady} />}
        {step === 4 && <Step4 setIsReady={stepReady} />}
        {step === 5 && <Step5 />}
      </div>
      <div className={css.modal__buttonContainer}>
        {step !== 5 && (
          <Button
            buttonType="button"
            disabled={isDisabledNextButton}
            onClick={nextClick}
          >
            Далее
          </Button>
        )}
      </div>
    </Modal>
  );
}

export default ChecklistDialog;
