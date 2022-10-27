let Students = [
    ["Jane", 15, "Math"],
    ["Sawyer", 12, "Art"],
    ["Pablo", 19, ['Biography', 'Chemistry', 'Music']]
    ];
    
    for (let i = 0; i< Students.length; i++){
        for (let k = 0; k < Students[i].length; k++){
            console.log(Students[i][k]);
            
    }console.log('~~~~~~~');
};

// Students.forEach(
//     function(student){
//     student.forEach(
//         function(details){
//         console.log(details);
//     });console.log('~~~~~~~')
// });