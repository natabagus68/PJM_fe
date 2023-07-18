import { config } from "@common/utils";
import { CallingApiRepository } from "@data/api/caller/caling-api-repository";
import { Calling } from "@domain/models/caller/calling";
import { ICallingRepository } from "@domain/repositories/caller/calling-repository";

import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useCallerMenuModel() {
  const navigate = useNavigate();
  const remarkRepo: ICallingRepository = new CallingApiRepository();
  const [modalConfirm, setModalConfirm] = useState(false);
  const [remark, setRemark] = useState<Calling>(
    Calling.create({
      remark: "",
      for: "",
    })
  );
  const handleSave = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("maintenance-calling");
  };

  const onLogout = async (): Promise<void> => {
    try {
      await localStorage.clear();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const toHistoryCalling = () => {
    navigate(`${config.pathPrefix}caller/menu/history-calling`);
  };
  const handleChangeRemark = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRemark((prev) => {
      return Calling.create({
        ...prev.unmarshall(),
        remark: e.target.value,
      });
    });
  };

  const handleRemarkFor = (
    value: "leader" | "quality" | "maintenance" | ""
  ) => {
    setModalConfirm(true);
    setRemark((prev) => {
      return Calling.create({
        ...prev.unmarshall(),
        for: value,
      });
    });
  };

  const onCancelRemark = (e: React.MouseEvent<HTMLButtonElement>) => {
    setModalConfirm(false);
    setRemark(
      Calling.create({
        remark: "",
        for: "",
      })
    );
  };
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    remarkRepo.create(remark).then((result) => {
      setRemark(
        Calling.create({
          remark: "",
          for: "",
        })
      );
      setModalConfirm(false);
      navigate("/caller/menu/history-calling");
    });
  };
  return {
    modalConfirm,
    setModalConfirm,
    handleSave,
    onLogout,
    toHistoryCalling,
    handleChangeRemark,
    remark,
    handleRemarkFor,
    onCancelRemark,
    handleSubmit,
  };
}
