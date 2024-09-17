import React from 'react'

const FirstEvent = () => {

    // Declaração da função handleClick, que será chamada quando o botão for clicado.
    const handleClick = (e) => {
        //Imprime no console o evento declarado, exibindo um alerta na tela.
        console.log(e);
        alert("Teste função anônima.")
    }
    //Declaração de outra função, que exibe um alerta quando chamada.
    const callNames = () => { alert("Teste função callNames.") }

    return (
        <div>
            {/*Criação de botão com o evento onClick que está associado a função handleClick, executando-a ao clicar*/} 
            <button onClick={() => alert("Teste função handleClick.")}>
                Clique Aqui
            </button>
            {/*Criação de dois botões onde são chamadas as funções handleClick e callNames, respectivamente.*/}
            <div><button onClick={handleClick}> Clique Aqui</button></div>
            <div><button onClick={callNames}> Clique Aqui</button></div>
        </div>
    )
}

export default FirstEvent

// Dúvida sanada durante a atividade: 
// Já que no primeiro botão o evento onClick está associado a função handleClick, por que o alerta que é exibido não é o que foi definido na declaração da função?
// Isso ocorre pois o evento onClick deste botão está associado a uma função anônima, e não a função handleClick. Este evento contém apenas o alerta "Os nomes em ordem...", não há nenhuma associação a função handleClick, diferentemente do segundo botão que é vinculado a ela.