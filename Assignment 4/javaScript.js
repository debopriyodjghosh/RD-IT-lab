//JS script
function btnclick() {
    console.log("Button click");

    let formdata = new FormData();
    let file = document.getElementById("multifile").files;
    console.log(file[0].name)
    let size = 0;

    let x = new XMLHttpRequest();
    // x.onreadystatechange = function () {
    //     if ((x.readyState == 4) && (x.status = 200))
    //         document.getElementById("view").innerHTML = x.responseText;
    // }

    for (let i = 0; i < file.length; i++) {
        size += file[i].size;
        formdata.append(file[i].name, file[i]);
    }
    console.log(size)


    if (size < 10000000) {
        x.open("POST", "upload.php", true);
        x.send(formdata);
    } else { alert("post data size exceeded"); }

}