// import { useState, useEffect } from 'react'

// interface customerDetail {
//   status: string;
//   inspectionId: string;
//   inspectionDate: string;
//   confirmDate: string;
//   inspector: string;
//   customer: string;
//   telp: string;
//   address: string;
//   personInChange: string
// }

// export default function useShowDetailModel() {
//   const [data, setData] = useState<customerDetail>({})
//   const [open, setOpen] = useState(false)

//   useEffect(() => {
//     setData({
//       status: "Confirmed",
//       inspectionId: "IID66538135",
//       inspectionDate: "10/04/2023 | 13:21",
//       confirmDate: "14/04/2023 | 10:42",
//       inspector: "Jamal",
//       customer: "PT. Ragdalion Revolusi",
//       telp: "0986375176",
//       address: "Cikarang Central City Blok G20, Cikarang, Bekasi, Jawa Barat 17530",
//       personInChange: "Ridwan Hardi"
//     })
//   }, [])

//   const handleShowDetailModal = () => {
//     setOpen(true)
//   }

//   const handleShowDetailClose = () => {
//     setOpen(false)
//   }

//   return {
//     data,
//     open,
//     setData,
//     setOpen,
//     handleShowDetailModal,
//     handleShowDetailClose,
//   }
// }
