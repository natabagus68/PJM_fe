import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { element } from "prop-types";
import { Error404 } from "../common/components";
import { LayoutCompany } from "@features/admin/andon-layout-company/layout-company";
import { CompanynPerformanceOne } from "@features/admin/company-performance/page1/cp-page-satu";
import { CompanynPerformanceTwo } from "@features/admin/company-performance/page2/cp-page-dua";
import { PlantPerformanceOne } from "@features/admin/plant-performance/page1/pp-page-satu";
import { PlantPerformanceTwo } from "@features/admin/plant-performance/page2/pp-page-dua";
import { SubProcessPerformance } from "@features/admin/sub-process-performance/sub-process-performance";
import LoginView from "@features/auth/login-view";
import MenuLayout from "@features/admin/calling-layout/menu-layout";
import CallerMenu from "@features/admin/caller/menu/CallerMenu";
import MaintenanceCalling from "@features/admin/caller/maintenance-calling/MaintenanceCallingTable";

import MaintenanceHandling from "@features/admin/called/maintance-handling/MaintenanceMaintanceTable";
import { LayoutProcess } from "@features/admin/andon-layout-process/layout-process";
import { LayoutSubProcess } from "@features/admin/andon-layout-sub-process/layout-sub-process";
import { AuthWebAdmin } from "@features/auth-web-admin/login-auth-web-admin";
import { AdminLayout } from "@features/web-admin/admin-layout/admin-layout-view";
import { Log } from "@features/web-admin/log-page/log-view";
import { MasterData } from "@features/web-admin/master-data/master-data-view";
import { MasterDataForm } from "@features/web-admin/master-data/form/master-data-form-view";
import { User } from "@features/web-admin/user/user-view";
import { UserForm } from "@features/web-admin/user/form/user-form-view";
import { UserDetail } from "@features/web-admin/user/detail/user-detail-view";
import { DashboardCompany } from "@features/web-admin/dasboard/company/company-view";
import { DashboardPlant } from "@features/web-admin/dasboard/plant/plant-view";
import { DashboardLine } from "@features/web-admin/dasboard/line/line-view";
// import AdminLayout from "@features/admin/admin-layout/admin-layout";

const Root = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    path: "",
    element: <Navigate to={`andon/company-performance-one`} />,
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
    element: <Root />,
    children: [
      {
        path: "company-performance",
        element: <LayoutCompany />,
        children: [
          {
            path: "one",
            element: <CompanynPerformanceOne />,
          },
          {
            path: "two",
            element: <CompanynPerformanceTwo />,
          },
        ],
      },
      {
        path: "process-performance",
        element: <LayoutProcess />,
        children: [
          {
            path: ":processName/one",
            element: <PlantPerformanceOne />,
          },
          {
            path: ":processName/two",
            element: <PlantPerformanceTwo />,
          },
        ],
      },

      {
        path: "sub-process-performance",
        element: <LayoutSubProcess />,
        children: [
          {
            path: ":processName",
            element: <SubProcessPerformance />,
          },
        ],
      },
    ],
  },
  // admin
  {
    path: "login-web-admin",
    element: <AuthWebAdmin />,
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Root />,
        children: [
          {
            path: "",
            element: <DashboardCompany />,
          },
          {
            path: "plant",
            element: <DashboardPlant />,
          },
          {
            path: "line",
            element: <DashboardLine />,
          },
        ],
      },

      {
        path: "log",
        element: <Root />,
        children: [
          {
            path: "",
            element: <Log />,
          },
        ],
      },
      {
        path: "master-data",
        element: <Root />,
        children: [
          {
            path: "",
            element: <MasterData />,
          },
          {
            path: "form",
            element: <MasterDataForm />,
          },
        ],
      },
      {
        path: "user",
        element: <Root />,
        children: [
          {
            path: "",
            element: <User />,
          },
          {
            path: "form",
            element: <UserForm />,
          },
          {
            path: ":id/form",
            element: <UserForm />,
          },
          {
            path: ":id/detail",
            element: <UserDetail />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
