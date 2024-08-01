// ---- 1) Variables ------
console.log("Variables")
console.log("-------------------------------------------------")

let obj1 = {}
let useThisName = "varName"
obj1[useThisName] = 20;
console.log(eval(obj1))

// Using Map data Structure
// Dynamically naming variables and storing in map data structure
console.log("Using Map")
console.log("-------------------------------------------------")
let mp = new Map();
for (let i = 1; i <= 4; i++) {
    mp.set(`value${i}`, i);
}
mp.forEach((value, key) => {
    console.log(`${key} = ${value}`);
});

// using eval
console.log("Using eval()")
console.log("-------------------------------------------------")
let k = 'value';
let i = 0;
for (i = 1; i < 5; i++) {
    eval('var ' + k + i + '= ' + i + ';');
}
console.log("value1=" + value1);
console.log("value2=" + value2);
console.log("value3=" + value3);
console.log("value4=" + value4);


// ---- 2) Arrays -------------
console.log("Arrays")
console.log("-------------------------------------------------")

obj2 = {}
// function creating an 1D array 
console.log("-----1D array-----")
function createArrayDynamically(passName) {
    obj2[passName] = []
        for (let i = 0; i<5; i++) {
            obj2[passName].push(`${passName}${i+1}`)
        }
    }
passName = "student" // use employee, worker, etc.
createArrayDynamically(passName)
console.log(obj2[passName])

passName = "employee" // use employee, worker, etc.
createArrayDynamically(passName)
console.log(obj2[passName])


// Multi dimension array
console.log("-----Multi D array-----")
function createMultiDimArrayDynamically(passNameMulti, rows, cols) {
    obj2[passNameMulti] = []; 
    for (let i = 0; i < rows; i++) {
        obj2[passNameMulti][i] = []; 
        for (let j = 0; j < cols; j++) {
            obj2[passNameMulti][i].push(`${passNameMulti}${i + 1}_${j + 1}`);
        }
    }
}

var passNameMulti = "student"; // Use employee, worker, etc.
createMultiDimArrayDynamically(passNameMulti, 3, 3);
console.log(obj2[passNameMulti]); 

var passNameMulti = "employee"; // Use employee, worker, etc.
createMultiDimArrayDynamically(passNameMulti, 3, 4);
console.log(obj2[passNameMulti]); 


// using eval() 
console.log("-----using eval()-----")
eval("var a = \"Hello World!!!\"; console.log(a)")

console.log("-----eval can be vulnerable-----")
// Showing eval can be vulnerable
// modification 
console.log("value1 = " + value1);
console.log("Showing eval can modify")
eval("value1 = 20")
console.log("value1 = " + value1);

let check = 30 // make this to less than 20 to check
let err =  `if (20 > ${check}) \{ throw new Error(\"Application Interrupted\") \}`
eval(err)