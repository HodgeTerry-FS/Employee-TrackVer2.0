class Employee{
    constructor(name,age,){
        this.name = name;
        this.age = age;
        //this.hrs = hrs
        this.annualSalary = 0;
    
    }
    
    }

class Manager extends Employee{
    constructor(name,age,payRate,hrs){
        super(name,age,);
        this.payRate = payRate;
        this.hrs = hrs;
        
        this.type = "Manager" ;
       
    }
    calculatePay(){
        this.annualSalary = ((this.payRate * 40)*52)-1000;
        
        
    }
}

class PartTime extends Employee{
    constructor(name,age,payRate,hrs){
        super(name,age,);
        this.payRate = payRate;
        this.hrs = hrs;
        this.type = "Part time"
    
    }
     calculatePay(){
        this.annualSalary = ((this.payRate * this.hrs*52));
    }
}

class Hr{
    constructor(){
        
        console.clear();
        
        console.log("Terry's Daddy DayCare");
        console.log("ID\   Name\  Age\   Salary\  Hrs\  Pay\  Type");
        let employee1 = new Manager("Tom",45,25,40);
        let employee2 = new PartTime("Dick",30,10,8);
        let employee3 = new PartTime("Harry",32,10,1);
        employee1.calculatePay();
        employee2.calculatePay();
        employee3.calculatePay();
        this.employees = [employee1,employee2,employee3];
         
         
        this.employees.forEach(e => {
          
            
            console.log((this.employees.indexOf(e)+1)+"    ",e.name,"  "+e.age, "  "+e.annualSalary, "   "+e.hrs,"  "+ e.payRate,"  "+ e.type);
            
            
        });
        this.displayMenu();

    }
    displayMenu(){
        let pick = Number(prompt("Main Menu\n1.Add Employee\n2.Remove Employee\n3.Edit Employee\n4.Display Emploee\n\n\nEnter selection" )); 
        switch(pick){
            case 1: this.addEmployee();
            break;
            case 2: this.removeEmployee();
            break;
            case 3: this.editEmployee();
            break;
            case 4: this.displayEmployee();
            break;
        }


    }
    addEmployee(){
        console.clear();
        
        let userEmployee = String(prompt("Add Employee Name,age,hours worked,pay rate [you MUST seperate each by a comma]"));

        let userArray = userEmployee.split(",");
        if (userArray[2] >= 40){
        this.employee4 = new Manager(userArray[0],userArray[1],userArray[2],userArray[3]);
        
        }
        else {this.employee4 = new PartTime(userArray[0],userArray[1],userArray[2],userArray[3]);
            

        }
        
         alert(userArray[0]+" Added.");
         console.log("Terry's Daddy DayCare");
         console.log("ID\tName\tAge\tSalary\tHrs\tPay\tType");
         this.employee4.calculatePay();
         this.employees.push(this.employee4);
         this.employees.forEach(e => {
            
            console.log((this.employees.indexOf(e)+1)+"    "+e.name,"  "+e.age, "  "+e.annualSalary, "   "+e.hrs,"  "+ e.payRate,"  "+ e.type);
            
        });
         
         this.displayMenu();
         
       
    }
    removeEmployee(){
        console.clear();
        
        this.employees.forEach(e => {
            
            console.log((this.employees.indexOf(e)+1)+"    "+e.name,"  "+e.age, "  "+e.annualSalary, "   "+e.hrs,"  "+ e.payRate,"  "+ e.type);
            
        });
        
        
        let removeNumber = String(prompt("Please type in the Name of the employee that you want to remove." )); 
        
        //if (removeNumber = Number){
          //  this.employees.forEach((e) =>{
          //      console.log(e);
          //  let removed = this.employees.filter(e => e[removeNumber] != removeNumber);
            
            
            
        
           // console.clear();
           // removed.forEach((e) => {
               
              // console.log((removed.indexOf(e)+1)+"    "+e.name,"  "+e.age, "  "+e.annualSalary, "   "+e.hrs,"  "+ e.payRate,"  "+ e.type);
           // })   
           // });
    // }
     
          
        //console.log(removeNumber)
        //}
        
       this.employees.forEach( (e) => {
            
        this.removed = this.employees.filter(e => e.name != removeNumber);
        console.log(this.removed);
        
        
    
        console.clear();
        this.removed.forEach((e) => {
           
            console.log((this.removed.indexOf(e)+1)+"    "+e.name,"  "+e.age, "  "+e.annualSalary, "   "+e.hrs,"  "+ e.payRate,"  "+ e.type);
            this.employees = this.removed;
        });
 })
    
        this.displayMenu();


    }
    editEmployee(){
        console.clear();
        
        
        this.employees.forEach(e => {
            
            console.log((this.employees.indexOf(e)+1)+"    "+e.name,"  "+e.age, "  "+e.annualSalary, "   "+e.hrs,"  "+ e.payRate,"  "+ e.type);
            
        });
        let selectEmployee = Number(prompt("Please type in the ID Number of the employee you would like to change the Pay Rate of."));
        let newPay = Number(prompt("Please tell me what the new pay rate for the employee you selected?"));
        
        //this.employees[selectEmployee -1].payRate
        this.employees[selectEmployee -1].payRate = newPay;
        this.employees[selectEmployee -1].calculatePay();
        
            //this.employees[selectEmployee].payRate = newPay;

            //this.employees[selectEmployee].push(newPay);
       
        console.clear();
       this.employees.forEach(e => {
        
          
        console.log((this.employees.indexOf(e)+1)+"    "+e.name,"  "+e.age, "  "+e.annualSalary, "   "+e.hrs,"  "+ e.payRate,"  "+ e.type);
        
    });
        

        this.displayMenu();


    }
    displayEmployee(){
        console.clear();
        
        
        this.employees.forEach(e => {
            
            console.log((this.employees.indexOf(e)+1)+"    "+e.name,"  "+e.age, "  "+e.annualSalary, "   "+e.hrs,"  "+ e.payRate,"  "+ e.type);
            
        });
          
        this.displayMenu();
        


    }
}


(e=>{
    
    const hr = new Hr();
})();