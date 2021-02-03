import firebase from  'firebase'
import   'firebase/auth';
import  'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAsMo7mbUw1FPrMPCxkHYJdbf8TeunbO-M",
    authDomain: "flutter-firebase-learnin-f2cae.firebaseapp.com",
    databaseURL: "https://flutter-firebase-learnin-f2cae-default-rtdb.firebaseio.com",
    projectId: "flutter-firebase-learnin-f2cae",
    storageBucket: "flutter-firebase-learnin-f2cae.appspot.com",
    messagingSenderId: "162279082779",
    appId: "1:162279082779:web:ea7b3e00f483b3c5afe1be",
    measurementId: "G-BKSG15K0ZD"
  };
firebase.initializeApp(firebaseConfig);
  
  export const auth = firebase.auth();
  export const db = firebase.database();
  
  const provider = new firebase.auth.GoogleAuthProvider();

  export const signInWithGoogle = () => {
    auth.signInWithPopup(provider).then(()=>{
      window.location.href = "http://localhost:3000/"
    });
  };

  export const signOut = () => {
    auth.signOut().then(()=>{
      window.location.href="http://localhost:3000/"
    });
  }

 

export const createUser = async (user,displayName) => {
     if(!user) return null;

     const { email , photoURL} = user 
    const userRef = db.ref("Customers");
    console.log("user in createUser",user,displayName)
    const usersnap = await userRef.child(user.uid).get();
    if(!usersnap.exists())
    {
       try{
        await userRef.child(user.uid).set({
          'email':email,
          'displayName':displayName,
          'photoURL':photoURL
        });
       }
       catch(error){
         console.log("error creating user",error);
       }
    }
    else
    {
      console.log("User already exists!");
    }

}


export const getUser = async (user) => {
  if(!user) return null;
  const userRef = db.ref("Customers").child(user.uid);
 const currentUserData = {}
 currentUserData.uid = user.uid;
 console.log(currentUserData);
  userRef.on('value', async snap =>{
      if( snap.exists)
      {
         currentUserData.data = await snap.val();
      }
      else
      {
        currentUserData.data = null;
      }
  })
  return currentUserData;
}


// function to get data from routes in firebase
export const getRoutes = async (type,place) => {

  const res= []
        var ref = db.ref("Routes");
    await  ref.on('value', async routes => {
       routes.forEach(route => {
            if(route.val()[type] === place)
            {
              console.log(route.val())
              res.push(route.val())
            }
                  
       })
     })
     return res;
}