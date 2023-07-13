import { useState } from "react";

function Example() {
  let [x,setX]=useState(3);

  let a=7;


  let handleChange=()=>{


    // let aux=x++;
    // setX(aux);

    setX(val=>val+1);

    a++;
    console.log("x="+x);
    console.log("a="+a);
  }

  return (
    <>
    {/* incrementeaza x datorita useState */}
      <p >Ce mai faci {x}</p> 

      <p >Ce mai faci {a}</p> 
      {/* nu incrementeaza x deoarece nu are useState definit */}
      <button onClick={handleChange}>Button</button>
    </>
  );
}

export default Example;
