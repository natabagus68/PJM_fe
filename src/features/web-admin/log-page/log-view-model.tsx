import { LogApiRepository } from "@data/api/web-admin/log-api-repository";
import { FilterLog, IFilterLog, Log } from "@domain/models/web-admin/Log";
import { Paginate } from "@domain/models/web-admin/paginate";
import { RowsData } from "@domain/models/web-admin/rows-data";
import { ILogRepository } from "@domain/repositories/web-admin/log-repository";
import { useEffect, useState } from "react";

export const useLogModel = () => {
  const logRepo: ILogRepository = new LogApiRepository();
  const [filter, setFilter] = useState<FilterLog>(
    FilterLog.create({
      q: "",
      startDate: "",
      endDate: "",
      paginate: Paginate.create({
        page: 1,
        limit: 5,
        rows: 0,
      }),
    })
  );

  const [data, setData] = useState<RowsData<Log>>(
    RowsData.create<Log>({
      rows: 0,
      lastPage: 0,
      data: [],
    })
  );

  const pageHandle = (page: number) => {
    setFilter((prev) => {
      return FilterLog.create({
        ...prev.unmarshall(),
        paginate: Paginate.create({
          ...filter.paginate.unmarshall(),
          page,
        }),
      });
    });
  };

  const handleLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter((prev) => {
      return FilterLog.create({
        ...prev.unmarshall(),
        paginate: Paginate.create({
          ...prev.paginate.unmarshall(),
          [e.target.name]: e.target.value,
        }),
      });
    });
  };

  const handleDatepicker = (newValue: {
    startDate: string;
    endDate: string;
  }) => {
    setFilter((prev) => {
      return FilterLog.create({
        ...prev.unmarshall(),
        ...newValue,
      });
    });
  };

  const handleFilter = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilter((prev) => {
      return FilterLog.create({
        ...prev.unmarshall(),
        [e.target.name]: e.target.value,
      });
    });
  };

  const fetchDataLog = () => {
    logRepo.getAll(filter).then((result) => {
      setData(result);
    });
  };

  useEffect(() => {
    fetchDataLog();
  }, [filter.q, filter.startDate, filter.endDate, filter.paginate.page]);
  return {
    data,
    filter,
    handleFilter,
    pageHandle,
    handleLimit,
    handleDatepicker,
  };
};
