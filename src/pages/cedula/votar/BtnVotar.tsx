import { BiCheck } from "react-icons/bi"

export const BtnVotar = ({ handlerConfirmVoto, candiatoSelect }:any) => {
    return (
        <div className="btn-votar">
            {
                candiatoSelect
                ? <button className="btn-confirmar-votar btn btn-success" onClick={handlerConfirmVoto}>
                    Votar <BiCheck />
                </button>
                : <button className="btn-confirmar-votar btn btn-warning" onClick={handlerConfirmVoto}>
                    Votar en blanco <BiCheck />
                </button>
            }
        </div>
    )
}
