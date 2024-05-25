const todoList = [];

renderTodoList();

function renderTodoList() {
	let todoListHtml = '';

	for (let i = 0; i < todoList.length; i++) {
		const todo = todoList[i];
		const html = `
		<p>
			${todo}
			<button onclick="
				todoList.splice(${i}, 1);
			">Delete</button>
		</p>`;
		todoListHtml += html;
	}

	document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}

function addTodo() {
	const inputElement = document.querySelector('.js-name-input');
	const name = inputElement.value;

	todoList.push(name);
	console.log(todoList);

	inputElement.value = '';
	
	renderTodoList();
}