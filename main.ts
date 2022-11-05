input.onButtonPressed(Button.A, function () {
    music.playMelody("C C E E G G E - ", 120)
    music.playMelody("D D F F A A F - ", 120)
    music.playMelody("E E G G B B G - ", 120)
    music.playMelody("F F A A C5 C5 A - ", 120)
    music.playMelody("C5 A F - B G E - ", 120)
    music.playMelody("A F D - G E C - ", 120)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Square)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    led.plot(0, 0)
    led.plot(1, 1)
    led.plot(2, 2)
    led.plot(3, 3)
    led.plot(4, 4)
    led.plot(0, 4)
    led.plot(1, 3)
    led.plot(2, 2)
    led.plot(3, 1)
    led.plot(4, 0)
})
