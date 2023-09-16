function showPhoto() {
    var element = document.getElementById('listFirst');

    if (element.style.display === 'none') {
        element.style.display = "flex";
    } else {
        element.style.display = "none";
    }
};