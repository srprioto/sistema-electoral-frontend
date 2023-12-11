import { BiCheck } from "react-icons/bi"

export const BtnVotar = ({ handlerConfirmVoto }:any) => {
    return (
        <div className="btn-votar">
            <button className="btn-confirmar-votar btn btn-success" onClick={handlerConfirmVoto}>
                Votar <BiCheck />
            </button>
        </div>
    )
}
