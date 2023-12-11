import { BiChevronLeft } from "react-icons/bi"

export const BtnBack = ({ handlerBack }:any) => {
    return (
        <div className='icon-back' onClick={handlerBack}>
            <BiChevronLeft />
        </div>
    )
}
