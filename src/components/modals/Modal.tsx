export const Modal = ({ modal, setModal, children }:any) => {
    return (
        modal &&
        <div className="modal">
            <div className="background-modal"></div>   
            <div className="body-modal">
                { children }
            </div>
        </div>
    )
}
