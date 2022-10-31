function LengthConverterFM(valNum) {
    document.getElementById("outputMeters").innerHTML = valNum / 10.76391;
}

function LengthConverterMF(valNum) {
    document.getElementById("outputFeet").innerHTML = valNum * 10.76391;
}

function SwapConverter() {
    var x = document.getElementById("converterFM");
    if (x.style.display === "block") {
        x.style.display = "none";
        x = document.getElementById("converterMF");
        x.style.display = "block"
    } else {
        x.style.display = "block";
        x = document.getElementById("converterMF");
        x.style.display = "none"
    }
}

function openNavM() {
    document.getElementById("mySidepanelM").style.width = "43%";
}

function openNavS() {
    document.getElementById("mySidepanelS").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidepanelM").style.width = "0";
    document.getElementById("mySidepanelS").style.width = "0";
}