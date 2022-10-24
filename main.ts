let xvalue = 0
let yvalue = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(xvalue, yvalue)
        basic.pause(500)
        xvalue += 1
        while (xvalue > 4) {
            xvalue = 0
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(xvalue, yvalue)
        basic.pause(500)
        yvalue += 1
        while (yvalue > 4) {
            yvalue = 0
        }
    }
})
