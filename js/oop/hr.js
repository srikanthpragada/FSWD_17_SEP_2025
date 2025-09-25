class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    // Methods 
    getSalary() {
        return this.salary
    }
}


e1 = new Employee("Martin", 1000000)
console.log(e1.getSalary(), e1.salary)

class OverseasEmployee extends Employee {
    constructor(name, salary, allowance) {
        super(name, salary)
        this.allowance = allowance 
    }

    // Overriding 
    getSalary() {
        return  this.salary + this.allowance
    }
}


oe1 = new OverseasEmployee("James", 1000000, 200000)
console.log(oe1.getSalary())

