import { TokenResponse } from "@react-oauth/google";
import { ReactNode, createContext, useState } from "react";

export type WritingDataType = {
    data:string,
    name:string,
 
}
export type EditDataType = {
    data:string,
    name:string,
    id:number
}

interface WritingDataContextType {
    imgVisibility: boolean;
    setImgVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    textVisibility: boolean;
    setTextVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    data:WritingDataType[],
    editData:EditDataType | undefined,
    setData: React.Dispatch<React.SetStateAction<WritingDataType[]>>;
    setEditData: React.Dispatch<React.SetStateAction<EditDataType | undefined>>;
    // Add other properties if needed
    user: Omit<TokenResponse, "error" | "error_description" | "error_uri">;
    setProfile: React.Dispatch<React.SetStateAction<null>>;
    profile:null;
    setUser: React.Dispatch<React.SetStateAction<Omit<TokenResponse, "error" | "error_description" | "error_uri">|null>>; 
}



const WritingDataProvider = ({children}:{children:ReactNode}) => {
    const [data,setData] = useState<WritingDataType[]>([])
    const [editData,setEditData] = useState<EditDataType | undefined >()
    const [textVisibility,setTextVisibility] = useState(false)
    const [imgVisibility,setImgVisibility] = useState(false)
    const [ user, setUser ] = useState();
    const [ profile, setProfile ] = useState(null);
    

   

    return <WritingDataContext.Provider value={{data,setData,editData,setEditData,textVisibility,setTextVisibility,imgVisibility,setImgVisibility,user, setUser 
     ,   profile, setProfile}} >
    {children}
    </WritingDataContext.Provider>
}


export {WritingDataProvider}