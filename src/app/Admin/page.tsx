import Breadcrumb from '@/components/Common/Breadcrumb'
import ScrollUp from '@/components/Common/ScrollUp'
import UserTable from '@/components/Table/TableUser'
import ToDoList from '@/components/To-Do/TodoList'
import React from 'react'

const Adminpage = () => {
  return (
	<>
	<ScrollUp />
	<Breadcrumb
        pageName=" dashboard"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <UserTable/>
      <br/>
      <hr/>
      <br/>
      <hr/>
      <ToDoList/>



	</>
  )
}

export default Adminpage