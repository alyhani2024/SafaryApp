import Breadcrumb from '@/components/Common/Breadcrumb'
import ScrollUp from '@/components/Common/ScrollUp'
import UserProfile from '@/components/Profile'
import ProfileUser from '@/components/Profile'
import React from 'react'

const ProfilePage = () => {
  return (
	<>
	<ScrollUp />
	{/* <Breadcrumb
        pageName=" Profile"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      /> */}
      <UserProfile/>


	</>
  )
}

export default ProfilePage