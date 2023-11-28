export function tempoParaSegundos(tempo: string) {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':');

    const horasEmSegundos   = Number(horas)     * 3600;
    const minutosEmSegundos = Number(minutos)   * 60;
    return horasEmSegundos  + minutosEmSegundos + Number(segundos);
}


export function segundosParaTempo (tempo: number) {
    const minutos = Math.floor(tempo / 60 );
    const segundos = tempo % 60;

    const [minDezena, minUnidade] = String(minutos).padStart(2,'0');
    const [segDezena, segUnidade] = String(segundos).padStart(2,'0');

    return {
        minDezena: minDezena,
        minUnidade: minUnidade,
        segDezena: segDezena,
        segUnidade:  segUnidade,
    };
}