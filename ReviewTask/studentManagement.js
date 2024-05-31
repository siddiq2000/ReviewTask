function addStudent() {

    var studentName = document.getElementById("name").value;
    var studentAge = document.getElementById("age").value;
    var studentEmail = document.getElementById("email").value;
    var studentPhone = document.getElementById("phone").value;
    var studentGender = document.querySelector('input[name="gender"]:checked').value;

    var newRow = "<tr>";
    newRow += "<td>" + studentName + "</td>";
    newRow += "<td>" + studentAge + "</td>";
    newRow += "<td>" + studentEmail + "</td>";
    newRow += "<td>" + studentPhone + "</td>";
    newRow += "<td>" + studentGender + "</td>";
    newRow += "<td><button style='padding:0 10px; background-color:#8013ae; color:white; border-radius:5px;' onclick='editStudent(this)'>Edit</button> <button style='padding:0 10px; background-color:#8013ae; color:white; border-radius:5px;' onclick='deleteStudent(this)'>Delete</button></td>";
    newRow += "</tr>";

    $("#studentTable tbody").append(newRow);

    $("#studentForm")[0].reset();
}

function deleteStudent(button) {
    $(button).closest("tr").remove();
}

function editStudent(button) {
    var row = $(button).closest("tr");
    var cells = row.find("td");

    var newName = prompt("Enter new name:", cells.eq(0).text());
    var newAge = prompt("Enter new age:", cells.eq(1).text());
    var newEmail = prompt("Enter new email:", cells.eq(2).text());
    var newPhone = prompt("Enter new phone:", cells.eq(3).text());
    var newGender = prompt("Enter new gender:", cells.eq(4).text());

    cells.eq(0).text(newName);
    cells.eq(1).text(newAge);
    cells.eq(2).text(newEmail);
    cells.eq(3).text(newPhone);
    cells.eq(4).text(newGender);
}

$(document).ready(function () {
    $("#studentForm").submit(function (event) {
        event.preventDefault();
        addStudent();
    });
});

