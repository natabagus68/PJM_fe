import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useUserAddModal() {
  const navigate = useNavigate();
  const pageBack = () => navigate("../");
  return {
    pageBack,
  };
}
