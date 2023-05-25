import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomerApiRepository } from "@data/api/customer-api-repository";
import { Customer } from "@domain/models/customer";

export default function useCustomerDetailModel() {
  const { id } = useParams()
  const navigate = useNavigate()
  const data = new CustomerApiRepository()
  const [loading, setLoading] = useState(false)
  const [customer, setCustomer] = useState<Customer>(
    Customer.create({
      id: "",
      customerId: "",
      name: "",
      address: "",
      phone: "",
      parallel1: "",
      parallel2: "",
      gib1: "",
      gib2: "",
      prep1: "",
      prep2: "",
    })
  )

  const getCustomerDetailById = async() => {
    try {
      const detail = await data.getCustomerById(id)
      setTimeout(() => {
        setLoading(true)
        setCustomer(detail)
      }, 100)
    } catch(error) {
      console.log(error)
    }
  }

  const goToEditCustomer = (id: string) => {
    navigate(`../edit/${id}/customer-edit-view`);
  };

  const pageBack = () => {
    navigate("../")
  }

  useEffect(() => {
    getCustomerDetailById()
  }, [])

  return {
    id,
    loading,
    customer,
    pageBack,
    goToEditCustomer
  }
}