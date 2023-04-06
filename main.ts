let acc_y = 0
let acc_x = 0
let x = 2
let y = 2
let game2 = true
let time = 0
while (game2 && time < 100) {
    led.plot(x, y)
    acc_x = input.acceleration(Dimension.X)
    acc_y = input.acceleration(Dimension.Y)
    if (acc_x < -200) {
        if (x > 0) {
            x += -1
        } else {
            game2 = false
        }
    }
    if (acc_x > 200) {
        if (x < 4) {
            x += 1
        } else {
            game2 = false
        }
    }
    if (acc_y > 200) {
        if (y < 4) {
            y += 1
        } else {
            game2 = false
        }
    }
    if (acc_y < -200) {
        if (y > 0) {
            y += -1
        } else {
            game2 = false
        }
    }
    basic.pause(200)
    basic.clearScreen()
    time += 1
}
if (game2) {
    basic.showString("WINNER!")
} else {
    basic.showString("GAME OVER!")
}
