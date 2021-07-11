/*
function sayHello(name, Nation) {
    console.log("Hello my name is",name, "I am from", Nation, "Nice to meet you")
}

sayHello("Robert","Korea");

function plus(a,b) {
    console.log(a+b)
}

plus(3, 5)

function minus(FirstNumber, SecondNumber) {
    console.log(FirstNumber-SecondNumber)
}

//minus(24, 3)


const player= {
    name:"Robert",
    sayHello: function(friendsName){
        console.log("Hi, Hello Bro!",friendsName)
    }

}

console.log(player.name)

player.sayHello('Annie');





const toBuy= [
    "potato","pork","egg","fruits"
]
console.log(toBuy[2])

toBuy.push("pizza")

console.log(toBuy)
console.log(console)
//사실 console은 Object였다는 사실...

//0610 함수만들기
function plus(a,b) {
    console.log(a+b)
}
plus(3,3)


function minus(a,b) {
    return(a-b)
}
console.log(minus(5,2))

function multiple(a,b) {
    return(a*b)
}
console.log(multiple(3,10))


const calculator= {
    plus: function(a,b){
       return a+b
    },
    minus: function(a,b){
     return a-b
    },
    powerof: function(a,b){
    console.log(a**b)
    },
    divide: function(a,b){
        return a/b
    }
}

const divideResult = calculator.divide(16,8)

const plusResult = calculator.plus(divideResult,10)

const minusResult = calculator.minus(plusResult,divideResult)

console.log(divideResult)

console.log(plusResult)

console.log(minusResult)

calculator.powerof(5,2)


const age= parseInt( prompt("sorry, How old are you?,It is important matter!") )

console.log(isNaN(age));

if(isNaN(age)){
    console.log("Please write down number... why are you kidding us..???   :(")
}
else{
    console.log("Thanks for your info :)")
}


const age= parseInt( prompt("sorry, How old are you?,It is important matter!") )



if(isNaN(age) || age<0 ){
    console.log("Please write down real positive number. :(")
}
else if(age<18){
    console.log("You are too young. Bye^^")
}
else if (18 <= age && age <= 50) {
    console.log("You can drink")
    
}
else if(50 < age && age <=80)
    {console.log("Be careful... You already drank alot")
}
else if(age==100)    ==랑 =비교하자. =는 value ==는 is라는 뜻 
{
    console.log("Are you magician?...??")
}
else if(age>80)   이걸 100조건 앞에 쓰면 ==100은 발동되지 않음!!! else if는 양자택일임 절대 동시발동XXX 
    {console.log("Just do whatever you want^^")
}



 const h1=document.getElementById("h1");

 h1.innerText="Got you~!!"

 console.log(h1.className)
 console.log(h1.id)
 console.log(h1.innerText)
 console.log(h1)
 

 console.dir(h1) //<-- h1 내에 어떤 Event들이 있나보고 싶다면, 실행하고 on으로 시작하는 object들을 찾으면된다.
 만약 onclick이라면 앞의 on을 제외한 click이 event라고 보면 된다!


const h1 = document.querySelector(".hello h1" ) 
 //이 쿼리 셀렉터가 상당히 유용하고 좋은 함수다!!!노마드 쌤이 앞으로 이것만 쓸것이다.
 //그러면 document.getElementById("hello") 와 document.querySelector("#hello")는 같은 명령어가 된다!!
 //쿼리셀렉터는 get~함수와 다르게 아이디, 클래스의 하위 항목도 불러올 수 있다.

h1.innerText="Hi just do it. Don't Think!!";


h1.style.color="Yellow"


function handleTitleClick() {
    h1.style.color="White"
}

function handleTitleMouseenter() {
    h1.innerText="Don't worry, Just act your life!"
}

function handleTitlemouseleave() {
    h1.innerText="Whatever you want, Bless will be there"
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato"
}

function handleWindowCopy() {
    alert("copy??!   :("  )
}

function handleWindowOffline() {
    alert("NO WIFI  !!   :("  )
}

function handleWindowOnline() {
    alert("Yeah WIFI ON  !!  ^^"  )
}

h1.addEventListener("click",handleTitleClick)
h1.onclick = handleTitleClick;

h1.addEventListener("mouseenter",handleTitleMouseenter)
h1.onmouseenter = handleTitleMouseenter;

h1.addEventListener("mouseleave",handleTitlemouseleave)
h1.onmouseleave = handleTitlemouseleave
//같은 명령값입니다. document의 body,head,h1 이런것들은 중요하기 때문에
//document.body.style~의 명령이 허용되지만, div같은것들은 호출이 안됨
console.dir(h1)



window.addEventListener("resize", handleWindowResize)

window.addEventListener("copy", handleWindowCopy)

window.addEventListener("offline", handleWindowOffline)

window.addEventListener("online", handleWindowOnline)


const h1 =document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;

if (currentColor==="black") { 
    h1.style.color="yellow"

}
else {
    h1.style.color="black"
}

h1.style.color= newColor;

}

h1.addEventListener("click", handleTitleClick)


const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick() {

    const clickedClass="clicked"

if(h1.classList.contains(clickedClass)) {
    //같은지 확인하는 부호는 ===이다 =가 아니라! =는 두번째줄에 변경해주고 싶은 값 앞에!! className, classList차이를 구별하자, 뒤에꺼는 복수의 class를 허용한다.
    h1.classList.remove(clickedClass);
}
else {
    h1.classList.add(clickedClass);
}
}

h1.addEventListener("click", handleTitleClick)

그런데 이게 왠말인가. 6월 22일에 우린 toggle이라는 알아서 넣었다 빼는 함수체계를 배워버렸다.

const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick() {
h1.classList.toggle("clicked")
}

h1.addEventListener("click", handleTitleClick)


const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input")
const loginButton = loginForm.querySelector("button")
//이렇게 해도 되고, const loginInput=document.querySelector("#login-form input")
//                 const loginButton=document.querySelector("#login-form button") 이런식으로 해도 됨
// HTML의 클릭 상호작용을 활용하기 위해 div를 form으로 바꾸고 type="submit"등을
// 활용하자. 굳이 JS로 하지말고..  input을 form안에 넣게 되면 엔터를 누를때마다 자동으로 submit가 수행된다


function BtnClick() {
    const username = loginInput.value
    if (username==="") {
        alert("Please write down your name.")
    }
    else if(username.length > 15) {
        alert("Too long...")
    }


}

loginButton.addEventListener("click", BtnClick) <--여기서 BtnClick()으로 ()은 절대 있어선 안됌. 왜냐면, 브라우저가 ()을 보면 조건 상관없이 그냥 실행먼저 하고 볼 것임. 앞에 click이라는 사건이 일어나는 조건을 무시할 것임


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";



function onLoginSubmit(event) {
    event.preventDefault(); //새로고침 동작 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username); //로컬스토리지에 유저네임을 저장
   paintGreetings(username);
   
}


    function paintGreetings(username) {
        
        
        greeting.innerText=`Hello!! ${username}`
        ;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }



const savedUsername = localStorage.getItem(USERNAME_KEY); //로컬스토리지에서 유저네임 불러오기

console.log(savedUsername)

if(savedUsername === null) {
 loginForm.classList.remove(HIDDEN_CLASSNAME);
 loginForm.addEventListener("submit",onLoginSubmit);
}
else {paintGreetings(savedUsername); }
    
const player={name:"nicolas"}
*/
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}