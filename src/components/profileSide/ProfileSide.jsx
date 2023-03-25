import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard.jsx'
import LogoSearch from '../LogoSearch/LogoSearch.jsx'
import ProfileCard from '../ProfileCard/ProfileCard.jsx'

import "./ProfileSide.css"
const profileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/> 
        <ProfileCard/>
        <FollowersCard/>
    </div>
  )
}

export default profileSide