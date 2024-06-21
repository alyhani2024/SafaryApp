import Breadcrumb from '@/components/Common/Breadcrumb'
import ScrollUp from '@/components/Common/ScrollUp'
import UpdateProductForm from '@/components/Setting'
import PasswordUpdateForm from '@/components/Setting/PasswodForm'
import React from 'react'

const SettingPage = () => {
  return (
	<>
	<ScrollUp />
	<Breadcrumb
        pageName=" Setting Form To Update Profile"
        description="Setting for update Date "
      />
      <UpdateProductForm/>
      <Breadcrumb
        pageName=" To Change Password"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <hr/>
      <br/>
      <PasswordUpdateForm/>
      <hr/>
      <br/>


	</>
  )
}

export default SettingPage