
import './styles.css';
import {Todo} from './classes';
import {TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));

//todoList.todos[0].imprimirClase();
console.log('todos', todoList.todos);


//const tarea = new Todo('Aprender Java Script!!');


//todoList.nuevoTodo(tarea);


//console.log(todoList);

//crearTodoHtml( tarea );


//localStorage.setItem('mi-key', 'ABC123');
//localStorage.setItem('mi-key', 'ABC123');
//