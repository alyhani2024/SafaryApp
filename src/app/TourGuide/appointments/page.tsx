import AppointmentsTable from '@/components/AppointmentsTable/AppointmentsTable'
import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";
const AppointmentsPage = () => {
  return (
  <>
  <Breadcrumb
        pageName="Appointments"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
  <AppointmentsTable />
  </>
  )
}

export default AppointmentsPage