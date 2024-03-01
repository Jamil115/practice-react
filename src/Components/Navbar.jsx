import Logo from "./Logo";
import Name from "./Name";
import Profile from "./Profile";
import JK_Logo from "../assets/JK_Logo.png"
import profile_img from "../assets/profile_img.jpg"

function Navbar() {
    return(
        <div className="flex bg-red-400">
          <Logo
             source = {JK_Logo}
           />

          <Name 
             name="JKblogs" 
          />             

          <Profile
             profSource = {profile_img}
          />
        </div>
    )
}

export default Navbar