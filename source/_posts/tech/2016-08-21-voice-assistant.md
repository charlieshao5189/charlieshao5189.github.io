---
layout: post
title: Primary Exploraiton of Voice Assistants 
category: 技术
tags: technology
keywords: voice assistant,siri,google assistant, cortana, Amazon ECHO, Alexa
---
## 1 Voic assistant will be:

> J.A.R.V.I.S. (Stands for Just A Rather Very Intelligent System) of \<IRON MAN\>, also stylized as JARVIS, or Jarvis, is a highly advanced computerized A.I. developed by Tony Stark, and was voiced by actor Paul Betteny, to manage almost everything, especially matters related to technology, in Tony's life.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZwOxM0-byvc" frameborder="0" allowfullscreen></iframe>

> Samantha of \<HER\>,an intelligent computer operating system personified through a female voice.

<iframe width="560" height="315" src="https://www.youtube.com/embed/6QRvTv_tpw0" frameborder="0" allowfullscreen></iframe>

## 2 What's trending of voice recognition today?
On 2016 Code conference, Mary Meeker give the annual [Internet Trends report](http://dq756f9pzlyr3.cloudfront.net/file/2016_internet_trends_report_final.pdf), she gived 21 pages(total 213) of slides on the evolution of voice and natural language as a computing interface.
<iframe width="560" height="315" src="https://www.youtube.com/embed/334Gfug5OL0?start=926&end=1078" frameborder="0" allowfullscreen></iframe>

_Popular voice assistant:_
 * Apple siri
 * Microsoft cortana
 * Google Now(will repalced by Google Assistant later 2016)
 * Amazon Alexa(basd on Amazon ECHO) 

### Voice Assistants: Siri vs Google Now vs Cortana 
<iframe width="560" height="315" src="https://www.youtube.com/embed/VStI2gBCuik" frameborder="0" allowfullscreen></iframe>

### Alexa working on Amazon ECHO
<iframe width="560" height="315" src="https://www.youtube.com/embed/KkOCeAtKHIc" frameborder="0" allowfullscreen></iframe>

## 3 How to implement speech recognition 

### 3.1 speech recognitin process

![speech recognition](http://www.lumenvox.com/img/products/engine/IMG_HowSpeechRecWorks.gif)

* Speech recognition is a type of pattern recognition problem 
–Input is a stream of sampled and digitized speech data 
–Desired output is the sequence of words that were spoken 

* Incoming audio is “matched” against stored patterns that represent various sounds in the language 
  –Sound units may be words, phonemes or  other similar units 
  –Patterns also represent linguistic constraints 
     •“Fire And Ice” or “Firing Ice”? 

### 3.2 Hidden Markov model 

> a statistical Markov model in which the system being modeled is assumed to be a Markov process with unobserved (hidden) states.
People have been using them in speech recognition for decades.The Hidden Markov Model Toolkit (_HTK_) is a portable toolkit for building and manipulating hidden Markov models.

### 3.3 Speech Engines and APIs

* [_CMU Sphinx_](http://cmusphinx.sourceforge.net/wiki/), also called Sphinx in short, is the general term to describe a group of open souce speech recognition systems developed at Carnegie Mellon University. These include a series of speech recognizers (Sphinx 2 - 4) and an acoustic model trainer (SphinxTrain).It can be used in different platforms and can work offline.

* [_Amazon Alexa_](https://developer.amazon.com/public/solutions/alexa), the voice service that powers Echo, provides capabilities, or skills, that enable customers to interact with devices in a more intuitive way using voice._The Alexa Skills Kit_ is a collection of self-service APIs, tools, documentation and code samples that make it fast and easy for you to add skills to Alexa._Alexa Voice Service (AVS)_ is an intelligent and scalable cloud service that adds voice-enabled experiences to any connected product – all you need is a microphone and speaker. Users can simply talk to their Alexa-enabled products to play music, answer questions, get news and local information, control smart home products and more. 

* [_Google Cloud Speech API_](https://cloud.google.com/speech/) enables developers to convert audio to text by applying powerful neural network models in an easy to use API. The API recognizes over 80 languages and variants, to support your global user base. You can transcribe the text of users dictating to an application’s microphone, enable command-and-control through voice, or transcribe audio files, among many other use cases. Recognize audio uploaded in the request, and integrate with your audio storage on Google Cloud Storage, by using the same technology Google uses to power its own products.

* [_Microsoft Bing Speech API_](https://www.microsoft.com/cognitive-services/en-us/speech-api) main functions:Speech Recognition, Text to Speech, Speech Intent Recognition.

* [_IOS10 Speech Recognition API_](https://developer.apple.com/library/prerelease/content/releasenotes/General/WhatsNewIniOS/Articles/iOS10.html), iOS 10 will bring a brand new Speech Recognition API that allows you to perform rapid and contextually informed speech recognition in both file-based and realtime scenarios. 

* [_Wit.ai_](https://wit.ai/) makes it easy for developers to build applications and devices that you can talk or text to. Our vision is to empower developers with an open and extensible natural language platform. Wit.ai learns human language from every interaction, and leverages the community: what’s learned is shared across developers.
* [_Api.ai_](https://api.ai/) Natural Language API for mobile apps, IoT, devices, etc.


## 4 Implement Speech recognition to embedded system(Home automation, Robot, Car control, etc.)

### 4.1 cloud-based speech recognition
Peopel familiar Siri, Google Now, Cortana and Echo in speech recognition, most of the time they use these voice assistant to get information and deal their viturl stuff. Now more and more companies start to show their ambitions on speech recognition for embedded system, their Speech Engines or APIs begin to support home automaion divices, robots and so on.Here is a picture from Amazon Alex showing how the cloud-based speech engine work with home automation devices.
![alexa_smart_home_ecosystem](https://developer.amazon.com/public/binaries/content/gallery/developerportalpublic/alexa_smart_home_ecosystem.png)

### 4.2 local speech recognition
Other popular uses of embedded speech recognition are in devices that want fast and accurate responses to limited commands, normally the speech recognition is locally processed by a specifice microchip. Here are features of this kind hardware based speech recognition system:

_Advantages:_

* Low latency

* Fast response speed

* offline

_Disadvantages:_

* limited commands

* lower accuracy

* need trainning process

## 5 Reference:
* [Deploying speech recognition locally versus the cloud](http://embedded-computing.com/guest-blogs/deploying-speech-recognition-locally-versus-the-cloud/)
* [Speech Recognition System for Embedded Real-time Applications](https://www.researchgate.net/publication/224111951_Speech_Recognition_System_for_Embedded_Real-time_Applications)






