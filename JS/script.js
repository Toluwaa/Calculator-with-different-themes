let two = document.getElementById('two');
two.addEventListener('click',function(){
			let body=document.querySelector('body');
			let toggler = document.getElementById('circle');
			body.classList.add('two');
			body.classList.remove('three'); 
			toggler.style.left = '42px'; 
})
let one = document.getElementById('one');
one.addEventListener('click',function(){
			let body=document.querySelector('body');
			let toggler = document.getElementById('circle');
			body.classList.remove('two');
			body.classList.remove('three');
			toggler.style.left = '5px'; 
			
})
let three = document.getElementById('three');
three.addEventListener('click',function(){
			let body=document.querySelector('body');
			let toggler = document.getElementById('circle');
			body.classList.add('three');
			body.classList.remove('two');
			toggler.style.left = '89px';
});

const output = document.querySelector('.output');
const mats = document.querySelectorAll('button');
mats.forEach(mat=>{
	mat.addEventListener('click', calculate);
});

function calculate(){
	let buttonText = this.innerText
	if (buttonText === "RESET"){
		output.innerText = "";
	return;
	}
	if (buttonText === "DEL") {
		output.textContent = output.textContent.substr(0, output.textContent.length-1);
		return;
	}
	if (buttonText === "=") {
		output.innerText = eval(output.innerText);
		return;
	}
	else{
		output.textContent += buttonText;
		return;
	}
}