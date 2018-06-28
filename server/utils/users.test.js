const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Yu',
      room: 'Node Course'
    }, {
      id: '3',
      name: 'Lu',
      room: 'React Course'
    }]
  });
  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Rasika',
      room: 'The office fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove the user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(typeof user).toBe('undefined');
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(typeof user).toBe('undefined');
  });

  it('should return names for node course', () => {
    var userlist = users.getUserList('Node Course');
    expect(userlist).toEqual(['Mike','Yu']);
  });

  it('should return names for react course', () => {
    var userlist = users.getUserList('React Course');

    expect(userlist).toEqual(['Lu']);
  });
});
