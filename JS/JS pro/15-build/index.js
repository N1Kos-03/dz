import { Task } from './task.js';
import { User } from './user.js';

const task = new Task('Сделать уборку');
const user = new User(task);

user.do(); 
