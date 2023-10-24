getAllPatients();

function getAllPatients() {
    fetch("/rest/patient")
        .then(res1 => res1.json())
        .then(patients => {
            let patientToHTML = '';
            patients.forEach(patient => {
                patientToHTML += `
                        <tr>
                        <td>${patient.id}</td>
                        <td>${patient.last_name}</td>
                        <td>${patient.name}</td>
                        <td>${patient.patronymic}</td>
         
                        <td>${patient.birthdate}</td>
                        <td>${patient.phone}</td>
                   

                        <td><button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModalEdit"
                        onclick="editPatientById(${patient.id})">Edit</button></td>

                        <td><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalDelete"
                        onclick="deletePatientById(${patient.id})">Delete</button></td>

                        </tr>
                    `;
            });
            document.getElementById("allPatientTable").innerHTML = patientToHTML;
        });
}
