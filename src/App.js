import ListaTarefa from "./components/Tarefas/ListaTarefa";
import ListaTarefasContextProvider from "./components/context/ListaTarefasContext";
import FormTarefa from "./components/Tarefas/FormTarefa";
import Header from "./components/Tarefas/Header";
import "./App.css";

/* APP CONTEXT API */
const App = () => {
  return (
    <ListaTarefasContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <FormTarefa />
            <ListaTarefa />
          </div>
        </div>
      </div>
    </ListaTarefasContextProvider>
  );
};
export default App;
