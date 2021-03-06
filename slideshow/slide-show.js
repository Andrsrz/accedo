(function (root) {
  root.SlideShow = SlideShow;

  function SlideShow(element, timeSeconds = 4) {
    // Your Plugin code here
	let images = element.getElementsByClassName("slide");
	let caption = element.getElementsByClassName("caption");
	let timeMiliseconds = timeSeconds * 1000;
	let index = 0;
	  console.log(caption);

	images[index].classList.add("active");
	caption[0].innerText = images[index].attributes[1].value;

	setInterval(() => {
		images[index].classList.remove("active");
		caption[0].innerText = "";
		index++;

		if(index == images.length) index = 0;

		images[index].classList.add("active");
		caption[0].innerText = images[index].attributes[1].value;
	}, timeMiliseconds);
  }
})(window);
