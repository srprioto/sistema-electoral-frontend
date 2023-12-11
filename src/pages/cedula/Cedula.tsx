import { useState } from "react"
import { Login } from "./login/Login";
import { Votar } from "./votar/Votar";
import { Finalizacion } from "./finalizacion/Finalizacion";

export const Cedula = () => {

    const [tabb, setTabb] = useState<number>(1);

    const handlerBack = () => { 
        setTabb(1);
    }

    return (
        <div className="cedula h100">
            { tabb === 1 && <Login setTabb={setTabb} /> }
            { tabb === 2 && <Votar setTabb={setTabb} handlerBack={handlerBack} /> }
            { tabb === 3 && <Finalizacion handlerBack={handlerBack}/> }
            
        </div>
    )

}
