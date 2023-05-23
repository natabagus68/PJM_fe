import { PopupApiRepository } from "@data/api/popup-api-repository";
import { ChooseOpts } from "@domain/models/choose-opt";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useChooseInspectionModel() {
  const { id } = useParams();
  const optRepo = new PopupApiRepository();
  const [inspectionResultId, setInspectionResultId] = useState<string>("");
  const [data, setData] = useState<ChooseOpts[]>([]);
  const [open, setOpen] = useState(false);

  const dataFetch = () => {
    optRepo.getChoose().then((result) => setData(result));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInspectionResultId(e.target.value);
  };

  const submit = (e: React.MouseEvent<HTMLButtonElement>, cb: () => {}) => {
    e.preventDefault();
    optRepo.storeChoose(id, inspectionResultId).then(() => {
      console.log("berhasil");
      cb();
    });
  };

  useEffect(() => {
    dataFetch();
  }, []);

  const openChooseInspection = () => {
    setOpen(true);
  };
  const closeChooseInspection = () => {
    setOpen(false);
  };

  return {
    data,
    open,
    inspectionResultId,
    setData,
    setOpen,
    openChooseInspection,
    closeChooseInspection,
    onChange,
    submit,
  };
}
