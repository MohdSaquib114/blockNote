
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";



export default function Navbar() {
    const navigate = useNavigate()
   
    const logOut = () => {
        googleLogout();
       
        navigate(-1)
    };



  return (
    <div className="border-b-2 p-3 flex content-center  justify-between" >
      <h1 className="text-lg font-medium self-center ">BlockNote</h1>
   
        
                  
                   
     <button onClick={logOut} className="border-2 p-1 rounded-sm text-sm font-semibold text-slate-700">Logout</button>
             
    </div>
  )
}
