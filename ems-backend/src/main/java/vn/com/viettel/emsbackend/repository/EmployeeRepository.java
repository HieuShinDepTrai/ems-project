package vn.com.viettel.emsbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.com.viettel.emsbackend.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
