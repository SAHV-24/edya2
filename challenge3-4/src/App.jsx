import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { updateRate, incrementBy } from "./redux/slices/counterSlice";

function App() {
  const counter = useSelector((state) => state.counter.counter); // Cambia a `state.counter.counter`
  const rate = useSelector((state) => state.counter.rate); // This is used for the input to update
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Counter with Redux</h1>
        <div className="card">
          <h2>{counter}</h2>
          <p>
            <i>increment by...</i>
          </p>
          <input
            type="text"
            onChange={(e) =>
              dispatch(updateRate({ newRate: parseInt(e.target.value) }))
            }
          />

          <button
            onClick={() => {
              dispatch(incrementBy({ rate }));
            }}
          >
            Increment
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
