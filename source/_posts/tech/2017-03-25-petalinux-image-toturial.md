---
layout: post
title:  Petalinux Image Creation Toturial
category: 技术
tags: zybo
keywords: petalinux, zybo
---

The toturial introduce the steps and commands used to create petalinux image for Vivado Zynq device.


****************************************************

## Precondition
*Prepare .hdf file:* You should already a hardware description file (*.hdf) that contain all of you hard ware design. It is nomorly can be got from you Vivado project. After Run Systhsis and Genrate bitstream, run File->Export->Export Hardware. You should find .hdf file on you Vivado sdk folder.

Version: test on petalinux tools version 2015.\*~2016.\* .

****************************************************

## Petalinux image creation steps

### 1.Create Project
```
$ petalinux-create --type project --template <CPU_TYPE> --name <PROJECT_NAME> 
```

### 2.Import Hardware Configuration 
Import the .hdf on this step.
```
$ petalinux-config --get-hw-description=<path-to-directory-which-contains-hardwaredescription- file> 
```

### 3.Build PetaLinux System Image 
"LANG=C" is optional, try to attatch them when errors occur.
```
$ cd <plnx-proj-root> 
$ LANG=C petalinux-build 
```

### 4.Generate Boot Image 
"--fore" is optional, You have to force files to be updated except the first time you package them. 
"download.bit" file should be exactly this name, or you will fail to boot later. You can change it manully.
```
$ petalinux-package --boot --fsbl <FSBL image> --fpga <FPGA bitstream> --u-boot
example:$ petalinux-package --boot --fsbl zynq_fsbl.elf --fpga download.bit --u-boot --force
```


### *4.Generate uImage  
An option to build uImage fromat linux kernal.
```
$ petalinux-package --image -c kernel --format uImage
```

### 5.Package Prebuilt Image 
```
$ petalinux-package --prebuilt --fpga <FPGA bitstream> 
example:$ petalinux-package --prebuilt --fpga  download.bit  --force
```

### 6. Boot Image
--qemu: test on virtual machion on you computer.
--jtag: boot petalinux on your zynq board.
```
$ petalinux-boot --qemu --prebuilt 3 
$ petalinux-boot --jtag --prebuilt 3 
```
Warnning solution: make sure bitstream name is download.bit, like pre-built/linux/implement/download.bit
