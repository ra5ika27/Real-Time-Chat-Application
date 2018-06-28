// [{
//   id: 'ejuendue',
//   name: 'Rasika',
//   room: 'woodland hills'
// }]

//addUser(socketid, name, room)
//removeUser(socketid)
//getUser(id)
//getUserList(room)

// var users = [];
//
// var addUser = (id, name, room) => {
//   users.push({});
// }
//
// modules.export = {addUser}

//ES 6 classes


class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {
      id,
      name,
      room
    };
    this.users.push(user);
    return user;
  }

  removeUser (id) {
    var user = this.getUser(id);
    if (user) {
      this.users = this.users.filter((user) => user.id != id);
    }

    return user;
  }

  getUser (id) {
    return this.users.filter((user) => user.id === id)[0];

  }

  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};
