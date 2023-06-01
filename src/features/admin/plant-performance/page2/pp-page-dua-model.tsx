import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function usePlantTwoModel() {
    const navigate = useNavigate()
    useEffect(() =>{
        const intervalId = setInterval(() => {
            navigate('/plant-performance-one')
          }, 30*1000);
          return () => {
            clearInterval(intervalId);
          };
    },[])
}