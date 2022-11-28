import { useState, useContext } from "react";
import { useDispatch } from "react-redux";

import { ModalContext } from "../context/context";

const useForm = () => {
  const [text, setText] = useState("");

  const { state } = useContext(ModalContext);
  const toggleModal = () => state.setModalOpenned(!state.modalOpenned);

  const dispatch = useDispatch();
  return { state: { text, setText }, toggleModal, dispatch };
};

export default useForm;
