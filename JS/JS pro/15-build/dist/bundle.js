(function () {
  'use strict';

  class Task {
    constructor(message = 'написать код') {
      this.message = message;
    }

    run() {
      console.log(this.message);
    }
  }

  class User {
    constructor(task) {
      this.task = task;
    }

    do() {
      this.task.run();
    }
  }

  const task = new Task('Сделать уборку');
  const user = new User(task);

  user.do();

})();
