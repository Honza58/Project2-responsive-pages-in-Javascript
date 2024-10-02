
//Hanburger menu
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menuList = document.querySelector("nav");
  const hamburgerIcon = document.querySelector(".fa-solid");
  const main = document.querySelector("main");

 
    if (menuList && hamburgerIcon && main) {
      menuIcon.addEventListener("click", () => {
        if (hamburgerIcon.classList[1] === "fa-bars") {
          hamburgerIcon.classList.add("fa-xmark");
          hamburgerIcon.classList.remove("fa-bars");
          menuList.style.display = "block";
          main.style.marginTop = "150px";
        } else {
          hamburgerIcon.classList.add("fa-bars");
          hamburgerIcon.classList.remove("fa-xmark");
          menuList.style.display = "none";
          main.style.marginTop = "0px";
        }
      });
    } else {
      console.error("Některý z potřebných elementů nebyl nalezen");
    }

   // Formulář
if (document.getElementById("contactpage")) {
  const password1 = document.querySelector(".password1");
  const password2 = document.querySelector(".password2");
  const passwordText = document.querySelector(".passwordtext");
  
  if (password1 && password2) {
  password1.addEventListener("input", () => {
    const password1Value = password1.value;
    const password2Value = password2.value;

    if (password1Value === password2Value) {
      passwordText.textContent = "Hesla jsou shodná";
      passwordText.classList.add("right");
      passwordText.classList.remove("bad");
    } else {
      passwordText.textContent = "Hesla nejsou shodná";
      passwordText.classList.add("bad");
      passwordText.classList.remove("right");
    }
  });

  password2.addEventListener("input", () => {
    const password1Value = password1.value;
    const password2Value = password2.value;

    if (password1Value === password2Value) {
      passwordText.textContent = "Hesla jsou shodná";
      passwordText.classList.add("right");
      passwordText.classList.remove("bad");
    } else {
      passwordText.textContent = "Hesla nejsou shodná";
      passwordText.classList.add("bad");
      passwordText.classList.remove("right");
    }
   });
  }
}

  // Actors
  if (document.getElementById("actorspage")) {
  const originalPhoto = document.querySelectorAll(".originalPhoto"); 
  const newWindow1 = document.querySelector(".newWindow1");
  const newPicture1 = document.querySelector(".newpicture1");
  const buttonCross1 = document.querySelector(".buttoncross1");
  const description = document.querySelector(".description")

  
  if (newWindow1 && newPicture1 && originalPhoto && buttonCross1) {
    originalPhoto.forEach(image => {              
    image.addEventListener("click", function () { 
      newWindow1.style.display = "block";
      newPicture1.src = this.src;
      description.innerHTML = this.dataset.info;
    });
  })
    buttonCross1.addEventListener("click", function () {
      newWindow1.style.display = "none";
    });

    newWindow1.addEventListener("click", function () {
      newWindow1.style.display = "none";
    } )
  } else {
    console.error("Chybí element");
  }
}
})




