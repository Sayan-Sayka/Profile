let people = {
    worker1:{
        name:"Mike",
        age:25,
        gender:"Male",
        occupation:"Biology engineer",
        gmail:"peacevoid.mike@gmail.com",
        phone:"8832-6065",
    },
    worker2:{
        name:"Tutu",
        age:26,
        gender:"Male",
        occupation:"Guitarist, Musician",
        gmail:"Tutu-tutu@gmail.com",
        phone:"8894-7610",
    },
    worker3:{
        name:"Saik",
        age:25,
        gender:"Male",
        occupation:"Data analysist",
        gmail:"saigmagod.b@gmail.com",
        phone:"88308670",
    },
    worker4:{
        name:"Emma",
        age:22,
        gender:"Female",
        occupation:"Marketing management",
        gmail:"emma-emma@yahoo.com",
        phone:"9436-0109",
    },
    worker5:{
        name:"Mia",
        age:23,
        gender:"Female",
        occupation:"Neuroscientist",
        gmail:"miawmiow3@yahoo.com",
        phone:"9959-2278",
    },
}
const input = document.getElementsByTagName('input')[0];
const addBtn = document.getElementsByTagName('button')[0];
const name = document.querySelector('.name');
const age = document.querySelector('.age');
const gender = document.querySelector('.gender');
const occupation = document.querySelector('.occupation');
const gmail = document.querySelector('.gmail');
const phone = document.querySelector('.phone');
addBtn.addEventListener('click', ()=>{
    for(key in people){
        if(input.value==people.worker1.name){
            name.innerText="Name: "+people.worker1.name;
            age.innerText="Age: "+people.worker1.age;
            gender.innerText="Gender: "+people.worker1.gender;
            occupation.innerText="Occupation: "+people.worker1.occupation;
            gmail.innerText="Gmail: "+people.worker1.gmail;
            phone.innerText="Phone number: "+people.worker1.phone;
        }else if(input.value==people.worker2.name){
            name.innerText="Name: "+people.worker2.name;
            age.innerText="Age: "+people.worker2.age;
            gender.innerText="Gender: "+people.worker2.gender;
            occupation.innerText="Occupation: "+people.worker2.occupation;
            gmail.innerText="Gmail: "+people.worker2.gmail;
            phone.innerText="Phone number: "+people.worker2.phone;
        }else if(input.value==people.worker3.name){
            name.innerText="Name: "+people.worker3.name;
            age.innerText="Age: "+people.worker3.age;
            gender.innerText="Gender: "+people.worker3.gender;
            occupation.innerText="Occupation: "+people.worker3.occupation;
            gmail.innerText="Gmail: "+people.worker3.gmail;
            phone.innerText="Phone number: "+people.worker3.phone;
        }else if(input.value==people.worker4.name){
            name.innerText="Name: "+people.worker4.name;
            age.innerText="Age: "+people.worker4.age;
            gender.innerText="Gender: "+people.worker4.gender;
            occupation.innerText="Occupation: "+people.worker4.occupation;
            gmail.innerText="Gmail: "+people.worker4.gmail;
            phone.innerText="Phone number: "+people.worker4.phone;
        }else if(input.value==people.worker5.name){
            name.innerText="Name: "+people.worker5.name;
            age.innerText="Age: "+people.worker5.age;
            gender.innerText="Gender: "+people.worker5.gender;
            occupation.innerText="Occupation: "+people.worker5.occupation;
            gmail.innerText="Gmail: "+people.worker5.gmail;
            phone.innerText="Phone number: "+people.worker5.phone;
        }else{
            alert("You need to enter one of these names: Mike, Tutu, Saik, Emma and Mia");
        }
    }
});