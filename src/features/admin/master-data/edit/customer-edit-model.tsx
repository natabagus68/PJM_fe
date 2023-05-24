import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomerApiRepository } from "@data/api/customer-api-repository";
import { Customer } from "@domain/models/customer";

export default function useCustomerEditModel() {
  const { id } = useParams()
  const navigate = useNavigate();
  const data = new CustomerApiRepository();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
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
  );

  const getDataCustomerById = async () => {
    try {
      const edit = await data.getCustomerById(id);
      setTimeout(() => {
        setLoading(true);
        setCustomer(edit);
      }, 100);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer((prev) => {
      return Customer.create({
        ...prev.unmarshall(),
        [e.target.name]: e.target.value,
      });
    });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    data.uploadFoto(e.target.files[0]).then((res) => {
      setCustomer((prev) => {
        return Customer.create({
          ...prev.unmarshall(),
          [e.target.name]: res,
        });
      });
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(customer)
    const formData = new FormData();
    formData.append("customerName", customer.name);
    formData.append("address", customer.address);
    formData.append("phone", customer.phone);
    formData.append("parallellism1Path", customer.parallel1);
    formData.append("parallellism2Path", customer.parallel2);
    formData.append("gibClearance1Path", customer.gib1);
    formData.append("gibClearance2Path", customer.gib2);
    formData.append("perpendicularity1Path", customer.prep1);
    formData.append("perpendicularity2Path", customer.prep2);
    data.update(customer).then((res) => navigate("../"));
    setCustomer(
      Customer.create({
        id: "",
        name: "",
        address: "",
        phone: "",
        parallel1: " ",
        parallel2: " ",
        gib1: " ",
        gib2: " ",
        prep1: " ",
        prep2: " ",
      })
    );
  };

  const pageBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getDataCustomerById();
  }, []);

  return {
    open,
    setOpen,
    loading,
    customer,
    pageBack,
    handleChange,
    handleFile,
    handleSubmit,
  };
}