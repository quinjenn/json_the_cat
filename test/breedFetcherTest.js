// breedFetcherTest.js

const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, data) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedData =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedData, data[0].description.trim());

      done();
    });
  });
  it("returns breed not found description for a invalid/non-existent breed, via callback", (done) => {
    fetchBreedDescription("Husky", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(desc, null);

      const expectedData = "sorry, breed is not found";

      // compare returned description
      assert.equal(expectedData, err);

      done();
    });
  });
});
