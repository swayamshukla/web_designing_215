let employees = [];
function addEmployee() {
    let name = document.getElementById("name").value;
    let empID = document.getElementById("empID").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;
    if (name === "" || empID === "" || isNaN(salary) || dept === "") {
        alert("Please fill all fields correctly.");
        return;
    }
    let employee = {
        name: name,
        ID: empID,
        salary: salary,
        dept: dept
    };
    employees.push(employee);
    alert("Employee added successfully.");
    document.getElementById("name").value = "";
    document.getElementById("empID").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayEmployees() {
    let ouput = "<h3>All Employees</h3>";
    employees.forEach(emp => {
        ouput += `
        Name: ${emp.name} |
        ID: ${emp.ID} |
        Salary: ${emp.salary} |
        Department: ${emp.dept} <br>`;
    });
    document.getElementById("output").innerHTML = ouput;
    }

function filterSalary() {
    let filtered = employees.filter((emp) => emp.salary > 50000);
    let ouput = "<h3>Employees with Salary > 50000</h3>";
    filtered.forEach(emp => {
        ouput += `
        Name: ${emp.name} |
        ID: ${emp.ID} |
        Salary: ${emp.salary} |
        Department: ${emp.dept} <br>`;
    });
    document.getElementById("output").innerHTML = ouput; 
}    

function totalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("output").innerHTML = 
    "<h3>Total Salary Payout: " + total + "</h3>";
}

function averageSalary() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML = 
        "<h3>No employees records available.</h3>";
        return;
    }
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;
    document.getElementById("output").innerHTML = 
    "<h3>Average Salary: " + avg.toFixed(2) + "</h3>";
}

function countDepartment() {
    let deptName = prompt("Enter department name:");
    let count = employees.filter(emp => emp.department === deptName).length;
    document.getElementById("output").innerHTML = 
    "<h3>Employees in " + deptName + ": " + count + "</h3>";
}