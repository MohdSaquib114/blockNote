import { Button,  Space, } from 'antd';
import { useContext, useState } from 'react';

import {  BtnBold, BtnClearFormatting, BtnItalic,BtnUnderline,Editor,EditorProvider,Toolbar} from 'react-simple-wysiwyg';
import { EditDataType, WritingDataContext } from './WritingDataProvider';



const Text = () => {
  const {data,setData,editData,setEditData,textVisibility,setTextVisibility} = useContext(WritingDataContext)
  const [value,setValue] = useState(editData?editData.data:"" )

  

  const handleChange = (event) => {
    const inputText = event.target.value;
   
      setValue(inputText);
    }
  
    const handleClick = () => {
      if(value == ""){
        return
      }
      if(editData.data){
        const newData = data.map((dataObj:EditDataType,id:number)=>{
          if(id !== dataObj?.id) return  dataObj
          dataObj.data = value as string
          return dataObj
        })
      
        setData(newData)
        setTextVisibility(false)
        setValue("")
        setEditData({})
        return
      }
         const writeData = {
          data:value,
          name:""
         }
         setData([...data,writeData])
         setTextVisibility(false)
         setValue("")
         
    }
    const handleCancel = ()=> {
      setTextVisibility(false)
      setValue("")
      setEditData({})
    }

    return (
    <div className={`${textVisibility?"block":"hidden"} p-2 border-2 rounded-md w-[500px]  flex  flex-col gap-5 `}>
    

      <EditorProvider>
      <Editor  value={value} onChange={handleChange}>
        <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUnderline/> 
          <BtnClearFormatting />
        </Toolbar>
      </Editor>
    </EditorProvider>
    
         <Space direction="horizontal">
      <Button onClick={handleClick} >{editData.data ?"Edit":"Post"}</Button>
      <Button onClick={handleCancel}  style={{backgroundColor:"red", color:"white"}}>Cancel</Button>
      </Space>
      
       
        </div>
    );
  };
  
  export default Text;