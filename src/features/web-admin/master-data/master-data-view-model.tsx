import { config } from "@common/utils";
import { MasterDataApiRepository } from "@data/api/web-admin/master-data-api-repository";
import {
  FilterMasterData,
  MasterData,
} from "@domain/models/web-admin/master-data";
import { Paginate } from "@domain/models/web-admin/paginate";
import { RowsData } from "@domain/models/web-admin/rows-data";
import { IMasterDataRepository } from "@domain/repositories/web-admin/master-data-repository";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useMasterData = () => {
  const masterDataRepo: IMasterDataRepository = new MasterDataApiRepository();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [filter, setFilter] = useState<FilterMasterData>(
    FilterMasterData.create({
      q: "",
      sortby: "",
      paginate: Paginate.create({
        page: 1,
        limit: 5,
        rows: 0,
      }),
    })
  );
  const [data, setData] = useState<RowsData<MasterData>>(
    RowsData.create({
      rows: 0,
      lastPage: 0,
      data: [],
    })
  );
  const toForm = () => {
    navigate(`${config.pathPrefix}admin/master-data/form`);
  };

  const handleFilter = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilter((prev) => {
      return FilterMasterData.create({
        ...prev.unmarshall(),
        [e.target.name]: e.target.value,
      });
    });
  };

  const handlePageination = (page: number) => {
    setFilter((prev) => {
      return FilterMasterData.create({
        ...prev.unmarshall(),
        paginate: Paginate.create({
          ...prev.paginate.unmarshall(),
          page,
        }),
      });
    });
  };

  const handleLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter((prev) => {
      return FilterMasterData.create({
        ...prev.unmarshall(),
        paginate: Paginate.create({
          ...prev.paginate.unmarshall(),
          [e.target.name]: e.target.value,
        }),
      });
    });
  };

  const fetchMasterData = () => {
    setLoading(true);
    masterDataRepo.getAll(filter).then((result) => {
      setData(result);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchMasterData();
  }, [filter.paginate.page, filter.q, filter.paginate.limit, filter.sortby]);
  return {
    data,
    loading,
    filter,
    toForm,
    handleFilter,
    handlePageination,
    handleLimit,
  };
};
