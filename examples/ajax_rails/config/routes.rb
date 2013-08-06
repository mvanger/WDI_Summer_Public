AjaxTodo::Application.routes.draw do
	# STEP 4 - Create routes required for TasksController
  root to: 'tasks#index'
  post '/tasks/create' => "tasks#create"
  put '/tasks/complete/:id' => 'tasks#complete'
  put '/tasks/uncomplete/:id' => 'tasks#uncomplete'
  delete '/tasks/destroy/:id' => 'tasks#destroy'
end
