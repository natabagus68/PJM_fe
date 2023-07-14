import { useNavigate } from "react-router-dom";
import { SyntheticEvent, useEffect, useState } from "react";
import { Handling } from "@domain/models/called/handling";
import { IHandlingRepository } from "@domain/repositories/called/handling-repository";
import { HandlingApiRepository } from "@data/api/called/handling-api-repository";

export default function useMaintanceHandling() {
  const navigate = useNavigate();
  const handlingRepo: IHandlingRepository = new HandlingApiRepository();
  const [modalResponse, setModalResponse] = useState(false);
  const [modalHandling, setModalHandling] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Handling[]>([]);
  const [temp, setTemp] = useState<Handling>(
    Handling.create({
      id: "",
      time: "",
      location: "",
      problem: "",
      timeHandling: "",
      handling: "",
      isHandle: false,
    })
  );
  const onResponse = (id: string) => {
    const tempData = data.find((item) => item.id == id);
    setTemp(tempData);
    setModalResponse(true);
  };
  const onCancelResponse = () => {
    setTemp(
      Handling.create({
        id: "",
        time: "",
        location: "",
        problem: "",
        timeHandling: "",
        handling: "",
        isHandle: false,
      })
    );
    setModalResponse(false);
  };
  const onResponseOk = () => {
    setModalResponse(false);
    setModalHandling(true);
  };
  const onChangeHandling = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemp((prev) => {
      return Handling.create({
        ...prev.unmarshall(),
        problem: e.target.value,
      });
    });
  };
  const onHandlingConfirm = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("klik!!!");
    handlingRepo.update(temp.id, temp.problem).then(() => {
      setTemp(
        Handling.create({
          time: "",
          location: "",
          problem: "",
          timeHandling: "",
          handling: "",
          isHandle: false,
        })
      );
      setModalHandling(false);
      fetchDataHandling();
    });
  };
  const onCancleHandling = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTemp(
      Handling.create({
        time: "",
        location: "",
        problem: "",
        timeHandling: "",
        handling: "",
        isHandle: false,
      })
    );
    setModalHandling(false);
  };
  const handleNavigate = (url: string) => {
    navigate(url);
  };

  const onLogout = async (): Promise<void> => {
    try {
      await localStorage.removeItem("web-admin");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDataHandling = () => {
    setLoading(true);
    handlingRepo.getAll().then((result) => {
      setData(result);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchDataHandling();
  }, []);
  return {
    handleNavigate,
    modalHandling,
    modalResponse,
    data,
    loading,
    temp,
    onResponseOk,
    setModalHandling,
    setModalResponse,
    onHandlingConfirm,
    onLogout,
    onResponse,
    onCancelResponse,
    onChangeHandling,
    onCancleHandling,
  };
}
