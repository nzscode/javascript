{
    let sampleSentence = "Pavlo likes Tacos and he enjoys fruit";

    let search1 = "likes";
    let num = 1254;

    console.log(sampleSentence.charAt(2)); //v 
    console.log(sampleSentence.includes(search1)); //true
    console.log(sampleSentence.includes(search1, 10)); //false
    console.log(sampleSentence.indexOf(search1)); //6
    console.log(sampleSentence.lastIndexOf(search1)); //25
    console.log(sampleSentence.substring(6, 14)); //likes Ta
    console.log(sampleSentence.substring(6, -2)); //Pavlo 
    console.log(sampleSentence.substr(6, 3)); //lik
    console.log(sampleSentence.slice(6,14)); //6
    console.log(sampleSentence.slice(6,-2)); //likes Tacos and he enjoys fru
    console.log(sampleSentence.toUpperCase()); //PAVLO LIKES TACOS AND HE ENJOYS FRUIT
    console.log(sampleSentence.toLowerCase()); //pavlo likes tacos and he enjoys fruit
    console.log(sampleSentence.repeat(2)); //Pavlo likes Tacos and he enjoys fruitPavlo likes Tacos and he enjoys fruit
    console.log(sampleSentence.split('a')); //(4) ['P', 'vlo likes T', 'cos ', 'nd he enjoys fruit']
    console.log(sampleSentence.split(' ')); //(7) ['Pavlo', 'likes', 'Tacos', 'and', 'he', 'enjoys', 'fruit']
    console.log(num.toString());

}  


{
    let grades = [15,4,4,66,7,9,33,4,6,43,43,43];
    let largest = grades[0];
    
    for (let i = 0; i<grades.length; i++){
        if(grades[i]> largest){
            largest = grades[i];
        }
        
       
    
    }console.log(largest + " at index of " + grades.indexOf(largest));
}