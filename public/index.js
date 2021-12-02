async function getUsers() {
    const res = await fetch('http://localhost:3000/users');
    const result = await res.json();
    const tableBody = document.getElementById('user_table_body');
    for(let i=0; i<result.length; i++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.appendChild(document.createTextNode(result[i].username));
        td2.appendChild(document.createTextNode(result[i].age));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tableBody.appendChild(tr);
    }
    document.getElementById("age_table").style.display='none';
}


async function getAgeDemographicInfo(item) {
    const res = await fetch(`http://localhost:3000/users/age/${item}`);
    const result = await res.json();
    document.getElementById("age_table").style.display='table';
    const tableBody = document.getElementById('age_table_body');
    tableBody.innerHTML = '';
    const ageKeys = Object.keys(result);
    for(let i=0; i<ageKeys.length; i++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.appendChild(document.createTextNode(ageKeys[i]));
        td2.appendChild(document.createTextNode(result[ageKeys[i]]));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tableBody.appendChild(tr);
    }
}

getUsers();