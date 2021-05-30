package com.todo.Todo.todos;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoResource {
	
	@Autowired
	private TodoHardCodedService todoService;
	
	@GetMapping(path = "/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username)
	{
		return todoService.findAll();
	}
	
	//findbyID
	@GetMapping(path = "/users/{username}/todos/{id}")
	public Todo getTodoById(@PathVariable String username,@PathVariable Integer id)
	{
		return todoService.findById(id);
	}
	

	//Delete a TODO here
	@DeleteMapping(path = "/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteToDo(
			@PathVariable String username, @PathVariable long id)
	{
		Todo todo = todoService.deleteById(id);
		if(todo!=null)
			return ResponseEntity.noContent().build();
		
		return ResponseEntity.notFound().build();
		
	}
	
	//Update a TODO here
	@PutMapping(path = "/users/{username}/todos/{id}")
	public ResponseEntity<Todo> UpdateToDo(
			@PathVariable String username, @PathVariable long id, @RequestBody Todo todo)
	{
		Todo UpdatedTodo = todoService.updateTodo(todo);
		return new ResponseEntity<Todo>(UpdatedTodo,HttpStatus.OK); 
	}
	
	//Create a TODO here
	@PostMapping(path = "/users/{username}/todos")
	public ResponseEntity<Todo> CreateToDo(
			@PathVariable String username, @RequestBody Todo todo)
	{
		Todo CreatedTodo = todoService.updateTodo(todo);
		
		//create URI for this new TODO
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(CreatedTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
}

