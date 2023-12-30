package vn.com.viettel.emsbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.com.viettel.emsbackend.entity.Department;

public interface DepartmentRepository extends JpaRepository<Department, Long> {

}

