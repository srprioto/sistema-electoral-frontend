import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { get } from '../../../resources/fetch';
import { RESULTADOS } from '../../../resources/routes';

export const ResultadosSecundaria = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        getResultados();
    }, [])
    

    const getResultados = async () => { 
        setLoading(true);
        try {
            const response:any = await get(RESULTADOS + "/mostrar_resultados/secundaria");
            setData(response);
            setLoading(false);
        } catch (error) {
            setLoading(true);
            console.log(error);
        }
    }


    return (
        <div className="resultados">
            <div className="titulo-resultados">
                <h2>Elecciones Municipales Escolares 2024</h2>
                <h3>Resultados</h3>
            </div>
            <div className="chart-resultados">

                {
                    loading
                    ? <p>cargar</p>
                    : <ResponsiveContainer width="100%" aspect={2.5}>
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="nombre" />
                            <YAxis />
                            <Tooltip />

                            <Bar 
                                dataKey="votosRecibidos" 
                                stackId="a" 
                                fill="#ea2f8c" 
                                animationBegin={2000}
                                animationDuration={4000}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                }

                
            </div>
        </div>
    )
}
