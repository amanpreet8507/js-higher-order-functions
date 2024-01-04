/* --------------------------------------------------------
 * Movie Data to use during lab
 */
const movies = [
  {
    title: 'Jurassic Park',
    year: 1993,
    genres: ['action', 'adventure', 'sci-fi'],
  },
  {
    title: 'Back to the Future',
    year: 1985,
    genres: ['adventure', 'comedy', 'sci-fi'],
  },
  {
    title: 'Aliens',
    year: 1986,
    genres: ['action', 'adventure', 'sci-fi'],
  },
  {
    title: 'Indiana Jones and the Raiders of the Lost Ark',
    year: 1981,
    genres: ['action', 'adventure'],
  },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
    genres: ['action', 'adventure', 'fantasy', 'sci-fi'],
  },
  {
    title: 'Total Recall',
    year: 1990,
    genres: ['action', 'sci-fi', 'thriller'],
  },
  {
    title: 'Mrs. Doubtfire',
    year: 1993,
    genres: ['comedy', 'drama', 'family'],
  },
  {
    title: 'Hook',
    year: 1991,
    genres: ['adventure', 'comedy', 'family'],
  },
  {
    title: 'Princess Mononoke',
    year: 1997,
    genres: ['animation', 'action', 'adventure'],
  },
  {
    title: 'The Matrix',
    year: 1999,
    genres: ['action', 'sci-fi'],
  },
  {
    title: 'Star Trek II: The Wrath of Khan',
    year: 1982,
    genres: ['action', 'adventure', 'sci-fi'],
  },
  {
    title: 'Toy Story',
    year: 1995,
    genres: ['animation', 'adventure', 'comedy'],
  },
  {
    title: 'I am Legend',
    year: 2007,
    genres: ['action', 'adventure', 'drama'],
  },
];

// inspect movies array
// console.table(movies);


// ******************************* Part 1: ***********************************

// Create Your Own Higher-order Function That Takes a Function as an Argument

// Step 1: 
// Write a function called arrayForEach that accepts an Array as the first parameter and 
// a function as the 2nd parameter. Leave the function body empty for now.

function arrayForEach(arrayInput, callbackFunction) {
  // Step 3: 
  // Inside the arrayForEach function body, {}, write a for loop that loops through the passed 
  //in array (available as arrayInput). Inside the for loop console.log each array element using 
  //the i variable from the loop. This should output an index of each item of the movies array.
  
  for(i=0; i<arrayInput.length; i++){
    console.log(arrayInput[i], i);
    // Step 4;
    // Inside the for loop try calling the anonymous function (available as callbackFunction) 
    // you passed in step 2 and invoke it with each array element.
    
    callbackFunction(arrayInput[i]);
  }
}

//Step 2: 
//Call the function arrayForEach and provide the movies array as the first argument.
//Provide an inline anonymous function as the 2nd argument. This anonymous function can also 
//include a parameter for each element in the array,

arrayForEach(movies, (element)=>{
  // Step 5:
  // Inside the anonymous inline function's body from step 2 add an if statement which will console.log the movie if the title is 'Jurassic Park'.
  
  if(element.title === "Jurassic Park"){
    console.log("Movie found: ", element);
  }
})



// ******************************* Part 2: ***********************************

// Now that we've written our own Higher Order Function let's try out some Array Methods that 
// are also Higher Order Functions.
// Step 1:
// Use the Array method .forEach() to loop through the movies array and console.log each movie title inside an inline anonymous function. You can look at the Documentation for Array.prototype.forEach() to get an idea of how this can be done.

// Step 2:
// Use the Array method .find() to search for a movie with the tile 'Total Recall'. Documentation for Array.prototype.find(). As a bonus challenge try to save the found movie in a variable.

// Step 3:
// Use the Array method .filter() to create a new array called ninetiesMovies that contains movies from only the nineties. Documentation for Array.prototype.filter()

// Step 4:
// Create a new array called moviesWithMappedIds as the returned value of mapping through the movies array. Use .map() to add a unique id to each movie. This could be set using the index value for each element in the array. Hint: in the documentation for Array.prototype.map() take a look at the index parameter. Make sure to return a new object out of map function instead of updating the existing one. Look at Object.assign documentation to learn how to create copies of objects.

// Step 5:
// Use the Array method .sort() to sort the movies array by year in descending order, from newest movie to oldest. Documentation for Array.prototype.sort()

// Step 6:
// Practice array methods - .forEach(), .find(), .filter(), .map(), .sort() - try adding your own twist on the steps above by changing some of the parameters, properties or conditions. The objective is to get a better understanding of how each of these functions work.