import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
`;

const Canvas = styled.canvas`
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  const canvasRef = useRef(null);

  const onClick = e => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    console.log(ctx);
  };

  return (
    <Container>
      <Canvas ref={canvasRef} onClick={e => onClick()}></Canvas>
    </Container>
  );
};

export default App;
