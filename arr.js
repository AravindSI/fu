class student{
    static count=0;  //static variable to call
	constructor(name,age,ph_no,marks){
		this.name=name;
        this.age=age;
        this.ph_no=ph_no;
        this.marks=marks;
        student.countStudent();
 }
    static countStudent(){
    return(student.count++);     //this is how u access static variable
}
/*
eligible(){
        if(this.marks >=40){

		   console.log(`${this.name} age ${this.age} is eligible`);
        }
        else if(this.marks<40){

		   console.log(`${this.name} age ${this.age} is not eligible`);
        }
	}*/
setPlacementAge(minPlacementAge){
	return (minMarks) =>{
		console.log(this);
		if(this.mark>=minMarks && this.age>=minPlacementAge ){
			console.log(`${this.name} is ready for placements`);
		}
		else{
			console.log(`${this.name} is not ready for placements`);
		}
	};
}	
}
const arav=new student('arav',18,1234,34);
const abi=new student('abi',15,2345,35);
const Divya=new student('Divya',16,4567,60);
const Somu=new student('Somu',17,7891,70);
const Roopa=new student('Roopa',19,3456,80);
console.log(student.countStudent());
/*arav.eligible();
abi.eligible();
Divya.eligible();
Somu.eligible();
Roopa.eligible();*/
arav.setPlacementAge(18)(40);
abi.setPlacementAge(18)(40);
Divya.setPlacementAge(18)(40);
Somu.setPlacementAge(18)(40);
Roopa.setPlacementAge(18)(40);