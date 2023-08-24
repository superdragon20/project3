// var right = document.getElementById("right");
// var left = document.getElementById("left");
// var Array = [
//     "img/pexels-andrea-piacquadio-3866626.jpg", 
//     "img/pexels-cottonbro-studio-6803523 (1).jpg", 
//     "img/pexels-fox-1595391.jpg"]

// right.addEventListener('click', function(){
//     i++;
//     if (i > Array.length -1){
//         i = 0;
//     }
//     document.getElementById('img').src = Array[i];
// })

// var selectedRow = null


// function onFormSubmit(){
//     var formData = readFormData();
//     if (selectedRow == null){
//         insertNewRecord(formData);
//     }else{
//         updateRecord(formData);
//     }
//     resetForm();
//     console.log('process is good');
// }

// function readFormData(){
//     var formData = {};
//     formData["firstName"] = document.getElementById("firstName").value;
//     formData["secondName"] = document.getElementById("secondName").value;
//     formData["age"] = document.getElementById("age").value;
//     formData["email"] = document.getElementById("email").value;
//     formData["phone"] = document.getElementById("phone").value;
//     return formData;
// }

// function insertNewRecord(data){
//     var table = document.getElementById("employe").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.firstName;
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.secondName;
//     cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.age;
//     cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.email;
//     cell5 = newRow.insertCell(4);
//     cell5.innerHTML = data.phone;
//     cell6 = newRow.insertCell(5);
//     cell6.innerHTML = `<a onClick='onEdit(this)'>edit</a>`;
// }

// function resetForm(){
//     document.getElementById("firstName").value = "";
//     document.getElementById("secondName").value = "";
//     document.getElementById("age").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("phone").value = "";
//     selectedRow = null;
// }

// function onEdit(td){
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("secondName").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("age").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("email").value = selectedRow.cells[3].innerHTML;
//     document.getElementById("phone").value = selectedRow.cells[4].innerHTML;
// }

// function updateRecord(formData){
//     selectedRow.cells[0].innerHTML = formData.firstName;
//     selectedRow.cells[1].innerHTML = formData.secondName;
//     selectedRow.cells[2].innerHTML = formData.age;
//     selectedRow.cells[3].innerHTML = formData.email;
//     selectedRow.cells[4].innerHTML = formData.phone;

// }

var form = `<div>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control text-center" id="name" aria-describedby="emailHelp" placeholder="Enter name">
  </div>
  <div class="form-group">
    <label for="age">age</label>
    <input type="number" class="form-control text-center" id="age" placeholder="Enter age">
  </div>
  <div class="form-group">
    <label for="email">email</label>
    <input type="email" class="form-control text-center" id="email" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="phone">phone</label>
    <input type="number" class="form-control text-center" id="phone" placeholder="Enter number">
  </div>
  
  <button type="submit" class="btn btn-primary" onclick="save()">Submit</button>
</div>`;

var editForm = `<div>
<div class="form-group">
  <label for="exampleInputEmail1">Name</label>
  <input type="text" class="form-control text-center" id="name" aria-describedby="emailHelp" placeholder="Enter name">
</div>
<div class="form-group">
  <label for="age">age</label>
  <input type="number" class="form-control text-center" id="age" placeholder="Enter age">
</div>
<div class="form-group">
  <label for="email">email</label>
  <input type="email" class="form-control text-center" id="email" placeholder="Enter email">
</div>
<div class="form-group">
  <label for="phone">phone</label>
  <input type="number" class="form-control text-center" id="phone" placeholder="Enter number">
</div>

<button type="submit" class="btn btn-primary" onclick="update()">upbate</button>
</div>`;

document.getElementById("form").innerHTML = form;
details = [];

function table(){
    let table = `<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">age</th>
        <th scope="col">email</th>
        <th scope="col">number</th>
      </tr>
    </thead>
    <tbody>`
      for (let i = 0; i < details.length; i++){
        table = table + `<tr>
        <td class="col-1">${i+1}</td>
        <td class="col-1">${details[i].name}</td>
        <td class="col-1">${details[i].age}</td>
        <td class="col-1">${details[i].email}</td>
        <td class="col-1">${details[i].phone}</td>
        <td class="col-1"><button type="button" class="btn btn-danger" onclick="deleteData(${i})">delet inform</button></td>
        <td class="col-1"><button type="button" class="btn btn-primary" onclick="updatedata(${i})">update inform</button></td>
      </tr>`
      };

      table = table + `</tbody>
      </table>`;
      document.getElementById("table").innerHTML = table;
}

function save(){
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");

    let data = {
      name: name.value,
      age: age.value,
      email: email.value,
      phone: phone.value,

    };

    details.push(data);

    console.log(details);
    table()
};

function deleteData(index){
  details.splice(index, 1);
  console.log('delete works');
  console.log(details);
};





    
  