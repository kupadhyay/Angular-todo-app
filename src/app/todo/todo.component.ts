import {
  Component,
  OnInit
} from "@angular/core";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  itemList: Array<String>;
  todoItem: string;
  isEdit: boolean;
  editIndex: number;
  nullValueMsg: string = "Please enter an item."
  nullValueFlag: boolean = false;
  duplicateValueMsg: string = "This item is alreday exist."
  duplicateValueFlag: boolean = false;
  constructor() { }

  ngOnInit() {
    this.itemList = [];
    this.todoItem = '';
    this.isEdit = false;
  }

  addItem() {
    // if input value is null show error message.
    if(!this.todoItem) {
      this.nullValueFlag = true;
      return;
    }
    this.nullValueFlag = false;
    // if input value is duplicate show duplicate message.
    if(this.itemList.includes(this.todoItem)) {
      this.duplicateValueFlag = true;
      return;
    }
    this.duplicateValueFlag = false;

    if(this.isEdit){
      // Edit case
      this.itemList.splice(this.editIndex, 1, this.todoItem);
      this.isEdit = false;
    } else{
      // Add case
      this.itemList.push(this.todoItem);
    }
    this.todoItem = '';
  }
  editItem(value: string) {
    this.todoItem = value;
    this.editIndex  = this.itemList.indexOf(value);
    this.isEdit = true;
  }

  deleteItem(value: string) {
    const index = this.itemList.indexOf(value);
    if (index > -1) {
      this.itemList.splice(index, 1);
    }
  }
}
