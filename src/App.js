import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: black;
  height: 200vh;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 30vh;
`;

const InputWrap = styled.div``;

const Input = styled.input`
  background-color: ${props =>
    props.focuseColor ? "palevioletred" : "#ffffff"};
`;

const App = () => {
  const [focused, setFocused] = useState(false);

  const onFocuses = e => {
    const focuse = e.target;
    if (focuse) {
      setFocused(true);
    }
  };

  const onBlures = e => {
    setFocused(false);
  };

  const mouseEvent = e => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    console.log(scrollTop);
  };

  console.log(focused);

  return (
    <Container onWheel={mouseEvent}>
      <Wrap>
        <InputWrap>
          <Input
            onFocus={onFocuses}
            onBlur={onBlures}
            focuseColor={focused}
          ></Input>
        </InputWrap>
      </Wrap>
    </Container>
  );
};

export default App;
