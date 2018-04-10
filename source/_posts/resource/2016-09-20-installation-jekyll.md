---
layout: post
title: Jekyll Installation
category: 资源
keywords: Jekyll,jekyll installation,
---

## Requirements

* Linux, Unix, or Mac OS X
* Ruby (including development headers, v1.9.3 or above for Jekyll 2 and v2 or above for Jekyll 3)
* RubyGems
* NodeJS, or another JavaScript runtime (Jekyll 2 and earlier, for CoffeeScript support).
* Python 2.7 (for Jekyll 2 and earlier)

**************************************************************************************************

## Ubuntu Bash Install Jekyll Steps: 

### 1.Install [Ruby](https://www.ruby-lang.org/en/downloads/)：
Using RVM is a good option if you intend to use ruby for development,but for Jekyll, installing through apt-get command is simply and efficient. For Jekyll3.2.1, Ruby 2.3 stable release is the best option for now(2016-09).

Add repository:

> $ sudo apt-add-repository ppa:brightbox/ruby-ng

> $ sudo apt-get update

Install package:

> $ sudo apt-get install ruby2.3 ruby2.3-dev

check if ruby2.3 is installed seccessfully:

> $ ruby -v

> ruby 2.3.1p112 (2016-04-26 revision 54768) [x86_64-linux-gnu]

### 2.Install [RubyGems](https://www.ruby-lang.org/en/downloads/)：
1. Download RubyGems from [here](https://rubygems.org/rubygems/rubygems-2.6.6.zip)
2. Unpack into a directory and _cd_there
3. Install with command:__ruby setup.rb__(you may need admin/root privilege)
4. upgrade to the latest version:
> $ sudo gem update
   
### 3.Install [NodeJS](https://nodejs.org/en/download/)：

Node.js v6:

> $ curl -sL https://deb.nodesource.com/setup_6.x  |  sudo -E bash -

> $ sudo apt-get install -y nodejs

### 4.Install [Python](https://www.ruby-lang.org/en/downloads/)：
Normal Python2.7 exists inside Ubuntu, it can support Jekyll directly.

### 5. Install Jekyll
The best way to install Jekyll is via RubyGems. At the terminal prompt, simply run the following command to install Jekyll:
> sudo gem install jekyll

### Basic usage of Jekyll

> $ jekyll build      
> \# => The current folder will be generated into ./_site    


> $ jekyll build --watch    
> \# => The current folder will be generated into ./_site,    
> \#    watched for changes, and regenerated automatically.    


> $ jekyll serve    
> \# => A development server will run at http://localhost:4000/    
> \# Auto-regeneration: enabled. Use `--no-watch` to disable.    


> $ jekyll serve jekyll serve --force_polling    
> \# Force polling forces liquid to use the polling architecture rather than inotify. It's more CPU intensive than the latter.    
