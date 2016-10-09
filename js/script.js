(function(){

	//Add task 

	var taskNameInput = document.querySelector("#task_name");
	var taskTimeInput = document.querySelector("#task_time");
	var btnTask = document.querySelector("#add_task");
	var ul = document.querySelector(".task-list ul");
	var taskNumber = document.querySelector("#task_number");
	var taskNumberOne = document.querySelector("#task_numberOne");

	
	btnTask.addEventListener("click",addTask);

	function addTask(e){
		e.preventDefault();

		if(taskNameInput.value != "" && taskTimeInput.value != ""){

			var li = document.createElement("li");

			var divContainer = document.createElement("div");
				divContainer.classList.add("container");

			var inputCheck = document.createElement("input");
				inputCheck.setAttribute("type","checkbox");
				

			var labelCheck = document.createElement("label");
				labelCheck.textContent = taskNameInput.value;

			var labelHour = document.createElement("label");
				labelHour.classList.add("hour");
				labelHour.textContent = taskTimeInput.value;

			divContainer.appendChild(inputCheck);
			divContainer.appendChild(labelCheck);
			divContainer.appendChild(labelHour);

			li.appendChild(divContainer);

			ul.insertBefore(li, ul.childNodes[0]);

			inputCheck.id = "task"+(document.getElementById("todo").children.length + document.getElementById("completed").children.length);
			labelCheck.setAttribute("for","task"+(document.getElementById("todo").children.length + document.getElementById("completed").children.length)+"");
			taskNumber.textContent = document.getElementById("todo").children.length;

			inputCheck.addEventListener("click",taskCompleted);

			taskNameInput.value = "";
			taskTimeInput.value = "";

		}

	}


	function taskCompleted(){
		var item= this.parentNode.parentNode;
		var parent = item.parentNode;
		var parentId = parent.id;

		var target = (parentId=="todo") ? document.getElementById("completed") : document.getElementById("todo");

		parent.removeChild(item);

		target.insertBefore(item, target.childNodes[0]);

		taskNumber.textContent = (document.getElementById("todo").children.length);
		taskNumberOne.textContent = document.getElementById("completed").children.length;

		if(parentId != "completed"){
			Push.create("Task Completed", {
			    body: "Your Task has been Successfully Completed :)",
			    timeout: 5000,
			    icon: "img/notification.png",
			    onClick: function () {
			        window.focus();
			        this.close();
			    }
			});
		}
		
	}

		
	
	//Add Date

	var dayContent = document.querySelector("#day");
	var dateContent = document.querySelector("#date");
	var monthContent = document.querySelector("#month");

	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	var date = new Date();

	dayContent.textContent = days[date.getDay()];
	dateContent.textContent = date.getDate();
	monthContent.textContent = month[date.getMonth()];


})();
