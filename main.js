name_of_the_student_array = [];

function submit() {
    var display_student_array = [];

    for (var j = 1; j <= 5; j++) {
        var name_of_the_student = document.getElementById("sentence_" + j).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
    }

    console.log(name_of_the_student_array);

    var lenght_of_name_of_students_array = name_of_the_student_array.length;
    console.log(lenght_of_name_of_students_array);

    for (var k = 0; k < lenght_of_name_of_students_array; k++) {
        display_student_array.push(name_of_the_student_array[k]);
        console.log(display_student_array);
    
}
var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("displaypara").innerHTML = remove_commas;

}

name_of_the_student_array2 = [];

function submit2() {
    var display_student_array2 = [];

    for (var k = 1; k <= 5; k++) {
        var name_of_the_student2 = document.getElementById("sentence_p" + k).value;
        console.log(name_of_the_student2);
        name_of_the_student_array2.push(name_of_the_student2);
    }

    console.log(name_of_the_student_array2);

    var lenght_of_name_of_students_array2 = name_of_the_student_array2.length;
    console.log(lenght_of_name_of_students_array2);

    for (var a = 0; a < lenght_of_name_of_students_array2; a++) {
        display_student_array2.push(name_of_the_student_array2[a]);
        console.log(display_student_array2);
    
}
var remove_commas2 = display_student_array2.join(" ");
    console.log(remove_commas2);
    document.getElementById("displaypara2").innerHTML = remove_commas2;

}