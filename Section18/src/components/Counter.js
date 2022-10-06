import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const increaseHandler = () => {
    dispatch(counterActions.increase(1));
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrease(1));
  };
  const increase5Handler = () => {
    dispatch(counterActions.increase(5));
  };
  const decrease5Handler = () => {
    dispatch(counterActions.decrease(5));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increaseHandler}>Increment</button>
        <button onClick={increase5Handler}>Increase by 5</button>
        <button onClick={decreaseHandler}>Decrement</button>
        <button onClick={decrease5Handler}>Decrease by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
