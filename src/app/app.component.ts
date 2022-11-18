import { Component } from '@angular/core';
import { Todo } from './Todo';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  session:any;
  
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  todos : Todo[] = [];
  newTodo : string;




  SaveTodo(){
    if(this.newTodo){
         let todo = new Todo();
         todo.name=this.newTodo;
         todo.completed=true
         this.todos.push(todo);
         this.newTodo= '';
    }
    else{
      alert('Please Enter something')
    }

    
         
    localStorage.setItem('store',JSON.stringify(this.todos));
   
  }

  
  remove(id:number){
    this.todos = this.todos.filter((v,i)=> i !== id);
  
  }

 
}
