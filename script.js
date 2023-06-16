window.onload = function() {
    var tab1 = document.getElementById('tab1');
    var tab2 = document.getElementById('tab2');
    var tab3 = document.getElementById('tab3');

    tab1.onclick = function(event) {
        loadTabContent(event,'london.html');
    }

    tab2.onclick = function(event) {
        loadTabContent(event,'paris.html');
    }

    tab3.onclick = function(event) {
        loadTabContent(event,'tokyo.html');
    }
	
    loadTabContent({currentTarget: tab1},'london.html'); // Chargez le contenu de l'onglet London par défaut
}

function loadTabContent(evt,url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('tabContent').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
    Array.from(document.getElementsByClassName("tablink")).forEach(el => el.className = el.className.replace(" w3-red", ""));
	evt.currentTarget.className += " w3-red";
}
