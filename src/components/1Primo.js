import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
  Routes,
  Outlet,
  useRouteError,
  useLocation,
  useNavigate
} from "react-router-dom";

function Primo(){

  let [valore, setValore] = useState({
    nomen: "",
    cognomen: "",
    pass: "",
    logged: false,
  })

  function combina(e){
    setValore({ ...valore, [e.target.name]: e.target.value  })
  }

  async function mandato(e){
    e.preventDefault()

    let richiesta = {
      method: "POST",
      body: JSON.stringify(valore),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    
    let response = await fetch("http://localhost:3000/aggiungi", richiesta)

    if( response.ok ){
      console.log( response )
      console.log("We can add verifications in the fetch already")
    }else{
      console.log(response.statusText)
    }

    let json = await response.json()

    if(json.length){
      console.log( "even if error it returned something....." )
      console.log( json )
    }else{
      console.log("Emptyness status")
    }
  }



  async function mandato1(e){
    e.preventDefault()

    let richiesta={
      method: "POST",
      body: JSON.stringify(valore),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    fetch("http://localhost:3000/aggiungi", richiesta)
      .then( (response) => {
        console.log( response )

        if( response.ok ){
          console.log("tuttapopsto")
        }else{
          console.log( response )
        }

        return response.json()
      })
      .then( (message) => {
        console.log("---------")
        console.log( message )
      })
  }

  async function riprendi(){
    let manda = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    let segnale = await fetch("http://localhost:3000/vedo", manda)
    let json = await segnale.json()

    if(json){
      console.log( "even if error it returns something" )
      console.log( json )
    }else{
      console.log( "Does the error count?" )
    }

  }

  //The names keep track of the changes
  let [togli, setTogli] = useState("")

  async function cancella(e){
    e.preventDefault()

    let forma= e.target
    let formdata = new FormData(forma)
    let dati = Object.fromEntries(formdata.entries())

    console.log( dati )

    let posta = {
      method: "POST", 
      body: JSON.stringify(dati),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    let risposta = await fetch("http://localhost:3000/togli", posta)
    console.log( risposta.statusText )
    
    let json = await risposta.json()
    console.log( json )
  }

  return(
    <div className="d-flex row col-8 mx-auto">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3>You can't but higher chance</h3>

        <form onSubmit={mandato1} className="row col-12 d-flex align-items-center">

          <div className="col-6">
            <label htmlFor="base" className="form-label"> Nomen </label>
            <input id="base" type="text" name="nomen" className="form-control" 
              value={valore.nomen} onChange={combina}/>
          </div>

          <div className="col-6">
            <div className="form-floating">
              <input type="text" placeholder="necessary" name="cognomen" className="form-control" 
                value={valore.cognomen} onChange={combina}/>
              <label> Cognomen </label>
            </div>
          </div>

          <div className="col-6 py-2">
            <div className="form-floating">
              <input type="password" className="form-control" name="pass" placeholder="sopra"
                value={valore.pass} onChange={combina}/>
              <label> Password </label>
            </div>
          </div>

          <div className="col-4">
            <div className="form-check form-switch">
              <label htmlFor="log" className="form-check-label"> Logged </label>
              <input id="log" type="checkbox" name="log" className="form-check-input" 
                checked={valore.logged} onChange={ ()=> { setValore({ ...valore, logged: !valore.logged }) } }/>
            </div>
          </div>

          <div className="text-center py-2">
            <button className="btn btn-success">
              Andiamo
            </button>
          </div>
        </form>

      </div>

      <div>
        <button className="btn btn-warning" onClick={riprendi}>
          See Tables
        </button> 
      </div>

      <form onSubmit={cancella} className="py-2 row col-12 d-flex align-items-center">

        <div className="col-6">
          <div className="form-floating">
            <input type="text" placeholder="valore" className="form-control" name="elimina"
              value={togli} onChange={(e)=>{ setTogli(e.target.value) }}/>
            <label> Delete user </label>
          </div>
        </div>

        <div className="col-6">
          <div className="form-floating">
            <input type="password" name="passa" className="form-control" placeholder="pass"/>
            <label>Password</label>
          </div>
        </div>

        <div className="text-center">
          <button className="btn-danger btn">
            delete
          </button>
        </div>
      </form>


    </div>
  )
}

export default Primo;