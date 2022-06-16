pageUser();

function pageUser() {
    fetch("/api/user")
        .then(res => res.json())
        .then(user => {
            console.log(user)
            let userPage = '';
            let navbar = '';
            userPage += `
                        <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.last_name}</td>
                        <td>${user.age}</td>
                        <td>${user.email}</td>
                        <td>${user.roles.map(role => role.name.replace('ROLE_', '')).join(' ')}</td>                                                          
                        </tr>       
                    `;
            navbar += `
                        <a class="font-weight-bold" >${user.email}</a>
                        <a> with roles: </a>
                        <a>${user.roles.map(role => role.name.replace('ROLE_', '')).join(' ')}</a>       
                    `;
            document.getElementById("pageUser").innerHTML = userPage;
            document.getElementById("navbar-header").innerHTML = navbar;
        });
}