import { useState } from "react"

function App() {

  return (
    <div>
        <Interface/>
        <Formulario/>
    </div>
  )
}

export default App

function Interface(){
    return(
        <div>
            <img src="src/assets/logo.png"/>
            <h2>Qual a melhor opção?</h2>
        </div>
    )
}

function Formulario(){
    const [valorAlcool, setValorAlcool] = useState(0)
    const [valorGasolina, setValorGasolina] = useState(0)
    
    let resultado="";

    function Calcular(){
        let alcool = valorAlcool
        let gasolina = valorGasolina

        if(alcool<gasolina){
            resultado = "Álcool" 
        }else{
            resultado = "Gásolina"
        }
    }
    

    return(
        <div>
            <label>Álcool (preço por litro):</label>
            <input type="number"
            value={valorAlcool}
            onChange={(e)=> setValorAlcool(Number(e.target.value))}
            ></input>

            <label>Gasolina (preço por litro):</label>
            <input type="number"
            value={valorGasolina}
            onChange={(e)=>setValorGasolina(Number(e.target.value))}
            ></input>

            <button onClick={Calcular}>Calcular</button>
        <div>
            <h1>Compensa Mais:{resultado}</h1>
        </div>
        </div>
    )
}

