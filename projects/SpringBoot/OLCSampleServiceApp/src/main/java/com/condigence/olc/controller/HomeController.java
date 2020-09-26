package com.condigence.olc.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@CrossOrigin(origins = "*")
public class HomeController {

	@GetMapping("/")
	public ResponseEntity<?> home() {
		String name = "App is Running!";
		return ResponseEntity.status(HttpStatus.OK).body(name);
	}
	
	@GetMapping("/olc")
	public ResponseEntity<?> olcHome() {
		String name = "Welcome to OLC Home!";
		return ResponseEntity.status(HttpStatus.OK).body(name);
	}

}
