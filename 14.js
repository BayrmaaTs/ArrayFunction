function ApplyingFn() {
 
    // Function that apply against accumulator
     //function (robj, key){

        // Limits for salary for persons
        var l1 = 'Below 30000';
        var l2 = 'Below 40000';
        var l3 = 'Below 50000';
        var l4 = 'Above 50000';

        // Checking salary of persons
        if (m[key] < 30000) {

            // Creating group for same
            // salary below Limits
            robj[l1].push(key);
        }
        if (m[key] < 40000) {

            // Creating group for same
            // salary below Limits
            robj[l2].push(key)
        }
        if (m[key] < 50000) {

            // Creating group for same
            // salary below Limits
            robj[l3].push(key)
        }
        else {

            // Creating group for same
            // salary below Limits
            robj[l4].push(key)
        }
        return robj;
    }

    // object for the salary
    var k = {
        'Below 30000': [], 'Below 40000': [],
        'Below 50000': [], 'Above 50000': []
    };

    var m = {
        'Rahul': 15000, 'Shyam': 220000,
        'David': 420000, 'Sam': 35000, 'Ram': 450000
    };

    // Apply Function against accumulator
    // and key of object
   // var l = Object.keys(m).reduce((accumulator, 
       // key) => function(accumulator, key), k);
    console.log(l);
//}
ApplyingFn();