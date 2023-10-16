/*Write a JavaScript program to target a given value in a nested JSON object based on the
given key*/
var employees = [ 
    { 
        "emp_id":101, 
        "empname":"Ram", 
        "salary":60000, 
        "address" :  
        { 
            "street-no":20, 
            "plot-no":121, 
            "city":"pune", 
            "contact" :  
            { 
                "landline" : 2292099, 
                "mobile" : 8907632178 
            } 
        } 
    }, 
    { 
        "emp_id":102, 
        "empname":"Shyam", 
        "salary":50000, 
        "address" :  
        { 
            "street-no":12, 
            "plot-no":221, 
            "city":"pune" 
        } 
    }, 
    { 
        "emp_id":103, 
        "empname":"Lakhan", 
        "salary":40000, 
        "address" :  
        { 
            "street-no":11, 
            "plot-no":432, 
            "city":"pune" 
        } 
    }, 
    { 
        "emp_id":104, 
        "empname":"Snigdha", 
        "salary":60000, 
        "address" :  
        { 
            "street-no":21, 
            "plot-no":222, 
            "city":"pune" 
        } 
    }] 
    console.log("EmployeeID: "+employees[3].emp_id);
    console.log("EmployeeName: "+employees[3].empname);
    console.log("Salary: "+employees[3].salary);
    console.log("Salary: "+employees[3].address["street-no"]);
    console.log("Salary: "+employees[3].address["plot-no"]);
    console.log("Salary: "+employees[3].address["city"]);
