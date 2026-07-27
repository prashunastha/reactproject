import React from 'react'
import { Link } from 'react-router-dom'

const UserProfiles = () => {
  return (
    <ul>
        <li><Link to={'/profile/ram'}>RAM</Link></li>
         <li><Link to={'/profile/shyam'}>SHYAM </Link></li>
          <li><Link to={'/profile/sita'}>SITA</Link></li>
           <li><Link to={'/profile/gita'}>GITA</Link></li>
            <li><Link to={'/profile/rita'}>RITA</Link></li>

    </ul>
  )
}

export default UserProfiles