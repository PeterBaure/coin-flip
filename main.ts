input.onButtonPressed(Button.A, function () {
    coin = randint(1, 2)
    coin2 = randint(1, 2)
    if (coin == 1 && coin2 == 1) {
        basic.showString("H and H")
        basic.showString("P1")
        basic.showNumber(score)
        score += 1
    } else if (coin == 2 && coin2 == 2) {
        basic.showString("T and T")
        score += 1
        basic.showString("P1:")
        basic.showNumber(score)
    } else if (coin == 1 && coin2 == 2) {
        basic.showString("H and T")
        score_2 += 1
        basic.showString("P2")
        basic.showNumber(score_2)
    } else if (coin == 2 && coin2 == 1) {
        basic.showString("T and H")
        score_2 += 1
        basic.showString("P2")
        basic.showNumber(score_2)
    } else {
    	
    }
})
let coin2 = 0
let coin = 0
let score_2 = 0
let score = 0
score = 0
score_2 = 0
let player_1 = 0
let player_2 = 0
basic.forever(function () {
	
})
