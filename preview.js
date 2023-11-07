const todoKey = "todoList";

const renderCurrentPreviewTodo = () => {
  const currentTodoId = readTodo("currentTodoId");
  // Get the database
  const todoDatabase = readTodo(todoKey);
  // Get the current todo using the current todoId
  const currentTodo = todoDatabase.find((todo) => todo.id === currentTodoId);
  const { id, todoName, createdAt, description } = currentTodo;
  const todoDateTime = new Date(createdAt);
  const todoDate = todoDateTime.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const todoTime = todoDateTime.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });
  const previewTodoContainer = document.getElementById(
    "preview-todo-container"
  );
  previewTodoContainer.innerHTML = `
    <section class="bg-white p-6 rounded-lg shadow-lg">
      <div class="mb-3 flex justify-between items-center">
        <h2 class="text-2xl font-semibold text-gray-800 truncate">${todoName}</h2>
        <button id="update-todo-desc" class="bg-green-500 text-white px-4 py-2 rounded-md hidden" onclick="updateTodoDescription()">
          Update Description
        </button>
      </div>
      <div class="border-b-2 border-gray-300 mb-3"></div>
      <div class="text-gray-700 text-lg mb-4">${description || "No description available."}</div>
      <div class="flex items-center text-gray-500 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        <span>Created at ${todoDate} <br> ${todoTime}</span>
      </div>
      <div class="mt-6 flex justify-center">
        <a href="./index.html" class="flex items-center text-indigo-600 hover:text-indigo-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
          </svg>
          <span>View all todos</span>
        </a>
      </div>
    </section>
  `;
};

renderCurrentPreviewTodo();