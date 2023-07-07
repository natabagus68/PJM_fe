import { useState } from "react";

export const useLoginWebAdmin = () => {
  const [eye, setEye] = useState<boolean>(false);

  const handleEye = () => {
    setEye(!eye);
  };

  return {
    eye,
    handleEye,
  };
};
