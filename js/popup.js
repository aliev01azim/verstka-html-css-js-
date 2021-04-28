let aktiv=document.querySelectorAll('.a');
let neaktiv=document.querySelectorAll('.b');

document.querySelector('.popimg').onclick=()=>{
    aktiv.forEach(a=>{
        a.style.display='block'
    });
    neaktiv.forEach(b=>{
        b.style.display='none'
    })
}
document.querySelector('.popimg2').onclick=()=>{
    aktiv.forEach(a=>{
        a.style.display='none'
    });
    neaktiv.forEach(b=>{
        b.style.display='block'
    })
}

document.querySelector('.burger').onclick=()=>{
    document.querySelector('.leftbar').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
}
