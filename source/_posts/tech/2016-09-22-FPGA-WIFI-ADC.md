---
layout: post
title: WiFi and ADC study for Real-time Audio Transmission
category: 技术
tags: technology
keywords: FPGA,WiFi,ADC
---

## 1. WiFi

Some important concepts:

_WLAN_ is a wireless computer network that links two or more devices using a wireless distribution method (often spread-spectrum or OFDM radio) within a limited area such as a home, school, computer laboratory, or office building. This gives users the ability to move around within a local coverage area and yet still be connected to the network. A WLAN can also provide a connection to the wider Internet.Most modern WLANs are based on IEEE 802.11 standards and are marketed under the Wi-Fi brand name.  

_WiFi_ is a technology that allows electronic devices to connect to a _wireless LAN (WLAN)_ network, mainly using the 2.4 gigahertz (12 cm) UHF and 5 gigahertz (6 cm) SHF ISM radio bands.  

_IEEE 802.11_ is a set of media access control (MAC) and physical layer (PHY) specifications for implementing wireless local area network (WLAN) computer communication in the 900 MHz and 2.4, 3.6, 5, and 60 GHz frequency bands.  

_OSI_ : The Open Systems Interconnection model (OSI model) is a conceptual model that characterizes and standardizes the communication functions of a telecommunication or computing system without regard to their underlying internal structure and technology.  
         7.  Application layer  
         6.  Presentation layer  
		 5.  Session layer  
		 4.  Transport layer  
		 3.  Network layer  
		 2.  Data link layer  
		 1.  Physical layer    
		 
_PHY_ :In the seven-layer OSI model of computer networking, the physical layer or layer 1 is the first and lowest layer.[1] This layer may be implemented by a PHY.  

_MAC_ :In the IEEE 802 reference model of computer networking, the medium access control or media access control (MAC) layer is the lower sublayer of the data link layer (layer 2) of the seven-layer OSI model.

_[PmodWiFi](http://store.digilentinc.com/pmodwifi-wifi-interface-802-11g/)_: [Datasheet](https://reference.digilentinc.com/_media/reference/pmod/pmodwifi/pmodwifi_rm.pdf)   [Resource Center](https://reference.digilentinc.com/reference/pmod/pmodwifi/start)

Distance: The longest distance is IEEE 802.1n standerd, theoretically 230m indoor, 250m outdoor. The distance will reduce according to the real environment.

## 2. Existing technologies used by drone

control method:  

* Radio Control (2.4G radio, longest range)
* WiFi live video control through WiFi equipments like mobilephone,teblet(Parrot AR.Drone 2.0 )
* WiFi live video + RC (3DR Solo, Dji phantom-4 for professional photography)
				

FPV: First-person view (FPV), also known as remote-person view (RPV), or simply video piloting, is a method used to control a radio-controlled vehicle from the driver or pilot's view point. Most commonly it is used to pilot a radio-controlled aircraft or other type of unmanned aerial vehicle (UAV). The vehicle is either driven or piloted remotely from a first-person perspective via an onboard camera, fed wirelessly to video FPV goggles or a video monitor. 

## 3. ADC  

PmodAD2: 4-channel 12-bit A/D Converter    [Datasheet](https://reference.digilentinc.com/reference/pmod/pmodad2/reference-manual)

## 4. [Live streaming media process](https://en.wikipedia.org/wiki/Streaming_media)
The audio stream is compressed to make the file size smaller using an audio coding format such as MP3, Vorbis, AAC or Opus. The video stream is compressed using a video coding format to make the file size smaller. Video coding formats include H.264, HEVC, VP8 or VP9. Encoded audio and video streams are assembled in a container "bitstream" such as MP4, FLV, WebM, ASF or ISMA. The bitstream is delivered from a streaming server to a streaming client (e.g., the computer user with their Internet-connected laptop) using a transport protocol, such as Adobe's RTMP or RTP. In the 2010s, technologies such as Apple's HLS, Microsoft's Smooth Streaming, Adobe's HDS and non-proprietary formats such as MPEG-DASH have emerged to enable adaptive bitrate streaming over HTTP as an alternative to using proprietary transport protocols. Often, a streaming transport protocol is used to send video from an event venue to a "cloud" transcoding service and CDN, which then uses HTTP-based transport protocols to distribute the video to individual homes and users. The streaming client (the end user) may interact with the streaming server using a control protocol, such as MMS or RTSP.

## [Raspberry Pi Camera Streaming](https://www.youtube.com/watch?v=SjEZ4y0vIUE)

## FPGA

SPI, I2C should work with microchip with these periperals, using FPGA to implement them will be compliex and unnecessary.
many MUC has ADC periperal, using simple cicuit will make it work.


## 5. questions about: Strategies for Real-time Data Transmission From UAV

* Real-time: WiFi,Process, will increase Latency, ms level? 
* Data Transmission From UAV: battery status, gps status, live media stream, controlling data(frong Remote controller to drone)
* why don't ues the existing methods?
* why using drone to record audio? applications
* no drone on the market provide audio?
* don't limited to FPGA, but glue them together later?


