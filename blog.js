const add = document.getElementById('add');

function update() {
    console.log(localStorage.getItem('data'));;
    var arr = JSON.parse(localStorage.getItem('data'));
    document.getElementById('container').innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        document.getElementById('container').innerHTML += `
        <h3 id="${i}">${arr[i].title}</h3>
        <p>${arr[i].summary}</p>
        <time>${arr[i].time}</time>
        <button onclick="deleteItem(${i})">Delete</button>
        <button onclick="onEdit(${i})">Edit</button>
        `;
    }
}

add.addEventListener('click', (e) => {
    e.preventDefault();
    var title = document.getElementById('title').value;
    var summary = document.getElementById('summary').value;
    var time = document.getElementById('time').value;
    if (title === '' || summary === '' || time === '') {
        alert('All fields are required');
    } else {
        if (localStorage.getItem('data')) {
            var arr = JSON.parse(localStorage.getItem('data'));
            arr.push({
                title: title,
                summary: summary,
                time: time
            });
            localStorage.setItem('data', JSON.stringify(arr));
        } else {
            var arr = [];
            arr.push({
                title: title,
                summary: summary,
                time: time
            });
            localStorage.setItem('data', JSON.stringify(arr));
        }
        update();
    }
});

function deleteItem(index) {
    var arr = JSON.parse(localStorage.getItem('data'));
    arr.splice(index, 1);
    console.log(arr);
    localStorage.setItem('data', JSON.stringify(arr));
    update();
}

function onEdit(index) {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
    
    var modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = `
        <fieldset>
            <legend>Edit an entry</legend>
            <label for="title">Title</label>
            <input type="text" name="title" id="title-edit" value="">
            <label for="time">Date</label>
            <input type="datetime" name="time" id="time-edit">
            <label for="summary">Summary</label>
            <input type="text" name="summary" id="summary-edit">
            <input id="edit" type="submit" onclick="editItem(${index})" value="Edit">
        </fieldset>
    `
}

function editItem(index) {
    var arr = JSON.parse(localStorage.getItem('data'));
    var title = document.getElementById('title-edit').value;
    var summary = document.getElementById('summary-edit').value;
    var time = document.getElementById('time-edit').value;

    if (title === '' || summary === '' || time === '') {
        alert('All fields are required');
    } else {
        arr[index].title = title;
        arr[index].summary = summary;
        arr[index].time = time;
        localStorage.setItem('data', JSON.stringify(arr));
        update();
    }
    modal.style.display = 'none';
}

window.onload = update();