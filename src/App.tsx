import Cronometro from './components/Cronometro/Cronometro'
import Formulario from './components/Formulario/Formulario';
import ListaTarefas from './components/ListaTarefas/ListaTarefas'
import { useState } from "react"; 
import ITarefa from './interfaces/ITarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa (tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            concluido: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <>
      <div className='App'>
        <Formulario setTarefas={setTarefas} />
        <Cronometro 
          selecionado = { selecionado }
          finalizarTarefa = { finalizarTarefa }/>
        <ListaTarefas 
          tarefas={tarefas} 
          selecionaTarefa = { selecionaTarefa } />
      </div>
    </>
  )
}

export default App