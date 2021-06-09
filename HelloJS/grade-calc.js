// Two arguments: Student Score, total Possible Score
// 15/20 => You got a C (75% (rounded));
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

function studentGrade(score,total) {
     total = prompt("How many questions were there?")
     score = prompt("How many did you get right?");

    let percentGrade = score/total * 100;
    if (percentGrade >= 90 && percentGrade <= 100) {
        console.log(`You got an A (${percentGrade.toFixed(2)})`) //2 decimal 
    } else if (percentGrade <= 89 && percentGrade >= 80) {
        console.log(`You got a B (${percentGrade.toFixed(2)})`)
    } else if (percentGrade <= 79 && percentGrade >= 70) {
        console.log(`You got a C (${percentGrade.toFixed(2)})`)
    } else if (percentGrade <= 69 && percentGrade >= 60) {
        console.log(`You got a D (${percentGrade.toFixed(2)})`)
    } else if (percentGrade <= 59) {
        console.log(`You got a F (${percentGrade.toFixed(2)})`)
    } else {
        console.log('Please enter a real score')
    }
}

function studentGradeTest(score,total) {
   let percentGrade = score/total * 100;
   if (percentGrade >= 90 && percentGrade <= 100) {
       console.log(`You got an A (${percentGrade.toFixed(2)})`) //2 decimal 
   } else if (percentGrade <= 89 && percentGrade >= 80) {
       console.log(`You got a B (${percentGrade.toFixed(2)})`)
   } else if (percentGrade <= 79 && percentGrade >= 70) {
       console.log(`You got a C (${percentGrade.toFixed(2)})`)
   } else if (percentGrade <= 69 && percentGrade >= 60) {
       console.log(`You got a D (${percentGrade.toFixed(2)})`)
    } else if (percentGrade <= 59) {
       console.log(`You got a F (${percentGrade.toFixed(2)})`)
   }
}


studentGrade(); //Cant get this to work

console.log("Testing with premade scores")
studentGradeTest(27,29);
studentGradeTest(24,29);
studentGradeTest(21,29);
studentGradeTest(18,29);
studentGradeTest(9,29);

