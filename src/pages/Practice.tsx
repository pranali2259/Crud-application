import React, { useEffect, useState } from 'react'
interface user{
    id:number;
    name:string;
 }
const practice = () => {
    const [count ,setcount]=useState<number>(0);
const [name,setname]=useState<{name:string;id:number}>({
    name:'',
     id:0

});
 
  return (
    <> 
    <div>
      <button onClick={()=>setcount(count+1)}>count {count}</button>
    </div>
    <form >
        <input type="text" 
        value={name.name}
        onChange={e=>setname({...name ,name:e.target.value})}/>
           <input type="number" 
        value={name.id}
        onChange={e=>setname({...name ,id:Number(e.target.value) })}/>
    </form>
 
    </>
  )
}

export default practice
