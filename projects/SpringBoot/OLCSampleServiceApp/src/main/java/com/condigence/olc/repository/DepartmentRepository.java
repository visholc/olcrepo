package com.condigence.olc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.condigence.olc.entity.Department;

public interface DepartmentRepository extends JpaRepository<Department, Long> {

}
