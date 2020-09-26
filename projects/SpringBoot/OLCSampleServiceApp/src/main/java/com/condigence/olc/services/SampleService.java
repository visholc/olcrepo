package com.condigence.olc.services;

import java.util.List;
import java.util.Optional;

import com.condigence.olc.bean.EmployeeBean;
import com.condigence.olc.dto.EmployeeDTO;
import com.condigence.olc.entity.Employee;

public interface SampleService {

	public List<EmployeeDTO> getAll();

	public EmployeeDTO save(EmployeeBean bean);

	public Optional<Employee> getById(Long id);

	public Employee update(Employee employee);

	public void deleteById(long id);

}
