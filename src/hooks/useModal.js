import { useState } from "react";

export default function useModal(){
  const [isShowing, setIsShowing] = useState(false);

  const handleCloseModal = () =>{
    setIsShowing(false);
  }
  const handleOpenModal = () =>{
    setIsShowing(true);
  }

  return {
    isShowing,
    handleCloseModal,
    handleOpenModal
  }
}