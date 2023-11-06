import "./css/App.css";
import MyComponent from "./component/MyComponent";
import Counter from "./component/Counter";
import Say from "./component/Say";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <MyComponent>리액트</MyComponent>
      <Counter />
      <Say />
    </Fragment>
  );
};

export default App;
