import React from "react";

export default function Accordion({ onSearchType }) {
  const onSearchTypeProject = (event) => {
    onSearchType(event.target.value);
  };
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Option
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body" onChange={onSearchType}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="DefaultOption"
                id="DefaultOption"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="DefaultOption">
                None
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Option1"
                id="Option1"
              />
              <label className="form-check-label" htmlFor="Option1">
                Option 1
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Option2"
                id="Option2"
              />
              <label className="form-check-label" htmlFor="Option2">
                Option 2
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
