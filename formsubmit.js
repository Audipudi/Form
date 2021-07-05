function createtrth(elementname, value = "") {
    var td = document.createElement(elementname);
    td.innerHTML = value;
    return td;
}


var table = document.createElement('table');
table.className = "table";

var thead = document.createElement('thead');
thead.className = "thead-dark";

var tr = document.createElement('tr');
var th1 = createtrth('th', 'First Name');
var th2 = createtrth('th', 'Last Name');
var th3 = createtrth('th', 'Address');
var th4 = createtrth('th', 'Pincode');
var th5 = createtrth('th', 'Gender');
//var th6 = createtrth('th', 'Choice of Food');
tr.append(th1, th2, th3, th4, th5);
thead.append(tr);
var tbody = document.createElement('tbody');


function myFunction() {
    document.getElementById("myForm").reset();
}

var temp = [];


function handleSubmit(event) {
    
    event.preventDefault();
    tbody.innerHTML = "";
    const data = new FormData(event.target);
    const FirstName = data.get('First Name');
    const LastName = data.get('Last Name');
    const address = data.get('address');
    const pincode = data.get('pincode');
    temp.push({ FirstName, LastName, address, pincode });
    //Object.assign(temp[0], { gender: "" });
    //temp.push({gender});
    //temp[0].gender="";
    //Object.assign(temp[0],{last:"audipudi"});
    /*if (data.get('male') === "on") {

        temp[0].gender = "Male";
        //Object.assign(temp[0],{gender:"Male"});
    }
    if (data.get('female') === "on") {
        //const gender = data.get('female');
        temp[0].gender = "Female";
        //Object.assign(temp[0],{gender:"Male"});
    }*/


    //console.log(FirstName, LastName, address, pincode, gender);
    //temp.push({ FirstName, LastName, address, pincode, gender });
    console.log(temp);
    for (i = 0; i < temp.length; i++) {
        temp[i].gender = "";
        if (data.get('male') === "on") {

            temp[i].gender = "Male";
            //Object.assign(temp[0],{gender:"Male"});
        }
        if (data.get('female') === "on") {
            //const gender = data.get('female');
            temp[i].gender = "Female";
            //Object.assign(temp[0],{gender:"Male"});
        }
        var tr = document.createElement('tr');
        var td1 = createtrth('td', temp[i].FirstName);
        var td2 = createtrth('td', temp[i].LastName);
        var td3 = createtrth('td', temp[i].address);
        var td4 = createtrth('td', temp[i].pincode);
        var td5 = createtrth('td', temp[i].gender);
        tr.append(td1, td2, td3, td4, td5);
        tbody.append(tr);


    }

    table.append(thead, tbody);
    document.body.append(table);
    myFunction();

}


const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
