const input = document.querySelector("#search")
const button = document.querySelector("#searchbtn1")

console.log(button)

button.addEventListener("click", async ()=>{
  const name = document.getElementById("name")
  const bio = document.getElementById("bio")
  const link = document.getElementById("link")
  const avatar = document.getElementById("profileImg")
  const after = document.getElementById("afterfind")

  const dados = await fetch('https://api.github.com/users/' + input.value)
  const json = await dados.json()
  console.log(json)
  name.innerText = json.name
  bio.innerText = json.bio
  link.innerText = json.html_url

  link.setAttribute("href", json.html_url)
  avatar.setAttribute("src", json.avatar_url)
  after.classList.remove("esconder")

  //remover classe esconder do aftersearch
})
