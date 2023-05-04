const toursURL = `${baseServerURL}/tours`;

let mainSection = document.getElementById("tour-list-wrapper");




window.addEventListener("load",function(){
    fetchAndRenderTours()
  })
  
  function fetchAndRenderTours(){
  
    fetch(toursURL,{
      'method':'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
  
      ticketBookStatus.innerHTML=""
    let ticketCard=`BOOKING STATUS : NOT booked yet!`
    ticketBookStatus.append(ticketCard)
     
      getCardList(data);console.log(data)})
    .catch((error)=>{console.log(error)})
  }
  
  
  function getCardList(data){
    
     let cardList=document.createElement("div")
     cardList.classList.add("card-list")
  
     data.forEach((item)=>{
      let card=createCard(item.image,item.place,item.description,item.price)
  
      mainSection.innerHTML=""
      cardList.append(card)
      mainSection.append(cardList)
     })
  
  }
  
  
  function createCard(image,place,description,price){
    let card=document.createElement("div")
    card.classList.add("card")
  
    let card_image=document.createElement("div")
    card_image.classList.add("card-image")
  
    let img=document.createElement("img")
    img.src=`${baseServerURL}${image}`
    img.setAttribute("alt","pic")
  
    let card_body=document.createElement("div")
    card_body.classList.add("card-body")
  
    let h3=document.createElement("h3")
    h3.classList.add("card-title")
    h3.textContent=place
  
    let card_desc=document.createElement("div")
    card_desc.classList.add("card-description")
    card_desc.textContent=description
  
    let link=document.createElement("a")
    link.setAttribute("href","#")
    link.setAttribute("data-name",place)
    link.classList.add("card-link")
    link.textContent="See Details"
  
    link.addEventListener("click",function(){
      ticketBookStatus.innerHTML=`Ticket Booking for : ${place}!`
    })
  
    let card_price=document.createElement("div")
    card_price.classList.add("card-price")
    card_price.textContent=price
  
  card_image.append(img)
  card_body.append(h3,card_desc,link,card_price)
  
  card.append(card_image,card_body)
  
  return card;
  
  }