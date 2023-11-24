import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../store/slices/counterSlice";
const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={()=> dispatch(increment())}>increment</button>
      <button onClick={()=> dispatch(incrementByAmount(10))}>increment by 10</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  );
};
export default Counter;
