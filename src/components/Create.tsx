import {  Avatar, Space } from "antd";
import {PictureFilled,SignatureFilled} from "@ant-design/icons"
import { useContext } from "react";
import ImageUpload from "./ImageUpload";
import CustomEditor from "./CustomeEditor"
import { WritingDataContext } from "./WritingDataProvider";



export default function Create() {

    
   const {imgVisibility,setImgVisibility,textVisibility,setTextVisibility} = useContext(WritingDataContext)
   

 
  return (
  <Space style={{padding:"50px", width:"100%"}} 
         direction="vertical"
         align="center"
         >
     <Space >
                
                <Avatar 
                    shape="square"
                    size={60}
                    style={{backgroundColor:"#353131"}}
                    onClick={()=>{
                        if(!textVisibility){

                            setImgVisibility(true)
                        }
                    }}
                    icon={<PictureFilled/>}
                    />
                
                <Avatar 
                    shape="square"
                    size={60}
                    onClick={()=>{
                        if(!imgVisibility){

                            setTextVisibility(true)
                        }
                    }}
                    style={{backgroundColor:"#353131"}}
                    icon={<SignatureFilled />}
                />
        </Space>
        <ImageUpload visibility={imgVisibility} setVisibility={setImgVisibility} />
        <CustomEditor   />
  </Space>
   
  )
}
