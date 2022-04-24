class Todo {
  id: string;
  title: string;

  constructor(todoText: string) {
    this.title = todoText;
    this.id = Math.floor(Math.random() * 40).toString();
  }
}

export default Todo;
