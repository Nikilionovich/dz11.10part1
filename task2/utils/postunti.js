const fs = require("fs")
const path = require("path")
let { arrtodo } = require("../data/data");
const createnewtodo = (title1, comleted1) => {
    const todo = {
        id: arrtodo.length + 1,
        title: title1,
        completed: comleted1,
        createdAt: new Date().toISOString()
    }
    arrtodo.push(todo)
    fs.writeFileSync(path.join(__dirname, "../data/todos.json"), JSON.stringify(arrtodo, null, 2), "utf-8");
    return todo;
}

const changeindata = (i1d, title1, completed1) => {
    const i = arrtodo.findIndex(todo => todo.id == i1d);
    arrtodo[i].title = title1;
    arrtodo[i].completed = completed1;
    fs.writeFileSync(path.join(__dirname, "../data/todos.json"), JSON.stringify(arrtodo, null, 2), "utf-8");
}
const deletebyid = (i1d) => {
    const index = arrtodo.findIndex(todo => todo.id === i1d);
    arrtodo.splice(index, 1);
    fs.writeFileSync(
        path.join(__dirname, "../data/todos.json"),
        JSON.stringify(arrtodo, null, 2),
        "utf-8"
    );
}
    module.exports = { createnewtodo, changeindata, deletebyid };