package spring.boot_security.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import spring.boot_security.demo.models.Patient;
import spring.boot_security.demo.repository.PatientRepository;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService {

    private final PatientRepository patientRepository;


    @Autowired
    public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }


    @Override
    @Transactional
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @Override
    @Transactional
    public void addPatient(Patient patient) {
        patientRepository.save(patient);
    }

    @Override
    @Transactional
    public void removePatient(Long id) {
        patientRepository.deleteById(id);
    }

    @Override
    @Transactional
    public Patient getPatientById(Long id) {
        return patientRepository.getById(id);
    }


}
