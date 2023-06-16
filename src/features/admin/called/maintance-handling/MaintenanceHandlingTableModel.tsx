import { useNavigate } from "react-router-dom";
import {useState} from 'react'

export default function useMaintanceHandling() {
  const navigate = useNavigate()

  const [modalResponse, setModalResponse] = useState(false)
  const [modalHandling, setModalHandling] = useState(false)

  const onResponseOk = () => {
    setModalResponse(false)
    setModalHandling(true)
  }

  const onHandlingConfirm = (e: React.FocusEvent<HTMLFormElement>) =>{
    e.preventDefault()
    setModalHandling(false)
  }

  const handleNavigate = (url : string) => {
    navigate(url)
  }

  const onLogout = async(): Promise<void> => {
    try {
      await localStorage.removeItem("web-admin");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return{
    handleNavigate,
    modalHandling,
    modalResponse,
    onResponseOk,
    setModalHandling,
    setModalResponse,
    onHandlingConfirm,
    onLogout
  }
}