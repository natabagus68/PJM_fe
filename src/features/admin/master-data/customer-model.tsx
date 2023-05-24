import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerApiRepository } from "@data/api/customer-api-repository";
import { Customer } from "@domain/models/customer";

export default function useCustomerModel() {
  const navigate = useNavigate();
  const data = new CustomerApiRepository();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState<Customer[]>([]);

  const getCustomerDataAll = async () => {
    try {
      const customer = await data.getCustomerData();
      setTimeout(() => {
        setLoading(true);
        setCustomer(customer);
      }, 100);
    } catch (error) {
      console.log(error);
    }
  };

  const addCustomer = () => {
    navigate("add/customer-add-view");
  };

  const detailCustomer = (id: string) => {
    navigate(`detail/${id}/customer-detail-view`);
  };

  const editCustomer = (id: string) => {
    navigate(`edit/${id}/customer-edit-view`);
  };

  const setSelected = (id: string) => {
    setOpen(true);
    setCustomer((prev) => {
      return [...prev].map((item) => {
        return item.id === id ? item.check() : item.uncheck();
      });
    });
  };

  const onDelete = () => {
    const selectedCustomer = customer.find((item) => item.checked);
    data.destroy(selectedCustomer.id).then(() => {
      setCustomer((prev) => {
        return [...prev].filter((item) => {
          return !item.checked;
        });
      });
    });
  };

  const pageBack = () => {
    navigate("../");
  };

  useEffect(() => {
    getCustomerDataAll();
  }, []);

  return {
    open,
    setOpen,
    customer,
    loading,
    pageBack,
    addCustomer,
    detailCustomer,
    editCustomer,
    setSelected,
    onDelete,
  };
}