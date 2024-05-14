import { useContext } from 'react';
import { WritingDataContext, WritingDataType } from './WritingDataProvider';
import WriteCard from './WriteCard';

const  Writes = () => {
    const {data,setData,setEditData,setTextVisibility}  = useContext(WritingDataContext)
    const handleEdit = (dataId:number) => {
        
        const editData = data.find((_,id:number)=>dataId === id )!
      
        setEditData({...editData,id:dataId} )
        setTextVisibility(true)
    }

    const handleDelete = (dataId:number) => {
      
        const newData  = data.filter((_,id)=>id !== dataId)
        
        setData(newData)
    }
      const handleDragStart = (event:React.DragEvent<HTMLLIElement>, id:number) => {
    event.dataTransfer.setData('index', String(id) );
  };

  const handleDragOver = (event:React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event:React.DragEvent<HTMLLIElement>, newIndex:number) => {
    
    const oldIndex =Number( event.dataTransfer.getData('index'));
    
    const newData = [...data];
    const draggedItem = newData.splice(oldIndex, 1)[0];
  
    newData.splice(newIndex, 0, draggedItem);
    setData(newData);
  };
    return <div className='p-10'>
       
        <ul className=' p-3 grid md:grid-cols-4 grid-col-1 gap-2 ' >

        {data.map((dataObj:WritingDataType,id:number)=>
        
        <WriteCard key={id+Math.random()} data={dataObj.data} name={dataObj.name} handleDragStart={handleDragStart} handleDragOver={handleDragOver} handleDrop={handleDrop} id={id} handleEdit={handleEdit} handleDelete={handleDelete} />
    )}
    </ul>
    
    </div>
}

export default Writes