// Get references to HTML elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Function to load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task.text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
            removeTaskFromStorage(task.text);
        });
        
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
    });
}

// Function to save tasks to localStorage
function saveTaskToStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text: taskText });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to remove a task from localStorage
function removeTaskFromStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a new task to the list
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
            removeTaskFromStorage(taskText);
        });
        
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
        
        taskInput.value = ''; // Clear input field
        saveTaskToStorage(taskText); // Save to storage
    }
}

// Event listener for the Add Task button
addTaskBtn.addEventListener('click', addTask);

// Optional: Allow pressing Enter to add a task
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Load tasks when the page is loaded
loadTasks();
