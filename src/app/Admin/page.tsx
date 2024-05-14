import Breadcrumb from '@/components/Common/Breadcrumb'
import ScrollUp from '@/components/Common/ScrollUp'
import UserApiTable from '@/components/Table/UserApi'
import TodoComponent from '@/components/todo/TodoBlog'
import React from 'react'

const Adminpage = () => {
  return (
	<>
	<ScrollUp />
	<Breadcrumb
        pageName=" dashboard"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <UserApiTable/>
      <br/>
      <hr/>
      <br/>
      <hr/>


	</>
  )
}

export default Adminpage