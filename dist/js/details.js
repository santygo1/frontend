function openDetails(details_id) {
  let details = document.getElementById(details_id);
  button  = document.getElementById(details_id + "-btn");
  if (details.style.display == "none") {
  	details.style.display = "block";
  	button.className += "btn-check";
  	details.open = true;
  }else{
    details.style.display = "none";
  	button.className = button.className.replace("btn-check", "");
	  details.open = false;
  }
}