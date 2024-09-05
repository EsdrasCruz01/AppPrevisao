//Criar constante com a chave da API
const key = 'e0283766cee7e7e70be7e75409ae8042'

//Função para capturar o valor do input
function Pesquisar() {
  let cidade = document.querySelector('.input-cidade').value
  console.log(cidade)
  Dados(cidade)
}

//Consumindo dados da API OpenWeather
async function Dados(cidade) {
  let Dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())
  console.log(Dados)
  ExibirDados(Dados)
}

//Fução Trocar Dados Na Tela
function ExibirDados(Dados) {
  document.querySelector('.cidade').innerHTML = "Tempo em " + Dados.name
  document.querySelector('.Temperatura').innerHTML = Math.floor(Dados.main.temp) + " °C"
  document.querySelector('.Previsao').innerHTML = Dados.weather[0].description
  document.querySelector('.umidade').innerHTML = Dados.main.humidity + "%"
  document.querySelector('.img').src = `https://openweathermap.org/img/wn/${Dados.weather[0].icon}.png`
  document.querySelector('.TemperaturaM').innerHTML = Dados.main.temp_max + " °C Temperatura Máxima"
}