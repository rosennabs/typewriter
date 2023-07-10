//Animate the sentence, revealing one character 50ms at a time.

const sentence = "hello there from lighthouse labs";

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
};

//Add a new line character after the sentence appears
setTimeout(() => {
  process.stdout.write("\n");
}, delay);


