# hybridAppProject

## NVM(Node Version Manager)
### NVM Install
#### NVM Installation
```
$ sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
$ vi ~/.bash_profile # for mac$ 
$ vi ~/.bashrc       # for linux
```
confirm code below in vi editor
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```
#### Node Installation
```
$ nvm install 14.15.1
$ nvm use 14.15.1
```

