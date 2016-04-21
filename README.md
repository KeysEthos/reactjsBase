# reactjs-base-site- (init setup)

Update linux AWS:

    sudo yum update

Install NPM and Node.js:

    sudo yum install gcc-c++ make
    sudo yum install openssl-devel
    
Install Git and Clone node repo:

    sudo yum install git 
    git clone git://github.com/joyent/node.git

Move to node directory:

    cd node
    
git checkout with stable express version and install availbe git versions:

    git tag -l   //Check for current tag releases
    git checkout v0.12.0  //Find and use the specific flavor you like
    ./configure 
    make 
    sudo make install

Add user path to sudoers:

    sudo su
    vim /etc/sudoers
    
Edit path in sudoers: # Path = secure_path = /sbin:/bin:/usr/bin 
Add to the end:

    :/usr/local/bin

(CD) to directory name and globally install run depds
    
    npm install gulp --global
    npm install bower --global
    npm install nodemon --global

Commands to run
    
    (runs build)
    gulp
    
    (starts server on port 8081 with nodemon running)
    npm run watch
