let save_button = document.getElementById("save_button");
let task_list = [];

save_button.addEventListener("click", saveTasks);

function saveTasks() {
	let task = document.getElementById("task_form").value;
	let display_task = document.getElementById("task_list");
	
	if( typeof task !== 'undefined' && task !== '' ) {
		 task_list.push(task);
	}
	
	let display_list = task_list.map(liElements); //Create a new array with task in li and span element
		
		function liElements(task) {
			return '<li>' + '<span class="task">' + task + '</span></li>';
		}
		
	
	display_task.innerHTML = display_list.join(" "); //join() for remove the comma separator of the array
}