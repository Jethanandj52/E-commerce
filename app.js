let cards=[
    {id:1,name:"Grocery",price:10,discription:"Grocery includes everyday food items, vegetables, fruits, and household essentials for daily needs.",Image:"Grossery.jpg"},
    {id:2,name:"Computer Hardware",price:20,discription:"Computer hardware refers to the physical parts of a computer, like CPU, RAM, motherboard, and peripherals.", Image:"computer hardware.jpg"},
    {id:3,name:"Medicine",price:30,discription:"Medicine refers to drugs or treatments used to prevent, cure, or manage diseases and improve health.", Image:"medicine store.jpg"},
    {id:4,name:"Clothes",price:40,discription:"Clothes are garments made from fabrics, worn to cover, protect, and style the body daily. And looking Good.", Image:"clothes.jpg"},
  
]

function generateCard(){
    let container= document.getElementById("cards-container");
    container.innerHTML=""

    cards.map(( card)=>{
        let createDiv= document.createElement("div");
        createDiv.className="card";
    createDiv.innerHTML=`
     <div class="card-image"><img src="${card.Image}" alt="" srcset=""></div>
    <h2> ${card.name}</h2>
    <div class="price">$ ${card.price}</div>
    <div class="discription">${card.discription}</div>
    <div class="button"> <button onclick="deleteCard(${card.id})">Delete</button></div>

    `
    container.appendChild(createDiv)
        
    })
    
}
function deleteCard(id){
cards=  cards.filter((card)=>{
        return card.id!==id;
    })
    generateCard()
   
}

generateCard()
