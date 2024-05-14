
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
    
    const  navigate = useNavigate()
    
    const responseMessage = () => {
        navigate("/home-page")
    };
    const errorMessage = () => {
       console.log("Error while login")
    };
  return (
    <div className="w-screen h-screen flex flex-col place-items-center justify-center gap-5">
        <h1 className="text-xl font-bold text-slate-700">BlockNote App</h1>
      <div className="flex flex-col gap-5  border-2 p-10 rounded-md text-center">
        <h2 className="text-lg font-semibold text-slate-700">Login with google</h2>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </div>
    </div>
  )
}

