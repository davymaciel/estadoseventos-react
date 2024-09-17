// O useState é usado para gerenciar o estado dentro de componentes funcionais no React.
import React, { useState } from 'react'

// Declaração de um componente funcional o qual não recebe props.
const FocusBlurExample = () => {
  
    // Define um estado chamado IsFocused, que começa com o valor (false). A função setIsFocused é usada para atualizar esse estado. Este estado será utilizado para saber se o campo de input está em foco ou não.
  const [isFocused, setIsFocused] = useState(false);
  
  // Define um estado chamado inputValue, que inicialmente é uma string vazia. A função setInputValue será usada para atualizar o valor do campo de texto quando o usuário digita.
  const [inputValue, setInputValue] = useState('');
  
  // Declara uma função chamada handleFocus, que é chamada quando o campo de input recebe foco. Ela altera o estado isFocused para true, indicando que o campo está focado.
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Declara uma função chamada handleBlur, que é chamada quando o campo de input perde o foco. Ela altera o estado isFocused para false, indicando que o campo não está mais focado.
  const handleBlur = () => {
    setIsFocused(false);
  };

  // Declara uma função chamada handleChange, que é chamada sempre que o conteúdo do campo de input muda (quando o usuário digita). Ela usa e.target.value para obter o valor do campo e atualiza o estado inputValue com o texto digitado.
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>Funções onFocus e onBlur no React</h2>

      {/*Inicia o campo de entrada de texto (input), onde os usuários podem digitar.*/}
      
      <label>Insira seu nome:</label>
      <input

        //Define o tipo do input como texto.
        type="text"

        //Define o valor do campo de texto com base no estado inputValue. O valor do campo está sincronizado com o estado do componente.*/
        value={inputValue}

        //Define o evento onFocus para o campo de input, o que significa que a função handleFocus será chamada quando o campo de texto ganhar o foco.*/}
        onFocus={handleFocus}

        //Define o evento onBlur para o campo de input, de modo que a função handleBlur seja chamada quando o campo perder o foco.*/
        onBlur={handleBlur}

        //Define o evento onChange, para que a função handleChange seja chamada sempre que o valor do input mudar (quando o usuário digita).*/
        onChange={handleChange}
        //Define o texto de dica que aparece dentro do campo de input quando ele está vazio.*/
        placeholder="Digite seu nome"
      />

      <div>
        {/*Exibe um parágrafo <p> que muda dinamicamente com base no estado isFocused. Se isFocused for true, o texto "A entrada está focada!" é exibido. Caso contrário, "A entrada não está focada." aparece.*/}
        {isFocused ? <p>A entrada está focada.</p> : <p>A entrada não está focada.</p>}
      </div>
      {/*Exibe o valor atual do campo de input abaixo da mensagem de foco. O valor do input é obtido diretamente do estado inputValue.*/}
      <p>Valor da entrada: {inputValue}</p>
    </div>
  );
};

export default FocusBlurExample;