
let participantes = [
  {
    nome: "Gabryella",
    email: "gabryella@gmail.com",
    dataInscricao: new Date(2024, 2, 23, 19, 23),
    dataCheckIn: new Date(2024, 2, 25, 22, 20)
  },
  {
    nome: "João",
    email: "joao@example.com",
    dataInscricao: new Date(2024, 1, 15, 14, 30),
    dataCheckIn: null
  },
  {
    nome: "Maria",
    email: "maria@example.com",
    dataInscricao: new Date(2024, 1, 28, 21, 10),
    dataCheckIn: null
    },
  {
    nome: "Pedro",
    email: "pedro@example.com",
    dataInscricao: new Date(2024, 2, 5, 11, 50),
    dataCheckIn: null
  },
  {
    nome: "Ana",
    email: "ana@example.com",
    dataInscricao: new Date(2024, 2, 10, 16, 45),
    dataCheckIn:null
  },
  {
    nome: "Lucas",
    email: "lucas@example.com",
    dataInscricao: new Date(2024, 2, 17, 9, 0),
    dataCheckIn: null
  },
  {
    nome: "Juliana",
    email: "juliana@example.com",
    dataInscricao: new Date(2024, 1, 20, 18, 15),
    dataCheckIn: null
  },
  {
    nome: "Carlos",
    email: "carlos@example.com",
    dataInscricao: new Date(2024, 2, 1, 14, 40),
    dataCheckIn: null
  },
  {
    nome: "Laura",
    email: "laura@example.com",
    dataInscricao: new Date(2024, 2, 8, 20, 30),
    dataCheckIn: null
  },
  {
    nome: "Rafael",
    email: "rafael@example.com",
    dataInscricao: new Date(2024, 1, 25, 10, 20),
    dataCheckIn: null
  }
];

console.log(participantes);


const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
  
    if(participante.dataCheckIn == null) {
dataCheckIn = `
<button
data-email="${participante.email}"
onclick="fazerCheckIn(event)"
>
Confirmar check-in
</button>
`
}
  return `
  <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
        <br>
       <small>
        ${participante.email}
       </small>
        </td>
      <td> ${dataInscricao}</td>
      <td> ${dataCheckIn}</td>
    </tr>
  `
}

const atualizarLista = (participante) => {
let output = ""
for(let participante of participantes) {
output = output + criarNovoParticipante(participante)
}

document
.querySelector('tbody')
.innerHTML = output

}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const formData = new formData(event.target)
   
   const participante = {
  nome: dadosDoFormulario.get('nome'),
  email: dadosDoFormulario.get('email'),
  dataInscricao: new Date(),
  dataCheckIn: null
}

const participanteExiste = participantes.find(
  (p) => p.email ==  participante.email
)
if(participanteExiste) {
  alert('Email já cadastrado!')
}


participantes = [participante, ...participantes]
atualizarLista(participantes)

event.target.querySelector('[name="nome"]').value = ""
event.target.querySelector('[name="email"]').value = ""
}


const fazerCheckIn = (event) => {

const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'

if(confirm(mensagemConfirmacao) == false) {
  return
}
alert(resultado)

 const participante = participantes.find(
  (p) => p.email == event.target.dataset.email 
 )

 participante.dataCheckIn = new Date()

 atualizarLista(participantes)
}
