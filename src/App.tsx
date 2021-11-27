import React from 'react';
import './App.css';

// Conventional Props
const Heading = ({ title }: { title: string }) => {
    return (
      <h1>{title}</h1>
    )
}

const HeadingWithContent = ({ children }: { children: string }) => {
  return (
    <h1>{children}</h1>
  )
}

const App = () => {
  return (
    <div>
      <Heading title="Hello There" />
    </div>
  );
}

export default App;
