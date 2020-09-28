/**
 * Increase the pause to travel multiples of 10cm further.
 */
input.onButtonPressed(Button.A, function () {
    forward_10cm(5)
})
/**
 * Left and right motor speed different so the car can go straight. Only applies when car does not go straight. If going straight can use only one motor command:  "motor all move forward". This code is set to make the Maqueen go forward 50cm.
 */
function forward_10cm (multiplier: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(multiplier * 530)
    maqueen.motorStop(maqueen.Motors.All)
}
