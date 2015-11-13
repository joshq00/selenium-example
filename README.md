```bash
brew tap caskroom/cask
brew install brew-cask
brew cask install java

npm install -g selenium-standalone
selenium-standalone install
selenium-standalone start

# install chrome driver
selenium-standalone install --drivers.chrome.baseURL=http://chromedriver.storage.googleapis.com
```

Run a test

```bash
node test/specs/lmgtfy.js
```


