const campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

let tbody = document.querySelector('table tbody');

document.querySelector('.form')
.addEventListener('submit', event => {
    event.preventDefault();
    let tr = document.createElement('tr');
    campos.map( x => {
        let td = document.createElement('td');
        td.textContent = x.value;
        tr.appendChild(td);
    });
    let tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);
    tbody.appendChild(tr);
});
