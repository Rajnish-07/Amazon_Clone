let url="https://cat-fact.herokuapp.com/facts";
const f=document.querySelector("#fact");
const butt=document.querySelector("#a");

const getfacts= async()=>{
    let response = await fetch(url);
    console.log(response);
    let data= await response.json();
    // console.log();
    f.innerText =data[2].text;
}
butt.addEventListener("click" , getfacts);