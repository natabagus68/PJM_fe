import { useState, useEffect } from "react";

export default function useCheckLoadTonnage() {
  const [data, setData] = useState([])
  const [view, setView] = useState(true)

  useEffect(() => {
    setData([
      { id:1, lf_a: 101, lr_a: 90, rf_a: 80, rr_a: 100, total_a: 390, lf_b: 92, lr_b: 82, rf_b: 94, rr_b: 92, total_b: 360, die: 1212.998 },
      { id:2, lf_a: 101, lr_a: 90, rf_a: 80, rr_a: 100, total_a: 390, lf_b: 92, lr_b: 82, rf_b: 94, rr_b: 92, total_b: 360, die: 1212.998 },
      { id:3, lf_a: 101, lr_a: 90, rf_a: 80, rr_a: 100, total_a: 390, lf_b: 92, lr_b: 82, rf_b: 94, rr_b: 92, total_b: 360, die: 1212.998 },
      { id:4, lf_a: 101, lr_a: 90, rf_a: 80, rr_a: 100, total_a: 390, lf_b: 92, lr_b: 82, rf_b: 94, rr_b: 92, total_b: 360, die: 1212.998 },
      { id:5, lf_a: 101, lr_a: 90, rf_a: 80, rr_a: 100, total_a: 390, lf_b: 92, lr_b: 82, rf_b: 94, rr_b: 92, total_b: 360, die: 1212.998 },
    ])
  }, [])

  const handleViewChart = () => {
    setView(!!!view)
  }

  return {
    data,
    setData,
    view,
    setView,
    handleViewChart,
  }
}