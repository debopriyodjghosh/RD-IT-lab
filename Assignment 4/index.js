function suggest(str) {
    if (str.length == 0) {
        document.getElementById("hint").innerHTML = "";
        document.getElementById("abt").innerHTML = "";
        return;
    } else {
        const xttp = new XMLHttpRequest();
        xttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let hint = document.getElementById("hint");
                while (hint.firstChild) {
                    hint.removeChild(hint.lastChild);
                }
                const myObj = JSON.parse(this.responseText);

                var div,
                    i = 0;
                for (var x in myObj) {
                    div = document.createElement("div");

                    div.innerHTML = myObj[x].first_name + "<br>";
                    div.id = "divChild" + i;
                    i++;
                    hint.appendChild(div);
                }

                return;
            }
        };
        /*xttp.open("GET","ajax.php?name="+str,true);
            xttp.send();*/
        xttp.open("GET", "ajax.php?fname=" + str, true);
        xttp.send();
    }
}

function info(event) {
    const xttp = new XMLHttpRequest();
    var abt = document.getElementById("abt");
    var div = document.getElementById(event.target.id);
    var txt = div.innerText;

    xttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const myObj = JSON.parse(this.responseText);
            var text = "";
            for (let key in myObj[0]) {

                text += "<div class='show'>" + key + "  " + "--" + "  " + myObj[0][key] + "<br>" + "</div>";
            }
            abt.innerHTML = text;
            return;
        }
    };


    xttp.open("GET", "ajax.php?ip=" + txt, true);
    //xttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xttp.send();
}