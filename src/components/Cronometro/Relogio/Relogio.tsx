import { segundosParaTempo } from "../../../common/utils/time";

interface Props {
  tempo: number | undefined;
}

export default function Relogio({ tempo = 0 }: Props) {
  const tempoConvertido = segundosParaTempo(tempo);
  return (
    <>
      <div className="cronometro__container">
        <div className="timer">
          <span>{tempoConvertido.minDezena}</span>
          <span>{tempoConvertido.minUnidade}</span>
        </div>
        <span>:</span>
        <div className="timer">
          <span>{tempoConvertido.segDezena}</span>
          <span>{tempoConvertido.segUnidade}</span>
        </div>
      </div>
    </>
  );
}
