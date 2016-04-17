window.onload = function() {
    var submitBtn = document.getElementById('logInForm');
    var popUp = document.getElementById('popUp');
    var filter = document.getElementById('filter');
    var closeBtn = document.getElementById('close');

    submitBtn.onsubmit = function(){
        popUp.style.display = 'table';
        filter.style.display = 'block';
        return false;
    };

    closeBtn.onclick = function(){
        popUp.style.display = 'none';
        filter.style.display = 'none';
    }
};