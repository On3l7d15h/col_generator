//vars of the website
const vars = {
	gen: document.getElementById("generate"),
	container: document.querySelector(".generated__colors"),
	nav: document.querySelector(".principal__info"),
	navh1: document.querySelector(".principal__info h1")
}

//listeners
vars.gen.addEventListener("click", () => {

	//these are some local variables
	const chars = "0123456789ABCDEF";
	vars.container.innerHTML = "";

	//in this moment we, make with the for the structure 
	//for the color
	for(let i = 0; i < 12; i++){
		let color = "";

		//in this for, we create the color
		for(let i = 0; i < 6; i++){
			let r = Math.floor(Math.random() * 15) + 1;
			color += chars.charAt(r, r); 
		}

			//creation of the structure container with 
			//buttonand input
			vars.container.innerHTML +=
			`<div style="background:#${color};">
				<input value = "#${color}"/>
				<button>Click Me!</button>
			 </div>`;
	}

	//We use an parent node, and we iterate the childrens
	//of this, it's easy than that, we don't use the onclick
	//with this forEach we iterate and add this eventListener
	//to all buttons on the container colors.
	vars.container.childNodes.forEach(v => {
		v.childNodes[3].addEventListener("click", (e) => {
			v.childNodes[1].select()
			document.execCommand("copy");
			window.getSelection().removeAllRanges();

			//in this part, we give an user a signal about
			//the color is copied in their back
			v.childNodes[3].textContent = "Sucess!";
			vars.nav.style.backgroundColor = `#79DB69`;
			setTimeout(() => {
				v.childNodes[3].textContent = "Click Me!";
				vars.nav.style.backgroundColor = `#b6b6b6`;
			}, 1500)
		});
	})

});

//this is a animation to the nav bar of the page.
window.addEventListener("scroll", () => {

	const scrollTop = document.documentElement.scrollTop;
	const topNav = vars.nav.offsetTop;

		if(scrollTop - 400 < topNav){
			vars.nav.style.height = `${200 - (scrollTop)*0.5}px`;
		}

});