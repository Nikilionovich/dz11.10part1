const http = require("http");
const router=require("./router/router")
const {port}=require("./data/data.js");
const app = http.createServer(router).listen(port,()=>{console.log(`Рабатает на порте${port}`)});
// Задание 2: Список задач

// Разработайте приложение для управления списком задач с endpoint:

// · GET-МЕТОД С МАРШРУТОМ ВИДА /api/todos — получение всех задач

// · POST-МЕТОД С МАРШРУТОМ ВИДА /api/todos — создание новой задачи

// · POST-МЕТОД С МАРШРУТОМ ВИДА /api/todos/edit — обновление задачи (ключей title и completed) по ID

// · POST-МЕТОД С МАРШРУТОМ ВИДА /api/todos/delete — удаление задачи по ID