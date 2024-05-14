import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginPage from "./pages/LoginPage";
import { WritingDataProvider } from "./components/WritingDataProvider";


export default function App() {
  return (

    <GoogleOAuthProvider clientId="223437750245-ovusingc6b475qkpngn0mran3bcadj1o.apps.googleusercontent.com">
      <WritingDataProvider>

   <BrowserRouter>
    <Routes>
      <Route index element={<LoginPage/>} />
      <Route path="/home-page" element={<HomePage />} />
    </Routes>
     
   </BrowserRouter>
      </WritingDataProvider>
  
    </GoogleOAuthProvider>
  )
}
