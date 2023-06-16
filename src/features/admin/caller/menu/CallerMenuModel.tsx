

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useCallerMenuModel() {
  const navigate = useNavigate()

  const [modalConfirm, setModalConfirm] = useState(false)

  const handleSave = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault()
    


    navigate('maintenance-calling')
  }

  const onLogout = async(): Promise<void> => {
    try {
      await localStorage.removeItem("web-admin");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    modalConfirm,
    setModalConfirm,
    handleSave,
    onLogout
  }
}
