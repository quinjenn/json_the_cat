// use the request library to make the HTTP request
const request = require("request");
const breedName = process.argv[2];
// console.log(breedName);
// allow the user to specify the breed name using command-line arguments.
const fetchBreedDescription = function (breed, callback) {
  // making HTTP request with arguments using request library
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (error, response, body) => {
      if (error) {
        callback(error);
      }

      // use JSON.parse to convert the JSON string into an actual object
      const data = JSON.parse(body);
      // console log data/body of cat desc
      // console.log("data", data);
      // console.log("typeof data", typeof data);
      callback(null, data);
    }
  );
};
// calling the fetchBreedDescription function
fetchBreedDescription(breedName, (error, data) => {
  if (error) {
    console.log("This URL is incorrect, please use another one");
  } else {
    console.log(data);
  }
});
