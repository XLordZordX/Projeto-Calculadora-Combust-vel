import { useState } from "react"
import logo from "./assets/logo.png"
<<<<<<< HEAD
=======
import "./index.css"
>>>>>>> pagin_layout

function App() {

  return (
    <div className="central">
        <Interface/>
        <Formulario/>
    </div>
  )
}

export default App

function Interface(){
    return(
        <div>
            <img src={logo}/>
            <h2>Qual a melhor opção?</h2>
        </div>
    )
}

function Formulario(){
    const [valorAlcool, setValorAlcool] = useState(0)
    const [valorGasolina, setValorGasolina] = useState(0)
    const [result, setResult] = useState<boolean | null>(null)
    

    function Calcular(){
        if(valorAlcool<valorGasolina){
            setResult(true)
        }else if (valorGasolina<valorAlcool){
            setResult(false)
        }else{
            setResult(null)
        }
    }

    
    return(
        <div>
            <div className="Formu">
            <label>Álcool (preço por litro):</label>
            <input type="number"
            value={valorAlcool}
            min={0}
            onChange={(e)=> setValorAlcool(Number(e.target.value))}
            ></input>
            </div>
            <div className="Formu">
            <label>Gasolina (preço por litro):</label>
            <input type="number"
            value={valorGasolina}
            min={0}
            onChange={(e)=>setValorGasolina(Number(e.target.value))}
            ></input>
            
            <button onClick={Calcular}>Calcular</button>
        <div>
        {result !== null && (
        <h2>
          {result ? 'Use Álcool!' : 'Use Gasolina!'}
        </h2>
      )}
      </div>
        </div>
        </div>
    )
}

