class Employee {
    constructor(name, department, designation, salary, raiseEligible) {
        this.name = name;
        this.department = department;
        this.designation = designation;
        this.salary = salary;
        this.raiseEligible = raiseEligible;

    }
}

class Company {
    constructor(companyName, website) {
        this.companyName = companyName;
        this.website = website;
        this.employees = [];

        this.addEmployee = function(name, department, designation, salary, raiseEligible) {
            let newEmployee = new Employee(name, department, designation, salary, raiseEligible);
            this.employees.push(newEmployee);
        }

        this.giveRaise = function() {
            for (let i = 0; i < this.employees.length; i++) {
                if (this.employees[i].raiseEligible === "true") {
                    let newSalary = (this.employees[i].salary + (this.employees[i].salary * 0.1));
                    this.employees[i].salary = newSalary;
                    this.employees[i].raiseEligible = "false";
                }
                
            }
        }
        
    }
}

let company1 = new Company("Tech Stars", "www.techstars.site");

console.log(company1); // problem 2

company1.addEmployee("Sam", "Tech", "Manager", 40000, "true");
company1.addEmployee("Mary", "Finance", "Trainee", 18500, "true");
company1.addEmployee("Bill", "HR", "Executive", 21200, "false");

console.log(company1); // problem 1 and 2

company1.addEmployee("Anna", "Tech", "Executive", 25600, "false");

console.log(company1); // problem 3

let salaryTotal = 0; // declare salary total variable

for (let i = 0; i < company1.employees.length; i++) {
    salaryTotal += company1.employees[i].salary;
}

console.log(`Total salay is ${salaryTotal}`); // problem 4

company1.giveRaise();
console.log(company1); // problem 5

let workFromHome = "Working from home: ";
for (let i = 0; i < company1.employees.length; i++) {
    company1.employees[i].wfh = "false";
    if (company1.employees[i].name === "Anna" || "Sam") {
        company1.employees[i].wfh = "true";
        workFromHome += `${company1.employees[i].name}`;
        if (i != company1.employees.length - 1) {
            workFromHome += `, `;
        } else if (i == company1.employees.length - 1) {
            workFromHome += `.`;
        }

    }
}


console.log(workFromHome); // problem 6

