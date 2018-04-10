---
layout: post
title:  Build An Embeded Linux using Yocto project for Zybo
category: 技术
tags: zybo
keywords: Yocto, zybo
---

This toutural shows how to build an embeded linux using Yocto project for zybo on Ubuntu.

## Environment

* Ubuntu 16.04LTS
* Poky(Yocto Build System): Morty 2.2
* Free space: 30G

## Format MicroSD card
This step will make all data inside SD card disappeared, please backup your data.

1. identifiy SD card.
2. umount SD card.
3. creat two partions *ZYBO_BOOT(fat32)*, *ROOT_FS(ext4)* .

refer to [here](http://www.instructables.com/id/Setting-up-the-Zybot-Software/?ALLSTEPS) for details.

## Dowloand Poky
```
git clone  git://git.yoctoproject.org/poky.git -b morty
``` 

## Dowloand meta-xilinx
```
cd poky
git clone git://github.com/Xilinx/meta-xilinx -b morty
```

## creat build envrionemt and folder
```
source oe-init-build-env zybo_build
```
after this command, you will be in *zybo_build* folder automatically.


## modify configuration
```
zybo_build$tree.
. 
└── conf 
    ├── bblayers.conf
    ├── local.conf
    └── templateconf.cfg

1 directory, 3 files

```

Firstly, change conf/bblayers.conf, add *meta-xilinx*, looks like this after modification:

```
 # POKY_BBLAYERS_CONF_VERSION is increased each time build/conf/bblayers.conf
 # changes incompatibly
 POKY_BBLAYERS_CONF_VERSION = "1"

 BBPATH = "${TOPDIR}"
 BBFILES ?= ""

 BBLAYERS ?= " \
  /home/coldnew/poky/meta \
  /home/coldnew/poky/meta-poky \
  /home/coldnew/poky/meta-yocto-bsp \
  /home/coldnew/poky/meta-xilinx \
  "
```

Then modifiy conf/local.conf, change build target to *zybo-linux-bd-zynq7*:

```
MACHINE ??= "zybo-linux-bd-zynq7"
```

# Build core-image-minimal
There are serviral image options you can choose to build, the basic on is called *core-image-minimal*, it only contain some basic modules.  
At firt time, the build process will take serival hours depeneds on you internet speed and computer, also make sure your disk has at least 10 free space. After the first build, when you change some configurations and build it again, it will just build the part you changed, the build process will become very fast.

```
zybo_build$ bitbake core-image-minimal
```
when the build finish, open *zybo_build/tmp/deploy/images/zyb-linux-bd-zynq7/*,you will find all files we need.

# copy files to SD card

copy boot realted files to *ZYBO_BOOT*,

```
cd zybo_build/tmp/deploy/images/zyb-linux-bd-zynq7/
cp bitstream  boot.bin  u-boot-dtb.img  uImage  bootbin/zybo-linux-bd-zynq7.dtb -C
 /media/${USER}/ZYBO_BOOT
```

creat uEnv.txt, provide parameters for u-boot.

```
kernel_image=uImage
devicetree_image=zybo-linux-bd-zynq7.dtb
bootargs=root=/dev/mmcblk0p2 rw rootwait
uenvcmd=fatload mmc 0 0x3000000 ${kernel_image} && fatload mmc 0 0x2A00000 ${devicetree_image} && bootm 0x3000000 - 0x2A00000
```
ectract *core-image-minimal-zybo-linux-bd-zynq7.tar.gz* to *ROOT_FS*

```
tar xvf ~/poky/build/tmp/deploy/images/zybo-linux-bd-zynq7/core-image-minimal-zybo-linux-bd-zynq7.tar.gz -C /media/${USER}/ROOT_FS
```

add *kernel modules* if you need it. Extract *modules-zybo-linux-bd-zynq7.tgz* to *ROOT_FS*

```
sudo tar xvf ~/poky/build/tmp/deploy/images/zybo-linux-bd-zynq7/modules-zybo-linux-bd-zynq7.tgz
```

SD card with embedded linux for zybo is ready!

# Test

Insert SD card to ZYBO SDcard slot, set *JP5* to SD position. Connect serial port of zybo using *minicom*, you will see the booting information:

```
                                                                                                                                                                 
In:    serial@e0001000                                                                                                                                            
Out:   serial@e0001000                                                                                                                                            
Err:   serial@e0001000                                                                                                                                            
Model: Zynq ZYBO Development Board                                                                                                                                
Board: Xilinx Zynq                                                                                                                                                
Net:   ZYNQ GEM: e000b000, phyaddr 0, interface rgmii-id                                                                                                          
                                                                                                                                                                  
Warning: ethernet@e000b000 (eth0) using random MAC address - 5e:83:c5:eb:b0:72                                                                                    
eth0: ethernet@e000b000                                                                                                                                           
reading uEnv.txt                                                                                                                                                  
228 bytes read in 10 ms (21.5 KiB/s)                                                                                                                              
Importing environment from mmc ...                                                                                                                                
Checking if uenvcmd is set ...                                                                                                                                    
Running uenvcmd ...                                                                                                                                               
reading uImage                                                                                                                                                    
4134544 bytes read in 370 ms (10.7 MiB/s)                                                                                                                         
reading zybo-linux-bd-zynq7.dtb                                                                                                                                   
30058 bytes read in 22 ms (1.3 MiB/s)                                                                                                                             
## Booting kernel from Legacy Image at 03000000 ...                                                                                                               
   Image Name:   Linux-4.6.0-xilinx-v2016.3                                                                                                                       
   Image Type:   ARM Linux Kernel Image (uncompressed)                                                                                                            
   Data Size:    4134480 Bytes = 3.9 MiB                                                                                                                          
   Load Address: 00008000                                                                                                                                         
   Entry Point:  00008000                                                                                                                                         
   Verifying Checksum ... OK                                                                                                                                      
## Flattened Device Tree blob at 02a00000                                                                                                                         
   Booting using the fdt blob at 0x2a00000                                                                                                                        
   Loading Kernel Image ... OK                                                                                                                                    
   Loading Device Tree to 1eb18000, end 1eb22569 ... OK                                                                                                           
                                                                                                                                                                  
Starting kernel ... 
```

