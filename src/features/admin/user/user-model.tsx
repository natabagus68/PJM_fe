import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom";

export default function useUserModel() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [data, setData] = useState<User>([])
  const [open, setOpen] = useState(false)
  const [pass, setPass] = useState(false)
  const [prev, setPrev] = useState(false)
  const [active, setActive] = useState(false)

  const fetchData = () => {
    axios.get()
  }

  useEffect(() => {
    setData([
      { id: 1, active: true, name: "Ayu Umi Pertiwi", email: "ckctm12@gmail.com", role: "Super Admin" },
      { id: 2, active: false, name: "Budi Budiyanto", email: "manhhachkt08@gmail.com", role: "Admin" },
      { id: 3, active: false, name: "Agnes Eva Wijayanti", email: "nvt.isst.nute@gmail.com", role: "Admin" },
      { id: 4, active: true, name: "Febi Bella Nasyidah", email: "Kamhang.nute@gmail.com", role: "Inspector" },
      { id: 5, active: true, name: "Anita Riyanti", email: "trungkienspktnd@gamail.com", role: "Inspector" },
      { id: 6, active: true, name: "Emil Nainggolan", email: "danghoang87hl@gmail.com", role: "Inspector" },
      { id: 7, active: true, name: "Daruna Latupono", email: "binhan628@gmail.com", role: "Inspector" },
      { id: 8, active: false, name: "Argono Anggriawan", email: "tranKamy.nute@gmail.com", role: "Inspector" },
    ])
  }, [])

  const handleAddData = (type): void => {
    navigate("useradd-view", {
      state: {
        type: type
      }
    })
  }

  const handleDetail = (type): void => {
    navigate("userdetail-view", {
      state: {
        type: type
      }
    })
  }

  const handleEdit = (type): void => {
    navigate("useredit-view", {
      state: {
        type: type
      }
    })
  }

  const handleDelete = () => {
    setOpen(true)
  }

  const handlePass = () => {
    setPass(true)
  }

  const pageBack = () => {
    navigate("../")
  }

  const handlePrev = (e) => {
    e.preventDefault()
    setPrev(true)
  }

  const handleClose = () => {
    setPrev(false)
  }

  const handleFormSubmit = (e): any => {
    e.preventDefault()
    setOpen(true)
  }

  return {
    prev,
    setPrev,
    data,
    setData,
    open,
    setOpen,
    active,
    setActive,
    pass,
    setPass,
    handleAddData,
    handleDetail,
    handleEdit,
    handleDelete,
    pageBack,
    handleFormSubmit,
    handlePass,
    handlePrev,
    handleClose
  }
}