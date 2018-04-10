---
layout: post
title:  Vivado 2016.4 on Ubuntu problem fix
category: 技术
tags: zybo
keywords: petalinux, zybo
---

 Try to install Vivado 2016.4 on Ubuntu 2016.4. There are some problems happened before I make it work. On this toturial, I sumarised the problems you may meet when you use Vivado 2016.4 on Ubuntu 2016.4. Solutions are provided to solve these problems.  


****************************************************

## Precondition

*Vivado(including SDK) version*: 2016.4

*Ubuntu version*: 2016.4

****************************************************


### A. Fix SDK launcher problem
----------------

Problem: SDK can not successfully lanch. 

1) open file using 
```
$ sudo nano /<install path>/Xilinx/SDK/2016.3/eclipse/lnx64.o/eclipse.ini 
```

2) append
```
--launcher.GTK_version
2
```

before
```
-vmargs
```

3) save using append

### B. add environment path
----

1) open file using 
```
$ nano ~/.bashrc
```

append
```
source /home/cs/Xilinx/Vivado/2016.4/settings64.sh
```
to last.
2) save as Append(Ctr+A)
c. launch vivado
```
$ vivado
$ xsdk
```

### C.install cable drivers
-------------------------------------------------
```
$ cd /opt/Xilinx/Vivado/2016.4/data/xicom/cable_drivers/lin64/install_script/install_drivers/
$ sudo ./install_drivers
````

### D. add 32bit library
-------------------
```
$ sudo apt-get install lib32z1 lib32ncurses5 
```
### E. program can not boot 
---
Problem: On SDK, when you "Run *.elf" or "Debug *.elf", program cannot boot from board.
You need to locate projectName/sdk/hardware_platform***/ps7_init.tcl and delete all "--force" inside this file.

### F. FSBL
---
FSBL(first-stage-bootloader) I create on SDK seems does not wook. The BOOT.bin I created can not boot from SDcard or flash if I use FSBL.elf create on this platform.

### G. License
---
Do not forget to install license at last.

