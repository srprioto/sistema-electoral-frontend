import { useState } from "react"
import { Login } from "./login/Login";
import { Votar } from "./votar/Votar";
import { Finalizacion } from "./finalizacion/Finalizacion";
import { post } from "../../resources/fetch";
import { LOGIN } from "../../resources/routes";
import { Loading } from "../../components/Loading";

export const Cedula = () => {

    const [tabb, setTabb] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>({dni: ""});
    const [response, setResponse] = useState<any>({});
    const [candidato, setCandidato] = useState<any>({});

    const elector:any = response.elector;

    const handlerBack = () => {
        setData({dni: ""});
        setCandidato({});
        setTabb(1) 
    };

    const handlerLogin = async () => { 
        setLoading(true);
        let tab:number = 0
        try {
            const response:any = await post(LOGIN, data);
            if (response.state === 1) { tab = 2 }; // conectar
            if (response.state === 2) { tab = 1 }; // usuario ya votó
            if (response.state === 3) { tab = 1 }; // usuario no existe
            setResponse(response);
            setLoading(false);
        } catch (error) {
            setLoading(true);
            console.log(error);
        }
        setTabb(tab);
    }


    const handlerOnChange = (e:any) => { 
        setResponse({});
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    
    
    return (
        <div className="cedula h100">
            {
                tabb === 1 
                && <Login 
                    handlerLogin={handlerLogin} 
                    data={data}
                    handlerOnChange={handlerOnChange}
                    loading={loading}
                    response={response}
                /> 
            }
            {
                loading
                ? <div className="loading-pages">
                    <Loading />
                </div>
                : <>   
                    { 
                        tabb === 2 
                        && <Votar 
                            setTabb={setTabb} 
                            handlerBack={handlerBack} 
                            elector={elector} 
                            candidato={candidato}
                            setCandidato={setCandidato}
                        /> 
                    }
                    { 
                        tabb === 3 
                        && <Finalizacion 
                            handlerBack={handlerBack}
                            candidato={candidato}
                        /> 
                    }
                </>
            }

            
        </div>
    )

}
