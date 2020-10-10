package com.condigence.olc.services;

import java.util.List;


import com.condigence.olc.bean.DepartmentBean;
import com.condigence.olc.dto.DepartmentDTO;

public interface DepartmentService {

	public List<DepartmentDTO> getAllDepartment();

	public List<DepartmentDTO> getDepartmentId(Long id);

	public DepartmentDTO saveDepartment(DepartmentBean bean);

	public DepartmentDTO updateDepartment(DepartmentDTO dto, Long id);

	public void deleteDapertment(long id);

}
