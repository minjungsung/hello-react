import "./css/App.css";
import MyComponent from "./component/MyComponent";
import Counter from "./component/Counter";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <MyComponent>리액트</MyComponent>
      <Counter />
    </Fragment>
  );
};

export default App;
