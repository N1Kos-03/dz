let tasks = [];
let lastId = 0;


function addTask(title, priority) {
  tasks.push({ title, id: ++lastId, priority });
  console.log(`Добавлена задача: ${title}`);
}

function removeTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  console.log(`Удалена задача с id ${id}`);
}

function updateTask(id, updates) {
  let task = tasks.find(task => task.id === id);
  if (task) Object.assign(task, updates);
  console.log(`Обновлена задача с id ${id}`);
}

function sortTasks() {
  tasks.sort((a, b) => a.priority - b.priority);
}


addTask('Помыть посуду', 2);
addTask('Убрать комнату', 3);
addTask('Погулять с собакой', 1);
removeTask(2);
updateTask(1, { priority: 3});

console.log('Все задачи:', tasks);
console.log('Задачи отсортированы по приоритету от меньшего к большему:', tasks),sortTasks('priority');

