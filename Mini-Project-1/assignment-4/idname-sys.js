const users = [
    {
        firstName : 'Mehdi',
        id : 'shabgard_roozegar'
    },
    {
        firstName : 'Hossein',
        id : 'bigmuto'
    },
    {
        firstName : 'Noura',
        id : 'nonoura'
    }
];

function ShowAllUsers() {
    for(const user of users) {
        console.log("id : " + user.id + "first name : " + user.firstName)
    }
}

function getUserById(id) {
    for (const user of users) {
        if (user.id === id) {
            console.log("id : " + user.id + "first name : " + user.firstName);
            return;
        }
    }
    console.log("User not found!")
}

function createUser(id, firstName) {
    users.push({
        id : id,
        firstName : firstName
    })
}

function editUser(id, newName) {
   for (const user of users) {
    if (user.id === id) {
        user.firstName = newName;
        console.log("your name has been changed to" + newName);
        return;
        }
   }
    console.log("User not found!");
}


