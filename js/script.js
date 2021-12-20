
//boucle 
const images = document.querySelectorAll(".slide")
let precedent = document.querySelector(".precedent")
let suivant = document.querySelector(".suivant")
let numero = 0
let altText = document.querySelector(".altTexte")
//let altText = document.querySelectorAll(".slide").alt;
 //console.log(precedent)

//  console.log(suivant)


function activerImage(image){
 images.forEach(img => img.classList.remove("active"))
 image.classList.add("active")
 txtalt=image.getAttribute("alt")
 //console.log(txtalt)
 altText.innerHTML = txtalt
}


suivant.addEventListener("click", function(){
  
    if(numero>2){
        numero = 0
     }
       numero++
    activerImage(images[numero])

  // console.log(numero)
 

})

precedent.addEventListener("click", function(){
    if(numero<=1){
        numero = 4
    }
    numero--
    activerImage(images[numero])
    //console.log(numero)

     
})

