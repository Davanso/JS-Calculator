// Calculator Program

// Obtém o elemento de exibição (display) do documento HTML
const display = document.getElementById("display");

// Função para adicionar texto ao display
function appendToDisplay(input) {
    // Acrescenta o valor do input ao valor atual do display
    display.value += input;
}

// Função para limpar o display
function clearDisplay() {
    // Define o valor do display como uma string vazia
    display.value = "";
}

// Função para calcular e exibir o resultado da expressão no display
function calculate() {
    try {
        // Tenta avaliar a expressão no display usando a função eval
        display.value = eval(display.value);
    }
    catch(error) {
        // Se houver um erro durante a avaliação, exibe "Error" no display
        display.value = "Error";
    }
}
