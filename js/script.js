
let nameUser = prompt("Come ti chiami?");
let surnameUser = prompt("Qual'è il tuo cognome?");
let colorUser = prompt("Qual'è il tuo colore preferito?");
let randomNumber = Math.floor(Math.random() * 100) + 1;


document.writeln(`${nameUser} ${surnameUser} ${colorUser} ${randomNumber}`);


