import "./App.css";
import { useOurStoreActions, useOurStoreState } from "./easy-store/easy.store";
import logo from "./logo.svg";

function App() {
  // const counterino = useAppSelector((s) => s.counterino.value);
  // const dispatch = useAppDispatch();
  const j = useOurStoreState((s) => s.counter.counterBanana);
  const todos = useOurStoreState((s) => s.todos.todos);
  const increment = useOurStoreActions((s) => s.counter.increment);
  const addTodo = useOurStoreActions((s) => s.todos.addTodo);
  const removeTodo = useOurStoreActions((s) => s.todos.removeTodo);
  // const counterBanana = useStoreState<ReturnType<typeof easyStore.getState>>(
  //   (s) => s.counterBanana
  // );

  // const incremenet = useStoreActions((s) => (s as any).incrementOnBanana);
  // console.log("incremenet:", incremenet);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>

        <h1>
          {j} <button onClick={() => increment()}>Add </button>
        </h1>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <button onClick={() => addTodo()}>Add Todo</button>
        <ul>
          {todos.map((e) => (
            <li key={e.id}>
              {e.id + 1} - {e.text}{" "}
              <button onClick={() => removeTodo(e.id)}>DELETE</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
