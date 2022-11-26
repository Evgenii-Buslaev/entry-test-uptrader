import { useContext } from "react";
import { ModalContext } from "../context/context";

const useModal = () => {
  const { state } = useContext(ModalContext);
  const { modalOpenned, setModalOpenned } = state;

  return () => setModalOpenned(!modalOpenned);
};

export default useModal;
