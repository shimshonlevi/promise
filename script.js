function soccessPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('המשימה הצליחה!');
        }, 2000);
    });
}
// soccessPromise().then((result) => console.log(result));

function fullName (firstName, lastName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${firstName} ${lastName}`);
        }, 2000);
    });
    }

fullName('shahar', 'shahar').then((result) => console.log(result));

function subtractTen (num) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(num - 10);
        }, 500);
    });
    }
// fullName('shahar', 'shahar').then((result) => console.log(result));

function subtractTen (num) {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(num - 10);
        }, 500);
    });
    }
function multiplyByTwo (num) {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(num * 2);
        }, 500);
    });
    }
function addFive (num) {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(num +10);
        }, 500);
    });
    }
 multiplyByTwo(10).then(subtractTen).then(multiplyByTwo).then(addFive).then((result) => console.log(result));

function divide(num1, num2) {
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
           if(num2 === 0) 
           reject('num2 cannot be 0');
           resolve(num1 / num2);
        }, 500);
    });
}
  divide(10, 2).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  })

  async function getFullName(firstName, lastName) {
    const Name = await fullName(firstName, lastName);

    Name.then((result) => console.log(result));
  }

  
  getFullName()
