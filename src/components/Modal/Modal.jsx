import "./modal.css";
import React from "react";
import ReactDOM from "react-dom";

function Modal({
  handleReset,
  handleSubmit,
  handleCloseModalClick,
  resetButtonText,
  submitButtonText,
  children,
  title,
  onChange,
}) {
  return ReactDOM.createPortal(
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
            {resetButtonText && (
              <button
                type="reset"
                form="form"
                value="RESET"
                className="modal--reset"
                onClick={handleReset}
              >
                {resetButtonText}
              </button>
            )}
            <button
              onClick={handleSubmit}
              type="submit"
              form="form"
              value="SUBMIT"
              className="modal--submit"
            >
              {submitButtonText}
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("searchResultsPage--container")
  );
}
export default Modal;
