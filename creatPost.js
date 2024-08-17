

let postTitle = document.getElementById("Title");
let file = document.getElementById("file");
let creatbtn = document.getElementById("creat");


creatbtn.addEventListener('click',()=>{


    console.log(postTitle.value);
    console.log(file.value);
    


    postTitle.value = ''
    file.value = ''
    // window.location.href = "dashbord.html"

})

