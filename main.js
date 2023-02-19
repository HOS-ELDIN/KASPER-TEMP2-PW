let portofolioUl = document.querySelector("section.portfolio ul");
let portofolioLinks = document.querySelectorAll("section.portfolio ul li");
let proCards = document.querySelectorAll(".pro-card");

portofolioUl.onclick = (li) => {
	portofolioLinks.forEach((e) => {
		e.classList.remove("active");
	});

	if (li.target.parentElement.tagName === "LI") {
		li.target.parentElement.classList.add("active");
		filter(li.target.innerHTML);
	}
};

function filter(category) {
	proCards.forEach((card) => {
		if (card.dataset.category !== category) {
			card.style.display = "none";
		} else {
		card.style.display = "block";
    }
		if (category == "all") {
			card.style.display = "block";
		}
	});
}

