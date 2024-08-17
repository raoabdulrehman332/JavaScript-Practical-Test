import { db } from "./firebase.mjs";
import { collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";



let postTitle = document.getElementById("Title");
let postDescription = document.getElementById("Description");
let file = document.getElementById("file");
let creatbtn = document.getElementById("creat");


creatbtn.addEventListener('click',async ()=>{
   
        try {
          const docRef = await addDoc(collection(db, "post"), {
           Title: postTitle.value,
           description: postDescription.value,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
        console.log(doc.id);
        });


    postTitle.value = ''
    file.value = ''
    postDescription.value = ''
    window.location.href = "dashbord.html"

})

