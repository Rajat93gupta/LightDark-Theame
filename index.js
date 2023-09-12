const togglebutton = document.querySelector('input[type=checkbox]')
const nav = document.getElementById('nav')
const toggleIcone = document.getElementById('toggle-icon')
const textBox = document.getElementById('text-box')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')

function darkMode(){
    textBox.style.backgroundColor = 'rgba(255 255 255 / 50%)'
    nav.style.backgroundColor='rgba(0 0 0 /50%)';
    toggleIcone.children[0].textContent = "Dark Mode";
    toggleIcone.children[1].classList.remove('fa-sun')
    toggleIcone.children[1].classList.add('fa-moon')
    image1.src='img/undraw_proud_coder_dark.svg'
    image2.src='img/undraw_feeling_proud_dark.svg'
    image3.src='img/undraw_conceptual_idea_dark.svg'

}
function LightMode(){
    textBox.style.backgroundColor = 'rgba(0 0 0/ 50%)'
    nav.style.backgroundColor='rgba(255 255 255 /50%)';
    toggleIcone.children[0].textContent = "Light Mode";
    toggleIcone.children[1].classList.add('fa-sun')
    toggleIcone.children[1].classList.remove('fa-moon')
    image1.src='img/undraw_proud_coder_light.svg'
    image2.src='img/undraw_feeling_proud_light.svg'
    image3.src='img/undraw_conceptual_idea_light.svg'
    
}


function SwitchTheame(event){
    // console.log(event);
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark')
        darkMode()
    }
    else{
        document.documentElement.setAttribute('data-theme','light')
        LightMode()

        


    }

}

togglebutton.addEventListener("change",SwitchTheame)