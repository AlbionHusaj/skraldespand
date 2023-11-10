servos.P1.set_angle(0)

def on_forever():
    if input.light_level() < 120:
        servos.P1.set_angle(90)
        pins.digital_write_pin(DigitalPin.P0, 1)
    if input.light_level() > 120:
        servos.P1.set_angle(0)
        pins.digital_write_pin(DigitalPin.P0, 0)
basic.forever(on_forever)
