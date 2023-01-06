import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import { loadGraphModelSync, loadModel } from "@tensorflow/tfjs-converter";
import "./App.css";
import { loadLayersModel } from "@tensorflow/tfjs";

function Camera() {
  const webcamRef = useRef(null);

  async function loadModel1() {
    try {
      // For layered model

      const model = await tf.loadLayersModel(
        "http://localhost:8000/model.json"
      );
      // For graph model
      // const model = await tf.loadGraphModel("http://localhost:8000/model.json");
      setModel(model);
    } catch (err) {
      console.log(err);
    }
  }
  //React Hook
  const [, setModel] = useState();
  useEffect(() => {
    tf.ready().then(() => {
      loadModel1();
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default Camera;
