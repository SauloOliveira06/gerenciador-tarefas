import React, { useContext } from "react";
import { ListaTarefasContext } from "../context/ListaTarefasContext";

const Tarefa = ({tarefa}) => {

  const { removerTarefa, encontrarItem } = useContext(ListaTarefasContext);
  /* ICONES AWESOME */
  return (
    <li className="list-item"> 
      <span>{tarefa.titulo}</span>
      <div>
        <button onClick={()=> removerTarefa(tarefa.id)} className="btn-delete task-btn">
          <i className="fas fa-trash-alt"></i>
        </button>
        <button onClick={()=> encontrarItem(tarefa.id)} className="btn-edit task-btn">
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};

export default Tarefa;