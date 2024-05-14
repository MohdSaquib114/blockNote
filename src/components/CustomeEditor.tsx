import { Button,  Space, } from 'antd';
import { useContext, useEffect, useState } from 'react';

import {  BtnBold, BtnClearFormatting, BtnItalic,BtnUnderline,ContentEditableEvent,Editor,EditorProvider,Toolbar} from 'react-simple-wysiwyg';
import { WritingDataContext, WritingDataType } from './WritingDataProvider';



const Text = () => {
  const {data,editData,textVisibility,setData,setTextVisibility,setEditData} = useContext(WritingDataContext)
  const [value,setValue] = useState("" )

useEffect(()=>{
  if(editData?.data){

    setValue(editData.data)
  }
},[editData])
  
  const handleChange = (event:ContentEditableEvent) => {
    const inputText = event.target.value;
   
      setValue(inputText);
    }
  
    const handleClick = () => {
      if(value == ""){
        return
      }
      if(editData?.data){
        const newData = data?.map((dataObj:WritingDataType,id:number)=>{
          if(id !== editData?.id) return  dataObj
          dataObj.data = value as string
          return dataObj
        })
      
        setData(newData)
        setTextVisibility(false)
        setValue("")
        setEditData(undefined)
        return
      }
         const writeData = {
          data:value,
          name:""
         }
         setData([...data,writeData])
         setTextVisibility(false)
         setValue("")
         setEditData(undefined)
    }
    const handleCancel = ()=> {
      setTextVisibility(false)
      setValue("")
      setEditData(undefined)
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
      <Button onClick={handleClick} >{editData?.data ?"Edit":"Post"}</Button>
      <Button onClick={handleCancel}  style={{backgroundColor:"red", color:"white"}}>Cancel</Button>
      </Space>
      
       
        </div>
    );
  };
  
  export default Text;