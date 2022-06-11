enum direction {
    //% blockID="dir_left" block="left"
    left = 1,
    //% blockID="dir_right" block="right"
    right = 2
}
//% color="#03AA74" weight=88 icon="\uf021" blockGap=8
//% groups='["Servos", "Claws"]'
namespace demo {

    const CLAW_ON_DEGREE = 90
    const CLAW_OFF_DEGREE = 0

    //% block="$On" blockId=toggleOnOff
    //% On.shadow="toggleOnOff"
    function OnOff(On: boolean): boolean {
        return On;
    }

    //% block="Servo pin %pin turn %dir by %degree °" blockId=servoTurn
    //% degree.min=0 degree.max=90
    //% group="Servos"
    //% help=functions/servoTurn
    export function servoTurn(pin: AnalogPin, dir: direction, degree: number): void {
        if (dir == direction.left) {
            pins.servoWritePin(pin, 90 - degree);
        }
        else {
            pins.servoWritePin(pin, 90 + degree);
        }
    }

    //% block="Servo pin %pin to original position" blockId=servoStop
    //% group="Servos"
    //% help=functions/servoStop
    export function servoStop(pin: AnalogPin): void {
        servoTurn(pin, direction.left, 0);
    }

    //% block="Claw with pin %pin %status" blockId=clawSwitch
    //% status.shadow="toggleOnOff"
    //% group="Claws"
    //% help=functions/clawSwitch
    export function clawSwitch(pin: AnalogPin, status: boolean): void {
        if (status) {
            pins.servoWritePin(pin, CLAW_ON_DEGREE);
        }
        else {
            pins.servoWritePin(pin, CLAW_OFF_DEGREE);
        }
    }
}
