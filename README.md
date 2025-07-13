You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

The updateRecords function takes 4 arguments represented by the following function parameters:

records - an object containing several individual albums
id - a number representing a specific album in the records object
prop - a string representing the name of the album’s property to update
value - a string containing the information used to update the album’s property
Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire records object.
If value is an empty string, delete the given prop property from the album.
If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.


## HOW IT WORKS
This version of the code explicitly handles every possible case with separate if clauses.

First it checks if the value is an empty string. If it is, then the prop is deleted.
Then, if prop is not "tracks" and the value is not an empty string. The prop is set to the value.
If that check doesn’t pass, it next checks if prop is equal to tracks, the value is not an empty string, and the record does not have a tracks array. The "tracks" array is initialized with the only contents being value.
It next checks if prop is equal to tracks, the value is not an empty string. The "tracks" array must exist because the case above was not true. The value is pushed onto the end of the "tracks" array.
Lastly, the entire records object is returned.
