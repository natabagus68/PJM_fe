import { useNavigate } from "react-router-dom";


export default function useProductionPlanTable() {
  const navigate = useNavigate()

  const handleNavigate = (url : string) => {
    navigate(url)
  }

  return{
    handleNavigate
  }
}