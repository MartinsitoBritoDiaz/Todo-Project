const todos = JSON.parse(localStorage.getItem('todos')) || [];

const updateTodo = (todos) => {
    const todoStrings = JSON.stringify(todos);
    localStorage.setItem('todos',todoStrings);
}

const render = () =>{
    const todoList = document.getElementById('todo-list');
    const todosTemplate = todos.map(t => '<li class="form-li">' + t + '</li>');
    todoList.innerHTML = todosTemplate.join('');
    const items = document.querySelectorAll('#todo-list li');

    items.forEach((item, i) => {
        item.addEventListener('click', () => {
            item.parentNode.removeChild(item);
            todos.splice(i, 1);
            updateTodo(todos);
            render();
        });
    });
}

window.onload = () => {
    render();
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();

        const todo = document.getElementById('todo-input');
        const todoText = todo.value;

        todo.value = '';
        todos.push(todoText);
        updateTodo(todos);
        render();
    }
}