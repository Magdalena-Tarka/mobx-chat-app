export interface IUser {
  id: string,
  name: string,
  password: string,
  loggedIn: boolean,
}

export interface ICurrentUser {
  userName: string,
}

export interface IMessage {
  author: string,
  content: string,
  timestamp: number,
}
