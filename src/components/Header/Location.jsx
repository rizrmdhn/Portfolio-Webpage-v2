import React from "react";

export default function Location({ location }) {
  return (
    <>
      {location === "/" && (
        <h1 className="animate__animated animate__fadeIn">About</h1>
      )}
      {location === "/Project" && (
        <h1 className="animate__animated animate__fadeIn">Project</h1>
      )}
      {location === "/Experience" && (
        <h1 className="animate__animated animate__fadeIn">Experience</h1>
      )}
      {location === "/Social" && (
        <h1 className="animate__animated animate__fadeIn">Social</h1>
      )}
    </>
  );
}
