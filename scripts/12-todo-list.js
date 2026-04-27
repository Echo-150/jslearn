

function addTodo() {
    const todoName = document.querySelector('.input').value;

    if (todoName === '') {
        alert('请输入内容！');
        return;
    }
    
    let todolist = document.querySelector('.todo-list');
    let todo = document.createElement('li');
    todo.innerHTML = `
        <span class="text">${todoName}</span>
        <button class="delete" onclick="deleteTodo(this)">删除</button>
    `;
    // 追加到列表
    todolist.appendChild(todo);
    
    document.querySelector('.input').value = '';
}

function deleteTodo(deleteBtn){
    deleteBtn.parentNode.remove();
}