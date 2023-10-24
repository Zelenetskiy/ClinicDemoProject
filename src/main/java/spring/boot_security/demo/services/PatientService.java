package spring.boot_security.demo.services;

import spring.boot_security.demo.models.Patient;
import spring.boot_security.demo.models.User;

import java.util.List;

public interface PatientService {
    List<Patient> getAllPatients();
    void addPatient(Patient patient);
    void removePatient(Long id);
    Patient getPatientById(Long id);
}
