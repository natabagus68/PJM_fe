import { CallingApiRepository } from "@data/api/caller/caling-api-repository";
import { MaintenaceCallingApiRepository } from "@data/api/caller/maintenance-calling-api-repository";
import { MaintenaceCalling } from "@domain/models/caller/maintenance-calling";
import { ICallingRepository } from "@domain/repositories/caller/calling-repository";
import { IMaintenaceCallingRepository } from "@domain/repositories/caller/maintenance-calling-repository";
import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useProductionPlanTable() {
  const callingRepo: IMaintenaceCallingRepository =
    new MaintenaceCallingApiRepository();
  const remarkRepo: ICallingRepository = new CallingApiRepository();
  const [data, setData] = useState<MaintenaceCalling[]>([]);
  const navigate = useNavigate();
  const handleNavigate = (url: string) => {
    navigate(url);
  };
  const [remark, setRemark] = useState({
    id: "",
    remark: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = (id: string) => {
    const find = data.find((item) => item.id == id);
    const obj = { id: "", remark: "" };
    obj.id = id;
    obj.remark = find.remark;
    setRemark(obj);
    setOpen(true);
  };
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setRemark({ id: "", remark: "" });
    setOpen(false);
  };

  const handleChangeREmark = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRemark((prev) => {
      return {
        ...prev,
        remark: e.target.value,
      };
    });
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    remarkRepo.update(remark.id, remark.remark).then((result) => {
      setData((prev) => {
        const newData = prev.map((item) => {
          if (item.id === remark.id) {
            return MaintenaceCalling.create({
              ...item.unmarshall(),
              remark: remark.remark,
            });
          } else return item;
        });

        return newData;
      });

      setRemark({
        id: "",
        remark: "",
      });
      setOpen(false);
    });
  };

  const fetchData = () => {
    callingRepo.findAll().then((result) => {
      setData(result);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    handleNavigate,
    handleOpen,
    handleClose,
    handleChangeREmark,
    onSubmit,
    open,
    data,
    remark,
  };
}
