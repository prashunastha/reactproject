import React from 'react'

const MyProfile = () => {
    const params= useParams()

    //{username: 'prashuna'   }




  return (
    <div>
        Welcome {params.username}
    </div>
  )
}

export default MyProfile