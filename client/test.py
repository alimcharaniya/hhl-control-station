import RPi.GPIO as GPIO
import time
from socketIO_client import SocketIO

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

TRIG = 23
ECHO = 24

print "Getting distance........"

GPIO.setup(TRIG, GPIO.OUT)
GPIO.setup(ECHO, GPIO.IN)

GPIO.output(TRIG, False)
print "waiting for sensor"
time.sleep(1)

GPIO.output(TRIG, True)
time.sleep(.0001)
GPIO.output(TRIG, False)

while GPIO.input(ECHO) == 0:
	pulse_start = time.time()

while GPIO.input(ECHO) == 1:
	pulse_end = time.time()

pulse_duration = pulse_end - pulse_start
distance = pulse_duration * 17150
distance = round(distance, 2)

print "Distance: ",distance,"cm"
GPIO.cleanup()



socketIO = SocketIO('localhost', 8080)

b = True;

socketIO.emit("stateChanged", b)
socketIO.wait()