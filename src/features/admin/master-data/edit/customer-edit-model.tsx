import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomerApiRepository } from "@data/api/customer-api-repository";
import { Customer } from "@domain/models/customer";
import Swal from "sweetalert2";

export default function useCustomerEditModel() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = new CustomerApiRepository();
  const [upload, setUpload] = useState<boolean | null>()
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
        [e.target.name]: e.target.files[0]
      });
    });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpload(true);
    data.uploadFoto(e.target.files[0])
    .then((res) => {
      setUpload(false);
      setCustomer((prev) => {
        return Customer.create({
          ...prev.unmarshall(),
          [e.target.name]: res,
        });
      });
    })
    .catch((error) => error.message {
        return error.message
        ? Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        : null
      })
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("customerId", customer.customerId);
    formData.append("customerName", customer.name);
    formData.append("address", customer.address);
    formData.append("phone", customer.phone);
    formData.append("parallellism1Path", customer.parallel1);
    formData.append("parallellism2Path", customer.parallel2);
    formData.append("gibClearance1Path", customer.gib1);
    formData.append("gibClearance2Path", customer.gib2);
    formData.append("perpendicularity1Path", customer.prep1);
    formData.append("perpendicularity2Path", customer.prep2);
    data.update(customer)
      .then(res => navigate("../"))
    setOpen(false);
  };

  const handleReset = () => {
  }

  const pageBack = () => {
    navigate("../");
  };

  useEffect(() => {
    getDataCustomerById();
  }, []);

  return {
    upload,
    open,
    setOpen,
    loading,
    customer,
    pageBack,
    handleChange,
    handleFile,
    handleSubmit,
    handleReset
  };
}