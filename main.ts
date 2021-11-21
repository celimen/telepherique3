input.onPinPressed(TouchPin.P0, function () {
    if (NumeroMessage <= liste_de_textes.length) {
        NumeroMessage += 1
    }
})
input.onPinPressed(TouchPin.P2, function () {
    NumeroMessage = 0
})
input.onPinPressed(TouchPin.P1, function () {
    if (NumeroMessage > 0) {
        NumeroMessage += -1
    }
})
let liste_de_textes: string[] = []
let NumeroMessage = 0
NumeroMessage = 0
liste_de_textes = [
"",
"a",
"B",
"c"
]
basic.forever(function () {
    while (NumeroMessage < liste_de_textes.length) {
        basic.showString("" + (liste_de_textes[NumeroMessage]))
    }
})
