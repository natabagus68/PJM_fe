import { Aproval } from "@domain/models/aproval";
import { AprovalReport } from "@domain/models/aproval-report";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Menu {
  id: number;
  label: string;
  to: string;
}

export default function useApprovalModel() {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const [menu, setMenu] = useState<Menu[]>([]);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<AprovalReport>();
  useEffect(() => {
    setMenu([
      { id: 1, label: "Inspection Form", to: "" },
      { id: 2, label: "Machine Check", to: "machinecheck-view" },
      { id: 3, label: "Accuracy Check", to: "accuracycheck-view" },
      {
        id: 4,
        label: "Check Load Tonnage",
        to: "checkloadtonnage/tonnage-view",
      },
      { id: 5, label: "Resume Check", to: "checkresume/resume-view" },
    ]);
  }, []);

  const pageBack = (): void => {
    navigate("../");
  };

  const handleSetNav = () => {
    setNav(true);
  };

  const handleConfirmation = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return {
    data,
    menu,
    setMenu,
    nav,
    setNav,
    open,
    setOpen,
    pageBack,
    handleSetNav,
    handleConfirmation,
  };
}
