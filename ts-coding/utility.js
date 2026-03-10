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
var todoPartial = {
    title: "Tests"
};
// type ReadonlyTodo = {
//     readonly title: string;
//     readonly description: string;
//     readonly completed?: boolean | undefined;
//     readonly createdAt?: Date | undefined;
//     readonly assignedTo: string;
// }
var readonlyTodo = {
    title: "test",
    description: "test new",
    completed: true,
    createdAt: undefined,
    assignedTo: "tom"
};
// type Merged = {
//   home: PageInfo;
//   about: PageInfo;
//   contact: PageInfo;
// };
var pages = {
    home: {
        title: "test pages",
        url: ""
    },
    about: {
        title: "about title",
        url: ""
    },
    contact: {
        title: "",
        url: ""
    }
};
//ReturnType<Type>: gets the return type of a function.
function createUser() {
    return {
        id: 1,
        name: "",
        email: "abs"
    };
}
// type UserType = {
//   id: number;
//   name: string;
//   email: string;
// };
//enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var direction = Direction.Up;
console.log(direction); //0
//usecase
function handleResponse(status) {
    if (status === 200 /* StatusCodes.OK */) {
        console.log("Success!!");
    }
}
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Editor"] = "EDITOR";
    UserRole["Viewer"] = "VIEWER";
})(UserRole || (UserRole = {}));
