var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
     for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzLwAj-N5GcUOeiqfItpJnV28bn_naGEmTXHrzAzDtRDmQJDcvmW6rPF_qdTQjGfLVq/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully. I'll reply you within a week"
         setTimeout(function(){
                msg.innerHTML = ""
    },5000)
    form.reset()
})
    .catch(error => console.error('Error!', error.message))
})


//typing animation
var typed = new Typed(".typing", {
    strings: ["Captian Oddessy","a Web developer","Also web designer"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 2500,
    loop: true
});

// scroll to top animation 
window.addEventListener('scroll', () => {
    var scrolled = window.scrollY;
    var onTop = document.getElementById('scroll');

    if( scrolled >= 500){
        onTop.classList.add('show');
    }
    else{
        onTop.classList.remove('show');
    }

})
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

// Animation function
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('see');
        }
        else {
            entry.target.classList.remove('see');
        }
    })
})
const hideElements = document.querySelectorAll('.hide')
hideElements.forEach((el) => observer.observe(el));