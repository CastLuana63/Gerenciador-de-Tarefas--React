- useState: Gerencia o estado interno do componente.

- import: Traz funcionalidades e estilos de outros arquivos e bibliotecas.

- AddTask: Componente funcional que renderiza um formulário para adicionar tarefas.

- onChange: Atualiza o estado quando o usuário digita algo nos campos de input.

- onClick: Chama uma função para criar uma nova tarefa com as informações fornecidas.

- export default: Permite que este componente seja importado e usado em outros arquivos do projeto.

- tasks: Lista de tarefas a serem exibidas.

- TaskCompleted: Função que marca a tarefa como concluída.

- DeleteTask: Função que deleta a tarefa.

- map: Itera sobre a lista de tarefas para renderizar cada uma como um item (li) na lista (ul).

- className: Condicionalmente adiciona a classe "line-through" para tarefas concluídas, aplicando um estilo de -
  texto riscado.

- useState: Gerencia o estado da lista de tarefas.

- onTaskClick: Alterna o estado de conclusão de uma tarefa.

- deleteTask: Remove uma tarefa da lista.

- createTask: Adiciona uma nova tarefa à lista.

- AddTask: Formulário para adicionar novas tarefas.

- Tasks: Exibe a lista de tarefas e permite marcar como concluída ou deletar uma tarefa

-- UMA API PARA SIMULAR TASKS FAKES NO BANCO DE DADO OU LOCALSTAGE

// useEffect(() => {
// //chamar a api JSONplaceholder
// async function fetchTask() {
// const response = await fetch(
// "https://jsonplaceholder.typicode.com/todos?_limit=10",
// { method: "GET" }
// );
// const data = await response.json();
// setTasks(data);
// }

// fetchTask();
// }, []);
