function run(){

    let htmlCode = document.getElementById("html").value;
    let cssCode = document.getElementById("css").value;
    let jsCode = document.getElementById("js").value;
    let outPut = document.getElementById("output");

    outPut.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    outPut.contentWindow.eval(jsCode);

}