var arr = [{name: 'Ivan ' , age: 18 }, 
           {name: 'Petr ', age: 12}, 
           {name: 'Sidor ', age: 25}, 
           {name: 'Pavel ', age: 24}, 
           {name: 'Sasha ', age: 29}
];
var childUsers = [];
var oldUsers = [];

for(var i = 0; i < arr.length; i++) {
    if(arr[i].age < 18){
    childUsers.push(arr[i])
    } else {
    oldUsers.push(arr[i])
    }
}
console.log (childUsers[0].age);
console.log (oldUsers[0].age, oldUsers[1].age, oldUsers[2].age)