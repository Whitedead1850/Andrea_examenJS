var x = 0;
var arr = [];


function voegToe() {
    getal = document.formulier.getal.value;
    arr[x] = document.getElementById("getal").value;
    if (getal == null) {
        document.formulier2.berekening.value = "U heeft niets ingevuld!"
    } else if (isNaN(getal)) {
        document.formulier2.berekening.value = "U heeft geen cijfer ingevuld!"
    } else document.formulier2.berekening.value = "alle cijfers " + arr + "- Juist toegevoegd: " +
        arr[arr.length - 1];

    x++;
    document.getElementById("getal").value = "";

    console.log(arr)
}

function bereken() {
    var totaal = 0;
    for (var i = 0; i < arr.length; i++) {
        n = Number(arr[i])
        totaal += n;
    }
    document.formulier2.berekening.value = "alle cijfers " + arr + "- Som is : " + totaal

}