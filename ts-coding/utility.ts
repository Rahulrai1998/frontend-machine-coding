interface Todo {
  title: string;
  description: string;
  completed?: boolean;
  createdAt?: Date;
  assignedTo: string;
}

//Partial<T> : makes all the properties of passed type T optional
type PartialTodo = Partial<Todo>; //all properties are optional now
// type PartialTodo = {
//   title?: string | undefined;
//   description?: string | undefined;
//   completed?: boolean | undefined;
//   createdAt?: Date | undefined;
//   assignedTo?: string | undefined;
// };

//it will give error
// const todo: Todo = {
//   title: "test",
// };

//it will give no error, as all the properties are optinal in the new returned type
const todoPartial: PartialTodo = {
  title: "Tests",
};

//Required<T>: makes all the properties required and removes the optinal notations.
type RequiredTodo = Required<Todo>;
// type RequiredTodo = {
//   title: string;
//   description: string;
//   completed: boolean;
//   createdAt: Date;
//   assignedTo: string;
// };

//it will give error
// let requiredTodo: RequiredTodo = {
//   title: "rest",
// };

//Readonly<T>: makes all the properties as constant by assigning readonly keyword before all the properties.
type ReadonlyTodo = Readonly<Todo>;
// type ReadonlyTodo = {
//     readonly title: string;
//     readonly description: string;
//     readonly completed?: boolean | undefined;
//     readonly createdAt?: Date | undefined;
//     readonly assignedTo: string;
// }

let readonlyTodo: ReadonlyTodo = {
  title: "test",
  description: "test new",
  completed: true,
  createdAt: undefined,
  assignedTo: "tom",
};

// readonlyTodo.title = "new title"; //error, because title is a readonly property.

//Pick<T, prop1 | prop2 | ...>: picks specific properties from an existing type and returns a new type.
type TodoPreview = Pick<Todo, "title" | "completed">;
// type TodoPreview = {
//   title: string;
//   completed?: boolean | undefined;
// };

//Omit<Type, prop1 | prop2>: returns new type after omitting specific properties.
type omittedTodo = Omit<Todo, "createdAt">;
// type omittedTodo = {
//   title: string;
//   description: string;
//   completed?: boolean | undefined;
//   assignedTo: string;
// };

//Record<Keys, Types>
type PageInfo = {
  title: string;
  url: string;
};
type Pages = "home" | "about" | "contact";

//merging Pages and PageInfo types for to define a type for key-value pairs.
type Merged = Record<Pages, PageInfo>;
// type Merged = {
//   home: PageInfo;
//   about: PageInfo;
//   contact: PageInfo;
// };

let pages: Merged = {
  home: {
    title: "test pages",
    url: "",
  },
  about: {
    title: "about title",
    url: "",
  },
  contact: {
    title: "",
    url: "",
  },
};

//ReturnType<Type>: gets the return type of a function.
function createUser() {
  return {
    id: 1,
    name: "",
    email: "abs",
  };
}
type UserType = ReturnType<typeof createUser>;
// type UserType = {
//   id: number;
//   name: string;
//   email: string;
// };

//enums
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
let direction: Direction = Direction.Up;
console.log(direction); //0

// Initialized
//const enum: special type of enum which is more performant.
//it is removed on compilation.
//this is highly opitmized and lightweight.
const enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized, // 401, auto-increments from the previous value
  NotFound = 404,
}
//usecase
function handleResponse(status: StatusCodes): void {
  if (status === StatusCodes.OK) {
    console.log("Success!!");
  }
}

enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}
