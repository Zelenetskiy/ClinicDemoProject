package spring.boot_security.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import spring.boot_security.demo.models.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
}
