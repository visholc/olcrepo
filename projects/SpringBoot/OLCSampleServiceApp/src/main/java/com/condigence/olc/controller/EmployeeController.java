package com.condigence.olc.controller;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

import com.condigence.olc.bean.EmployeeBean;
import com.condigence.olc.dto.EmployeeDTO;
import com.condigence.olc.entity.Employee;
import com.condigence.olc.exception.CustomErrorType;
import com.condigence.olc.services.SampleService;

@RestController
@CrossOrigin(origins = "*")
public class EmployeeController {

	public static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);

	@Autowired
	SampleService service;
	//satish here //

	@GetMapping("/v1/employees")
	public ResponseEntity<?> getPersonList() {
		return ResponseEntity.status(HttpStatus.OK).body(service.getAll());
	}

	// Read Operation
	@SuppressWarnings("unchecked")
	@GetMapping("/v1/employees/{id}")
	public ResponseEntity<?> getById(@PathVariable("id") Long id) {
		Optional<Employee> employee = service.getById(id);
		EmployeeDTO dto = new EmployeeDTO();
		if (employee.isPresent()) {
			dto.setId(employee.get().getId());
			dto.setName(employee.get().getName());

			return ResponseEntity.status(HttpStatus.OK).body(dto);

		} else {
			return new ResponseEntity(
					new CustomErrorType("Employee not found. with Id " + id, HttpStatus.NOT_FOUND.toString()),
					HttpStatus.NOT_FOUND);
		}
	}

	// Create Operation
	@PostMapping(value = "/v1/employees")
	public ResponseEntity<?> addUserAddress(@RequestBody EmployeeBean bean) {
		EmployeeDTO dto = service.save(bean);
		return new ResponseEntity<EmployeeDTO>(dto, HttpStatus.CREATED);
	}

	// Update Operation
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@PutMapping(value = "/v1/employees/{id}")
	public ResponseEntity<?> updateUser(@RequestBody EmployeeBean bean, @PathVariable("id") long id) {

		Optional<Employee> employee = service.getById(bean.getId());

		if (!employee.isPresent()) {
			return new ResponseEntity(
					new CustomErrorType("Unable to upate. employee with id " + bean.getId() + " not found."),
					HttpStatus.NOT_FOUND);
		} else {
			if (!bean.getName().equalsIgnoreCase("")) {
				employee.get().setName(bean.getName());
			}

			service.update(employee.get());
			return new ResponseEntity<Employee>(employee.get(), HttpStatus.OK);
		}

	}

	// Delete Operation
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@DeleteMapping(value = "/v1/employees/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") long id) {

		Optional<Employee> employee = service.getById(id);
		if (employee.isPresent()) {
			service.deleteById(id);
		} else {
			return new ResponseEntity(new CustomErrorType("Unable to delete. employee with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Employee>(HttpStatus.OK);
	}

}
