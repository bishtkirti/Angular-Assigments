export class Model {
  user;
  items;
  constructor() {
      this.user = "Adam";
      this.items = [
                    new TodoItem("Buy Flowers", true),
                    new TodoItem("Get Shoes", false),
                    new TodoItem("Collect Tickets", true),
                    new TodoItem("Call Joe", true)
                  ]
  }
}
export class TodoItem {
  action;
  done;
  constructor(action : string, done : boolean) {
      this.action = action;
      this.done = done;
  }
}
