let save_button = document.querySelector("#save_button");
let task_list = [];

save_button.addEventListener("click", saveTasks);

function saveTasks() {
	let task = document.querySelector("#task_form").value;
	let display_task = document.querySelector("#task_list");

	if( typeof task !== 'undefined' && task !== '' ) {
		 task_list.push(task);
	}

	display_list = task_list.map(liElements); //Crée un nouveau tableau en y appliquant la fonction suivante

		function liElements(task) {
			return '<li class="task">' + task + '<button class="done-button">Fait</button>' + '</li>';
		}


	display_task.innerHTML = display_list.join(" "); //join() pour créer un nouveau tableau de chaînes de caractères tout en supprimant la virgule
}

console.log(task_list);
function doneTasks(index) {

}

let listed_task = document.querySelector("#task_list");
listed_task.addEventListener("click", function(e){
	if(e.target && e.target.matches("button")) {

			console.log("It's works");

	}
});
