
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1my-_teJm7eDMwO1hpPWs0tLRkBaHl7E",
  authDomain: "poder-de-dios-e0827.firebaseapp.com",
  projectId: "poder-de-dios-e0827",
  storageBucket: "poder-de-dios-e0827.appspot.com",
  messagingSenderId: "569255053485",
  appId: "1:569255053485:web:83fefbfb58bf770b575e24"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);