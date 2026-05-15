document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior:'smooth'
        });
    });
});


const heroButtons=document.querySelectorAll(".hero-buttons button");
heroButtons.forEach(button=>{
    button.addEventListener("mouseenter",()=>{
        button.style.transform="scale(1.05)";
    });
    button.addEventListener("mouseleave",()=>{
        button.style.transform="scale(1)";
    });
});


const cards=document.querySelectorAll(".project-card");
cards.forEach(card=>{
    card.addEventListener("mouseenter",()=>{
        card.style.transform="translateY(-10px)";
    });
    card.addEventListener("mouseleave",()=>{
        card.style.transform="translateY(0)";
    });
});



const form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    alert("Message envoyé avec succès !");
});