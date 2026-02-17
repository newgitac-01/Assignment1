
//creating array
let students:string[] = ["Suresh","Mahesh","Naresh"];
let marks:number[] = [75, 80, 82];

//array to store updated marks
let updatedMarks: number[]=[];
let total:number=0;

// Adding 10 marks using assignment operator and calculating total
for(let i=0; i<marks.length;i++) {

updatedMarks[i]= marks[i];
updatedMarks[i]+=10;
total+=updatedMarks[i];

}
//calculating average
let average:number=total/marks.length;

//printing
console.log("updatedMarks: ");
for(let i=0; i<students.length;i++){

    console.log(students[i]+":"+updatedMarks[i]);

}
console.log("average marks: " +average);


