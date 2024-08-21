import TodoList from "./components/TodoList";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <TodoList />
      </QueryClientProvider>
    </div>
  );
}

export default App;
