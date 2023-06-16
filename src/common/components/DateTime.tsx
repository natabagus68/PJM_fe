import { useState, useEffect } from "react";  


export default function useDateTime() {
  const [dateRealTime, setDateRealTime] = useState(new Date())

    useEffect(() =>{
        const timer = setInterval(() => { 
          setDateRealTime(new Date());
          }, 1000);
          return () => {
            clearInterval(timer); 
          }
    },[])

    const getDateTime = (status) => {
        
      let date = dateRealTime.getDate();
      let month = dateRealTime.getMonth() + 1;
      let year = dateRealTime.getFullYear();
      let hours = dateRealTime.getHours();
      let minute = dateRealTime.getMinutes();
      let second = dateRealTime.getSeconds();

      if(status === 'date'){
          return `${date<10?`0${date}`:`${date}`}${"-"}${month<10?`0${month}`:`${month}`}${"-"}${year}`
      }else if(status === 'time')
          return `${hours<10? `0${hours}` :`${hours}`}${":"}${minute<10?`0${minute}`:`${minute}`}${":"}${second<10?`0${second}`:`${second}`}`
  }
  return {
    getDateTime,
  }
}

