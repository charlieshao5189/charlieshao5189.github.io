---
layout: post
title: Generate an SSH Key for GitHub on Ubuntu bash
category: 资源
keywords: SSH key, bash
---
Reference from git helpe for [_SSH key generation_](https://help.github.com/articles/generating-an-ssh-key/)


## 1.Checking for existing SSH keys
> 1.1 Enter ls -al ~/.ssh to see if existing SSH keys are present  

~~~~
$ ls -al ~/.ssh  
# Lists the files in your .ssh directory, if they exist   
~~~~
 
> 1.2 Check the directory listing to see if you already have a public SSH key.  
> By default, the filenames of the public keys are one of the following:

~~~~
> id_dsa.pub  
> id_ecdsa.pub  
> id_ed25519.pub  
> id_rsa.pub  
~~~~

If you don't have an existing public and private key pair, or don't wish to use any that are available to connect to GitHub, then [generate a new SSH key](#generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

If you see an existing public and private key pair listed (for example id_rsa.pub and id_rsa) that you would like to use to connect to GitHub, you can [add your SSH key to the ssh-agent](#adding-a-new-ssh-key-to-your-github-account).


## 2.Generating a new SSH key and adding it to the ssh-agent

> 2.1 Paste the text below, substituting in your GitHub email address.  

~~~~
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"   
# Creates a new ssh key, using the provided email as a label  
~~~~

>    Generating public/private rsa key pair.  
> 2.2 When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.  
>    Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]  
> 2.3 At the prompt, type a secure passphrase. For more information, see ["Working with SSH key passphrases"](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/).
>    Enter passphrase (empty for no passphrase): [Type a passphrase]  
>	 Enter same passphrase again: [Type passphrase again]  
> 2.4 Enusre ssh-agent is endabled, turn on ssh-agent：  

~~~~
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
Agent pid 59566
~~~~   

> 2.5 Add your SSH key to the ssh-agent. If you used an existing SSH key rather than generating a new SSH key, you'll need to replace id_rsa in the command with the name of your existing private key file

~~~~
$ ssh-add ~/.ssh/id_rsa
~~~~

## 3.Adding a new SSH key to your GitHub account
> 3.1 copy the key---content of id_rsa.pub, from ~/.ssh/id_rsapub.pub  
> 3.2 In the top right corner of any page, click your profile photo, then click _Settings_.  
> 3.3 Click _SSH and GPG keys, add new SSH key, paste you key into "Key" field, click _Add SSH key.  

## 4.Testing your SSH connection
> 4.1 Open Bash  
> 4.2 Enter the following:  

~~~~  
$ ssh -T git@github.com  
# Attempts to ssh to GitHub  
~~~~  
> You may see one of these warnings:

~~~~
The authenticity of host 'github.com (192.30.252.1)' can't be established.
RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
Are you sure you want to continue connecting (yes/no)?  
~~~~

~~~~
The authenticity of host 'github.com (192.30.252.1)' can't be established.
RSA key fingerprint is nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)?  
~~~~

> 4.3 Verify that the fingerprint in the message you see matches the following message, then type yes:  

~~~~
Hi username! You've successfully authenticated, but GitHub does not
provide shell access. 
~~~~ 
