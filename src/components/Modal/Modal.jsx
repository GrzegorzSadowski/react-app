import "./modal.css";
import React from "react";
import AddMovie from "../AddMovie/AddMovie";
import EditMovie from "../EditMovie/EditMovie";
import DeleteMovie from "../DeleteMovie/DeleteMovie";
import ReactDOM from "react-dom";

function Modal({
                   handleSubmit,
                   handleReset,
                   handleCloseModalClick,
                   resetButtonText,
                   submitButtonText,
                   title,
                   children
               }) {
    return ReactDOM.createPortal((
        <>
            <div className="modal"></div>
            <div className="modal--container">
                <button onClick={handleCloseModalClick} className="modal--button--x">
                    &#x2716;
                </button>
                <div className="insidemodal--container">
                    <h1 className="modal--title">{title}</h1>
                {children}
                <div className="modal--buttons">
                    <br></br>
                    {resetButtonText && <button
                        type="reset"
                        form="addMovie--form"
                        value="RESET"
                        className="modal--reset"
                        onClick={handleReset}
                    >{resetButtonText}
                    </button>}
                    <button
                        onClick={handleSubmit}
                        form="addMovie--form"
                        value="SUBMIT"
                        className="modal--submit"
                    >{submitButtonText}
                    </button>
                </div>
            </div>
            </div>
        </>), document.getElementById("findYourMovie--container"));
}

export default Modal;
