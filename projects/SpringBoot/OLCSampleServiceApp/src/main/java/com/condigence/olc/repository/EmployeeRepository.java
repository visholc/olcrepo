package com.condigence.olc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.condigence.olc.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
