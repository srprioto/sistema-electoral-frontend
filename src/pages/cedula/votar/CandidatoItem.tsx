export const CandidatoItem = ({ e, candidato, setCandidato }:any) => {

    const addCandidato = (candidato:any) => { 
        setCandidato(candidato);
    }


    return (
        <div 
            className={"pointer item-lista-candidatos " + ( candidato.id === e.id ? "candidato-select" : "" )}
            onClick={() => { addCandidato(e) }}
        >
            <div className="img-candidato">
                <img src={ e.imagen } alt="" />
            </div>
            <div className="nombre-candidato">
                <h4>{ e.alcalde }</h4>
            </div>
            <div className="nombre-partido">
            <h4>{ e.nombre_lista }</h4>
            </div>
        </div>
    )
}
