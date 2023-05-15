import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface InspectionStatus {
  ["Status"]: string;
  ["Inspection ID"]: string;
  ["Inspection Date"]: string;
  ["Confirmation Date"]: string;
  ["Customer"]: string;
}

interface InspectionResult {
  ["Machine Type"]: string;
  ["Serial No"]: string;
  ["MFG Date"]: string;
  ["Capacity"]: string;
  ["Slide Stroke"]: string;
  ["Stroke Per Minutes"]: string;
  ["Die Height"]: string;
  ["Slide Adjustment"]: string;
  ["Dimensi Area Bloster"]: string;
  ["Dimensi Area Slide"]: string;
}

export default function useInspection() {
  // Data
  const [status, setStatus] = useState<InspectionStatus>({})
  const [result, setResult] = useState<InspectionResult>({})
  const [menu, setMenu] = useState<Menu>([])

  // Modal
  const [open, setOpen]     = useState(false)
  const [detail, setDetail] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    setStatus({
      ["Status"]: "Waitting",
      ["Inspection ID"]: "IID66538135",
      ["Inspection Date"]: "10/04/2023 | 13:21",
      ["Confirmation Date"]: "-",
      ["Customer"]: "PT. Ragdalion Revolusi"
    })

    setResult({
      ["Machine Type"]: "Injection",
      ["Serial No"]: "I-SR-12",
      ["MFG Date"]: "12 Desember 2010",
      ["Capacity"]: "10,1 ton",
      ["Slide Stroke"]: "250mm",
      ["Stroke Per Minutes"]: "30-70 spm",
      ["Die Height"]: "700mm",
      ["Slide Adjustment"]: "100mm",
      ["Dimensi Area Bloster"]: "2450 x 1250 mm",
      ["Dimensi Area Slide"]: "2600 x 1300 mm"
    })

    setMenu([
      { id:1, menu: "Inspection Form" },
      { id:2, menu: "Machine Check" },
      { id:3, menu: "Accuracy Check" },
      { id:4, menu: "Check Load Tonnage" },
      { id:5, menu: "Resume Check" },
    ])
  }, [])

  const handleConfirm = (e): any => {
    e.preventDefault()
    setOpen(true)
  }

  const handleShowDetail = () => {
    setDetail(detail === false ? true : false)
  }

  const getCustomerDetailInfo = () => {
    return {
      ...status,
      Inspector: "Jamal",
      Address: "Cikarang Central City Blok G20, Cikarang, Bekasi, Jawa Barat 17530",
      ["Person In Charge"]: "Ridwan Hardi",
      ["Telp/Fax"]: "0986375176",
    }
  }

  const pageBack = (): void => {
    navigate("../")
  }

  return {
    status,
    result,
    menu,
    open,
    detail,
    setStatus,
    setResult,
    setMenu,
    setOpen,
    setDetail,
    handleConfirm,
    handleShowDetail,
    getCustomerDetailInfo,
    pageBack
  }
}