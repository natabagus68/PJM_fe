import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerApiRepository } from "@data/api/customer-api-repository";
import { Customer } from "@domain/models/customer";

export default function useCustomerAddModel() {
  const navigate = useNavigate();
  const data = new CustomerApiRepository();
  const [upload, setUpload] = useState<boolean | null>()
  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = useState<Customer>(
    Customer.create({
      id: "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer((prev) => {
      return Customer.create({
        ...prev.unmarshall(),
        [e.target.name]: e.target.value,
      });
    });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files)
    setUpload(true);
    data.uploadFoto(e.target.files[0]).then(res => {
      setUpload(false);
      setCustomer((prev) => {
        return Customer.create({
          ...prev.unmarshall(),
          [e.target.name]:res
        });
      });
    })
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(true);
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
    data.store(customer).then((res) => navigate("../"));
  };

  const pageBack = () => {
    navigate("../");
  };

  return {
    upload,
    open,
    setOpen,
    customer,
    pageBack,
    handleFile,
    handleChange,
    handleSubmit,
  };
}