import _ from 'lodash';
import members from './members.js';
console.log('Members: ', members);

// Question 1: 1. Get array of first names of everyone
const firstNames = _.map(members, member => ({ ...member, name: member.name.split(' ')[0] }));
console.log('First Names: ', firstNames);

// Question 2: Make everyone's last names in UPPERCASE in given array of objects
const lastNamesInUpperCase = _.map(members, member => {
    const lastName = member.name.split(' ')[1];
    return { ...member, name: member.name.replace(lastName, lastName.toUpperCase()) }
})
console.log('Last Names in Uppercase: ', lastNamesInUpperCase);

// Question 3: Get entries where age is between 41-60
const ageBetween41And60 = _.filter(members, member => member.age > 41 && member.age < 60);
console.log('Age between 41 and 60: ', ageBetween41And60);

// Question 4: Get average age
const validMembersWithAge = _.filter(
    members,
    member => member.age
);

const totalAge = _.reduce(
    validMembersWithAge,
    (acc, member) => acc + member.age,
    0
);

const averageAge = Math.floor(
    totalAge / validMembersWithAge.length
);
console.log('Average Age: ', averageAge);

// Question 5: Get Person with maximum age
const personWithMaxAge = _.maxBy(members, 'age');
console.log('Person with maximum age: ', personWithMaxAge);

/** 
Question 6: Divide persons in three groups, result should look like
    {
      'young': [],
      'old': [],
      'noage': []
    }
    Less than 35yrs is young, above 35 is old
*/
const groupedByAge = _.groupBy(members, member => {

    if (!Number.isInteger(Number(member.age))) {
        return 'noage';
    }

    return member.age < 35 ? 'young' : 'old';
})

console.log('Grouped by age: ', groupedByAge);

// Question 7: Add a new member to same members array instance at index 2
const updatedMembers = _.concat(
    _.slice(members, 0, 2),
    [{ name: 'Amit Singh', age: 25 }],
    _.slice(members, 2)
);
console.log('Members after adding new member at index 2: ', updatedMembers);

// Question 8: extract first and second element using destructing
const [firstMember, secondMember] = members;
console.log('First Member: ', firstMember);
console.log('Second Member: ', secondMember);

// Question 9: Create a new array instance adding a new member at index 0, and keeping existing afterwards
const newMembers = _.concat([{ name: 'Amit Singh', age: 25 }], members);
console.log('New Members array with new member at index 0: ', newMembers);

// Question 10: Extract properties of object using destructuring
const { name, age } = members[0];
console.log('Extracted name and age using destructuring: ', name, age);

// Question 11: Rename extracted property of object while destructing
var { name: memberName,  age: memberAge } = members[0];
console.log('Extracted name and age with renamed properties using destructuring: ', memberName, memberAge);

// Question 12: Destructure any property of an object and use spread operator to get remaining properties in an object
var { name: memberName, ...remainingProperties } = members[0];
console.log('Extracted name and remaining properties using destructuring and spread operator: ', memberName, remainingProperties);

// Question 13: Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
const updatedMember = { ...members[0], age: 30 };
console.log('Updated member object with new age using spread operator: ', updatedMember);

// Question 14: Use reduce function on array and object
const ageSum = _.reduce(members, (sum, member) => {
    return member.age ? sum + member.age : sum;
}, 0);
console.log('Sum of ages using reduce function: ', ageSum);

const memberKeysInUpperCase = _.reduce(Object.keys(members[0]), (acc, value) => {
    acc.push(value.toUpperCase());
    return acc;
}, [])

console.log('Member keys in uppercase using reduce function: ', memberKeysInUpperCase);
