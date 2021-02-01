import React, { useState } from "react";
import Heart from "react-animated-heart";

const HeartButton = () => {
  const [isClick, setClick] = useState(false);

  return (
    <div className="HeartButton">
      <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
    </div>
  );
};

export default HeartButton;
