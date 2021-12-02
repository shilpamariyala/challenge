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

getUsers();