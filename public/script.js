function showPhoto() {
    var element = document.querySelector('list_first');

    if (element.style.display === 'none') {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
};