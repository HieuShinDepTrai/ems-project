package vn.com.viettel.emsbackend.mapper;

import vn.com.viettel.emsbackend.dto.DepartmentDto;
import vn.com.viettel.emsbackend.entity.Department;

public class DepartmentMapper {
    // convert department jpa entity into department dto
    public static DepartmentDto mapToDepartmentDto(Department department) {
        return new DepartmentDto(
                department.getId(),
                department.getDepartmentName(),
                department.getDepartmentDescription()
        );
    }

    // convert department dto jpa entity into department
    public static Department mapToDepartment(DepartmentDto departmentDto) {
        return new Department(
                departmentDto.getId(),
                departmentDto.getDepartmentName(),
                departmentDto.getDepartmentDescription()
        );
    }
}
