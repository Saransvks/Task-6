// class - person

class person{
    constructor(name,birthdate,age,degree,location)
    {
        this.name = name;
        this.birthdate = birthdate;
        this.age = age;
        this.degree = degree;
        this.location = location;
    }
}
var person1 = new person("Ram","7-6-1997","27","BE(Mech)","chennai");
var person2 = new person("Saran","1-5-2000","24","MBBS","chennai");

console.log(person1.name);
console.log(person1.birthdate);
console.log(person1.age);
console.log(person1.degree);
console.log(person1.location);

console.log(person2.name);
console.log(person2.birthdate);
console.log(person2.age);
console.log(person2.degree);
console.log(person2.location);