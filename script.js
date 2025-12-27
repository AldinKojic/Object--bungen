// let myObject = {
//          'name':'Flo',
//          'age': '45',
//          'job' : 'Dönnermann',
//         'good_guy':true,

// };
//  console.table(myObject);

//  let myObject ={
//      'name': 'Aldin',
//     'age' : '22',
//      'logJob': function (number){                            //nennt man Methode ist das gleiche wie eine normale funktion
//              console.log('Dev-Mentor' + number)
//     },
//      'good_guy':true,
//  };

//  myObject.logJob(2026)

// let myObject ={
//      'name': 'Aldin',
//      'age' : '22',
//     'Job':'Dev-Mentor',
//     'good-guy':true,
// }

// let objKeys= Object.keys(myObject);
// let ourArray = []

// for (let i = 0; i < objKeys.length; i++) {
//     const element = objKeys[i];
//     ourArray.push(myObject[objKeys[i]])
// }

// console.log(ourArray);

let myObjectArr = [
  {
    name: "Max",
    is_a_good_guy: false,
  },
  {
    name: "Aldin",
    is_a_good_guy: true,
  },
  {
    name: "Homie",
    is_a_good_guy: true,
  },
  {
    name: "Florian",
    is_a_good_guy: true,
  },
  {
    name: "Thomas",
    is_a_good_guy: false,
  },
  {
    name: "Jake",
    mother: {
      name: "Jakes Mother",
      is_a_good_guy: false,
    },
  },
];

// console.log(
//   myObjectArr.findIndex((element) => {         // to find index 
//     return element.name === "Homie";
//   })
// );


// console.log(myObjectArr.filter(index => index['Homie']));

// oder element['is_a_good_guy']
// bei filter muss das was returned wird ein boolen sein also true oder false

// true oder false gibt dann raus wo es steht ! also in dem fall Jake Thomas und Max
