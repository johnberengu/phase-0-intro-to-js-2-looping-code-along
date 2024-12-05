// Code your solutions in this file
// const names = ["Guadalupe", "Ollie", "Aki"]
// const writeCards = () => {
//     for (let i = 0; i < names.length; i++) {
          
//     }
// }
const writeCards = (names, event) => {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

  const countDown = () => {
    for (let i = 10; i >= 0 ; i--) {
        console.log(i);
        
    }
  };
  countDown()
  
  