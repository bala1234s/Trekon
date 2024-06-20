
let productname = ['Goggle', 'Bag', 'Helmet', 'Shoe'];
let productimg = ['../src/images/Goggles/Goggle1.png', '../src/images/Bags/bag1.png', '../src/images/Helmets/helmet1.png', '../src/images/Shoes/shoe1.png'];

let index = 0;



function next() {

    index++;
    let proImg = document.getElementById('productimg');
    let proName = document.getElementById('productname');
    

    proImg.src = productimg[index];
    
    
    proName.innerText = productname[index];
    


    if ( proName.innerText=='undefined') { 
        index = 0;
        proImg.src= productimg[index];
        proName.innerText = productname[index];
    }
    
}

function prev() {
    index--;
    let proImg = document.getElementById('productimg');
    let proName = document.getElementById('productname');
    


    if (index < 0) {
        
        index = productname.length-1;
         proImg.src = productimg[index];
        
        
        proName.innerText = productname[index];
        index = productname.length;
        proImg.src= productimg[index];
        proName.innerText = productname[index];
    }
    
}

// Snowboard Shower
// var snowboardGet = document.getElementById('snowboardShow');
// console.log(snowboardGet);
let snowboard = ['../src/images/snowboard/snowboard1.png', '../src/images/snowboard/snowboard2.png', '../src/images/snowboard/snow3.jpg'];
var count = -1;
setInterval(() => {
    if (snowboard.length-1 == count) {
        count = -1;
    }
    document.getElementById('snowboardShow').src = snowboard[++count];
    
}, 1500);


// Member Details;
let Memberno = 0;
let nameList = ['Jeeva', 'Bala', 'ManiKandan', 'Gopal'];
let roleList = ['CEO', 'Developer', 'Designer', 'Manager'];
let imageList = []
let detailList = ["He is the CEO of the Company", "Developer of this company", "Good designer of this company", "Manager of this company"];


let MemberName = document.getElementById('memberName');
let MemberRole = document.getElementById('memberRole');
let MemberImg = document.getElementById('memberImg');
let MemberDetail = document.getElementById('memberDetail');

function memNext() { 
    Memberno++;
    MemberName.innerText = nameList[Memberno];
    MemberRole.innerText = roleList[Memberno];
    MemberImg.innerText = imageList[Memberno];
    MemberDetail.innerText = detailList[Memberno];

    if (MemberName.innerText == 'undefined') { 
    Memberno = 0;
    MemberName.innerText = nameList[Memberno];
    MemberRole.innerText = roleList[Memberno];
    MemberImg.innerText = imageList[Memberno];
    MemberDetail.innerText = detailList[Memberno];

    }

}

function memPrev() { 
    
    Memberno--  ;
    MemberName.innerText = nameList[Memberno];
    MemberRole.innerText = roleList[Memberno];
    MemberImg.innerText = imageList[Memberno];
    MemberDetail.innerText = detailList[Memberno];

    if (MemberName.innerText == 'undefined') { 
    Memberno = 0;
    MemberName.innerText = nameList[Memberno];
    MemberRole.innerText = roleList[Memberno];
    MemberImg.innerText = imageList[Memberno];
    MemberDetail.innerText = detailList[Memberno];

    }


}

console.log(MemberName.innerText);






