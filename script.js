const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
const taskText = taskInput.value.trim();
if (taskText !== '') {
const li = document.createElement('li');
li.textContent = taskText;
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Remove';
deleteBtn.className = 'delete-btn';
deleteBtn.addEventListener('click', () => {
li.remove();
});
li.appendChild(deleteBtn);
taskList.appendChild(li);
taskInput.value = '';
}
});

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

contactForm.addEventListener('submit', (event) => {
event.preventDefault();
let isValid = true;

nameError.textContent = '';
emailError.textContent = '';
messageError.textContent = '';

if (nameInput.value.trim() === '') {
nameError.textContent = 'Name is required';
isValid = false;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(emailInput.value.trim())) {
emailError.textContent = 'Valid email is required';
isValid = false;
}

if (messageInput.value.trim() === '') {
messageError.textContent = 'Message is required';
isValid = false;
}

if (isValid) {
alert('Form submitted successfully!');
contactForm.reset();
}
});