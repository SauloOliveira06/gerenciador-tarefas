import React, { createContext, useState, useEffect } from "react";
import { v1 as uuidV1 } from "uuid";

export const ListaTarefasContext = createContext();

const ListaTarefasContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("tarefas")) || [];
  const [tarefas, setTarefas] = useState(initialState);
  const [editarItem, setEditarItem] = useState(null);

  /* ADICIONAR AO LOCALSTORAGE */
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  /* ADICIONAR TAREFA */
  const addTarefa = (titulo) => {
    setTarefas([...tarefas, { titulo, id: uuidV1() }]);
  };
  /* REMOVER TAREFA */
  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefas) => tarefas.id !== id));
  };
  /* LIMPA LISTA DE TAREFAS */
  const limpaLista = () => {
    setTarefas([]);
  };
  /* EDITAR O ITEM-ICON ID PARA EDITAR */
  const encontrarItem = (id) => {
    const item = tarefas.find((tarefa) => tarefa.id === id);
    setEditarItem(item);
  };
  /* EDITAR TAREFA */
  const editarTarefa = (titulo, id) => {
    const novaTarefa = tarefas.map((tarefa) =>
      tarefa.id === id ? { titulo, id } : tarefa
    );

    setTarefas(novaTarefa);
    setEditarItem(null);
  };
  return (
    <ListaTarefasContext.Provider
      value={{
        tarefas,
        addTarefa,
        removerTarefa,
        limpaLista,
        encontrarItem,
        editarTarefa,
        editarItem,
      }}
    >
      {props.children}
    </ListaTarefasContext.Provider>
  );
};

export default ListaTarefasContextProvider;
