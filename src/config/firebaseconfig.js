import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyByBEpH8DLYIoUMoQzbn5iv5q3knw5nGJg",
  authDomain: "proyecto-react-native-1c025.firebaseapp.com",
  projectId: "proyecto-react-native-1c025",
  storageBucket: "proyecto-react-native-1c025.appspot.com",
  messagingSenderId: "53143019407",
  appId: "1:53143019407:web:049eac22a6be6bac86f5fa",
  measurementId: "G-KJ2VD6SGW9"
};


firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database