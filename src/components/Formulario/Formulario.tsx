import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Formulario.sass";
import ITarefa from "../../interfaces/ITarefa";
import Botao from "../Botao/Botao";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

export default function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  function adicionaTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        tarefa,
        tempo,
        selecionado : false,
        concluido : false,
        id: uuidv4(),
      },
    ]);
    setTarefa("");
    setTempo("00:00");
  }

  return (
    <form className="inputs" onSubmit={adicionaTarefa}>
      <div>
        <label htmlFor="tarefa">
          <h1>O que você pretende fazer?</h1>
        </label>
        <input
          id="tarefa"
          type="text"
          value={tarefa}
          onChange={event => setTarefa(event.target.value)}
          placeholder="..."
          required
          className="input input__text"
        />
      </div>
      <div>
        <label htmlFor="tempo">Por quanto tempo?</label>
        <input
          id="tempo"
          type="time"
          step="1"
          max="01:30:00"
          value={tempo}
          onChange={event => setTempo(event.target.value)}
          required
          className="input input__time"
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}
