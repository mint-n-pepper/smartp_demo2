let distanz_variable = 0
music.setVolume(60)
basic.forever(function () {
    distanz_variable = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distanz_variable <= 5) {
        basic.showIcon(IconNames.Skull)
        while (distanz_variable >= 0 && distanz_variable <= 5) {
            distanz_variable = sonar.ping(
            DigitalPin.P0,
            DigitalPin.P1,
            PingUnit.Centimeters
            )
            music.playMelody("A A A A F F F F ", 480)
        }
    } else if (distanz_variable <= 10) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.ringTone(262)
    } else if (distanz_variable <= 30) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `)
        while (distanz_variable > 10 && distanz_variable <= 30) {
            distanz_variable = sonar.ping(
            DigitalPin.P0,
            DigitalPin.P1,
            PingUnit.Centimeters
            )
            music.ringTone(1200 - distanz_variable * 10)
        }
    } else if (distanz_variable <= 60) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        while (distanz_variable > 30 && distanz_variable <= 60) {
            distanz_variable = sonar.ping(
            DigitalPin.P0,
            DigitalPin.P1,
            PingUnit.Centimeters
            )
            music.ringTone(1200 - distanz_variable * 10)
        }
    } else if (distanz_variable <= 100) {
        basic.showLeds(`
            . # . # .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        while (distanz_variable > 60 && distanz_variable <= 100) {
            distanz_variable = sonar.ping(
            DigitalPin.P0,
            DigitalPin.P1,
            PingUnit.Centimeters
            )
            music.ringTone(1200 - distanz_variable * 10)
        }
    } else if (distanz_variable > 100) {
        basic.showIcon(IconNames.Happy)
        music.stopAllSounds()
    } else {
    	
    }
})
