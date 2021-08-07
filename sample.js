const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let booksData = ["Bhagavadgita", "Maha Bharatham", "Harry Potter"];

input.setPrompt(
  "Please choose any one option: 1 - Show all books, 2 - Add a new book, 3 - Quit\n"
);
input.prompt();

input.on("line", (num) => {
  if (num == 1) {
    console.log(booksData);
  } else if (num == 2) {
    input.question("Please enter the name of the book\n", (name) => {
      booksData.push(name);
      console.log(`Book has been added successfully!`);
      input.prompt();
    });
  } else if (num == 3) {
    input.question(
      "Are you sure you want to quit - press Y to quit\n",
      (yes) => {
        if (yes == "y" || yes == "Y") {
          input.close();
        } else {
          input.prompt();
        }
      }
    );
  } else {
    console.log(
      `You have selected an invalid entry so please choose 1, 2 or 3\n`
    );
  }
  // input.prompt();
});
input.on("close", () => {
  console.log("Bye Bye");
});
