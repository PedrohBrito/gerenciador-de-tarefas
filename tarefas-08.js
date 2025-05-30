let tarefas = ["Estudar JavaScript", "Fazer exercícios de matemática", "Lavar a louça", 
    "Comprar mercado", "Ir à academia", "Ler um livro", "Fazer revisão para o teste", 
    "Limpar o quarto", "Estudar para concurso", "Organizar o computador"];

// Alterar lista
tarefas.splice(3, 1);
tarefas.splice(3, 0, "Varrer o chão");
console.table(tarefas);
    

