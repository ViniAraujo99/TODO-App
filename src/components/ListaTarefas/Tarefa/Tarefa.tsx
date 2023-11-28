import ITarefa from "../../../interfaces/ITarefa";
import "./Tarefas.sass";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSlecionada: ITarefa) => void;
}

export default function Tarefa({
  tarefa,
  tempo,
  selecionado,
  concluido,
  id,
  selecionaTarefa,
}: Props) {
  return (
    <li
      className={`listaTarefas__handler ${selecionado ? 'selecionado' : ''}  ${concluido ? 'concluido' : ''}`}
      onClick={() => {
        !concluido &&
          selecionaTarefa({ tarefa, tempo, selecionado, concluido, id })
      }}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
