import Breadcrumb from '@/components/Common/Breadcrumb'
import ScrollUp from '@/components/Common/ScrollUp'
import UserProfile from '@/components/Profile'
import ProfileUser from '@/components/Profile'
import Settings from '@/components/Setting'
import React from 'react'

const SettingPage = () => {
  return (
	<>
	<ScrollUp />
	<Breadcrumb
        pageName=" Setting"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Settings/>


	</>
  )
}

export default SettingPage