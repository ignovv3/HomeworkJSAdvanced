// All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2

const url =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

fetch(url)
  .then((response) => response.json())
  .then((students) => {
    const studentsAvg3 = students.filter((student) => student.averageGrade > 3);

    const femStudentsAvg5 = students
      .filter(
        (student) => student.gender === "Female" && student.averageGrade === 5
      )
      .map((student) => student.firstName);

    const maleStudentsSkopje18 = students
      .filter(
        (student) =>
          student.gender === "Male" &&
          student.city === "Skopje" &&
          student.age >= 18
      )
      .map((student) => `${student.firstName} ${student.lastName}`);

      const avgGradesOfFemStudentsOver24 = students
      .filter(student => student.gender === 'Female' && student.age > 24)
      .reduce((sum, student) => sum + student.averageGrade, 0) /
      students.filter(student => student.gender === 'Female' && student.age > 24).length;

    const maleStudentsStartingWithBandGradeOver2 = students.filter(
      (student) =>
        student.gender === "Male" &&
        student.firstName.startsWith("B") &&
        student.averageGrade > 2
    );

    console.log("Students with Average grade over 3: ", studentsAvg3);
    console.log(
      "Female Student names with Average grade of 5: ",
      femStudentsAvg5
    );
    console.log(
      "Male Students that live in Skopje and are over 18 years old: ",
      maleStudentsSkopje18
    );
    console.log(
      "Average Grades of Female students over 24 years old: ",
      avgGradesOfFemStudentsOver24
    );
    console.log(
      "Male Students With names Starting with B and Average grade over 2: ",
      maleStudentsStartingWithBandGradeOver2
    );
  });
