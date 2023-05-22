import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerApiRepository } from "@data/api/customer-api-repository";

export default function useMasterData() {
  const navigate = useNavigate();
  const customerData = new CustomerApiRepository();
  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState([]);

  const getCustomerDataAll = async () => {
    try {
      const data = customerData.getAllData();
      setTimeout(() => {
        setLoading(true)
        setCustomer(data)
      }, 100)
    } catch (error) {
      console.log(error);
    }
  };

  const pageBack = (): void => {
    navigate("../");
  };

  useEffect(() => {
    getCustomerDataAll();
  }, []);

  return {
    customer,
    setCustomer,
    open,
    pageBack,
  };
}