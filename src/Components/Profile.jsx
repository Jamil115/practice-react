import { useState } from "react"
import ProfileInfo from "./ProfileInfo"

function Profile({profSource}) {

      const [toggle, setToggle] = useState(false)
      const toggleFunction=()=> {
        setToggle(!toggle)
        console.log(toggle)
    }
    return(
        <div className="relative inline-block w-16 h-16 mr-8 ml-32 ">
          <div>
          <button onClick={toggleFunction}><img src={profSource} alt="" /></button>
          <span>{toggle && (
            <div className="absolute">
                <ProfileInfo />
            </div>
          )}</span>
          </div>
        </div>
    )
}

export default Profile