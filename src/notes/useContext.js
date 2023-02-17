import React ,{createContext, useContext,useState} from 'react';
const OTTContext = createContext(null);





export function Usecontext() {
  const[netflix,setNetflix] = useState("");
  const[amazon,setAmazon] = useState("");
  const[hotstar,setHotstar] = useState("");


  return (
    <div className="App">
     <OTTContext.Provider  
     value={{
      netflix,
      amazon,
      hotstar,
      setNetflix,
      setAmazon,
      setHotstar
     }} >
     <Phone/>
     <TV/>
     <PC/>
     </OTTContext.Provider>
    </div>
  );
}

export default App;

let Phone = () => {

  const {
    netflix,
    amazon,
    hotstar,
    setNetflix,
    setAmazon,
    setHotstar
   } = useContext(OTTContext);

  return(
    <div>
    <h1>Phone</h1>
   <div>Watch Netflix {netflix}</div>
   <div>Watch Amazon {amazon}</div>
   <div>Watch Hotstar {hotstar}</div>
   <div>
     <button onClick={()=> setNetflix("watched wednessday epi 2")}> 
       Netflix </button>
     <button onClick={()=> setAmazon("watched boys epi 3")}>
       Amazon</button>
     <button onClick={()=> setHotstar("watched gameofThrones epi 1")}>
       Hotstar</button>
   </div>

  </div>
  )
}

let TV = () => {

  const {
    netflix,
    amazon,
    hotstar,
    setNetflix,
    setAmazon,
    setHotstar
   } = useContext(OTTContext);

  return(
    <div>
    <h1>TV</h1>
   <div>Watch Netflix {netflix}</div>
   <div>Watch Amazon {amazon}</div>
   <div>Watch Hotstar {hotstar}</div>
   <div>
     <button onClick={()=> setNetflix("watched wednessday epi 2")}> 
       Netflix </button>
     <button onClick={()=> setAmazon("watched boys epi 3")}>
       Amazon</button>
     <button onClick={()=> setHotstar("watched gameofThrones epi 1")}>
       Hotstar</button>
   </div>

  </div>
  )
}

let PC = () => {
  
  const {
    netflix,
    amazon,
    hotstar,
    setNetflix,
    setAmazon,
    setHotstar
   } = useContext(OTTContext);

  return(
   <div>
     <h1>PC</h1>
    <div>Watch Netflix {netflix}</div>
    <div>Watch Amazon {amazon}</div>
    <div>Watch Hotstar {hotstar}</div>
    <div>
      <button onClick={()=> setNetflix("watched wednessday epi 2")}> 
        Netflix </button>
      <button onClick={()=> setAmazon("watched boys epi 3")}>
        Amazon</button>
      <button onClick={()=> setHotstar("watched gameofThrones epi 1")}>
        Hotstar</button>
    </div>

   </div>
  )
}