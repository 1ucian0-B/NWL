import React from 'react';

interface TitleProps {
  text: string;
}

function Title(props: TitleProps) {
  return (
    <h1>{props.text}</h1>
  )
}



function App() {
  return (
    <div className="App">
      <Title text="Titulo 1"></Title>
      <Title text="Titulo 2"></Title>
      <Title text="Titulo 3"></Title>
      <Title text="Titulo 4"></Title>
    </div>
  );
}

export default App;
