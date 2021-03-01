import React, { useContext } from "react";
import { ListaTarefasContext } from "../context/ListaTarefasContext";
import Tarefa from "./Tarefa";

/* LISTA TODAS AS TAREFAS */
const ListaTarefa = () => {
  const { tarefas } = useContext(ListaTarefasContext);
  return (
    <div>
      {tarefas.length ? (
        <ul className="list">
          {tarefas.map((tarefa) => {
            return <Tarefa tarefa={tarefa} key={tarefa.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">Sem tarefas...</div>
      )}
    </div>
  );
};

export default ListaTarefa;
