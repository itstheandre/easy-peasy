import type { Action } from "easy-peasy";
import { action, createStore, createTypedHooks } from "easy-peasy";

type CounterStore = {
  counterBanana: number;
  increment: Action<CounterStore>;
};

type Todo = {
  id: number;
  text: string;
};

type TodoStore = {
  todos: Todo[];
  addTodo: Action<TodoStore>;
  removeTodo: Action<TodoStore, number>;
};

type Main = {
  counter: CounterStore;
  todos: TodoStore;
};

export const mainStore = createStore<Main>({
  counter: {
    counterBanana: 0,
    increment: action((state) => {
      state.counterBanana += 1;
    }),
  },
  todos: {
    addTodo: action((state) => {
      console.log("state:", state);
      state.todos.push({ id: state.todos.length, text: `${Math.random()}` });
    }),
    todos: [],
    removeTodo: action((state, idx) => {
      state.todos.splice(idx, 1);
    }),
  },
});

const typedHooks = createTypedHooks<Main>();

export const useOurStoreActions = typedHooks.useStoreActions;
export const useOurStoreState = typedHooks.useStoreState;
