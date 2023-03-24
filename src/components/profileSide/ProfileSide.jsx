import React from 'react'
import LogoSearch from "../LogoSearch/LogoSearch.jsx";
import ProfileCard from '../ProfileCard/ProfileCard.jsx'
const profileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/> 
        <ProfileCard/>
    </div>
  )
}

export default profileSide