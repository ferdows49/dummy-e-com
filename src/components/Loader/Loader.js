import React, { useState, useEffect } from "react";
import "./Loader.css";

const Loader = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div class="loading-spinner">
          <div class="main-loader">
            <div class="wBall" id="wBall_1">
              <div class="wInnerBall"> </div>
            </div>
            <div class="wBall" id="wBall_2">
              <div class="wInnerBall"> </div>
            </div>
            <div class="wBall" id="wBall_3">
              <div class="wInnerBall"> </div>
            </div>
            <div class="wBall" id="wBall_4">
              <div class="wInnerBall"> </div>
            </div>
            <div class="wBall" id="wBall_5">
              <div class="wInnerBall"> </div>
            </div>
          </div>
        </div>
      ) : (
        <div>{props.children}</div>
      )}
    </>
  );
};

export default Loader;
