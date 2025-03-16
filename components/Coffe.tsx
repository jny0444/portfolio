"use client";

import { useEffect, useState } from "react";

export default function Coffee() {
  const frames = [")))", "(((", "|||"];
  const [index, setIndex] = useState(0);

  const frames2 = ["(((", "|||", ")))"];
  const [index2, setIndex2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % frames.length);
      setIndex2((prevIndex) => (prevIndex + 1) % frames.length);
    }, 500);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <pre>
        {String.raw
`       ${frames2[index]}
       ${frames[index]}
      +-----+
      |     |]
      '-----'    
    ___________
    '---------'`}
      </pre>
    </div>
  );
}
