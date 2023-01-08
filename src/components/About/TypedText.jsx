import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

export default function TypedText() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Network Administrator", "IT Support", "Web Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="about">
      <h1>Im A <span className="data" ref={el}></span></h1>
    </div>
  );
}
