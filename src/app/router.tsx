import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Error404 } from "../common/components";
import LoginView from "@features/auth/login-view";
import AdminLayout from "@features/admin/admin-layout/admin-layout";
import TraceabilityView from "@features/admin/traceability/traceability-view";
import TraceabilityDetail from "@features/admin/traceability/traceability-detail";
import MasterDataView from "@features/admin/master-data/masterdata-view";
import MasterDataAddView from "@features/admin/master-data/masteradd-view";
import MasterDataEditView from "@features/admin/master-data/masteredit-view";
import MasterDataDetailView from "@features/admin/master-data/masterdetail-view";
import ApprovalReport from "@features/admin/approval/approvalreport-view";
import InspectionForm from "@features/admin/approval/inspectionform-view";
import MachineCheck from "@features/admin/approval/machinecheck-view";
import AccuracyCheck from "@features/admin/approval/accuracycheck-view";
import TonnageView from "@features/admin/approval/checkloadtonnage/tonnage-view";
import ResumeView from "@features/admin/approval/checkresume/resume-view";

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
        element: <ApprovalReport />,
        children: [
          {
            path: "inspectionform-view",
            element: <InspectionForm />
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
            element: <ResumeView />
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