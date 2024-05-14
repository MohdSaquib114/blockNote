import { Space , Button} from "antd";
import { useContext, useState } from "react";

import { WritingDataContext } from './WritingDataProvider';

type ImgDataType = {
    data:string,
    name:string
}

const ImageUpload = ({visibility,setVisibility}) => {

    const {data,setData,imgVisibility,setImgVisibility } = useContext(WritingDataContext);
    const [imgData,setImgData] = useState<ImgDataType>()

    const [selectedFile,setSelectedFile] = useState(null)
   
  const handleFileChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader  = new FileReader()
    reader.onload = () => {
      
        setImgData({data:reader.result,name:file.name})  
    }
    reader.readAsDataURL(file)
   

  };
  const handeClick = () =>{
      if(!imgData) return
        
        setData([...data,imgData])
        setImgVisibility(false)
        setImgData({})
   
    }
    
    
    
  

  const handleCancel = ()=> {
    setImgVisibility(false)
   
    
}
  return (
    <div className={`border-2 p-5 bg-slate-50 rounded-md  ${imgVisibility?"block":"hidden"}`}>
    <Space  direction="vertical" align="center">
       <input className="p-10 border-2  white  rounded-md "  type="file" onChange={handleFileChange}  accept="image/*"   placeholder="Uplaod Image" />
      {imgData?.data && <img className="w-40 h-40" src={imgData.data} alt="img" />}
      <Space direction="horizontal">
      <Button onClick={handeClick}>Upload</Button>
      <Button onClick={handleCancel} style={{backgroundColor:"red", color:"white"}}>Cancel</Button>
      </Space>
    </Space>
    </div>
   
  );
};

export default ImageUpload;
