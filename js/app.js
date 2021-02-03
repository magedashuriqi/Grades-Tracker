'use strict';

var courseArray=['Art','Arabic','English','Math','Science'];
studentTotal=[];
function Students (name,course){
    this.name=name;
    this.grades=0;
    this.course=course;
    studentTotal.push(this)
    Students.prototype.studentTotal;
}

//-----------------
function generateGrade(min,max){
    return Math.floor( Math.random()*((max-min+1)+min))
}
//generateGrade(0,100);
//------------
//create table

var tableInfo = document.getElementById('first-Row');

function addStudent(event){
    document.getElementById('submit')
    button.addEventListener('submit',submitter())
    console.log(event);
   stuName= event.target.names.value;
   stuCourse=event.target.courseName.value;
}
 addStudent();

function submitter(){
    var mainTable=document.getElementById('s-table');
    var studentRow=document.createElement('tr')
    mainTable.appendChild(studentRow);
    stuName=document.createElement('td');
    stuName.textcontent=Student.prototype.studentTotal.names
    stuName.appendChild(studentRow);
    var stugrade=document.createElement('td');
    stugrade.textcontent=generateGrade(0,100);
    stugrade.appendChild(studentRow);
    var stuCourse=document.createElement('td');
    stuCourse.textcontent=Student.prototype.studentTotal.course;
    studentRow.appendChild(stuCourse);
}