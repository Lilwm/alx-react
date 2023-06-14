import { Seq } from 'immutable';

const printBestStudents = (object) => {
  const seq = Seq(object);

  const getStudent = seq.filter((value) => value.score > 70);

  getStudent.map((student) => {
    student.firstName = student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1);
    student.lastName = student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1);
  });

  console.log(getStudent.toArray());
};

    
