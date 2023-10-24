const patientslist = [];

fetch("/rest/patient")
    .then(res1 => res1.json())
    .then(data => {
        data.forEach(patients => {
        patientslist.push(patients);
        });
        console.log('patients >>>>', patientslist);
    });

function getPatients(word, patients) {
return patients.filter(p => {
    const regex = new RegExp(word, 'gi');
    return p.last_name.match(regex);

})
}

function showOptions() {
console.log('this.value >>', this.value);
const options = getPatients(this.value, patientslist);
const html = options
    .map(patient => {

        const regex = new RegExp(this.value, 'gi');
        const patientName = patient.last_name.replace(regex,
            `<span style="background-color: yellow">${this.value}</span>`)
            + ' ' + patient.name + ' ' + patient.patronymic;

    return `<li><span onclick="console.log(${patient.id})">${patientName}</span></li>`;
})
    .slice(0,9)
    .join('');
    searchOptions.innerHTML=this.value ? html : null;
}

const searchInput = document.querySelector('.livesearсhpatient');
const searchOptions = document.querySelector('.options');

searchInput.addEventListener('change', showOptions);
searchInput.addEventListener('keyup', showOptions);
