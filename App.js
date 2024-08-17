import { auth } from "./firebase.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { db} from "./firebase.mjs";
import { collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

let userName = document.getElementById("username");
let userEmail = document.getElementById("email");
let userPass = document.getElementById("password");
let signUp = document.getElementById("Sign-up");
let eyeIcon = document.querySelector(".input-group i")



signUp.addEventListener('click',()=>{
    createUserWithEmailAndPassword( auth, userEmail.value, userPass.value)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log('sign up');
        console.log("user====>",user);
        Swal.fire({
            title: "Good job!",
            text: "Your Account has Sign-Up!",
            icon: "success"
          }); 
          
          database()
          
          userName.value='';
          userEmail.value='';
          userPass.value='';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    Swal.fire({
        title: "Opps Error!",
        text: `Somthig went Wrong!`,
        icon: "error"
      });
    
    // ..
  });
    
})



eyeIcon.addEventListener('click',()=>{
    
    userPass.type = userPass.type === "password" ? "text" :"password";
    eyeIcon.className = `fa fa-eye-slash ${userPass.type === "password" ? "" : "fa fa-eye"}`
    
    
           })

async function database(){
  try {
    const docRef = await addDoc(collection(db, "User-Data"), {
     fullname: userName.value,
     Email: userEmail.value,
     password: userPass.value
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getdata(){
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  console.log(doc.data());
  console.log(doc.id);
  console.log(db)
});
}
getdata()