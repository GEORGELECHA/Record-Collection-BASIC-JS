// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

  //If value is an empty string, delete the given prop property from the album
  if (value === "") {
    delete records[id][prop]
  }
  //If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
  else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  }

  //If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
  // here I'll use an else if then nest an if statement within it.
  //the else if statement checks if prop is tracks and the value is not an empty string.
  //the nested if checkks if the album has the tracks property, if not, it creates an empty array and adds value to it.
  else if (prop === "tracks" && value !== "") {

    //the the argument passed below asks the album, "Does this album have a tracks property?"
    if (records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [];
    }
    //If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
    records[id][prop].push(value);
  }

  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
