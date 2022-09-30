input.onButtonPressed(Button.A, function () {
    if (currentState == states.indexOf("Start")) {
        total += 1
        basic.showNumber(total)
    } else if (currentState == states.indexOf("Next")) {
        total = total * 2
        basic.showNumber(total)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.B, function () {
    if (currentState == states.indexOf("Start")) {
        total += -1
        basic.showNumber(total)
    } else if (currentState == states.indexOf("Next")) {
        total = total / 2
        basic.showNumber(total)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onGesture(Gesture.Shake, function () {
    currentState += 1
    if (currentState > states.indexOf("End")) {
        Over = true
    }
})
let total = 0
let Over = false
let currentState = 0
let states: string[] = []
states = ["Start", "Next", "End"]
currentState = 0
Over = false
total = 0
basic.showString("State:" + states[currentState])
basic.forever(function () {
    if (Over) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `,50)
basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `,50)
basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `,50)
basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `,50)
    }
})
