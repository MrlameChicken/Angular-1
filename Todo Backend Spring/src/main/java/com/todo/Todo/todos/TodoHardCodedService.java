package com.todo.Todo.todos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {

	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;

	static {
		todos.add(new Todo(idCounter++, "Tanmaya", "Get a JOB", new Date(), false));
		todos.add(new Todo(idCounter++, "Yogesh", "Post an article on TECHCOMPACT", new Date(), false));
		todos.add(new Todo(idCounter++, "Utkarsh", "CODE MORE", new Date(), false));
		todos.add(new Todo(idCounter++, "Rohit", "Who is this?", new Date(), false));
	}

	public List<Todo> findAll() {
		return todos;
	}

	// method to find by ID
	public Todo findById(long id) {
		for (Todo i : todos) {
			if (i.getId() == id)
				return i;
		}
		return null;
	}

	// method to delete by ID
	public Todo deleteById(long id) {
		Todo i = findById(id);
		if (i == null)
			return null;
		if (todos.remove(i))
			return i;
		return null;

	}

	public Todo updateTodo(Todo todo) {
		if (todo.getId() == -1) {
			todo.setId(++idCounter);
			 todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}

}
