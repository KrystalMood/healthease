import React from "react";
import DashboardLayout from "~/components/dashboard/layout";
import Telemedicine from "~/components/dashboard/telemedicine";

export default function TelemedicinePage() {
  return (
    <DashboardLayout>
      <Telemedicine />
    </DashboardLayout>
  );
}
