import Video from '../../../components/Video'

### Background

I wanted to create a physical button that my dog could hit with his paw or nose to send me a text message when he needs to go outside to the bathroom. I decided to use a Raspberry Pi (a small, cheap Linux computer), a momentary switch (a physical push button), and Node to program the text messaging logic when the button is pressed.

### The final product

It works! You press the button and it sends me a text message from my dog saying "I need to go to the bathroom!". It would be cool to additionally 3D print a case and button surface area extending disc, but the functional pieces are here.

<Video src="/static/dog-bathroom-button-final.mp4" />

### Parts

- Raspberry Pi 3
- 8+ GB micro SD card pre-loaded with NOOBS
- Raspberry Pi 3 case
- 2.5A 5V micro USB power supply
- Momentary button with built-in resistor and GPIO wires
- An HDMI cable, USB keyboard, and USB mouse if you don't already have them
- The [CanaKit Complete Starter Kit](https://www.amazon.com/gp/product/B01C6Q2GSY) and [Raspberry Squid Button Twin Pack](https://www.amazon.com/gp/product/B0170B75EU) are what I purchased to get these items.

You could probably use cheaper items instead, but I chose these items to simplify the setup (skip installing Linux, soldering, and wiring up circuits and so I could use Node and npm in a Linux environment which I am comfortable with).

### Case

Connect the case onto the Raspberry Pi.

<Video src="/static/dog-bathroom-button-case.mp4" />

### SD card

Slide the micro SD card into the slot on the bottom of the Raspberry Pi. The SD card should have NOOBS on it which is the official Raspberry Pi operating system installer.

<Video src="/static/dog-bathroom-button-sd.mp4" />

### Cables

Connect one end of the HDMI cable to the HDMI input on the Raspberry Pi and the other end to a monitor or TV. Connect a USB keyboard and mouse to the USB ports on the Raspberry Pi. Connect the power adapter to the Raspberry Pi - this will boot the device.

![Raspberry Pi cables](/static/dog-bathroom-button-cables.png)

### Operating System setup

The first time you connect power to the Raspberry Pi, you should see the NOOBS install screen. Select Raspbian and then Install.

![NOOBS Raspbian installer](/static/dog-bathroom-button-noobs.png)

Once NOOBS has installed the operating system (this will take a few minutes), a reboot will occur and Raspbian should start by default going forward. Raspbian is the official operating system for Raspberry Pis and is a fork of Debian (a Linux distribution). It has all the basics you would expect from a Linux computer (browser, terminal, file system).

![Raspbian desktop](/static/dog-bathroom-button-raspbian.png)

### Connect Wi-Fi

To connect Wi-Fi, tap the network icon in the top menu bar and then the network to connect to. A popup will show to enter the network's password.

![Raspbian Wi-Fi setup](/static/dog-bathroom-button-wifi.png)

### Upgrade Node + npm

Open the terminal app. Figure out what version of Node you want to use and then run the commands below with the version in place of X.Y.Z:

- Download the latest with `wget https://nodejs.org/dist/vX.Y.Z/node-vX.Y.Z-linux-armv7l.tar.gz`
- Unpack the download with `tar -xvf node-vX.Y.Z-linux-armv7l.tar.gz`
- Go into the unpacked download with `cd node-vX.Y.Z-linux-armv7l`
- Copy the binaries with `sudo cp -R \* /usr/local/`

### Button

Connect the button's wires to pin numbers five (GPIO 3) and six (ground) on the Raspberry Pi GPIO header.

<Video src="/static/dog-bathroom-button-gpio.mp4" />

### Set up the Node script

You will need a code editor. I use Vim which can be installed with (sudo apt-get update && sudo apt-get install vim); there are other terminal-based editors or some editors inside the Raspbian menu you can use as well. Next you will need to create your project code; you can view mine in the [dog-bathroom-button](https://github.com/trevordmiller/dog-bathroom-button) repo. This uses a few dependencies which can be installed with npm install. Then, running npm start will start the Node process which listens for the button press (on the GPIO 3 pin) and sends a text message using Twilio. It also has a debounce wrapper so that the button can only fire a text message once every 10 seconds, even if it is pressed more than once in that time period (for the over-eager dog).

[View the Code](https://github.com/trevordmiller/dog-bathroom-button)

### Run the Node script automatically on boot

You can have the script run automatically on boot by adding `cd {project} && npm start &` to the `/etc/rc.local` file. This file is run when Raspian boots, and adding the `&` to the end runs the server as a background process. Once this is done, you can shutdown the device, unplug everything, and then re-plug in only the power adapter and the program will run on its own by any outlet in your home.

### Phone contact

I set up a phone contact for my dog with his picture to make the texts more clear. I also set up Emergency Bypass for the contact (a feature on iOS that lets the contact through even if your phone is on silent) to ensure I always hear when my dog needs to go out.

![Dog bathroom button contact](/static/dog-bathroom-button-contact.png)

### Safe shut down

When working on a Raspberry Pi, it should always be shut down safely before power is removed to avoid corrupting the SD card. The easiest way to do this is tapping Shutdown from the Menu button. When you want to use it again, just plug the power adapter in and it will take you to the Raspbian desktop again by default.

### Conclusion

This project was a lot of fun. Although I'm not sure how practical it will be - if my dog can even use it - it was a great learning experience. Embedded systems are powerful and with modern technology can be controlled with languages like Node that are more traditionally seen in use on the web. Go forth and play with hardware!
