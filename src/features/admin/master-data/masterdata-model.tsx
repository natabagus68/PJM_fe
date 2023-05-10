import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

export default function useMasterData() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [masterData, setMasterData] = useState([]);
  const [open, setOpen] = useState(false)

  const handleEdit = (type): void => {
    navigate("masteredit-view", {
      state: {
        type: type
      }
    })
  }

  const handleDelete = () => {
    setOpen(true)
  }

  const handleSubmitAdd = (e): any => {
    e.preventDefault()
    setOpen(true)
  }

  const addData = (type): void => {
    navigate("masteradd-view", {
      state: {
        type: type
      }
    })
  }

  const pageBack = (): void => {
    navigate("../")
  }

  useEffect(() => {
    setMasterData([
      {
        customerId: "IID66538135",
        customerName: "PT. Ragdalion Revolusi",
        customerAddress: "Cikarang Central City Blok G20, Cikarang, Bekasi",
        customerTelp: "0986375176",
      },
      {
        customerId: "IID55069827",
        customerName: "PT. Abjad",
        customerAddress: "Jl. Mulia IV Blok M-X No. 9 Cipondoh Makmur",
        customerTelp: "0879232121",
      },
      {
        customerId: "IID01906912",
        customerName: "PT. Nusa Bangunan",
        customerAddress: "Jl Wijaya II Wijaya Graha Puri Bl F/46-47,Melawai",
        customerTelp: "0917749254",
      },
      {
        customerId: "IID43397744",
        customerName: "PT. Sejahtera Abadi",
        customerAddress: "Jl Jend Sudirman Kav 32 Intiland Tower Lt 6",
        customerTelp: "0327888111",
      },
      {
        customerId: "IID52936567",
        customerName: "PT. Sehati Maju",
        customerAddress: "Jl. Kalimalang Ruko Bougenville Blok A/1A",
        customerTelp: "0984603663",
      },
      {
        customerId: "IID76031847",
        customerName: "PT. Adakamu Adi",
        customerAddress: "Jl Mangga Dua Bl G/1 RT 009/11",
        customerTelp: "0982527982",
      },
      {
        customerId: "IID38766940",
        customerName: "PT. Tunas Negara",
        customerAddress: "Jl Letda Nasir 45 RT 001/02",
        customerTelp: "0973776072",
      },
      {
        customerId: "IID21789057",
        customerName: "PT. Insan Negeri",
        customerAddress: "Jl Margorejo Indah Bl B/107,Margorejo",
        customerTelp: "0983888611",
      },
    ])
  }, [])

  return {
    masterData,
    setMasterData,
    handleEdit,
    handleDelete,
    open,
    setOpen,
    addData,
    pageBack,
    handleSubmitAdd
  }
}