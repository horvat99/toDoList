import './main.scss';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import {ToDoClass} from './app/toDoClass';
import {clock} from './app/utils/live-clock';
  
var toDo = new ToDoClass;
clock();
window.toDo = toDo;


