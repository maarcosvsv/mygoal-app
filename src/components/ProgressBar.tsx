import React from 'react';

const ProgressBar: React.FC = (props: any) => {

    let valorAtual : number = Number(props.valorAtual);
    let valorTotal : number = Number(props.valorTotal);

    if(valorAtual == -1){
        valorAtual = valorTotal;
    }

    let percentual: number = (valorAtual * 100) / valorTotal;

    if(isNaN(percentual)){
        percentual = 0;

    }

    let tamanhoBarra = percentual + "%"



    return (
        <div className="w-full bg-progress-bar-back">
            <div
                className="bg-progress-bar-completed p-0.5"
                style={{ width: tamanhoBarra }}
            />

            {valorAtual} / {valorTotal}
        </div>
    );
}

export default ProgressBar;