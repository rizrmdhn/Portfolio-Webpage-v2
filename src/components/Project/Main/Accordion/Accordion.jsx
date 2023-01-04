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
          <div className="accordion-body" onChange={onSearchTypeProject}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="option"
                id="DefaultOption"
                value="None"
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
                name="option"
                id="Option1"
                value="JavaScript"
              />
              <label className="form-check-label" htmlFor="Option1">
                JavaScript
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="option"
                id="Option2"
                value="Vue"
              />
              <label className="form-check-label" htmlFor="Option2">
                Vue
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="option"
                id="Option3"
                value="HasHomepage"
              />
              <label className="form-check-label" htmlFor="Option3">
                Has Homepage
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
