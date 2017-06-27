/**
 * Created by Andreea.Dima on 6/27/2017.
 */
var max = 0;
var maxFirstName = "";
var countPhone = [0,0,0,0,0,0,0,0,0,0];
var chrPhone = ['0','1','2','3','4','5','6','7','8','9'];
var averageSalary = 0;
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456889',
        salary: 6000
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123111789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 2000
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 9000
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    }
    ];

function showList(){
    var myTable = '<table class="table table-striped" border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone' +
        '</th><th> Salary</th><th> Euro Value</th><th>View</th><th> Delete</th></tr>';

    for(var i in employeesList){
        var count = 0;
        for(var j = parseInt(i) + 1; j < employeesList.length ; j++){
            if(employeesList[i].firstName == (employeesList[j].firstName)){
                count ++;
            }
        }
        if(count > max){
            max = count;
            maxFirstName = employeesList[i].firstName;
        }
    }
    count = 1;
    for(var i in employeesList){
        for(var j = parseInt(i) + 1; j < employeesList.length ; j++){
            if(employeesList[i].lastName == (employeesList[j].lastName)){
                count++;
            }
        }
    }

    for(var i in employeesList) {
        var phone = employeesList[i].phone;

        for (var j = 0; j < phone.length; j++) {
            countPhone[parseInt(phone.charAt(j))]++;
        }
    }

    for(var k in countPhone){
        console.log(chrPhone[k]+ " " + countPhone[k] + " " );
    }

        var aux;
        for (var i in countPhone)
            for (var j = parseInt(i) + 1; j < countPhone.length; j++)
              if(countPhone[i]<countPhone[j])
            {
                aux = countPhone[i];
                countPhone[i] = countPhone[j];
                countPhone[j] = aux;
                aux = chrPhone[i];
                chrPhone[i] = chrPhone[j];
                chrPhone[j] = aux;


            }
        var stringnumber = " ";
        for (var i = 0; i <= 3; i++) {
            stringnumber += chrPhone[i]+ ",";
        }
        stringnumber += chrPhone[4];

        console.log("sortat");
        for(var k in countPhone){
         console.log(chrPhone[k]+ " " + countPhone[k] + " " );
        }
    var sum = 0;
    for(var i in employeesList){
          sum+= employeesList[i].salary;
    }
    averageSalary = sum / employeesList.length;

    for(var i in employeesList){
        myTable += '<tr>' +
            '<td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>'
            + employeesList[i].phone + '</td><td>' + employeesList[i].salary + '</td><td>' + employeesList[i].euroValue + '</td>' +
            '<td>' + '<button id="viewButton" onclick="viewRow('+i+')">View </button>' + '</td><td>' + '<button id="deleteButton" onclick="deleteRow(' + i + ')">Delete </button>'+ '</tr>';

    }
    myTable += '<tr>'+ '<td>' +  maxFirstName  + '</td><td>' + (employeesList.length - parseInt(count) )+ '</td>' +'<td>'+stringnumber+'</td><td>'+
        averageSalary + '</td></tr>';
    myTable += '</table>';

    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function(firstName, lastName, phone, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName,lastName,phone,salary));
    showList();
}

function totalSum() {
    var sum = 0;

    for(i in employeesList){
        sum += employeesList[i].salary;
    }

    var container = document.getElementById('textSum');
    container.textContent = "Total Salary " +sum;

}

function deleteLastEmployee(){
    employeesList.pop();

   showList();
}

function convert(){
    for(var i in employeesList){
        employeesList[i].euroValue = employeesList[i].salary / 4.5;
    }
    showList();
}

function viewRow(i){
    alert(employeesList[i].firstName + ' ' + employeesList[i].lastName + ' ' + employeesList[i].salary +
        ' ' + employeesList[i].phone + ' ' + employeesList[i].euroValue);
}

function deleteRow(i){
    employeesList.splice(i,1);
    showList();
}

function SortByInput(){
    switch(parseInt(document.getElementById("sortInput").value)){
        case 1:{
            employeesList.sort(function (employee1, employee2) {
                if( employee1.firstName < employee2.firstName)
                    return -1;
                if( employee1.firstName == employee2.firstName)
                    return 0;
                if( employee1.firstName > employee2.firstName)
                    return 1;
            });
            showList();
        }

        case 2:{
            employeesList.sort(function (employee1, employee2) {
                if( employee1.lastName < employee2.lastName)
                    return -1;
                if( employee1.lastName == employee2.lastName)
                    return 0;
                if( employee1.lastName > employee2.lastName)
                    return 1;
            });
            showList();
        }

        case 3:{
            employeesList.sort(function (employee1, employee2) {
                if( employee1.phone < employee2.phone)
                    return -1;
                if( employee1.phone == employee2.phone)
                    return 0;
                if( employee1.phone > employee2.phone)
                    return 1;
            });
            showList();
        }

        case 4:{
            employeesList.sort(function (employee1, employee2) {
                if( employee1.salary < employee2.salary)
                    return -1;
                if( employee1.salary == employee2.salary)
                    return 0;
                if( employee1.salary > employee2.salary)
                    return 1;
            });
            showList();
        }

    }
}
function SearchtByInput(){
    var inputContent = document.getElementById("searchInput").value;
    for(var i in employeesList){
        if(employeesList[i].firstName == inputContent || employeesList[i].lastName == inputContent ||
        employeesList[i].salary == parseInt(inputContent) || employeesList[i].phone == parseInt(inputContent) ){
            alert(employeesList[i].firstName + " " + employeesList[i].lastName + " " + employeesList[i].phone + " "+
            employeesList[i].salary)
        }

    }
}