import { ReportApiRepository } from "@data/api/report-api-repository";
import { Report } from "@domain/models/report";
import { TableParams } from "@domain/models/table-params";
import { ReportRepository } from "@domain/repositories/repoty-repository";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useReport = () => {
  const navigate = useNavigate();
  const reportRepo: ReportRepository = new ReportApiRepository();
  const [params, setParams] = useState<TableParams>({
    q: "",
    page: 1,
    limit: 10,
  });

  const [data, setData] = useState<Report[]>([]);

  const fetchData = () => {
    reportRepo.get(params).then((result) => {
      setData(result);
      console.log(result);
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams((prev) => {
      return { ...prev, q: e.target.value };
    });
  };

  const toDetail = (id: string) => {
    navigate(`${id}/detail`);
  };

  useEffect(() => {
    fetchData();
  }, [params]);

  return {
    params,
    data,
    handleSearch,
    toDetail
  };
};

