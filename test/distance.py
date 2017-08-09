import RPi.GPIO as GPIO
import time
import datetime
from socketIO_client import SocketIO 

GPIO.setmode(GPIO.BCM)
'''GPIO.setwarnings(False)'''

socketIO = SocketIO('10.117.124.56', 8080)

TRIG = 23
ECHO = 24

print "Getting distance........"

GPIO.setup(TRIG, GPIO.OUT)
GPIO.setup(ECHO, GPIO.IN)

GPIO.output(TRIG, False)
print "waiting for sensor"
time.sleep(1)

for x in range(0, 200):

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
	time.sleep(.3)
	isoTest = datetime.datetime.now().isoformat()
	print(isoTest)
        socketIO.emit("updateRange", distance , isoTest)
        
GPIO.cleanup()




socketIO.emit("stateChanged", distance)
socketIO.wait()
