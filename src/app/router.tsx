import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { element } from "prop-types";
import { Error404 } from "../common/components";
import { LayoutCompany } from "@features/admin/a-layout/layout-company";
import { CompanynPerformanceOne } from "@features/admin/company-performance/page1/cp-page-satu";
import { CompanynPerformanceTwo } from "@features/admin/company-performance/page2/cp-page-dua";
// import AdminLayout from "@features/admin/admin-layout/admin-layout";

const Root = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    path: "/",
    element: <LayoutCompany />,
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
    path: "*",
    element: <Error404 />,
  },
]);
