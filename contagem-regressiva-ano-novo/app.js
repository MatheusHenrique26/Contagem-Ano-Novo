const yearHtml = document.querySelector('#year');//pegando o id do html
const daysHtml = document.querySelector('#days');
const hoursHtml = document.querySelector('#hours');
const minutesHtml = document.querySelector('#minutes');
const secondsHtml = document.querySelector('#seconds');
const spinnerLoading = document.querySelector('#loading');
const countdown = document.querySelector('#countdown');

const nextYear = new Date().getFullYear() + 1; //getFullYear() traz o ano atual, e estamos somando mais 1

const newYearTime = new Date(`january 01 ${nextYear} 00:00:00`); // Definindo a data do proximo ano, new Date() e um objeto construtor para datas 

yearHtml.textContent = nextYear;//trocando o conteudo html pela variavel

const getTimeUnit = unit => unit < 10 ? '0'+ unit : unit;//if ternario para acrescentar um 0 se o numero for menor que 10

const insertCountdownValues = ({days,hours,minutes,seconds}) => {
    daysHtml.textContent = getTimeUnit(days);//trocando o conteudo html pela variavel
    hoursHtml.textContent = getTimeUnit(hours);
    minutesHtml.textContent = getTimeUnit(minutes);
    secondsHtml.textContent = getTimeUnit(seconds);
}

const updateCountdown = ()=> {
    const currentTime = new Date(); //Data atual
    const difference =  newYearTime - currentTime ; // subtraindo a data do proximo ano com a data atual 
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);//calculando dias
    const hours = Math.floor(difference / 1000 / 60 / 60) %24;//calculando horas
    const minutes = Math.floor(difference / 1000 / 60) %60; //calculando minutos
    const seconds = Math.floor(difference / 1000)%60;//calculando segundos 

    insertCountdownValues({days,hours,minutes,seconds});
}

const handleCountdownDisplay = () => {
    spinnerLoading.remove()
    countdown.style.display ='flex'
}

setTimeout(handleCountdownDisplay,1000);

setInterval(updateCountdown,1000);//setInterval recebe 2 parametros a função que ela ira chamar e o intervalo de tempo, ela esta chamando a função a cada segundo