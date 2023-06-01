import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function usePlantOneModel() {
    const navigate = useNavigate()
    useEffect(() =>{
        const intervalId = setInterval(() => {
            navigate('/plant-performance-two')
          }, 30*1000);
          return () => {
            clearInterval(intervalId);
          };
    },[])
}