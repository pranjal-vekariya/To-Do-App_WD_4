// function addTodo() {
//     const todoValue = document.getElementById('todoValue').value
//     if (!todoValue) {
//       alert('Add value first!')
//       return
//     }

//     const currentUser = JSON.parse(localStorage.getItem('loggedInUser'))

//     const todosData = JSON.parse(localStorage.getItem('todosData')) || []
//     const newTodo = {
//       title: todoValue,
//       checked: false,
//       email: currentUser.email
//     }
//     todosData.push(newTodo)
//     localStorage.setItem('todosData', JSON.stringify(todosData))
//     document.getElementById("todoValue").value=""
//     renderTodos(currentUser)
//   }

//   function renderTodos(currentUser) {
//     const { email } = currentUser
//     const todosData = JSON.parse(localStorage.getItem('todosData')) || []
//     const currentUserTodo = todosData.filter(todo => todo.email === email)
//     let html = ''
//     let table = document.getElementById("todos")
//     currentUserTodo.forEach((item, index) => {
//       const checkedTag = item.checked ? `<input type="checkbox" checked onchange="doCheckUncheck(${index})"></input>` : `<input type="checkbox" onchange="doCheckUncheck(${index})"></input>`
//       html += `<tr>
//           <th scope="row"><input type="checkbox" onchange="doCheckUncheck(${index})"></th>
//           <td><input type="text" id="${email}_${index}" value=${item.title}></td>

//           <td><button type="button" name="edit" onclick="editTodo(${index})">Edit</button></td>
//           <td><button type="button" name="delete" id="delete" onclick="deleteTodo(${index})">Delete</button></td>
//        </tr>`
//     });
//     table.innerHTML = html
//   }

//   function doCheckUncheck(index){
//     const currentUser = JSON.parse(localStorage.getItem('loggedInUser'))
//     const { email } = currentUser
//     const currentTodo = document.getElementById(`${email}_${index}`).value

//     const todosData = JSON.parse(localStorage.getItem('todosData'))
//   let k = 0
//     console.log('57', currentTodo)
//     for (let i = 0; i < todosData.length; i++) {
//       const todo = todosData[i]
//       if (todo.email === email && index === k) {
//         todo.checked = !todo.checked
//         break
//       }
//       else if (todo.email === email) k++
//     }
//     console.log('63', todosData)
//     localStorage.setItem('todosData', JSON.stringify(todosData))

//   }

//   function deleteTodo(index) {
//     const currentUser = JSON.parse(localStorage.getItem('loggedInUser'))
//     const { email } = currentUser

//     const todosData = JSON.parse(localStorage.getItem('todosData'))
//     let k = 0
//     const newTodos = []
//     console.log('57', index)
//     for (let i = 0; i < todosData.length; i++) {
//       const todo = todosData[i]
//       if (todo.email === email && index === k) {
//         console.log('if', i, todo)
//         k++
//       }
//       else if (todo.email === email) {
//         k++
//         newTodos.push(todo)
//       }
//       else {
//         newTodos.push(todo)
//       }
//     }
//     console.log('63', newTodos)
//     localStorage.setItem('todosData', JSON.stringify(newTodos))
//     renderTodos(currentUser)
//   }

//   function editTodo(index) {
//     const currentUser = JSON.parse(localStorage.getItem('loggedInUser'))
//     const { email } = currentUser
//     const currentTodo = document.getElementById(`${email}_${index}`).value

//     const todosData = JSON.parse(localStorage.getItem('todosData'))
//     let k = 0
//     console.log('57', currentTodo)
//     for (let i = 0; i < todosData.length; i++) {
//       const todo = todosData[i]
//       if (todo.email === email && index === k) {
//         todo.title = currentTodo
//         break
//       }
//       else if (todo.email === email) k++
//     }
//     console.log('63', todosData)
//     localStorage.setItem('todosData', JSON.stringify(todosData))
//   }


// 


// const todoInput = document.getElementById('todo-input');
// const addBtn = document.getElementById('add-btn');
// const todoList = document.getElementById('todo-list');

// addBtn.addEventListener('click', addTodo);

// function addTodo(e) {
//   e.preventDefault();
//   const todoText = todoInput.value.trim();
//   if (todoText) {
//     const todoItem = document.createElement('li');
//     const todoSpan = document.createElement('span');
//     const deleteBtn = document.createElement('button');

//     todoSpan.textContent = todoText;
//     deleteBtn.textContent = 'Delete';

//     deleteBtn.addEventListener('click', () => {
//       todoItem.remove();
//     });

//     todoItem.appendChild(todoSpan);
//     todoItem.appendChild(deleteBtn);
//     todoList.appendChild(todoItem);
//     todoInput.value = '';
//   }
// }


// const todoInput = document.getElementById('todo-input');
// const dueDateInput = document.getElementById('due-date-input');
// const addBtn = document.getElementById('add-btn');
// const todoList = document.getElementById('todo-list');

// addBtn.addEventListener('click', addTodo);

