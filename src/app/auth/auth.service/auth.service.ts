import * as firebase from 'firebase';


export class AuthService {
  logInUser (email:string, password:string){
    console.log('Der Nutzer mit der Email '+ email + ' wurde eingelogt.')
    firebase.auth().signInWithEmailAndPassword(email,password)
      .catch(error =>console.log(error))

  }

  signUpUser(email:string, password:string){
    console.log('Der Nutzer mit der Email '+ email + ' wurde registriert.');
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .catch(error =>console.log(error))
  }

}
