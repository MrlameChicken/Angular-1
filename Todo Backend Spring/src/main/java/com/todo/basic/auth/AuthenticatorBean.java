package com.todo.basic.auth;

public class AuthenticatorBean {

	private String message;
	
	/**
	 * @return the message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * @param message the message to set
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	public AuthenticatorBean(String message) {
		// TODO Auto-generated constructor stub
		
		this.message = message;
	}

}
