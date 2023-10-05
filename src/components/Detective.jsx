import { useState } from "react";


function Detective() {
    const [sherlock, setState] = useState('психопат') 
    return (
        <div>Шерлок {sherlock}</div>
        )
  }
  
  export default Detective;