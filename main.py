input.onPinPressed(TouchPin.P0, function () {
    NumeroMessage += 1
})
input.onPinPressed(TouchPin.P2, function () {
    NumeroMessage = 0
})
input.onPinPressed(TouchPin.P1, function () {
    while (NumeroMessage > 0) {
        NumeroMessage += -1
    }
})
let NumeroMessage = 0
NumeroMessage = 0
let liste_de_textes = ["a", "b", "c"]
basic.forever(function () {
	
})
