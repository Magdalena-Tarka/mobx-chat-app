import { makeAutoObservable } from 'mobx';
import { ICurrentUser, IMessage, IUser } from '../types';
import { getDataFromLS, getCurrentUserFromSS } from '../utils';

window.onstorage = () => {
  store.refreshAllData();
  console.log('Sth changed..');
};

class ChatStore {
  usersList: IUser[] = [];
  chatMessages: IMessage[] = [];
  currentUser = '';

  constructor() {
    makeAutoObservable(this);
    this.refreshAllData();
  }

  get loggedInUsers() {
    return this.usersList.filter(user => user.loggedIn === true);
  }

  //REFRESH
  refreshAllData = () => {
    this.fetchUsersFromLS();
    this.fetchMessagesFromLS();
    this.getCurrentUserFromSS();
  };
  refreshUsers() {
    this.fetchUsersFromLS();
    this.getCurrentUserFromSS();
  }

  //USERS
  fetchUsersFromLS() {
    this.usersList = getDataFromLS('storedUsers');
  }
  setUserStatusInLS(users: IUser[], userName: string, value: boolean) {
    const arg = users.map(user => user.name !== userName ? user : {
      ...user,
      loggedIn: value,
    });
    localStorage.setItem('storedUsers', JSON.stringify(arg));
  }

  //MESSAGES
  fetchMessagesFromLS() {
    this.chatMessages = getDataFromLS('messages');
  }
  addMessage(message: IMessage) {
    this.chatMessages.push(message);
    localStorage.setItem('messages', JSON.stringify(this.chatMessages));
  }

  //LOGIN
  getCurrentUserFromSS() {
    this.currentUser = getCurrentUserFromSS().userName;
  }
  addCurentUserToSS(user: ICurrentUser) {
    sessionStorage.setItem('currentLoggedIn', JSON.stringify(user));
  }
  removeCurrentUserFromSS() {
    sessionStorage.removeItem('currentLoggedIn');
    this.currentUser = getCurrentUserFromSS().userName;
  }
}

const store = new ChatStore();

export default store;

/*localStorage.clear();

const users = [
  { id: '1', name: 'elvis', password: 'elvis1', loggedIn: false },
  {  id: '2', name: 'fred', password: 'fred1', loggedIn: false },
  { id: '3', name: 'bob', password: 'bob1', loggedIn: false },
];
localStorage.setItem('storedUsers', JSON.stringify(users));

const messages = [
  { author: 'elvis', content: 'lorem ipsum', timestamp: 1 },
  { author: 'fred', content: 'dolor sit amet', timestamp: 2 },
  { author: 'elvis', content: 'hsaujd iisi fredv', timestamp: 3 },
  { author: 'bob', content: 'hsjsjcc', timestamp: 4 },
];
localStorage.setItem('messages', JSON.stringify(messages));*/
