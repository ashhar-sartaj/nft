function SaveBtn(){
    let btn=document.getElementById("saveBtn");
    if(btn.style.backgroundColor="#1b4e4e"){
        btn.style.backgroundColor="#068f8f";
    }
    if(btn.style.backgroundColor="#068f8f"){
        btn.style.backgroundColor="#1b4e4e";
    }
};


let nft1={
    name:"Frenchie",
    owner:"Butcher",
    priceInDollars:"$3999",
    priceInEth:"0.002 Eth",
    salesEnd:"August 10,2022",
    desc:"This is one of our unique and best NFT in our collection. Frenchie ,owned by Buther has 3 favourites and the sales ends by august 10,2022 ",
    favourits:"3 ",
    source: "/Assets/graphics/1.svg"
}
let nft2={
    name:"Hughie",
    owner:"MonCouir",
    priceInDollars:"$4885",
    priceInEth:"0.004 Eth",
    salesEnd:"August 9,2022",
    desc:"This is one of our unique and best NFT in our collection. Hughie ,owned by MonCouir has 5 favourites and the sales ends by august 5,2022 ",
    favourits:"5 ",
    source: "/Assets/graphics/2.svg"
}
let nft3={
    name:"Gorr",
    owner:"Steve M",
    priceInDollars:"$3970",
    priceInEth:"0.008 Eth",
    salesEnd:"August 15,2022",
    desc:"This is one of our unique and best NFT in our collection. Gorr ,owned by Steve M has 2 favourites and the sales ends by august 15,2022 ",
    favourits:"2 ",
    source: "/Assets/graphics/3.svg"
}
let nft4={
    name:"Marret",
    owner:"Stannie",
    priceInDollars:"$3550",
    priceInEth:"0.040 Eth",
    salesEnd:"August 14,2022",
    desc:"This is one of our unique and best NFT in our collection. Marret ,owned by Stannie has 6 favourites and the sales ends by august 14,2022 ",
    favourits:"6 ",
    source: "/Assets/graphics/4.svg"
}
let nft5={
    name:"Sugrest",
    owner:"Donno",
    priceInDollars:"$5530",
    priceInEth:"0.05 Eth",
    salesEnd:"August 20,2022",
    desc:"This is one of our unique and best NFT in our collection. Sugrest ,owned by Donno has 4 favourites and the sales ends by august 20,2022 ",
    favourits:"4 ",
    source: "/Assets/graphics/5.svg"
}
let nft6={
    name:"OverTurf",
    owner:"Figgie",
    priceInDollars:"$5730",
    priceInEth:"0.06 Eth",
    salesEnd:"August 21,2022",
    desc:"This is one of our unique and best NFT in our collection. OverTurf ,owned by Figgie has 4 favourites and the sales ends by august 21,2022 ",
    favourits:"4 ",
    source: "/Assets/graphics/6.svg"
}
let nft7={
    name:"ClutterBuck",
    owner:"Squids",
    priceInDollars:"$3530",
    priceInEth:"0.027 Eth",
    salesEnd:"August 15,2022",
    desc:"This is one of our unique and best NFT in our collection. ClutterBuck ,owned by Squids has 7 favourites and the sales ends by august 15,2022 ",
    favourits:"7 ",
    source: "/Assets/graphics/7.svg"
}
let nft8={
    name:"Elphonso",
    owner:"Mergatroid",
    priceInDollars:"$5536",
    priceInEth:"0.046 Eth",
    salesEnd:"August 10,2022",
    desc:"This is one of our unique and best NFT in our collection. Elphonso ,owned by Mergatroid has 8 favourites and the sales ends by august 10,2022 ",
    favourits:"8 ",
    source: "/Assets/graphics/8.svg"
}
let nft9={
    name:"SoupCan",
    owner:"Oxhandler",
    priceInDollars:"$2530",
    priceInEth:"0.015 Eth",
    salesEnd:"August 13,2022",
    desc:"This is one of our unique and best NFT in our collection. SoupCan ,owned by Oxhandler has 4 favourites and the sales ends by august 13,2022 ",
    favourits:"4 ",
    source: "/Assets/graphics/9.svg"
}
let nft10={
    name:"Jefferson",
    owner:"Snoobik",
    priceInDollars:"$5630",
    priceInEth:"0.08 Eth",
    salesEnd:"August 16,2022",
    desc:"This is one of our unique and best NFT in our collection. Jefferson ,owned by Snoobik has 4 favourites and the sales ends by august 16,2022 ",
    favourits:"4 ",
    source: "/Assets/graphics/10.svg"
}




