// let myObject = {
//     'name':'Flo',
//     'age': '45',
//     'job' : {
//         'name': 'Dev-Mentor',
//         'company': {
//             'name': 'Homie',
//             'company': {
//                 'frau': 'keine'
//             }
//         }    
//     },
//     'good_guy':true,
// };
// console.log(myObject);



// let myObject ={
//     'name': 'Aldin',
//     'age' : '22',
//     'logJob': function (number){                            //nennt man Methode ist das gleiche wie eine normale funktion 
//             console.log('Dev-Mentor' + number)
//     },
//     'good_guy':true,
// };

// myObject.logJob(2026)



let myObject ={
     'name': 'Aldin',
     'age' : '22',
    'Job':'Dev-Mentor',
    'good-guy':true,
}

let objKeys= Object.keys(myObject);
let ourArray = []


for (let i = 0; i < objKeys.length; i++) {
    const element = objKeys[i];
    ourArray.push(myObject[objKeys[i]])
}

console.log(ourArray);

