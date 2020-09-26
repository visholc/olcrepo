package com.condigence.olc.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.condigence.olc.bean.EmployeeBean;
import com.condigence.olc.dto.EmployeeDTO;
import com.condigence.olc.entity.Employee;
import com.condigence.olc.repository.EmployeeRepository;

@Service
@Transactional
public class SampleServiceImpl implements SampleService {

	private final static Logger logger = LoggerFactory.getLogger(SampleServiceImpl.class);

	@Autowired
	EmployeeRepository repository;

	public List<EmployeeDTO> getAll() {
		List<Employee> personList = new ArrayList<Employee>();
		personList = repository.findAll();
		List<EmployeeDTO> persons = new ArrayList<EmployeeDTO>();
		for (Employee p : personList) {
			EmployeeDTO dto = new EmployeeDTO();
			dto.setId(p.getId());
			dto.setName(p.getName());
			persons.add(dto);
		}
		return persons;
	}

	public EmployeeDTO save(EmployeeBean bean) {
		Employee employee = new Employee();
		employee.setName(bean.getName());
		Employee emp = repository.save(employee);
		
		logger.info("Saved!");
		EmployeeDTO dto = new EmployeeDTO();
		dto.setName(emp.getName());

		return dto;
	}

	public Optional<Employee> getById(Long id) {
		return repository.findById(id);
	}

	public Employee update(Employee employee) {
		return repository.save(employee);
	}

	public void deleteById(long id) {
		repository.deleteById(id);
	}

}
