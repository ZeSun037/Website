const add = document.getElementById('add');

function update() {
    console.log(localStorage.getItem('data'));;
    var arr = JSON.parse(localStorage.getItem('data'));
    document.getElementById('container').innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        document.getElementById('container').innerHTML += `
        <fieldset>
            <div>
                <h3 id="${i}">${arr[i].title}</h3>
                <p>${arr[i].summary}</p>
                <time>${arr[i].time}</time>
            </div>
            <div>
                <a href="" onclick="onDelete(${i})" title="x icons"><img src="delete.png" width="20px" alt="Delete"></a>
                <a href="" onclick="onEdit(${i})" title="edit icons"><img src="edit.png" width="20px" alt="Edit"></a>
            </div>
        </fieldset>
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
        var form = document.getElementsByName('form')[0];
        form.reset();
        update();
    }
});

function onDelete(index) {
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
            <input id="edit" type="submit" onclick="editItem(${index}, ${true})" value="Edit">
            <input id="cancel" type="submit" onclick="editItem(${index}, ${false})" value="Cancel">
        </fieldset>
    `
}

function editItem(index, flag) {
    if (!flag) {
        modal.style.display = 'none';
        return;
    }
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