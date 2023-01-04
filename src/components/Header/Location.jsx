import React from "react";

export default function Location({ location }) {
  return (
    <>
      {location === "/" && <h1>About</h1>}
      {location === "/Project" && <h1>Project</h1>}
      {location === "/Experience" && <h1>Experience</h1>}
      {location === "/Social" && <h1>Social</h1>}
    </>
  );
}
