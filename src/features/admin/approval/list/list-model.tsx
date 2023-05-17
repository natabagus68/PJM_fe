import { useState, useEffect } from "react";

interface Item {
  id: string;
  date: string;
  customer: string;
  machine: string;
  status: string;
}

export default function useList() {
  const [dataApproval, setDataApproval] = useState<Item[]>([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectTerm, setSelectTerm] = useState("all");

  useEffect(() => {
    setDataApproval([
      {
        id: "IID66538135",
        date: "10/04/2023",
        customer: "PT. Ragdalion Revolusi",
        machine: "PRESS MACHINE",
        status: "Confirmed",
      },
      {
        id: "IID55069827",
        date: "18/09/2022",
        customer: "PT. Abjad",
        machine: "PIPE & WIRE BENDING",
        status: "Confirmed",
      },
      {
        id: "IID01906912",
        date: "07/05/2022",
        customer: "PT. Nusa Bangunan",
        machine: "STRAIGHTENERFEEDER",
        status: "Waiting",
      },
      {
        id: "IID43397744",
        date: "28/10/2022",
        customer: "PT. Sejahtera Abadi",
        machine: "PIPE & WIRE BENDING",
        status: "Waiting",
      },
      {
        id: "IID52936567",
        date: "15/08/2017",
        customer: "PT. Sehati Maju",
        machine: "STRAIGHTENERFEEDER",
        status: "Confirmed",
      },
      {
        id: "IID76031847",
        date: "12/06/2020",
        customer: "PT. Adakamu Adi",
        machine: "STRAIGHTENERFEEDER",
        status: "Waiting",
      },
    ]);
  }, []);

  function mapItems(callback: (item: Item, index: number) => Item) {
    const newItems = dataApproval.map(callback);
    setDataApproval(newItems);
  }

  function handleConfirm(item: Item) {
    mapItems((i) => (i.id === item.id ? { ...i, status: "Confirmed" } : i));
  }

  function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(event.target.value);
  }

  function handleSelectTermChange(event: ChangeEvent<HTMLInputElement>): void {
    setSelectTerm(event.target.value);
    console.log(selectTerm);
  }

  const filteredItems = dataApproval
    .filter(
      (item) =>
        selectTerm === item.status.toLowerCase() ||
        (selectTerm === "all" &&
          `${item.machine} ${item.customer}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase()))
    )
    .filter((i) =>
      `${i.machine} ${i.customer}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

  return {
    dataApproval,
    selectTerm,
    searchTerm,
    filteredItems,
    handleConfirm,
    setDataApproval,
    handleSearchTermChange,
    handleSelectTermChange,
    mapItems,
  };
}
