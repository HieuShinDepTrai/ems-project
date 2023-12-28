package vn.com.viettel.emsbackend.service.impl;
import lombok.AllArgsConstructor;
import vn.com.viettel.emsbackend.dto.EmployeeDto;
import vn.com.viettel.emsbackend.entity.Employee;
import vn.com.viettel.emsbackend.mapper.EmployeeMapper;
import vn.com.viettel.emsbackend.repository.EmployeeRepository;
import vn.com.viettel.emsbackend.service.EmployeeService;
import org.springframework.stereotype.Service;
import vn.com.viettel.emsbackend.exception.ResourceNotFoundException;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDTO(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Employee not found with id: " + id));
        return EmployeeMapper.mapToEmployeeDTO(employee);
    }
}
