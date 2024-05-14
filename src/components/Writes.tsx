import { useContext } from 'react';
import { WritingDataContext, WritingDataType } from './WritingDataProvider';
import WriteCard from './WriteCard';

const  Writes = () => {
    const {data,setData,setEditData,setTextVisibility}  = useContext(WritingDataContext)
    const handleEdit = (dataId:number) => {
        
        const editData = data.find((_,id:number)=>dataId === id )
        editData.id = dataId
        setTextVisibility(true)
      setEditData(editData)
    }

    const handleDelete = (dataId:number) => {
      
        const newData  = data.filter((dataObj,id)=>id !== dataId)
        
        setData(newData)
    }
      const handleDragStart = (event, id) => {
    event.dataTransfer.setData('index', id);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, newIndex) => {
    
    const oldIndex = event.dataTransfer.getData('index');
    
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

// const Writes = () => {
//   const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

//   const handleDragStart = (e, index) => {
//     e.dataTransfer.setData('index', index);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e, newIndex) => {
//     const oldIndex = e.dataTransfer.getData('index');
//     const newItems = [...items];
//     const draggedItem = newItems.splice(oldIndex, 1)[0];
//     newItems.splice(newIndex, 0, draggedItem);
//     setItems(newItems);
//   };
//   return (
//     <div className="drag-drop-list">
//       <h2>Drag and Drop List</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li
//             key={index}
//             draggable
//             onDragStart={(e) => handleDragStart(e, index)}
//             onDragOver={handleDragOver}
//             onDrop={(e) => handleDrop(e, index)}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default Writes