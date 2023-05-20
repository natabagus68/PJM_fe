import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

interface Review {
  detail: {
    status: string;
    inspectionId: string;
    inspectionDate: string;
    confirmationDate: string;
    customer: string;
  }
  result: {
    machineType: string;
    serialNo: string;
    mfgDate: string;
    capacity: string;
    slideStroke: string;
    strokePerMinutes: string;
    dieHeight: string;
    slideAdjustment: string;
    dimensiAreaBloster: string;
    dimensiAreaSlide: string;
  }
}

interface Menu {
  id: string;
  label: string;
  to: string;
}

export default function useApprovalModel() {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false)
  const [data, setData] = useState<Review>({})
  const [menu, setMenu] = useState<Menu>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setData({
      detail: {
        status: "Waitting",
        inspectionId: "IID66538135",
        inspectionDate: "10/04/2023 | 13:21",
        confirmationDate: "-",
        customer: "PT. Ragdalion Revolusi"
      },
      result: {
        machineType: "Injection",
        serialNo: "I-SR-12",
        mfgDate: "12 Desember 2010",
        capacity: "10,1 ton",
        slideStroke: "250mm",
        strokePerMinutes: "30-70 spm",
        dieHeight: "700mm",
        slideAdjustment: "100mm",
        dimensiAreaBloster: "2450 x 1250 mm",
        dimensiAreaSlide: "2600 x 1300 mm"
      }
    })
    setMenu([
      { id:1, label: "Inspection Form", to: "inspection/form-view" },
      { id:2, label: "Machine Check", to: "machinecheck-view" },
      { id:3, label: "Accuracy Check", to: "accuracycheck-view" },
      { id:4, label: "Check Load Tonnage", to: "checkloadtonnage/tonnage-view" },
      { id:5, label: "Resume Check", to: "checkresume/resume-view" },
    ])
  }, [])

  const pageBack = (): void => {
    navigate("../")
  }

  const handleSetNav = () => {
    setNav(true)
  }

  const handleConfirmation = (e) => {
    e.preventDefault()
    setOpen(true)
  }

  return {
    data,
    setData,
    menu,
    setMenu,
    nav,
    setNav,
    open,
    setOpen,
    pageBack,
    handleSetNav,
    handleConfirmation
  }
}