import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { element } from "prop-types";
import { Error404 } from "../common/components";
import { LayoutCompany } from "@features/admin/andon-layout/layout-company";
import { CompanynPerformanceOne } from "@features/admin/company-performance/page1/cp-page-satu";
import { CompanynPerformanceTwo } from "@features/admin/company-performance/page2/cp-page-dua";
import { PlantPerformanceOne } from "@features/admin/plant-performance/page1/pp-page-satu";
import { PlantPerformanceTwo } from "@features/admin/plant-performance/page2/pp-page-dua";
import { LinePerformance } from "@features/admin/line-performance/line-performance";
import LoginView from "@features/auth/login-view";
import MenuLayout from "@features/admin/calling-layout/menu-layout";
import CallerMenu from "@features/admin/caller/menu/CallerMenu";
import MaintenanceCalling from "@features/admin/caller/maintenance-calling/MaintenanceCallingTable";
import { Children } from "react";
import MaintenanceHandling from "@features/admin/called/maintance-handling/MaintenanceMaintanceTable";
import { ParentCompany } from "@features/admin/company-performance/parent/parent";
// import AdminLayout from "@features/admin/admin-layout/admin-layout";

const Root = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    path : "",
    element: <Navigate to={`andon/company-performance-one`} />  
  },
  {
    path: "login",
    // element : <Navigate to={`../andon/company-performance-one`} />
    element: <LoginView />,
  },
  {
    path: "caller",
    element: <MenuLayout />,
    children: [
      {
        path: "menu",
        element: <Root />,
        children: [
          {
            path: "",
            element: <CallerMenu />,
          },
          {
            path: "maintenance-calling",
            element: <MaintenanceCalling />,
          },
        ],
      },
    ],
  },
  {
    path: "called",
    element: <MenuLayout />,
    children: [
      {
        path: "maintenance-handling",
        element: <MaintenanceHandling />,
      },
    ],
  },
  {
    path: "andon",
    element: <LayoutCompany />,
    children: [
      {
        path: "",
        element: <ParentCompany />,
        children: [
          {
            path: "company-performance-one",
            element: <CompanynPerformanceOne />,
          },
          {
            path: "company-performance-two",
            element: <CompanynPerformanceTwo />,
          },
        ],
      },
      {
        path: "plant-performance-one",
        element: <PlantPerformanceOne />,
      },
      {
        path: "plant-performance-two",
        element: <PlantPerformanceTwo />,
      },
      {
        path: "line-performance",
        element: <LinePerformance />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
