import {darkMode} from './utils/dark-mode';
import {buttonAnimation} from './utils/button-animation';
import {checkInput, deleteError} from './utils/input-is-valid';
import {addWithEnter} from './utils/add-with-enter';
  
export class ToDoClass {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('TASKS'));
        if (!this.tasks) {
            this.tasks = [
                { task: 'Task1', isComplete: false, time: "" },
            ];
        }
        this.loadTasks();
        this.addEventListeners();
    }

    loadTasks() {
        let items = this.tasks.reduce((item, task, index) => item +=
            `
            <li class="list-group-item">
          <div class="row">
           <div class="col-1">
            <label><input id="toggleTaskStatus" type="checkbox"  
            onchange="toDo.toggleTaskStatus(${index})" value="" class="" 
            ${task.isComplete ? 'checked' : ''}></label>
           </div>
           <div class="offset-2 col-6 task-text ${task.isComplete ? 'complete' : ''}">
            ${task.task} - ${task.time}
          </div>
          <div class="offset-2 col-1 delete-icon-area">
            <a class="" onClick="toDo.deleteTask(event, ${index})"><i 
            id="deleteTask" data-id="${index}" class="far fa-trash-alt"></i></a>
           </div>
          </div>
         </li>
            `, '');
        document.querySelector('#taskList').innerHTML = items;
        localStorage.setItem('TASKS', JSON.stringify(this.tasks));

    }

    addTask() {
        let task = document.querySelector('#taskInputField').value;
        let time = document.querySelector('#time').value;
        console.log(task);
        if (task) {
            let newTask = {
                task,
                isComplete: false,
                time
            };
            console.log(newTask);
            this.tasks.push(newTask);
            this.loadTasks();
            setTimeout(() => document.querySelector('#taskInputField').value = "", 100);
            document.querySelector("#time").value = "";
        }
    }

    toggleTaskStatus(index) {
        this.tasks[index].isComplete = !this.tasks[index].isComplete;
        this.loadTasks();
    }
    deleteTask(e, index) {
        e.preventDefault();
        this.tasks.splice(index, 1);
        this.loadTasks();
    }

    addEventListeners() {
        document.querySelector('input').addEventListener('change', darkMode);
        document.querySelector('.button').onmousemove = buttonAnimation;
        document.querySelector('#addToList').addEventListener('click', checkInput);
        document.querySelector('#addToList').addEventListener('keypress', addWithEnter);
        document.querySelector('#taskInputField').addEventListener('change', deleteError);
    }

}

