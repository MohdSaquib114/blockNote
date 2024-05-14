import { Image,Space,Button } from 'antd';

export default function WriteCard({id,data, name,handleEdit,handleDelete,handleDragStart
   , handleDragOver
   , handleDrop
        }:{id:number,data:string,name:string}) {
    

  return (
    <li draggable={true} onDragStart={()=>handleDragStart(event,id)} onDragOver={handleDragOver} onDrop={()=>handleDrop(event,id)} className='border-2  p-5 flex flex-col gap-5    justify-center rounded-md w-full '>
      {name  ?  <div>

      <Image
  
    
    src={data}
    /> 
    <p>{name}</p>
    </div> :
         <div className='border-2 rounded-md p-2 h-full '>

             <p>{data}</p>
         </div>
          }

     <Space>
        {!name && <Button onClick={()=>handleEdit(id)}>Edit</Button>}
        <Button onClick={()=>handleDelete(id)} style={{backgroundColor:"red", color:"white"}}>Delete</Button>
     </Space>
    </li>
  )
}
