import Breadcrumb from '@/components/Common/Breadcrumb'
import ScrollUp from '@/components/Common/ScrollUp'
import Hero from '@/components/Hero'
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

      <ToDoList/>



	</>
  )
}

export default Adminpage