import { ChakraProvider} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { pessoas } from "./components/Pessoas";


function App() {
  const [usuarios, setUsuarios]= useState([])
  
  useEffect(() => {
    transformaUsuarios();
  }, []);
  
  const transformaUsuarios=()=>{
    setUsuarios(pessoas)
  }

  return (
    <ChakraProvider>
      {usuarios.map((pessoa)=>{
        return <Card key={pessoa.id} pessoa={pessoa} />
      })}
    </ChakraProvider>
  );
}

export default App;
