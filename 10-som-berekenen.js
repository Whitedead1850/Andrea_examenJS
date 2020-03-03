function voegToe() {
    getal = document.formulier.getal.value;
    var arr = []
    if (getal == null) {
        document.formulier2.berekening.value = "U heeft niets ingevuld!"
    } else if (isNaN(getal)) {
        document.formulier2.berekening.value = "U heeft geen cijfer ingevuld!"
    } else document.formulier2.berekening.value = getal;

    var input = document.getElementById("getal").value;
    arr.push(input);
    /* var pval = ""; */
    for (i = 0; i < arr.length; i++) {
        /* pval = pval + arr[i] */

    }
    document.getElementById("berekening").innerHTML = arr
    console.log(arr)
}

function bereken() {

}