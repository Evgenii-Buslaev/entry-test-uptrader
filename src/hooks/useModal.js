import { useState } from "react";

const useModal = () => {
  const [modalOpenned, setModalOpenned] = useState(false);

  const toggleOpenned = () => setModalOpenned(!modalOpenned);

  return { modalOpenned, toggleOpenned };
};

export default useModal;
