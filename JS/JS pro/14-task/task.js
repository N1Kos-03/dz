export class Task {
  constructor(message = 'написать код') {
    this.message = message;
  }

  run() {
    console.log(this.message);
  }
}
