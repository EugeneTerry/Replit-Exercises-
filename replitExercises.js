console.log('////////////Iteration 2: Building a Sentence////////////')
let sentence = "";

/*
    1. Add all of the words in this array to the sentence. Use string interpolation or the plus sign.
    Make sure you add a space in between each word.
*/
const loveRelationship = [
  "I",
  "love",
  "sitting",
  "on",
  "the",
  "beach",
  "in",
  "the",
  "summer"
];


for (let i = 0; i < loveRelationship.length; i++) {
  sentence += loveRelationship[i]+ ' ';
}
  console.log(`${sentence}.`);
  console.log(`${loveRelationship.join(' ')}.`)
/*
    2. Add all of the words in this array to the sentence.
*/
const hateRelationship = [
  "but",
  "I",
  "hate",
  "spending",
  "the",
  "next",
  "two",
  "days",
  "with",
  "sunburn"
];

// Write another for loop for #2 here! 👇

for (let i = 0; i < hateRelationship.length; i++){
  sentence += hateRelationship[i]+ ' ';
}
console.log(sentence)

/*
  3. After you sentence is built, display it with `console.log()`
*/

/*
  ⚡ CHALLENGE ⚡
  1. Add your favorite color to the favoriteColor variable
  2. Write a for loop that loops over the 'colors' array
  3. In the for loop, write a conditional that checks to see IF the current color in the array matches what you put in the favoriteColor variable, if it does then log to the console: "{color} is a pretty dang good color"
  4. ELSE, log to the console: "{color} isn't really my favorite"
*/
const colors = ["red", "orange", "yellow", "green", "blue", "aquamarine", "indigo", "violet"]
const favoriteColor = "gray"
for (let i = 0; i < colors.length; i++){
  if (favoriteColor === colors[i]) {
    console.log(`${colors[i]} is a pretty dang good color`);
  } else {
    console.log(`${colors[i]} isn't really my favorite`)
  }
}

console.log('////////////Objects Flower Shop/////////')

const createTulip = () => {
    // Complete your tulip object here.
     tulip = {
      color: 'yellow',
      stemLength: 15,
      growingSeason: 'Spring',
      thorny: false
    };
  
    return tulip;
  
  };
  
  const createRose = () => {
    // Complete your rose object here.
    rose = {
      color: 'red',
      stemLength: 12,
      growingSeason: 'Summer',
      thorny: true
    };
  
    return rose;
  };
  
  
  // You don't have to understand what's happening here juuuust yet...
  const newTulip = createTulip();
  console.log(newTulip);
  
  const newRose = createRose();
  console.log(newRose);
  
  /*
    ⚡ CHALLENGE ⚡
    Using the 'newRose' and 'newTulip' variables, add 2 properties to the flowers using dot notation:
    - species: and it's value should be a string (you can just make this up)
    - bloomTime: and it's value should be the number of days the flower can be in bloom for
  
    And then log those variables to the console again!
  */
  newRose.species = "Trinity Plant";
  newRose.bloomTime = 75
  newTulip.species = "Remle Plant";
  newTulip.bloomTime = 80
  
  console.log(newTulip);
  
  console.log(newRose);

  console.log('//////Functions Intro 2: Paint the House and Pasta///////')

  /*
  Here's where the function is defined.
  - 'color' is the parameter, (the placeholder), for a string to be passed to the function
  - the function then can use the 'color' variable however it wants!
*/
const paintTheHouse = (color) => {
    // my job is to paint the house with a specific color
    return `I painted the house with ${color} paint`;
  };
  
  /*
    Here's where the function is invoked
  */
  const messageFromMinion = paintTheHouse('blue');
  const theBlueMessageFromMinion = paintTheHouse();
  
  console.log("PAINT THE HOUSE:")
  console.log(messageFromMinion)
  
  /*
    PART 2: What's missing?
    1. This function should log a nice greeting to anybody! In order for that to happen, we'll need a 'name' parameter. Go ahead and put it in there!
  */
  const sayHello = (name) => {
    console.log(`Hello there, ${name}`)
  }
  
  // 2. Pass in a string that has a name in it to make the console say hello! (Do it a few more times with different names!)
  console.log("Hello there")
  sayHello('Eugene')
  
  /*
    PART 3: Making Sandwiches 
    Let's pass more parameters and make some sandwiches! 😋
  
      1. Define a function called 'makeSandwich' that takes 3 parameters: protein, veggie, condiment
      2. The function should log to the console the completed sandwich request.
        EX: "I'll take a turkey, lettuce, and mustard sandwich please!"
  */
  const makeSandwich =(protein, veggie, condiment) => {
      console.log(`I'll take a ${protein}, ${veggie}, and ${condiment} sandwich please!`)
  }
  makeSandwich('turkey','spinish', 'BBQ');
  
  // 3. Invoke the makeSandwich function below the console.log and pass in the 3 arguments needed to make a sandwich
  
  
  // 4. Invoke it a few more times with different ingredients!
  
  
  
  /*
    ⚡💪 EXTRA CHALLENGE 💪⚡
  
    Below there is a 'makePasta' function that takes 3 arguments: a pasta shape, a pasta sauce, and a pasta topping.
      1. In the makePasta function, define a new variable called 'pastaObj' which will have an object as its value.
      2. The pastaObj will have 3 properties: shape, sauce, topping. The values of each property should be the corresponding variables defined in the parameter of the function.
      3. The makePasta function will then RETURN the pastaObj
  */
  
  const makePasta = (pastaShape, pastaSauce, pastaTopping) => {
    const pastaObj = {
      shape: pastaShape,
      sauce: pastaSauce,
      topping: pastaTopping
    }
  
    return pastaObj
  }
 //"Make sure to pass in a shape, a sauce, and a topping to make your pasta!
 
  const deliciousPasta = makePasta("bowtie", "tomato", "poop")
  
  

  const accuallyDelicousPasta = makePasta("bowtie", "tomato", "tomatoes")
  
  console.log('Once completed, you should see your new pasta object in the console!')
  console.log("CHALLENGE:")
  console.log(accuallyDelicousPasta)
  