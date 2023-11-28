import { useEffect, useState } from "react";
import ITarefa from "../../interfaces/ITarefa";
import "./Cronometro.sass";
import Relogio from "./Relogio/Relogio";
import { tempoParaSegundos } from "../../common/utils/time";
import Botao from "../Botao/Botao";

interface Props {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {

  const [cronometro, setCronometro] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setCronometro(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador >= 0) {
        setCronometro(contador--);
        return regressiva(contador--);
      }

      finalizarTarefa();

    }, 1000);
  }

  return (
    <div className="cronometro">
      <p className="cronometro__hint">
        Selecione uma tarefa e clique em 'Começar' para iniciar o cronômetro.
      </p>
      <Relogio tempo={cronometro} />
      <Botao onClick={() => {
        regressiva(cronometro);
      }}>Começar</Botao>
    </div >
  );
}
