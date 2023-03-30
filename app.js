/*Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      newText: "",
      todoInfo: {
        done: false,
        text: "",
      },
      todoList: [],
    };
  },
  methods: {
    done(index) {
      if (this.todoList[index].done === false) {
        this.todoList[index].done = true;
        console.log("fatto");
      } else if (this.todoList[index].done === true) {
        this.todoList[index].done === false;
        console.log("da fare");
      }
    },
    removeTodo(index) {
      this.todoList.splice(index, 1);
    },
    addTodo() {
      if (this.newText.trim() !== "") {
        let { text, done } = this.todoInfo;
        text = this.newText;
        this.todoList.push({
          text,
          done,
        });
        this.newText = "";
      }
      

    },
   
  },
}).mount("#app");
