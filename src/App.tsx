import React, { ReactElement, ReactNode, } from 'react';
import './App.css';

// Conventional Props
const Heading = ({ title }: { title: string }) => {
    return (
      <h1>{title}</h1>
    )
}

const HeadingWithContent = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <h1>{children}</h1>
  )
}

// default props/ defaultProps
const defaultContainerProps = {
  heading: <strong>My heading</strong>
}

type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;

const Container = ({ heading, children }: ContainerProps): ReactElement => {
  return (
    <div><h1>{heading}</h1></div>
  )
}

// functional props
const TextWithNumber = ({ children }: { children: (num: number) => ReactNode }) => {
    const [state, setState] = React.useState<number>(1);

    return (
      <div>
        <div>
          {children(state)}
        </div>
        <div>
          <button onClick={() => setState(state + 1)}>Add</button>
        </div>
      </div>
    )
}

Container.defaultProps = defaultContainerProps;

const App = () => {
  return (
    <div>
      <Heading title="Hello There" />
      <HeadingWithContent><strong>hi</strong></HeadingWithContent>
      <Container>hi!</Container>
      <TextWithNumber>
        {(num: number) => <div>Today's number is {num} </div>}
      </TextWithNumber>
    </div>
  );
}

export default App;
