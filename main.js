var input = document.querySelector('input');
var button = document.querySelector('button');
var list = document.querySelector('.list ul');

button.addEventListener('click', function(event){
	event.preventDefault();
	var newTodo = document.createElement('li');
	newTodo.innerHTML = input.value + ' <span class="delete"> x </span>'
	console.log(newTodo);

	list.appendChild(newTodo);
	input.value = '';
})

list.addEventListener('click', function(event){
	var item = event.target

	if ( item.className === 'delete' ) {
		console.log('deleting item');
		item.parentElement.className = 'strike';
		item.className += ' hide';

		setTimeout(function(){
			item.parentElement.remove();
		}, 3000);
	}
})