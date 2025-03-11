const ToDoList = {
  tasks: [],
  lastId: 0,

  addTask(title, priority) {
    this.tasks.push({ title, id: ++this.lastId, priority });
    console.log(`Добавлена задача: ${title}`);
  },

  removeTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    console.log(`Удалена задача с id ${id}`);
  },

  updateTask(id, updates) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      Object.assign(task, updates);
      console.log(`Обновлена задача с id ${id}`);
    } else {
      console.log(`Задача с id ${id} не найдена`);
    }
  },

  sortTasks() {
    this.tasks.sort((a, b) => a.priority - b.priority);
    console.log('Задачи отсортированы по приоритету от меньшего к большему');
  },

  showTasks() {
    console.log('Все задачи:', this.tasks);
  }
};

// Пример использования:
ToDoList.addTask('Помыть посуду', 2);
ToDoList.addTask('Убрать комнату', 3);
ToDoList.addTask('Погулять с собакой', 1);

ToDoList.removeTask(2);
ToDoList.updateTask(3, { title: 'Погулять с собаками' });

ToDoList.sortTasks();
ToDoList.showTasks();
