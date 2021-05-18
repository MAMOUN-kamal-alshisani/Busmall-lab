'use strict';
//global array

//global 
let maxitries=25;
let yourtriesCounter=0;

// console.log(localStorage);

//global
let Imgsviewed=[];
let busmallvotes=[];
let EveryBusMall=[];
let busmallNames=[];

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
let button =document.getElementById('btn')

////////////////////////////

function BusmallImgs(name,source){
this.name=name;
this.source=source;
this.votes=0;
this.viewed=0;
EveryBusMall.push(this);
busmallNames.push(this.name);

}
////////

function SetTheTotalOfVotes(){
let votedRound=JSON.stringify(EveryBusMall);
localStorage.setItem('round',votedRound);
// console.log('stringygy',votedRound);
}
////////

function GetTheTotalOfVotes(){
let votedString =localStorage.getItem('round');


let votedobject =JSON.parse(votedString);
// console.log(votedobject);
if(votedobject !== null){
    EveryBusMall = votedobject;

}
RenderThreeImgs();
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
// console.log(BusmallImgs);

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
    // console.log('votes cener',EveryBusMall[centerimg].votes++);
}

else if(event.target.id ==='right1-img'){
    EveryBusMall[rightimg].votes++;
    // console.log('votes right',EveryBusMall[rightimg].votes++);
    
}
RenderThreeImgs();
 } else{imagContainer.removeEventListener('click',yourclick);

 let liEle;
 for (let i = 0; i < EveryBusMall.length; i++) {
     liEle=document.createElement('li');
     thelist.appendChild(liEle);
     
     liEle.textContent=`${EveryBusMall[i].name} has ${EveryBusMall[i].votes} votes, and has been viewed${EveryBusMall[i].viewed}`;
     busmallvotes.push(EveryBusMall[i].votes);
     Imgsviewed.push(EveryBusMall[i].viewed);
     
 }
 theChart();
 SetTheTotalOfVotes();
 
 }
 
    }
   
    





    



    


function theChart(){
    let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:busmallNames,
        datasets: [{
            label: '# of Votes',
            data:busmallvotes ,
            backgroundColor: 'red',
            
               
                
                
            
            borderColor:
                'rgba(153, 102, 255, 1)',
                
            
            borderWidth: 1
        },{
            label: '# of images viewed',
           backgroundColor:'blue',
           borderColor:'gray',
           data:Imgsviewed ,
           type: 'line',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



}

GetTheTotalOfVotes();