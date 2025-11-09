//spread operate

const friend = ["Alice", "Bob", "Charlie"];
const schoolFriends = ["David", "Eve", "Frank"];
const collageFriends = ["Grace", "Heidi", "Ivan"];

friend.push(...collageFriends);

// console.log(friend);

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};
const userDetails = {
  organization: "Tech Corp",
  designation: "Developer",
};

const userInfo = { ...user, ...userDetails };

// console.log(userInfo);


//rest operate

const inviteFriends =((...friends : string[]) => {
    friends.forEach((friend) => {
        console.log(`Inviting ${friend} to the party.`);
    });
})
inviteFriends("Alice", "Bob", "Charlie");