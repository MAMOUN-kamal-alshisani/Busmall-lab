'use strict';
//global array
let EveryBusMall=[];
//global 
let maxitries=25;
//global 
let yourtriesCounter=0

//global 
let leftimg;
let centerimg;
let rightimg;
//global 

//global 
let imagContainer=document.getElementById('images')
let leftImgEle=document.getElementById('left1-img');
let center1ImgEle=document.getElementById('center1-img');
let rightImgEle=document.getElementById('right1-img');
let thelist=document.getElementById('result');
function BusmallImgs(name,source){

this.name=name;
this.source=source;

EveryBusMall.push(this);
this.votes=0;
this.viewed=0;
}
new BusmallImgs('bag','imags/bag.jpg');
new BusmallImgs('banana','imags/banana.jpg');
new BusmallImgs('bathroom','imags/bathroom.jpg');
new BusmallImgs('boots','imags/boots.jpg');
new BusmallImgs('breakfast','imags/breakfast.jpg');
new BusmallImgs('bubblegum','imags/bubblegum.jpg');
new BusmallImgs('chair','imags/chair.jpg');
new BusmallImgs('cthulhu.','imags/cthulhu.jpg');
new BusmallImgs('dog-duck','imags/dog-duck.jpg');
new BusmallImgs('dragon','imags/dragon.jpg');
new BusmallImgs('pen','imags/pen.jpg');
new BusmallImgs('pet-sweep','imags/pet-sweep.jpg');
new BusmallImgs('scissors','imags/scissors.jpg');
new BusmallImgs('shark','imags/shark.jpg');
new BusmallImgs('sweep','imags/sweep.png');
new BusmallImgs('tauntaun','imags/tauntaun.jpg');
new BusmallImgs('unicorn','imags/unicorn.jpg');
new BusmallImgs('water-can','imags/water-can.jpg');
new BusmallImgs('wine-glass','imags/wine-glass.jpg');
console.log(EveryBusMall);

function RandomIndexImg(){
return Math.floor(Math.random() * EveryBusMall.length);
}

//console.log(RandomIndexImg());

function RenderThreeImgs(){
leftimg=RandomIndexImg();
centerimg=RandomIndexImg();
rightimg=RandomIndexImg();
//console.log(leftimg);
//console.log(centerimg);
//console.log(rightimg);


while(leftimg===centerimg || leftimg===rightimg || centerimg===rightimg){

    leftimg = RandomIndexImg();
    centerimg = RandomIndexImg();
    rightimg = RandomIndexImg();

}
// console.log(leftimg);
// console.log(centerimg);
// console.log(rightimg);



// console.log(EveryBusMall[leftimg]);
// console.log(EveryBusMall[centerimg]);
// console.log(EveryBusMall[rightimg]);


 leftImgEle.src = EveryBusMall[leftimg].source;
 EveryBusMall[leftimg].viewed++;
 center1ImgEle.src = EveryBusMall[centerimg].source;
 EveryBusMall[centerimg].viewed++
 rightImgEle.src= EveryBusMall[rightimg].source;
 EveryBusMall[rightimg].viewed++
}
RenderThreeImgs();


imagContainer.addEventListener('click',yourclick);


function yourclick(event){

// console.log(event.target.id);


yourtriesCounter++;
if(yourtriesCounter<=maxitries){
if(event.target.id ==='left1-img'){
EveryBusMall[leftimg].votes++;
// console.log('votes left',EveryBusMall[leftimg].votes++);
}
else if(event.target.id ==='center1-img'){
    EveryBusMall[centerimg].votes++;
    // console.log('votes center',EveryBusMall[centerimg].votes++);
}

else if(event.target.id ==='rightimg-img'){
    EveryBusMall[rightimg].votes++;
    // console.log('votes right',EveryBusMall[rightimg].votes++);
    
}
RenderThreeImgs();
 } else{leftImgEle.removeEventListener('click',yourclick)
center1ImgEle.removeEventListener('click',yourclick)
rightImgEle.removeEventListener('click',yourclick)


    }
    
    
    
    let liEle;
for (let i = 0; i < EveryBusMall.length; i++) {
    liEle=document.createElement('li');
    thelist.appendChild(liEle);
    
    liEle.textContent=`${EveryBusMall[i].name} has ${EveryBusMall[i].votes} votes, and has been viewed${EveryBusMall[i].viewed}`;
    
}
}




