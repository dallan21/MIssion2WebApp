document.getElementById("submit").addEventListener("click", function () {

    //create variables and set them to the values pulled from the input

    assignments = $("#txtassignments").val()
    groupproject = $("#txtgroup").val()
    quizzes = $("#txtquiz").val()
    exam = $("#txtexam").val()
    intex = $("#txtintex").val()


    //Set up the calculation for the grade
    grade = (assignments * .55) + (groupproject * .05) + (quizzes * .10) + (exam * .20) + (intex * .10)


    if (grade >= 94 && grade <= 100) {
        alert("Great Job! You got an A: " + grade);

    } else if (grade >= 90 && grade < 94) {
        alert("Great Job! You got an A-: " + grade);

    } else if (grade >= 87 && grade < 90) {
        alert("Doing Good! You got a B+: " + grade);

    } else if (grade >= 84 && grade < 87) {
        alert("Nice! You got a B: " + grade);
         
    } else if (grade >= 80 && grade < 84) {
        alert("Good Work! You got a B-: " + grade);

    } else if (grade >= 77 && grade < 80) {
        alert("Keep Going! You got a C+: " + grade);

    } else if (grade >= 74 && grade < 77) {
        alert("Keep Going! You got a C: " + grade);

    } else if (grade >= 70 && grade < 74) {
        alert("Keep Working Hard! You got a C-: " + grade);

    } else if (grade >= 67 && grade < 70) {
        alert("Keep improving! You got a D+: " + grade);

    } else if (grade >= 64 && grade < 67) {
        alert("Almost There! You got a D: " + grade);

    } else if (grade >= 60 && grade < 64) {
        alert("Could Improve! You got a D-: " + grade);

    } else if (grade < 60) {
        alert("May Need To Try Harder! You got a E: " + grade);

    } else {
        alert("Enter a numeric value for your grade")
    }

})