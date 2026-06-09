function calcularResultado() {
    let acertos = 0;
    const form = document.getElementById('quizForm');
    
    // Validação para garantir que o usuário respondeu tudo
    if (!form.q1.value || !form.q2.value || !form.q3.value) {
        alert("Por favor, responda todas as perguntas antes de enviar!");
        return;
    }

    // Verifica as respostas corretas
    if (form.q1.value === 'B') acertos++;
    if (form.q2.value === 'A') acertos++;
    if (form.q3.value === 'B') acertos++;

    // Exibe o resultado na tela
    const resultadoDiv = document.getElementById('result');
    
    if (acertos === 3) {
        resultadoDiv.innerHTML = `🏆 Excelente! Você acertou ${acertos} de 3 perguntas. Você entende tudo de agro sustentável!`;
    } else if (acertos === 2) {
        resultadoDiv.innerHTML = `🌱 Muito bom! Você acertou ${acertos} de 3 perguntas. Quase lá!`;
    } else {
        resultadoDiv.innerHTML = `🌾 Você acertou ${acertos} de 3 perguntas. Continue estudando para proteger nosso futuro!`;
    }
}
