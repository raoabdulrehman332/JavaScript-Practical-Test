import { auth } from "./firebase.mjs";
// import { db } from "./firebase.mjs";
import { signInWithEmailAndPassword , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// import {collection,getDocs} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";





let userEmail = document.getElementById("email");
let userPass = document.getElementById("password");
let eyeIcon = document.querySelector(".input-group i")
let signin = document.getElementById("Sign-in");


// password icon
eyeIcon.addEventListener('click',()=>{ 
    userPass.type = userPass.type === "password" ? "text" :"password";
    eyeIcon.className = `fa fa-eye-slash ${userPass.type === "password" ? "" : "fa fa-eye"}`
})

// 
signin.addEventListener("click",()=>{

    signInWithEmailAndPassword(auth, userEmail.value, userPass.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('user sign in ===>',user);
    
      // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorMessage===>',errorMessage);
        Swal.fire({
            title: "Opps Error!",
            text: `Somthig went Wrong!`,
            icon: "error"
          });
        
    });
})


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    console.log('sign in');
        Swal.fire({
            title: "Good job!",
            text: "Your Account has Sign-In!",
            icon: "success"
          }).then((result)=>{
            if (result.isConfirmed){
    
                
                window.location.href ="dashbord.html"
            }})
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});


  