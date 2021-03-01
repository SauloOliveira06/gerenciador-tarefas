import React, { useContext, useState, useEffect } from "react";
import { ListaTarefasContext } from "../context/ListaTarefasContext";

const FormTarefa = () => {
  const { addTarefa, limpaLista, editarItem, editarTarefa } = useContext(
    ListaTarefasContext
  );

  const [titulo, setTitulo] = useState("");

  const handleChange = (e) => {
    /* PEGAR VALOR ATUAL DO INPUT */
    setTitulo(e.target.value);
    console.log(titulo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editarItem) {
      addTarefa(titulo);
      setTitulo("");
    } else {
      editarTarefa(titulo, editarItem.id); /* EDITAR NO FORM O ITEM ID */
    }
  };

  useEffect(() => {
    /* EDITAR PELO ITEM O TITULO */
    if (editarItem) {
      setTitulo(editarItem.titulo);
      console.log(editarItem);
    } else {
      setTitulo(""); /* CAMPO FORM VAZIO APOS EDITAR */
    }
  }, [editarItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        value={titulo}
        type="text"
        className="task-input"
        placeholder="Adicionar uma tarefa..."
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editarItem ? "Atualizar Tarefa" : "Adicionar Tarefa"}
        </button>
        <button onClick={limpaLista} className="btn clear-btn">
          Limpar
        </button>
      </div>
    </form>
  );
};

export default FormTarefa;
