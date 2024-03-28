function validateForm() {
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var activityInput = document.getElementById("activity");

    if (nameInput === "" || emailInput === "" || activityInput.selectedIndex === 0) {
        alert("Mohon lengkapi data Anda!");
        return false;
    }

    if (!/^[a-zA-Z\s]+$/.test(nameInput)) {
        alert("Mohon isi nama Anda dengan benar!");
        return false;
    }

    var firstName = nameInput.split(' ')[0];

    alert("Halo " + firstName + ", data Anda telah tersimpan dengan baik");
    return true;

}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgslide = document.getElementsByClassName("img-slidebanner");
    if(n > imgslide.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgslide.length;

    for (i = 0; i < imgslide.length; i++) {
        imgslide[i].style.display = "none";
    }
    imgslide[slideIndex - 1].style.display = "block";
}
