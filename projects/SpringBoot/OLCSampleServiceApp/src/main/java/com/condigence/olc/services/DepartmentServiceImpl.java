package com.condigence.olc.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.condigence.olc.bean.DepartmentBean;
import com.condigence.olc.dto.DepartmentDTO;
import com.condigence.olc.entity.Department;
import com.condigence.olc.repository.DepartmentRepository;

@Service
public class DepartmentServiceImpl implements DepartmentService {

	private final static Logger logger = LoggerFactory.getLogger(DepartmentServiceImpl.class);
	@Autowired
	DepartmentRepository repository;

	@Override
	public List<DepartmentDTO> getAllDepartment() {

		List<Department> depart = new ArrayList<Department>();

		depart = repository.findAll();

		List<DepartmentDTO> departdto = new ArrayList<DepartmentDTO>();

		for (Department d : depart) {

			DepartmentDTO dto = new DepartmentDTO();

			dto.setId(d.getId());
			dto.setName(d.getName());

			departdto.add(dto);
		}

		return departdto;
	}

	@Override
	public List<DepartmentDTO> getDepartmentId(Long id) {

		Optional<Department> getdepart;

		List<DepartmentDTO> getdepartdto = new ArrayList<DepartmentDTO>();

		getdepart = repository.findById(id);

		if (getdepart.isPresent()) {

			DepartmentDTO dt = new DepartmentDTO();

			Department dep = getdepart.get();
			dt.setId(dep.getId());
			dt.setName(dep.getName());

			getdepartdto.add(dt);

		}

		return getdepartdto;
	}

	@Override
	public DepartmentDTO saveDepartment(DepartmentBean bean) {

		Department savedepart = new Department();

		savedepart.setName(bean.getName());

		Department depart = repository.save(savedepart);

		logger.info("Saved!");

		DepartmentDTO dto = new DepartmentDTO();

		dto.setName(depart.getName());

		return dto;
	}

	@Override
	public DepartmentDTO updateDepartment(DepartmentDTO dto, Long id) {

		if (repository.findById(id).isPresent()) {
			Department update = repository.findById(id).get();

			update.setName(dto.getName());

			Department updatedepart = repository.save(update);
			logger.info("Updated!");

			DepartmentDTO updatedto = new DepartmentDTO();

			updatedto.setName(updatedepart.getName());

		}
		return dto;
	}

	@Override
	public void deleteDapertment(long id) {

		
	repository.deleteById(id);

		

	}
}
