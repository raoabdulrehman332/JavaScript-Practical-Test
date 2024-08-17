import { auth } from "./firebase.mjs";

import {signOut} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";



let signout = document.getElementById("sign-out");
let creatPost = document.getElementById("creat-post");
let user = document.getElementById("user");
let postItem =document.getElementById("post")







console.log(postItem.innerHTML);


user.innerHTML = `Welcom back  `

signout.addEventListener('click',()=>{

    signOut(auth).then(() => {
        
        Swal.fire({
            title: "Good job!",
            text: "Your Account has Sign-out!",
            icon: "success"
          }).then((result)=>{
            if (result.isConfirmed){
    
                
                window.location.href="index.html"
               
            }
          });
      }).catch((error) => {
        console.log('error===>',error);
        
    });
})



creatPost.addEventListener('click',async ()=>{

 window.location.href="creatpost.html"
})

function display(){


  
  statment1 +=`<h3>Abdul rehman</h3>
  <p>Excerpt of the post content goes here...</p>
  <a href="#">Read more</a>`            
   
}

