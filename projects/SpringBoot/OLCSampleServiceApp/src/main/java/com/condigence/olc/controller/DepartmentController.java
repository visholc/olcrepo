package com.condigence.olc.controller;

import java.util.ArrayList;
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

import com.condigence.olc.bean.DepartmentBean;
import com.condigence.olc.dto.DepartmentDTO;
import com.condigence.olc.entity.Employee;
import com.condigence.olc.exception.CustomErrorType;
import com.condigence.olc.services.DepartmentService;

@CrossOrigin(origins = "*")
@RestController
public class DepartmentController {


	
	@Autowired
	DepartmentService service;

	// Get Department
	@GetMapping("/v1/departments")

	public ResponseEntity<?> getAllDepartment() {

		return ResponseEntity.status(HttpStatus.OK).body(service.getAllDepartment());

	}

	// Read Department
	@GetMapping("/v1/departments/{id}")
	public ResponseEntity<?> getDepartId(@PathVariable("id") Long id) {

		List<DepartmentDTO> getdepartdto = new ArrayList<DepartmentDTO>();

		getdepartdto = service.getDepartmentId(id);

		if (!getdepartdto.isEmpty()) {

			return ResponseEntity.status(HttpStatus.OK).body(getdepartdto);

		} else {

			return new ResponseEntity<>(
					new CustomErrorType("Department not found. with Id " + id, HttpStatus.NOT_FOUND.toString()),
					HttpStatus.NOT_FOUND);
		}
	}

	// Create Department
	@PostMapping(value = "v1/departments")
	public ResponseEntity<?> saveDepartment(@RequestBody DepartmentBean bean) {

		DepartmentDTO savedepartdto = new DepartmentDTO();

		savedepartdto = service.saveDepartment(bean);

		if (savedepartdto != null) {

			return new ResponseEntity<DepartmentDTO>(savedepartdto, HttpStatus.CREATED);

		} else {

			return new ResponseEntity<>(new CustomErrorType("unable to save data ", HttpStatus.NOT_FOUND.toString()),
					HttpStatus.NOT_FOUND);
		}

	}

	// Update Department
	@PutMapping(value = "v1/departments/{id}")
	public ResponseEntity<?> updateDepartment(@RequestBody DepartmentBean bean, @PathVariable("id") Long id) {

		List<DepartmentDTO> departmentdto = new ArrayList<DepartmentDTO>();

		departmentdto = service.getDepartmentId(bean.getId());

		if (departmentdto.isEmpty()) {
			return new ResponseEntity<>(
					new CustomErrorType("Unable to upate. department with id " + bean.getId() + " not found."),
					HttpStatus.NOT_FOUND);
		} else {

			DepartmentDTO dto = new DepartmentDTO();

			if (!bean.getName().equalsIgnoreCase("")) {

				dto.setName(bean.getName());

			}

			service.updateDepartment(dto, id);

			return new ResponseEntity<DepartmentDTO>(dto, HttpStatus.OK);

		}
	}

	// Delete Department
	@DeleteMapping(value = "/v1/departments/{id}")
	public ResponseEntity<?> deleteDepartment(@RequestBody @PathVariable("id") Long id) {
		List<DepartmentDTO> deletedto = new ArrayList<DepartmentDTO>();

		deletedto = service.getDepartmentId(id);
		if (!deletedto.isEmpty()) {
			service.deleteDapertment(id);
		} else {
			return new ResponseEntity<>(
					new CustomErrorType("Unable to delete. department with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<DepartmentDTO>(HttpStatus.OK);

	}
}
