---
layout: post
title:  Petalinux Application Creation Toturial
category: 技术
tags: zybo
keywords: petalinux, zybo
---

The toturial introduce the steps and commands used to create petalinux application for Vivado Zynq device.


****************************************************

## Precondition

*Image creation*: You should already boot petalinux image on a zynq device, refering [Petalinux Imange Creation Toturial](http://charlieshao5189.github.io/2017/03/25/petalinux-image-toturial.html) for more detail.

*Version*: test on petalinux tools version 2015.\*~2016.\* .

****************************************************

## Petalinux application creation steps

### 1. Add Custom Applications  
```
$ petalinux-create -t apps --name myapp --enable 
```

### 2.Build myapp into an existing system image
"petalinux-build -x package" is used to update newly build application to file system.
```
$ cd <plnx-proj-root> 
$ petalinux-build -c rootfs -x do_gen_sysroot 
$ petalinux-build -c rootfs/myapp 
$ petalinux-build -x package 
```

### 3. Create boot image
```
$ petalinux-package --boot --fsbl zynq_fsbl.elf --fpga download.bit --u-boot --force
```

### 4. Create prebuilt file
```
$ petalinux-package --prebuilt --fpga  download.bit --force
```
### 5. Test
```
$ petalinux-boot --qemu --prebuilt 3
$ petalinux-boot --jtag --prebuilt 3
```
