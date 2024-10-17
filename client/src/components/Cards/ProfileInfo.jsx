import React from 'react'
import "./ProfileInfo.css"
import { getInitials } from '../../utils/helper';

const ProfileInfo = ({onLogout}) => {

  return (
    <div className='profile-info-container'>
        <div className='initals-icon'>
            {getInitials("kjn kjsnkj")}
        </div>
        <div className='name-button-info'>
            <p className='name-display'>William</p>
            <button className='logout-btn' onClick={onLogout}>LogOut</button>
        </div>
    </div>
  )
}

export default ProfileInfo;