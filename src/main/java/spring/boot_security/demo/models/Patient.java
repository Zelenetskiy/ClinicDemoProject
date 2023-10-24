package spring.boot_security.demo.models;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Collection;

@Entity
@Table(name = "patients")
@Data
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name ="name")
    private String name;
    @Column(name ="patronymic")
    private String patronymic;
    @Column(name ="last_name")
    private String last_name;
    @Column(name ="birthdate")
    private LocalDate birthdate;
    @Column(name ="phone")
    private Long phone;
    @Column(name ="polis_number")
    private Long polis_number;
    @Column(name ="pasport_id")
    private Long pasport_id;



    public Patient(String name, String patronymic, String last_name, LocalDate birthdate, Long phone) {
        this.name = name;
        this.patronymic = patronymic;
        this.last_name = last_name;
        this.birthdate = birthdate;
        this.phone = phone;
    }

    public Patient() {
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", patronymic='" + patronymic + '\'' +
                ", last_name='" + last_name + '\'' +
                ", birthdate=" + birthdate + '\'' +
                ", phone=" + phone +
                '}'
                ;
    }
}
