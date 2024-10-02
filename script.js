// Capturando os elementos h1 e a, e adicionando conteúdo textual neles
let elementoh1 = document.querySelector("h1")
elementoh1.innerText  = "Título H1 da página";

let elementoa = document.querySelector("a")
elementoa.innerText = "Site da Próz";

// Capturando os elementos ul e ol, Adicionando três itens simples na lista não ordenada e Adicionando três itens com links na lista ordenada
let listaNaoOrdenada = document.querySelector("ul")
listaNaoOrdenada.innerHTML =`
<li>LinkedIn</li>
<li>GitHub</li>
<li>Vercel</li>
`


let listaOrdenada = document.querySelector("ol")
listaOrdenada.innerHTML =`
<li><a href="https://www.linkedin.com/in/gabrielajuniordeveloper/" >LinkedIn</a></li>
<li><a href="https://github.com/GabidaSilva" >GitHub</a></li>
<li><a href="https://vercel.com/gabidasilvas-projects" >Vercel</a></li>
`
