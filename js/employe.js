const employees = [
    { id: 1, name: "Alice Johnson", age: 28, department: "Marketing", salary: 55000, position: "Manager" },
    { id: 2, name: "Bob Smith", age: 34, department: "Sales", salary: 62000, position: "Executive" },
    { id: 3, name: "Charlie Adams", age: 25, department: "IT", salary: 48000, position: "Support Engineer" },
    { id: 4, name: "Diana Brown", age: 45, department: "HR", salary: 68000, position: "HR Manager" },
    { id: 5, name: "Evan Davis", age: 39, department: "Finance", salary: 71000, position: "Accountant" },
    { id: 6, name: "Faith White", age: 29, department: "Marketing", salary: 53000, position: "Coordinator" },
    { id: 7, name: "George Thompson", age: 32, department: "Sales", salary: 60000, position: "Sales Rep" },
    { id: 8, name: "Helen Miller", age: 27, department: "IT", salary: 50000, position: "Developer" },
    { id: 9, name: "Ian Wilson", age: 41, department: "Operations", salary: 64000, position: "Operations Manager" },
    { id: 10, name: "Jenny Lee", age: 36, department: "Finance", salary: 72000, position: "Financial Analyst" },
    { id: 11, name: "Karl Robinson", age: 26, department: "IT", salary: 52000, position: "Developer" },
    { id: 12, name: "Linda Walker", age: 30, department: "Marketing", salary: 56000, position: "Specialist" },
    { id: 13, name: "Mike Hall", age: 33, department: "Sales", salary: 61000, position: "Sales Rep" },
    { id: 14, name: "Nina Young", age: 43, department: "HR", salary: 69000, position: "HR Coordinator" },
    { id: 15, name: "Oscar King", age: 40, department: "Finance", salary: 73000, position: "Auditor" },
    { id: 16, name: "Paula Wright", age: 35, department: "IT", salary: 54000, position: "System Analyst" },
    { id: 17, name: "Quincy Baker", age: 29, department: "Sales", salary: 59000, position: "Sales Rep" },
    { id: 18, name: "Rita Scott", age: 31, department: "Operations", salary: 63000, position: "Coordinator" },
    { id: 19, name: "Steve Green", age: 44, department: "Finance", salary: 75000, position: "Financial Advisor" },
    { id: 20, name: "Tina Harris", age: 25, department: "Marketing", salary: 51000, position: "Associate" },
    { id: 21, name: "Ursula Nelson", age: 42, department: "HR", salary: 70000, position: "Recruiter" },
    { id: 22, name: "Victor Carter", age: 39, department: "IT", salary: 58000, position: "Security Specialist" },
    { id: 23, name: "Wendy Mitchell", age: 27, department: "Sales", salary: 57000, position: "Sales Associate" },
    { id: 24, name: "Xander Perez", age: 30, department: "Operations", salary: 62000, position: "Operations Analyst" },
    { id: 25, name: "Yasmin Reed", age: 38, department: "Marketing", salary: 54000, position: "Manager" },
    { id: 26, name: "Zane Bryant", age: 37, department: "IT", salary: 56000, position: "Network Engineer" },
    { id: 27, name: "Amber Foster", age: 35, department: "HR", salary: 66000, position: "Coordinator" },
    { id: 28, name: "Brian Gonzales", age: 29, department: "Finance", salary: 69000, position: "Analyst" },
    { id: 29, name: "Carla Hayes", age: 31, department: "Sales", salary: 60000, position: "Sales Rep" },
    { id: 30, name: "Daniel Jenkins", age: 28, department: "IT", salary: 51000, position: "Support Engineer" },
    { id: 31, name: "Ella Price", age: 33, department: "Operations", salary: 68000, position: "Coordinator" },
    { id: 32, name: "Frank Lewis", age: 45, department: "Finance", salary: 76000, position: "Controller" },
    { id: 33, name: "Grace Morgan", age: 27, department: "Marketing", salary: 53000, position: "Assistant" },
    { id: 34, name: "Henry Rivera", age: 32, department: "Sales", salary: 62000, position: "Executive" },
    { id: 35, name: "Irene Cooper", age: 44, department: "HR", salary: 70000, position: "Manager" },
    { id: 36, name: "Jack Bailey", age: 36, department: "IT", salary: 55000, position: "Tech Lead" },
    { id: 37, name: "Kelly Anderson", age: 30, department: "Operations", salary: 64000, position: "Supervisor" },
    { id: 38, name: "Leonard Martinez", age: 28, department: "Finance", salary: 69000, position: "Financial Analyst" },
    { id: 39, name: "Mia Powell", age: 35, department: "Marketing", salary: 55000, position: "Coordinator" },
    { id: 40, name: "Nate Bell", age: 41, department: "Sales", salary: 65000, position: "Sales Manager" },
    { id: 41, name: "Olivia Barnes", age: 29, department: "HR", salary: 67000, position: "Recruiter" },
    { id: 42, name: "Paul Ross", age: 33, department: "IT", salary: 60000, position: "Developer" },
    { id: 43, name: "Quinn Murphy", age: 28, department: "Operations", salary: 62000, position: "Coordinator" },
    { id: 44, name: "Rose Sanchez", age: 38, department: "Finance", salary: 72000, position: "Auditor" },
    { id: 45, name: "Sam Phillips", age: 26, department: "Marketing", salary: 51000, position: "Assistant" },
    { id: 46, name: "Tracy Evans", age: 31, department: "Sales", salary: 58000, position: "Sales Associate" },
    { id: 47, name: "Uma Carter", age: 37, department: "HR", salary: 71000, position: "HR Specialist" },
    { id: 48, name: "Victor Diaz", age: 32, department: "IT", salary: 56000, position: "Security Analyst" },
    { id: 49, name: "Wanda Thompson", age: 40, department: "Operations", salary: 69000, position: "Operations Manager" },
    { id: 50, name: "Xenia Foster", age: 25, department: "Finance", salary: 68000, position: "Assistant" }
];

console.log(employees);

function getEmp(){
    str=``
    employees.map((emplo)=>{
        str+=`
        <tr>
            <th scope="row">${emplo.id}</th>
            <td>${emplo.name}</td>
            <td>${emplo.age}</td>
            <td>${emplo.department}</td>
            <td>${emplo.salary}</td>
            <td>${emplo.position}</td>
        </tr>`
    })
    document.getElementById("emp").innerHTML=str
}

getEmp()

document.getElementById("search").addEventListener("keyup",(e)=>{
    // console.log(e.target.value);
    const filterData=employees.filter((emp)=>{
        return emp.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    })
    // console.log(filterData);
    str=``
    filterData.map((emp)=>{ 
        str+=`
        <tr>
            <th scope="row">${emp.id}</th>
            <td>${emp.name}</td>
            <td>${emp.age}</td>
            <td>${emp.department}</td>
            <td>${emp.salary}</td>
            <td>${emp.position}</td>
        </tr>`
    })
    document.getElementById("emp").innerHTML=str
    
    
})