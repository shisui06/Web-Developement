
    

    const user = {
  name: "Tamoor",
  age: 36,
  isStudent: true,
  hobbies: ["coding", "music", "travel"],
  address: {
    city: "Montréal",
    postalCode: "H1A 2B3"
  }
};

const dev = {
name : "Tamoor",
language : "Francais",
country : "Canada",
experience : -1,
skills : ["html","javascript","react"],
contact : {
    email : "apou01@gmail.com",
    phone : 123-456-7890,
    }

};

for (let key in dev){
console.log(key,":",dev[key]);
}




