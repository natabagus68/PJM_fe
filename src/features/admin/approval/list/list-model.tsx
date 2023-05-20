import { AprovalApiRepository } from "@data/api/aproval-api-repository";
import { Aproval, AprovalStatus } from "@domain/models/aproval";
import { TableParams } from "@domain/models/table-params";
import { AprovalRepository } from "@domain/repositories/aproval-repository";
import { object } from "prop-types";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useList() {
  const navigate = useNavigate();
  const aprovalRepo: AprovalRepository = new AprovalApiRepository();
  const [params, setParams] = useState<TableParams>({
    q: "",
    page: 1,
    limit: 10,
    status: "ALL_STATUS",
  });

  const [status, setStatus] = useState([]);

  const [data, setData] = useState<Aproval[]>([]);

  const fetchData = () => {
    aprovalRepo.get(params).then((result) => setData(result));
  };

  const toReview = (id: string) => {
    navigate(`${id}/detail`);
  };

  const loopStatus = () => {
    const temp = Object.values(AprovalStatus).map((e) => e);
    setStatus(temp);
  };

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setParams((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    loopStatus();
  }, []);

  useEffect(() => {
    fetchData();
  }, [params]);

  return {
    data,
    params,
    status,
    handleSearch,
    toReview,
  };
}
