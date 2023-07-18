import { config } from "@common/utils";
import { LineApiRepository } from "@data/api/caller/line-api-repository";
import { ShiftApiRepository } from "@data/api/caller/shift-api-repository";
import { UserApiRepository } from "@data/api/caller/user-api-repository";
import { Line } from "@domain/models/caller/line";
import { Shift } from "@domain/models/caller/shift";
import { User } from "@domain/models/caller/user";
import { ILineRepository } from "@domain/repositories/caller/line-repository";
import { IShiftRepository } from "@domain/repositories/caller/shift-repository";
import { IUserRepository } from "@domain/repositories/caller/user-repository";
import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const lineRepo: ILineRepository = new LineApiRepository();
  const shiftRepo: IShiftRepository = new ShiftApiRepository();
  const userRepo: IUserRepository = new UserApiRepository();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //input password
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const [error, setError] = useState(false);

  //input password
  const onPasswordShow = (): void => {
    setIsPasswordShow(!isPasswordShow);
  };
  const [shift, setShift] = useState<Shift[]>([]);
  const [line, setLine] = useState<Line[]>([]);
  const [form, setForm] = useState<User>(
    User.create({
      email: "",
      password: "",
      lineId: "",
      shift: "",
    })
  );
  const getDropDownData = async () => {
    setLoading(true);
    const lines = await lineRepo.getAll();
    const shifts = await shiftRepo.getAll();
    setLine(lines);
    setShift(shifts);
    setLoading(false);
  };
  const handleFormInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => {
      return User.create({
        ...prev.unmarshall(),
        [e.target.name]: e.target.value,
      });
    });
  };
  //button login
  const onSubmitLogin = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();
    try {
      // login
      setLoading(true);
      const auth = await userRepo.login(form);
      await localStorage.setItem("token", auth.unmarshall().token);
      setLoading(false);
      auth.unmarshall().user.role !== "operator"
        ? navigate(`/caller/maintenance-handling`)
        : navigate(`/caller/menu`);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  const isMe = async () => {
    try {
      const authMe = await userRepo.me();
      authMe.unmarshall().user.role !== "operator"
        ? navigate(`/caller/maintenance-handling`)
        : navigate(`/caller/menu`);
    } catch (error) {}
  };

  const removeError = () => {
    setError(false);
  };

  useEffect(() => {
    isMe();
  }, []);
  useEffect(() => {
    getDropDownData();
  }, []);
  return {
    isPasswordShow,
    onPasswordShow,
    onSubmitLogin,
    error,
    shift,
    line,
    form,
    loading,
    handleFormInput,
    removeError,
  };
}
