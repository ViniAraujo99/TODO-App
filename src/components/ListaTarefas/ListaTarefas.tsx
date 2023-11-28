import "./ListaTarefas.sass";
import Tarefa from "./Tarefa/Tarefa";
import ITarefa from "../../interfaces/ITarefa";

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSlecionada: ITarefa) => void;
}

export default function ListaTarefas({ tarefas, selecionaTarefa } : Props ) {
  return (
    <div className="listaTarefas">
      <h2 className="listaTarefas__hist">Tarefas:</h2>
      <ul className="listaTarefas__container">
        {tarefas.map((item) => (
          <Tarefa 
          selecionaTarefa = { selecionaTarefa }
          key={item.id}
          {...item} />
        ))}
      </ul>
    </div>
  );
}
