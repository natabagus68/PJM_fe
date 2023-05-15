import { useState, useEffect } from "react";
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

export default function useInspection() {
  const navigate = useNavigate();

  const [data, setData] = useState<Review>({})
  const [menu, setMenu] = useState<Menu>([])
  const [inspectform, setInspectForm] = useState([])
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
    setInspectForm([
      {
        id: 1,
        title: "Substansi Mesin",
        information: [
          {
            id: 1,
            name: "Body Mesin secara keseluruhan",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 2,
            name: "Step, Ladder Hand rail, Indicator dan Cover Mesin",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 3,
            name: "Foot Switch",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 4,
            name: "Baut dan mur pada perangkat utama, Tie-Rods dan Anchor bolt",
            ketepatan: "Perlu Perhatian",
            notes: "Baut berkarat, sehingga menyulitkan ketika membuka mesin",
          },
        ]
      },
      {
        id: 2,
        title: "Sistem Transmisi Power",
        information: [
          {
            id: 1,
            name: "Crank Shaft",
            ketepatan: "Normal",
            notes: "Kondisi Kotor",
          },
          {
            id: 2,
            name: "Jarak web Portion Crank Shaft dengan sekala",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 3,
            name: "Flywheel",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 4,
            name: "Mengukur penggerak putaran flywheel",
            ketepatan: "Perlu Perbaikan",
            notes: "Backslash = 1234 mm, r = 567, s = 890 mm",
          },
        ]
      },
      {
        id: 3,
        title: "Lubrication & Hydraulic System",
        information: [
          {
            id: 1,
            name: "Pompa Lubrikasi dan perlengkapannya",
            ketepatan: "Rusak",
            notes: "Pompa Berbunyi",
          },
          {
            id: 2,
            name: "Volume oil/grase",
            ketepatan: "Perlu Perhatian",
            notes: "Oli Kurang dibawah batas",
          },
          {
            id: 3,
            name: "Overload System",
            ketepatan: "Normal",
            notes: "",
          },
        ]
      },
      {
        id: 4,
        title: "Gesekan Clutch",
        information: [
          {
            id: 1,
            name: "Pompa Lubrikasi dan perlengkapannya",
            ketepatan: "Normal",
            notes: "Pompa Berbunyi",
          },
          {
            id: 2,
            name: "Mengukur stroke Disc Brake",
            ketepatan: "Rusak",
            notes: "Warna Menghitam",
          },
          {
            id: 3,
            name: "Memeriksa kondisi Lining Clutch",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 4,
            name: "Bagian Clucth Keseluruhan",
            ketepatan: "Normal",
            notes: "",
          },
        ]
      },
      {
        id: 5,
        title: "Gesekan Disc Brake",
        information: [
          {
            id: 1,
            name: "Penggerak dan fungsi Disk Break",
            ketepatan: "Perlu Adjust",
            notes: "Pergerakan mulai kurang mulus",
          },
          {
            id: 2,
            name: "Mengukur stroke Disc Brake",
            ketepatan: "Normal",
            notes: "Warna Menghitam",
          },
          {
            id: 3,
            name: "Memeriksa kondisi Lining Break",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 4,
            name: "Bagian Brake Keseluruhan",
            ketepatan: "Normal",
            notes: "",
          },
        ]
      },
      {
        id: 6,
        title: "Indicator Sudut Crank",
        information: [
          {
            id: 1,
            name: "Angle Indicator TMB",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 2,
            name: "Indicator Over Run",
            ketepatan: "Normal",
            notes: "",
          },
        ]
      },
      {
        id: 7,
        title: "Kondisi Stop saat One Cycle Ope., Inching Ope., Emergency",
        information: [
          {
            id: 1,
            name: "One Single",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 2,
            name: "Inching",
            ketepatan: "Normal",
            notes: "Respon Masih Cepat",
          },
          {
            id: 3,
            name: "Continue Operation",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 2,
            name: "Fungsi Emergency Stop",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 2,
            name: "Stopping Time",
            ketepatan: "Normal",
            notes: "",
          },
        ]
      },
      {
        id: 8,
        title: "Slide",
        information: [
          {
            id: 1,
            name: "Kondisi tampilan Slide",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 2,
            name: "Kondisi permukaan GIB",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 3,
            name: "Kondisi tampilan Conrod/Plunger",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 4,
            name: "Baud dan mur Conrod/Plunger",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 5,
            name: "Pergerakan Slide ketika difungsikan",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 6,
            name: "Fungsi Limit Switch untuk posisi atas dan bawah",
            ketepatan: "Normal",
            notes: ""
          },
        ]
      },
      {
        id: 9,
        title: "Pneumatic System",
        information: [
          {
            id: 1,
            name: "Selenoid Valve",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 2,
            name: "Fungsi Dual Valve, mengecek fungsi tiap sisi",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 3,
            name: "Pressure switch",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 4,
            name: "Pressure Gauge",
            ketepatan: "Rusak",
            notes: "Angka tidak presisi",
          },
          {
            id: 5,
            name: "Air Regulator",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 6,
            name: "Pipe Fitting & Piping",
            ketepatan: "Normal",
            notes: ""
          },
          {
            id: 7,
            name: "Pipa angin",
            ketepatan: "Normal",
            notes: ""
          },
          {
            id: 8,
            name: "Air Filter",
            ketepatan: "Normal",
            notes: ""
          },
          {
            id: 9,
            name: "Silencer",
            ketepatan: "Normal",
            notes: ""
          }
        ]
      },
      {
        id: 10,
        title: "Electric System",
        information: [
          {
            id: 1,
            name: "Kondisi tampilan wiring",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 2,
            name: "Konduktor",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 3,
            name: "Selector Switch",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 4,
            name: "Fungsi ketika beroperasi",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 5,
            name: "Contact cam roller",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 6,
            name: "Fungsi hubungan cam roller",
            ketepatan: "Normal",
            notes: ""
          },
          {
            id: 7,
            name: "Kondisi tampilan Electric Motor",
            ketepatan: "Normal",
            notes: ""
          },
          {
            id: 8,
            name: "Mengecheck ketika beroperasi",
            ketepatan: "Normal",
            notes: ""
          },
          {
            id: 9,
            name: "Kondisi tampilan LSA / Proximity",
            ketepatan: "Normal",
            notes: ""
          },
          {
            id: 10,
            name: "Contactor / Relay",
            ketepatan: "Normal",
            notes: ""
          },
          {
            id: 11,
            name: "PLC / Inverter",
            ketepatan: "Normal",
            notes: ""
          },
          {
            id: 12,
            name: "NFB",
            ketepatan: "Normal",
            notes: ""
          },
          {
            id: 13,
            name: "Thermal Overload Relay",
            ketepatan: "Normal",
            notes: ""
          },
          {
            id: 14,
            name: "Terminal Box",
            ketepatan: "Normal",
            notes: ""
          },
          {
            id: 15,
            name: "Control Box",
            ketepatan: "Normal",
            notes: ""
          },
          {
            id: 16,
            name: "Parts terpasang",
            ketepatan: "Normal",
            notes: ""
          },
          {
            id: 17,
            name: "Rubber mounting parts",
            ketepatan: "Normal",
            notes: ""
          },
        ]
      },
      {
        id: 11,
        title: "Two Hand Push Button Panel",
        information: [
          {
            id: 1,
            name: "Kondisi tampilan Push Button",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 2,
            name: "Fungsi Push Button",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 3,
            name: "Jarak tombol",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 4,
            name: "Jarak aman",
            ketepatan: "Rusak",
            notes: "Angka tidak presisi",
          },
          {
            id: 5,
            name: "Kondisi tampilan Panel Push Button",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 6,
            name: "Jarak aman Panel ke mesin",
            ketepatan: "Normal",
            notes: ""
          },
        ]
      },
      {
        id: 12,
        title: "Safety Light Curtain",
        information: [
          {
            id: 1,
            name: "Kondisi tampilan sensor",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 2,
            name: "Ketinggian pemasangan",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 3,
            name: "Jarak aman sensor",
            ketepatan: "Perlu Adjust",
            notes: "Jarak antar sensor kurang jauh",
          },
        ]
      },
      {
        id: 13,
        title: "Die-Cushion Device",
        information: [
          {
            id: 1,
            name: "Kondisi tampilan Die Cushion",
            ketepatan: "Normal",
            notes: "",
          },
          {
            id: 2,
            name: "Perangkat lainnya",
            ketepatan: "Normal",
            notes: "Respon Masih Cepat",
          },
        ]
      }
    ]),

    setMenu([
      { id:1, menu: "Inspection Form" },
      { id:2, menu: "Machine Check" },
      { id:3, menu: "Accuracy Check" },
      { id:4, menu: "Check Load Tonnage" },
      { id:5, menu: "Resume Check" },
    ])
  }, [])

  const handleConfirmation = (e) => {
    e.preventDefault()
    setOpen(true)
  }

  const pageBack = (): void => {
    navigate("../")
  }

  return {
    data,
    menu,
    open,
    inspectform,
    setOpen,
    setInspectForm,
    pageBack,
    handleConfirmation
  }
}