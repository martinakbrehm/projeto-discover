function toggleMode(){
  const html = document.documentElement

  //if(html.classList.contains('light')) {
   // html.classList.remove('Light')
  //} else {
   // html.classList.add('light')
 // }
 html.classList.toggle('light')


const imagem = document.querySelector("#profile img")

if(html.classList.contains("light")) {
  imagem.setAttribute("src", "./assets/assets/avatar-light.png")
} else {
  imagem.setAttribute("src", "./assets/assets/avatar.png")
}
}