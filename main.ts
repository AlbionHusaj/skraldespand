let NyLs = 0
servos.P1.setAngle(0)
let Ls = pins.analogReadPin(AnalogPin.P2)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P10) == 1) {
        NyLs = pins.analogReadPin(AnalogPin.P2)
        if (NyLs < 0.9 * Ls) {
            servos.P1.setAngle(90)
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(3500)
        } else {
            Ls = (NyLs + Ls) / 2
            servos.P1.setAngle(0)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
