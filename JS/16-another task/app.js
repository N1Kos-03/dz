const newTask = {
  tasks: [{
    id: 1,
    name: 'тест',
    description: 'описание',
    order: 0
  }],
  lastId: 0,

  addTask(title, priority, name , description, order) {
    this.tasks.push({ title, id: ++this.lastId, priority, name, description, order });
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
newTask.addTask('Помыть посуду', 2, 'Уборка', 'Помыть посуду в раковине', 2);
newTask.addTask('Убрать комнату', 3,'Уборка', 'Убраться в комнате', 3);
newTask.addTask('Погулять с собакой', 1,'Прогулка', 'Погулять с собакой во дворе', 1 );

newTask.removeTask(2);
newTask.updateTask(3, { title: 'Погулять с собаками' });

newTask.sortTasks();
newTask.showTasks();