const nfts={nft1,nft2,nft3,nft4,nft5}
var ownerName=document.getElementById("nftOwner")
var nftName=document.getElementById("nftName")
var nftFavs=document.getElementById("favs")
var priceInDollars=document.getElementById("priceInDollars")
var endDate=document.getElementById("lastDate")
var desccription=document.getElementById("nftDesc")
var priceInEth=document.getElementById("priceInEth")
var mainImage=document.getElementById("mainImage")
// var i
// console.log(nftFavs.innerText)
console.log("22")
let string=localStorage.getItem("hey");
console.log(string)
localStorage.clear
let r=string.indexOf(nft1.source)>0
console.log(r)
checkSrc(string)
function checkSrc(source){
    mainImage.src=source
    if(source.indexOf(nft1.source)>0){
        ownerName.innerText="Owner :"+nft1.owner
        nftName.innerText=nft1.name
        nftFavs.innerText=nft1.favourits+"favourites"
        priceInDollars.innerHTML=nft1.priceInDollars
        endDate.innerText=nft1.salesEnd
        desccription.innerText=nft1.desc
        priceInEth.innerText=nft1.priceInEth
    }
    if(source.indexOf(nft2.source)>0){
        ownerName.innerText="Owner :"+nft2.owner
        nftName.innerText=nft2.name
        nftFavs.innerText=nft2.favourits+"favourites"
        priceInDollars.innerHTML=nft2.priceInDollars
        endDate.innerText=nft2.salesEnd
        desccription.innerText=nft2.desc
        priceInEth.innerText=nft2.priceInEth
    }
    if(source.indexOf(nft3.source)>0){
        ownerName.innerText="Owner :"+nft3.owner
        nftName.innerText=nft3.name
        nftFavs.innerText=nft3.favourits+"favourites"
        priceInDollars.innerHTML=nft3.priceInDollars
        endDate.innerText=nft3.salesEnd
        desccription.innerText=nft3.desc
        priceInEth.innerText=nft3.priceInEth
    }
    if(source.indexOf(nft4.source)>0){
        ownerName.innerText="Owner :"+nft4.owner
        nftName.innerText=nft4.name
        nftFavs.innerText=nft4.favourits+"favourites"
        priceInDollars.innerHTML=nft4.priceInDollars
        endDate.innerText=nft4.salesEnd
        desccription.innerText=nft4.desc
        priceInEth.innerText=nft4.priceInEth
    }
    if(source.indexOf(nft5.source)>0){
        ownerName.innerText="Owner :"+nft5.owner
        nftName.innerText=nft5.name
        nftFavs.innerText=nft5.favourits+"favourites"
        priceInDollars.innerHTML=nft5.priceInDollars
        endDate.innerText=nft5.salesEnd
        desccription.innerText=nft5.desc
        priceInEth.innerText=nft5.priceInEth
    }
    if(source.indexOf(nft6.source)>0){
        ownerName.innerText="Owner :"+nft6.owner
        nftName.innerText=nft6.name
        nftFavs.innerText=nft6.favourits+"favourites"
        priceInDollars.innerHTML=nft6.priceInDollars
        endDate.innerText=nft6.salesEnd
        desccription.innerText=nft6.desc
        priceInEth.innerText=nft6.priceInEth
    }
    if(source.indexOf(nft7.source)>0){
        ownerName.innerText="Owner :"+nft7.owner
        nftName.innerText=nft7.name
        nftFavs.innerText=nft7.favourits+"favourites"
        priceInDollars.innerHTML=nft7.priceInDollars
        endDate.innerText=nft7.salesEnd
        desccription.innerText=nft7.desc
        priceInEth.innerText=nft7.priceInEth
    }
    if(source.indexOf(nft8.source)>0){
        ownerName.innerText="Owner :"+nft8.owner
        nftName.innerText=nft8.name
        nftFavs.innerText=nft8.favourits+"favourites"
        priceInDollars.innerHTML=nft8.priceInDollars
        endDate.innerText=nft8.salesEnd
        desccription.innerText=nft8.desc
        priceInEth.innerText=nft8.priceInEt7
    }
    if(source.indexOf(nft9.source)>0){
        ownerName.innerText="Owner :"+nft9.owner
        nftName.innerText=nft9.name
        nftFavs.innerText=nft9.favourits+"favourites"
        priceInDollars.innerHTML=nft9.priceInDollars
        endDate.innerText=nft9.salesEnd
        desccription.innerText=nft9.desc
        priceInEth.innerText=nft9.priceInEth
    }
    if(source.indexOf(nft10.source)>0){
        ownerName.innerText="Owner :"+nft10.owner
        nftName.innerText=nft10.name
        nftFavs.innerText=nft10.favourits+"favourites"
        priceInDollars.innerHTML=nft10.priceInDollars
        endDate.innerText=nft10.salesEnd
        desccription.innerText=nft10.desc
        priceInEth.innerText=nft10.priceInEth
    }
}
function ButtonClicked(otherImage){
    // mainImage.src=".."+otherImage.src.substr(21,23)
    mainImage.src=otherImage.src
    console.log("."+otherImage.src.substr(21,23))
    console.log(otherImage.src)
    
    
    if(otherImage.src.indexOf(nft1.source)>0){
        ownerName.innerText="Owner :"+nft1.owner
        nftName.innerText=nft1.name
        nftFavs.innerText=nft1.favourits+"favourites"
        priceInDollars.innerHTML=nft1.priceInDollars
        endDate.innerText=nft1.salesEnd
        desccription.innerText=nft1.desc
        priceInEth.innerText=nft1.priceInEth
    }
    if(otherImage.src.indexOf(nft2.source)>0){
        ownerName.innerText="Owner :"+nft2.owner
        nftName.innerText=nft2.name
        nftFavs.innerText=nft2.favourits+"favourites"
        priceInDollars.innerHTML=nft2.priceInDollars
        endDate.innerText=nft2.salesEnd
        desccription.innerText=nft2.desc
        priceInEth.innerText=nft2.priceInEth
    }
    if(otherImage.src.indexOf(nft3.source)>0){
        ownerName.innerText="Owner :"+nft3.owner
        nftName.innerText=nft3.name
        nftFavs.innerText=nft3.favourits+"favourites"
        priceInDollars.innerHTML=nft3.priceInDollars
        endDate.innerText=nft3.salesEnd
        desccription.innerText=nft3.desc
        priceInEth.innerText=nft3.priceInEth
    }
    if(otherImage.src.indexOf(nft4.source)>0){
        ownerName.innerText="Owner :"+nft4.owner
        nftName.innerText=nft4.name
        nftFavs.innerText=nft4.favourits+"favourites"
        priceInDollars.innerHTML=nft4.priceInDollars
        endDate.innerText=nft4.salesEnd
        desccription.innerText=nft4.desc
        priceInEth.innerText=nft4.priceInEth
    }
    if(otherImage.src.indexOf(nft5.source)>0){
        ownerName.innerText="Owner :"+nft5.owner
        nftName.innerText=nft5.name
        nftFavs.innerText=nft5.favourits+"favourites"
        priceInDollars.innerHTML=nft5.priceInDollars
        endDate.innerText=nft5.salesEnd
        desccription.innerText=nft5.desc
        priceInEth.innerText=nft5.priceInEth
    }
    if(otherImage.src.indexOf(nft6.source)>0){
    ownerName.innerText="Owner :"+nft6.owner
    nftName.innerText=nft6.name
    nftFavs.innerText=nft6.favourits+"favourites"
    priceInDollars.innerHTML=nft6.priceInDollars
    endDate.innerText=nft6.salesEnd
        desccription.innerText=nft6.desc
        priceInEth.innerText=nft6.priceInEth
    }
    if(otherImage.src.indexOf(nft7.source)>0){
        ownerName.innerText="Owner :"+nft7.owner
        nftName.innerText=nft7.name
        nftFavs.innerText=nft7.favourits+"favourites"
        priceInDollars.innerHTML=nft7.priceInDollars
        endDate.innerText=nft7.salesEnd
        desccription.innerText=nft7.desc
        priceInEth.innerText=nft7.priceInEth
    }
    if(otherImage.src.indexOf(nft8.source)>0){
        ownerName.innerText="Owner :"+nft8.owner
        nftName.innerText=nft8.name
        nftFavs.innerText=nft8.favourits+"favourites"
        priceInDollars.innerHTML=nft8.priceInDollars
        endDate.innerText=nft8.salesEnd
        desccription.innerText=nft8.desc
        priceInEth.innerText=nft8.priceInEt7
    }
    if(otherImage.src.indexOf(nft9.source)>0){
        ownerName.innerText="Owner :"+nft9.owner
        nftName.innerText=nft9.name
        nftFavs.innerText=nft9.favourits+"favourites"
        priceInDollars.innerHTML=nft9.priceInDollars
        endDate.innerText=nft9.salesEnd
        desccription.innerText=nft9.desc
        priceInEth.innerText=nft9.priceInEth
    }
    if(otherImage.src.indexOf(nft10.source)>0){
        ownerName.innerText="Owner :"+nft10.owner
        nftName.innerText=nft10.name
        nftFavs.innerText=nft10.favourits+"favourites"
        priceInDollars.innerHTML=nft10.priceInDollars
        endDate.innerText=nft10.salesEnd
        desccription.innerText=nft10.desc
        priceInEth.innerText=nft10.priceInEth
    }
   
}
console.log(nft1.name)
