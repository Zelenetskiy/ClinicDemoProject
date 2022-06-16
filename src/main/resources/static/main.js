
getAllUsers();
function getAllUsers() {
    fetch("/rest/admin")
        .then(res => res.json())
        .then(users => {
            let userToHTML = '';
                users.forEach(user => {
                    userToHTML += `
                        <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.last_name}</td>
                        <td>${user.age}</td>
                        <td>${user.email}</td>
                        <td>${user.roles.map(role => role.name.replace('ROLE_', '')).join(' ')}</td>
                        
                        <td><button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModalEdit" 
                        onclick="editUserById(${user.id})">Edit</button></td>
                                                
                        <td><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalDelete" 
                        onclick="deleteUserById(${user.id})">Delete</button></td>
                                                
                        </tr>       
                    `;
            });
            document.getElementById("allUserTable").innerHTML = userToHTML;
    });
}

function addUser() {

    let roles = document.getElementById('newRoles');
    let new_Roles = []
    for (let i = 0; i < roles.length; i++) {
        if (roles.options[i].selected) {
            new_Roles.push({"id": roles.options[i].value})
        }
    }
    let user = {
        name: document.getElementById('newName').value,
        last_name: document.getElementById('newLast_name').value,
        age: document.getElementById('newAge').value,
        email: document.getElementById('newEmail').value,
        username: document.getElementById('newUsername').value,
        password: document.getElementById('newPassword').value,
        roles: new_Roles
    }

    fetch("/rest/admin", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(user)
    })
        .then(() => {
            document.getElementById("nav-home-tab").click();
            getAllUsers();
            document.getElementById("addUserForm").reset();
    })
}

function editUserById(id) {
    fetch("/rest/admin/" + id, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        dataType: 'json'})
        .then(res => {res.json()
            .then(user => {
                document.getElementById('id1').value = user.id;
                document.getElementById('name1').value = user.name;
                document.getElementById('last_name1').value = user.last_name;
                document.getElementById('age1').value = user.age;
                document.getElementById('email1').value = user.email;
                document.getElementById('username1').value = user.username;
                document.getElementById('password1').value = user.password;
                document.getElementById('roles1').value = user.roles;

                console.log(user)
            })
        })
}

function editUser() {
    let roles = document.getElementById('roles1');
    let new_Roles = []
    for (let i = 0; i < roles.length; i++) {
        if (roles.options[i].selected) {
            new_Roles.push({"id": roles.options[i].value})
        }
    }
    let user = {
        id: document.getElementById('id1').value,
        name: document.getElementById('name1').value,
        last_name: document.getElementById('last_name1').value,
        age: document.getElementById('age1').value,
        email: document.getElementById('email1').value,
        username: document.getElementById('username1').value,
        password: document.getElementById('password1').value,
        roles: new_Roles
    }

    fetch("/rest/admin", {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(user)
    })
        .then(() => {
            console.log(user);
            document.getElementById("close1").click();
            getAllUsers();
        })
}

function deleteUserById(id) {
    fetch("/rest/admin/" + id, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        dataType: 'json'})
        .then(res => {res.json()
            .then(user => {
                document.getElementById('id2').value = user.id;
                document.getElementById('name2').value = user.name;
                document.getElementById('last_name2').value = user.last_name;
                document.getElementById('age2').value = user.age;
                document.getElementById('email2').value = user.email;
                document.getElementById('roles2').value = user.roles;

            })
        })
}

function deleteUser() {
    let id = document.getElementById('id2').value;
    fetch("/rest/admin/" + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        dataType: 'json'})
        .then(() => {
            document.getElementById("close2").click();
            getAllUsers();
        })

}
