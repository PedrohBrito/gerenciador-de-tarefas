let tarefas = ["Estudar JavaScript", "Fazer exercícios de matemática", "Lavar a louça", 
    "Comprar mercado", "Ir à academia", "Ler um livro", "Fazer revisão para o teste", 
    "Limpar o quarto", "Estudar para concurso", "Organizar o computador"];

// Transforma tarefas
let tarefasComFazer = tarefas.map(tarefa => "Fazer: " + tarefa);
console.log(tarefasComFazer);

