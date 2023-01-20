const imgs = document.querySelectorAll('.skill')
const data = document.querySelector('.data')

// descrições

const descricao = document.querySelector('.descricao')

const descricaoSkill = ['HTML', 'CSS', 'Javascript', 'Sass', 'Git', 'Github']

const imagensMostrar = [
  './imagens/html-svgrepo-com.svg',
  './imagens/css-3-svgrepo-com.svg',
  './imagens/javascript-logo-svgrepo-com.svg',
  './imagens/sass-svgrepo-com-(1).svg',
  './imagens/git-svgrepo-com-(1).svg',
  './imagens/github-code-source-svgrepo-com.svg'
]

const imagensDeixar = [
  './imagens/html5-svgrepo-com.svg',
  './imagens/css3-svgrepo-com.svg',
  './imagens/javascript-svgrepo-com.svg',
  './imagens/sass-svgrepo-com.svg',
  './imagens/git-svgrepo-com.svg',
  './imagens/github-svgrepo-com.svg'
]

imgs.forEach((e, i) => {
  e.addEventListener('mouseover', (ev) => {
    descricao.innerHTML = `<p>${descricaoSkill[i]}</p>`

    ev.target.src = imagensMostrar[i]
    ev.target.style.cursor = 'pointer'
  })

  e.addEventListener('mouseout', (ev) => {
    ev.target.src = imagensDeixar[i]

    descricao.innerHTML = `${'Passe o mouse'}`
  })
})

const ano = new Date().getFullYear()

data.innerHTML = `Copyright &copy; ${ano} Iago`
