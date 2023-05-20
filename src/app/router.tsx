import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { element } from "prop-types";
import { Error404 } from "../common/components";
import LoginView from "@features/auth/login-view";
import AdminLayout from "@features/admin/admin-layout/admin-layout";
import TraceabilityView from "@features/admin/traceability/traceability-view";
import TraceabilityDetail from "@features/admin/traceability/traceability-detail";

import { Report } from "@features/admin/report/report/report-view";
import { ReportDetailMain } from "@features/admin/report/report-detail/report-detail-main/report-detail-main-view";
import { MachineCheck } from "@features/admin/report/report-detail/detail-pages/machine-check/machine-check-view";
import { AcuracyCheck } from "@features/admin/report/report-detail/detail-pages/acuracy-check/acuracy-check-view";
import { CheckLoadTonnage } from "@features/admin/report/report-detail/detail-pages/check-load-tonnage/check-load-tonnage-view";
import { Table } from "@features/admin/report/report-detail/detail-pages/check-load-tonnage/table/table";
import { ChartLine } from "@features/admin/report/report-detail/detail-pages/check-load-tonnage/chart/chart-line-view";
import { ResumeCheck } from "@features/admin/report/report-detail/detail-pages/resume-check/resume-check-view";

import MasterDataView from "@features/admin/master-data/masterdata-view";
import MasterDataAddView from "@features/admin/master-data/add/masteradd-view";
import MasterDataEditView from "@features/admin/master-data/edit/masteredit-view";
import MasterDataDetailView from "@features/admin/master-data/detail/masterdetail-view";
import InspectionForm from "@features/admin/approval/inspectionform-view";
import ApprovalReport from "@features/admin/approval/approvalreport-view";
import AccuracyCheck from "@features/admin/approval/accuracycheck-view";
import TonnageView from "@features/admin/approval/checkloadtonnage/tonnage-view";
import ResumePreview from "@features/admin/approval/checkresume/resume-view";
import UserView from "@features/admin/user/user-view";
import UserAddView from "@features/admin/user/add/useradd-view";
import UserEditView from "@features/admin/user/edit/useredit-view";
import UserDetailView from "@features/admin/user/detail/userdetail-view";
import ListView from "@features/admin/approval/list/list-view";

const Root = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    path: "",
    element: <Navigate to="../admin" />,
  },
  {
    path: "login",
    element: <LoginView />,
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "traceability",
        element: <Root />,
        children: [
          {
            path: "",
            element: <TraceabilityView />,
          },
          {
            path: "detail",
            element: <TraceabilityDetail />,
          },
        ],
      },
      {
        path: "master-data",
        element: <Root />,
        children: [
          {
            path: "",
            element: <MasterDataView />,
          },
          {
            path: "masteradd-view",
            element: <MasterDataAddView />,
          },
          {
            path: "masteredit-view",
            element: <MasterDataEditView />,
          },
          {
            path: "masterdetail-view",
            element: <MasterDataDetailView />,
          },
        ],
      },
      {
        path: "approval",
        element: <Root />,
        children: [
          {
            path: "",
            element: <ListView />,
          },
          {
            path: ":id/detail",
            element: <ApprovalReport />,
            children: [
              {
                path: "",
                element: <InspectionForm />,
              },
              {
                path: "machinecheck-view",
                element: <MachineCheck />,
              },
              {
                path: "accuracycheck-view",
                element: <AccuracyCheck />,
              },
              {
                path: "checkloadtonnage/tonnage-view",
                element: <TonnageView />,
              },
              {
                path: "checkresume/resume-view",
                element: <ResumePreview />,
              },
            ],
          },
        ],
      },
      {
        path: "user",
        element: <UserView />,
      },
      {
        path: "report",
        element: <Root />,
        children: [
          {
            path: "",
            element: <Report />,
          },
          {
            path: ":id/detail",
            element: <ReportDetailMain />,
            children: [
              {
                path: "",
                element: <InspectionForm />,
              },
              {
                path: "machine-check",
                element: <MachineCheck />,
              },
              {
                path: "acuracy-check",
                element: <AcuracyCheck />,
              },
              {
                path: "check-load-tonnage",
                element: <CheckLoadTonnage />,
                children: [
                  {
                    path: "table",
                    element: <Table />,
                  },
                  {
                    path: "chart",
                    element: <ChartLine />,
                  },
                ],
              },
              {
                path: "resume-check",
                element: <ResumeCheck />,
              },
            ],
          },
        ],
      },
      {
        path: "user",
        element: <Root />,
        children: [
          {
            path: "useradd-view",
            element: <UserAddView />,
          },
          {
            path: "useredit-view",
            element: <UserEditView />,
          },
          {
            path: "userdetail-view",
            element: <UserDetailView />,
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
