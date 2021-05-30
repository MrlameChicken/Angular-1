package com.todo.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin (origins = "http://localhost:4200")
@RestController
public class AuthenticationController {

	@GetMapping(path = "/basic-auth")
	public AuthenticatorBean helloWorldBean() {
		//throw new RuntimeException("There is an error");
		return new AuthenticatorBean("Authentication is successfull");
	}
	
}
