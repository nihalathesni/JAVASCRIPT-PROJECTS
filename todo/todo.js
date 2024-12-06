document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    function createTask(taskText) {
        const li = document.createElement('li');

        // Task text span
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Edit, Save, Delete buttons
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');

        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.classList.add('save-btn');
        saveBtn.style.display = 'none'; // Hidden until editing

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        // Edit button functionality
        editBtn.addEventListener('click', () => {
            taskInput.value = taskSpan.textContent;
            taskInput.focus();
            taskSpan.style.display = 'none';
            editBtn.style.display = 'none';
            saveBtn.style.display = 'inline';
        });

        // Save button functionality
        saveBtn.addEventListener('click', () => {
            taskSpan.textContent = taskInput.value;
            taskSpan.style.display = 'inline';
            editBtn.style.display = 'inline';
            saveBtn.style.display = 'none';
            taskInput.value = '';
        });

        // Delete button functionality
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        // Append elements
        const actionsContainer = document.createElement('div');
        actionsContainer.classList.add('task-actions');
        actionsContainer.append(editBtn, saveBtn, deleteBtn);

        li.appendChild(taskSpan);
        li.appendChild(actionsContainer);

        // Add new task at the top
        taskList.prepend(li);
    }

    // Event listener for the Add Task button
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            createTask(taskText);
            taskInput.value = '';
        }
    });

    // Event listener for Enter key in the input field
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
