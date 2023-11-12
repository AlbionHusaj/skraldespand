let NyLs = 0
servos.P1.setAngle(0)
let Ls = pins.analogReadPin(AnalogPin.P2)
music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
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
})
