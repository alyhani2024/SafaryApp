import Breadcrumb from '@/components/Common/Breadcrumb'
import ScrollUp from '@/components/Common/ScrollUp'
import ProductsPage from '@/components/Table/NewTable'
import UserApiTable from '@/components/Table/UserApi'
import UserTable from '@/components/Table/UserTable'
import TodoComponent from '@/components/todo/TodoBlog'
import React from 'react'

const Adminpage = () => {
  return (
	<>
	<ScrollUp />
	<Breadcrumb
        pageName=" dashboard"
        description=" Table Of All Users For All Data make Cruds ( Add , Edit and Update ) ."
      />

      <UserTable/>
      <br/>


	</>
  )
}

export default Adminpage