import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useAdmin() {
  const navigate = useNavigate();
  const location = useLocation()
  // loading state
  const [isLoading, setIsLoading] = useState(true);

  const [title, setTitle] = useState('')


  //set navigate navbar
  const setNavigate = (url: string): void => {
    navigate(url);
  };

  //on logout
  const onLogout = async(): Promise<void> => {
    try {
      await localStorage.removeItem("web-admin");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //checking me
  const onIsMe = async (): Promise<void> => {
    setIsLoading(true);
    const localStorageData = await JSON.parse(
      localStorage.getItem("web-admin")
    );
    setTimeout(() => {
      setIsLoading(false);
      if (!localStorageData?.token) {
        navigate("../login");
      } 
      // else {
      //   navigate(`../${window.location.pathname}`);
      // }
    }, 500);
  };

  const getTitle = () => {
    if (location.pathname.includes('menu')) {
      if(location.pathname.includes('maintenance-calling')){
        return setTitle('Maintenance Calling')
      }
      return setTitle('Machine 01')
    }else if(location.pathname.includes('maintenance-handling')){
      return setTitle('Maintenance Handling')
    }
  }

  useEffect(() => {
    onIsMe();
  }, []);

  useEffect(() => {
    getTitle()
  },[location])

  

  return {
    isLoading,
    setNavigate,
    onLogout,
    title,
    navigate
  };
}
