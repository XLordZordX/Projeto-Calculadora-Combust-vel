import { useState } from "react"

<<<<<<< HEAD
function App(){
    return(
        <div>Testando isso</div>
    )
}

export default App;
=======
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
        {result !== null && (
        <h2>
          {result ? 'Use Álcool!' : 'Use Gasolina!'}
        </h2>
      )}
        </div>
        </div>
    )
}

>>>>>>> pagin_layout