// function addTodo() {
//   const todoText = todoInput.value.trim();
//   const dueDate = dueDateInput.value;

//   if (todoText) {
//     const todoItem = document.createElement('li');
//     todoItem.classList.add('todo-item');

//     const todoTextInput = document.createElement('input');
//     todoTextInput.type = 'text';
//     todoTextInput.value = todoText;
//     todoTextInput.addEventListener('input', editTodo);
//     todoTextInput.addEventListener('blur', saveTodo);

//     const dueDateSpan = document.createElement('span');
//     dueDateSpan.classList.add('due-date');
//     dueDateSpan.textContent = dueDate ? `Due: ${formatDate(new Date(dueDate))}` : '';

//     const completedCheckbox = document.createElement('input');
//     completedCheckbox.type = 'checkbox';
//     completedCheckbox.addEventListener('change', toggleTodoCompletion);

//     todoItem.appendChild(completedCheckbox);
//     todoItem.appendChild(todoTextInput);
//     todoItem.appendChild(dueDateSpan);

//     todoList.appendChild(todoItem);

//     todoInput.value = '';
//     dueDateInput.value = '';
//   }
// }

// function editTodo(e) {
//   e.target.parentNode.classList.remove('completed');
// }

// function saveTodo(e) {
//   e.target.blur();
// }

// function toggleTodoCompletion(e) {
//   const todoItem = e.target.parentNode;
//   todoItem.classList.toggle('completed');
// }

// function formatDate(date) {
//   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
//   return date.toLocaleString('en-US', options);
// }










// const taskInput = document.getElementById('task-input');
// const taskDate = document.getElementById('task-date');
// const addTaskBtn = document.getElementById('add-task');
// const taskList = document.getElementById('task-list');

// addTaskBtn.addEventListener('click', addTask);

// function addTask(e) {
//     e.preventDefault();

//     const taskText = taskInput.value.trim();
//     const taskDateValue = taskDate.value;

//     if (taskText) {
//         const taskItem = document.createElement('li');
//         const taskCheckbox = document.createElement('input');
//         taskCheckbox.type = 'checkbox';
//         taskCheckbox.addEventListener('change', toggleTaskCompletion);

//         const taskLabel = document.createElement('label');
//         taskLabel.textContent = `${taskText} (${taskDateValue})`;

//         const editBtn = document.createElement('button');
//         editBtn.textContent = 'Edit';
//         editBtn.addEventListener('click', editTask);

//         taskItem.appendChild(taskCheckbox);
//         taskItem.appendChild(taskLabel);
//         taskItem.appendChild(editBtn);
//         taskList.appendChild(taskItem);

//         taskInput.value = '';
//         taskDate.value = '';
//     }
// }

// function toggleTaskCompletion(e) {
//     const taskItem = e.target.parentNode;
//     taskItem.classList.toggle('completed');
// }

// function editTask(e) {
//     const taskItem = e.target.parentNode;
//     const taskLabel = taskItem.querySelector('label');
//     const taskText = taskLabel.textContent.split(' (')[0];
//     const taskDateValue = taskLabel.textContent.split('(')[1].slice(0, -1);

//     const newTaskText = prompt('Edit task:', taskText);
//     const newTaskDateValue = prompt('Edit date:', taskDateValue);

//     if (newTaskText && newTaskDateValue) {
//         taskLabel.textContent = `${newTaskText} (${newTaskDateValue})`;
//     }
const taskInput = document.getElementById('task-input');
const dueDate = document.getElementById('due-date');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

let tasks = [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    if (task.completed) {
      taskItem.classList.add('completed');
    }

    const taskText = document.createElement('span');
    taskText.textContent = task.text;

    const dueDateTime = document.createElement('span');
    dueDateTime.textContent = task.dueDate ? ` (Due: ${formatDate(task.dueDate)})` : '';

    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'actions';

    const editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTask(index));

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(index));

    const completeButton = document.createElement('button');
    completeButton.textContent = task.completed ? 'Undo' : 'Complete';
    completeButton.addEventListener('click', () => toggleTaskCompletion(index));

    actionsContainer.appendChild(completeButton);
    actionsContainer.appendChild(editButton);
    actionsContainer.appendChild(deleteButton);

    taskItem.appendChild(taskText);
    taskItem.appendChild(dueDateTime);
    taskItem.appendChild(actionsContainer);
    taskList.appendChild(taskItem);
  });
}

function addTask() {
  const taskText = taskInput.value.trim();
  const dueDateTime = dueDate.value ? new Date(dueDate.value) : null;
  if (taskText) {
    tasks.push({ text: taskText, completed: false, dueDate: dueDateTime });
    taskInput.value = '';
    dueDate.value = '';
    renderTasks();
  }
}

function editTask(index) {
  const task = tasks[index];
  const newTaskText = prompt('Edit task:', task.text);
  if (newTaskText !== null && newTaskText.trim() !== '') {
    tasks[index].text = newTaskText.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function formatDate(dateObj) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return dateObj.toLocaleString(undefined, options);
}

addTaskButton.addEventListener('click', addTask);

renderTasks();