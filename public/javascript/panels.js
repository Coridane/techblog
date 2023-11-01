// Login view

const loginPanel = document.getElementById('login');
const registerPanel = document.getElementById('register');

loginPanel.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupTab.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

registerPanel.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginTab.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});