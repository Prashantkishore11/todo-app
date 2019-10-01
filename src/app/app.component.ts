import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to do list:';
  todos=[
    {
      label :"do assignment",
      done:false,
      priority: 3
    },
  {
    label: "Breakfast",
    done: true,
    priority: 4
  },
   {
    label: "lab",
    done: true,
    priority: 5
  },
   {
    label: "Video Game",
    done: true,
    priority: 2
  },
  ];
  addTodo(newTodolabel)
  {
    var newTodo=
    {
      label: newTodolabel,
      priority: 1,
      done: false
     };
     this.todos.push(newTodo);
  }
  deleteTodo(todo)
  {
    this.todos=this.todos.filter(t => t.label !== todo.label);
  }
}
