window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		flechaArriba.classList = "active";
	} else {
		flechaArriba.classList = "inactive";
	}
}