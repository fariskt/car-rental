document.addEventListener('DOMContentLoaded', function() {
    let modal = document.getElementById("myModal");
    let btn = document.getElementById("myBtn");
    let span = document.getElementsByClassName("close")[0];
    let close_btn = document.getElementsByClassName("close-btn")[0];

    btn.onclick = function() {
       modal.style.display = "block";
    }

    span.onclick = function() {
       modal.style.display = "none";
    }
    close_btn.onclick = function(){
        modal.style.display = "none";
    }

    window.onclick = function(event) {
       if (event.target == modal) {
          modal.style.display = "none";
       }
    }
 });
