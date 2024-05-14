import { useContext, useEffect } from "react";
import { WritingDataContext } from "./WritingDataProvider";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Navbar() {
    const navigate = useNavigate()
    const {user,setProfile,profile} = useContext(WritingDataContext) 

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ,setProfile]
    );

    const logOut = () => {
        googleLogout();
        setProfile(null);
        navigate(-1)
    };



  return (
    <div className="border-b-2 p-3 flex content-center  justify-between" >
      <h1 className="text-lg font-medium self-center ">BlockNote</h1>
      <div className="flex gap-1">
        <div className="flex  border-2 p-1 rounded-sm gap-1 ">

                    <img className="w-10 h-10 rounded-full" src={profile?.picture} alt="user image" />
                   
                    <p className="self-center">{profile?.name}</p>
        </div>
                  
                  
                   
     <button onClick={logOut} className="border-2 p-1 rounded-sm text-sm font-semibold text-slate-700">Logout</button>
                </div>
    </div>
  )
}
