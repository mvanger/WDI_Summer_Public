// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

// STEP 11: Note this function that takes a task JavaScript object as an argument
// This function will generate a DOM version of the task javasctipt object it takes as an argument
var appendTask = function(task){
	// Created local variables that hold the jQuery selectors for:
	//     completeButton, deleteButton, actions, taskText, htmlTask
	// Note the classes on these

	var completeButton = $('<button class="complete">complete</button>');
	var uncompleteButton = $('<button class="uncomplete">uncomplete</button>');
	var deleteButton = $('<button class="delete">delete</button>');

	var actions = $('<div class="actions"></div>').append(completeButton).append(uncompleteButton).append(deleteButton);

	// STEP 12: Setup a jquery DOM representation of the task object
	var taskText = $('<div class="items">'+task.name+'</div>').append(actions);
	var htmlTask = $('<li></li>').append(taskText);

	// Add event handlers to the new button elements

	// STEP 15: Note `.click()` event handlers to the `complete` and  `delete` buttons that will later make ajax requests to the server - but don't fill it out yet

	// Handles the click event on the complete button using Ajax
	completeButton.click(function(){
		$.ajax({
			// STEP 24: Make the step 15 `.click()` make an ajax call to the `complete` action and set the `dataType` setting to `script`
<<<<<<< HEAD
			url: '/tasks/complete/' + task.id,
			type: 'PUT',
			dataType: 'script'
=======
>>>>>>> 14a92e6c50a2aa54f1f3797b6976aff42cb991c1
		})
	});

	uncompleteButton.click(function(){
		$.ajax({
			url: '/tasks/uncomplete/' + task.id,
			type: 'PUT',
			dataType: 'script'
		})
	})

	// Handles the click event on the delete button using Ajax
	// Step 30: Make the step 15 `deleteButton.click()` make an ajax call to the `TasksController#destroy` action and set the `dataType` setting to `script`
	deleteButton.click(function(){
		$.ajax({
<<<<<<< HEAD
			url: '/tasks/destroy/' + task.id,
			type: 'DELETE',
			dataType: 'script'
=======
			// Step 30: Make the step 15 `deleteButton.click()` make an ajax call to the `TasksController#destroy` action and set the `dataType` setting to `script`
>>>>>>> 14a92e6c50a2aa54f1f3797b6976aff42cb991c1
		})
	});

	// STEP 13: Set the htmlTask elements `data-id` attribute to the tasks id
	// to make them easy to find for the DOM manipulating ajax response functions
	// Do this just below here:
	// This should be 'data-id' instead so it won't match to CSS
	htmlTask.attr('id', task.id)

	// STEP 14: Append htmlTask either to the `#todo-items` list or the `#completed-items` list
	// but don't allow empty tasks
	if (task.name.length > 0 && !task.completed) {
		htmlTask.find('.uncomplete').hide()
		$('#todo-items').append(htmlTask)
	} else if (task.name.length > 0 && task.completed) {
		htmlTask.find('.complete').hide()
		$('#completed-items').append(htmlTask)
	}
}

// This runs when the window is loaded
// Similar to window.onload, but for jQuery
$(function(){

	// STEP 9: When the DOM is ready make an ajax call to the index action with a `dataType` setting of 'json'
	// Send an AJAX json request to the index action to get all the tasks
	$.ajax({
		url: '/',
		dataType: 'json'
	}).done(function(data){ //handle the json response
			// STEP 10: For now use `console.log` in `.done()` to see the result is an array of javascript objects.
			console.log(data)
			// STEP 16: Rewrite the `.done()` method in step 10 so that it loops through the elements in the ajax response object and passes each to the new append task function
			$.each(data, function(index, value){
				appendTask(value)
			})
	});

	// Add a click event handler to the add item button
	$('#add-item').click(function(){
		// STEP 17: Make a javascript JSON object `task` that will have a `name` attribute
		// We'll use this object to send data to the server
		var task = { "name": "" }
		// STEP 18: Set the name attribute to the value of the text in the `input` field
		task.name = $('input').val()
		// Don't save tasks with no name
		if (task.name.length!==0){
			$.ajax({
				// STEP 19: Make this click event send a json object to the `create` action using AJAX
				url: '/tasks/create',
				type: 'POST',
				dataType: 'json',
				data: task
			}).done(function(data){ // Handle the json response
				// STEP 20: Use the method `console.log` on the result to see that it will return a JavaScript task object after the next steps.
				console.log(data)
				// STEP 23: Rewrite `.done()` method from step 20 to send the response object to the append task function
				appendTask(data)
				$('input').val('')
			});
		}
	});
});


