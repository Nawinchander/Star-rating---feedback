const stars = document.querySelectorAll('.star');
const rating = document.querySelector('.current-rating');

stars.forEach((star,index)=>{
    star.addEventListener('click',()=>{
        let current_Star = index+1;
        rating.innerText = `${current_Star} out of 5`;

        stars.forEach((star,i) => {
            if(current_Star >= i+1 ){
                star.innerHTML = '&#9733;';
            }
            else{
                star.innerHTML = '&#9734;';
            }
        });
    });   

});
