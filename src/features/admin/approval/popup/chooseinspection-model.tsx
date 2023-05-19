import { useState, useEffect } from 'react';

interface ChooseOpts {
  id: number;
  choose: boolean;
  grade: string;
  label: string;
}

export default function useChooseInspectionModel() {
  const [data, setData] = useState<ChooseOpts>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setData([
      { id: 1, choose: false, grade: "A", label: "Mesin dalam keadaan baik" },
      { id: 2, choose: false, grade: "B", label: "Mesin masih bisa digunakan, parts rusak harus segera ganti" },
      { id: 3, choose: false, grade: "C", label: "Mesin dalam keadaan buruk, segera lakukan perbaikan" },
      { id: 4, choose: false, grade: "D", label: "Mesin dalam keadaan buruk, tidak boleh digunakan" },
    ])
  },[])

  const openChooseInspection = () => {
    setOpen(true)
  }
  const closeChooseInspection = () => {
    setOpen(false)
  }

  return {
    data,
    open,
    setData,
    setOpen,
    openChooseInspection,
    closeChooseInspection,
  }
}