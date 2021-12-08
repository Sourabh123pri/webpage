console.log("HAHA");
const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;

  const mob = document.getElementById("mob").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (name.length <= 2 && mob.length <= 10) {
    alert("naa ye naam nye hai");
  }
  console.log(name, mob, email, password);
});

// function hello (x){
//   const a = "varA"
//   const b = "varB"
//   return function (){
//     console.log(a,b,x);
//   }
// }
// const ans = hello("ram");
// ans()

// function squer(x) {
//   return function (y) {
//     console.log(y ** x);
//   };
// }
// const ans = squer(3);
// ans(15);

// const cue = squer(2);
// cue(15)

// const se = (x) =>{
//   return (y) =>{
//     return x**y;
//   }
// }
// const se = (x) => (y) => x**y;
// const o =se(2);

// console.log(o(10) );

function fun() {
  let conter = 0;
  return function () {
    if (conter < 1) {
      console.log("Hi , i am called.");
      conter++;
    } else {
      console.log("i am allrady called !");
    }
  };
}

const funt = fun();
// console.log(funt());
// funt();
// funt();

// const a = document.getElementsByTagName("a");
// for(let i=0;  i<li.length;i++){
//   const liList = li[i];
//   liList.style.color="yellow"
//   liList.style.backgroundColor="blue"

// }

// for(item of a){
//   item.style.color='#ffff'
//   console.log(item);
// }
// let num = 0
// const arr = Array.from(a);
// console.log(Array.isArray(arr));
// Array.from(a).forEach((ele)=>{

//   ele.style.backgroundColor="purple";
//   // num++
//   // console.log(ele[num]);
// })

// const header =document.getElementsByTagName("header");
// const li =document.getElementsByTagName("li");
// li[0].innerHTML=`<h1>Sourabh  </h1>`
// li[0].innerHTML+=`<h1>Mohn  </h1>`
// li[0].innerHTML+=`<h1 class="heran">sanjeev   </h1>`
// console.log();~

// const rootnode = document.getRootNode();
// const htmlnode = rootnode.childNodes;
// const body = htmlnode[1].childNodes[2]

// console.log(body.childNodes);
// console.log(div.children);
// console.log(div.children[0]);
// console.log(div.children[1]);
// console.log(div.children[2]);
// console.log(div.childNodes);
// console.log(div.childNodes[0]);
// console.log(div.childNodes[1]);
// console.log(div.childNodes[2]);
// div.classList.add("ram")

const h1 = document.querySelector("h1");
const body = h1.parentNode.parentNode.parentNode;
const div = document.querySelector("h1").parentNode;
const card = document.querySelectorAll(".card");
const userinfo = document.querySelectorAll(".userinfo");
const about = document.querySelectorAll(".about")[0];
const about1 = document.querySelectorAll(".about")[0].children[0];

body.classList.toggle("bgdark");
about.classList.toggle("bgdark");
about1.classList.toggle("bgdark");
Array.from(card).forEach((ele) => {
  ele.classList.toggle("bgdark");
});

const bgbtn = document.getElementById("bgbtn");
bgbtn.addEventListener("click", () => {
  body.classList.toggle("light");
  about.classList.toggle("light");
  about1.classList.toggle("light");
  Array.from(card).forEach((ele) => {
    ele.classList.toggle("light");
  });
  if(bgbtn.innerText === "Dark"){
    bgbtn.innerText="Light"
  }else{
    bgbtn.innerText="Dark"
  }
});
