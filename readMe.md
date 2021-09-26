This project has all the tests for TODO app

To install protractor run:
##npm install -g protractor

This will install two command line tools, protractor and webdriver-manager.
Try running protractor --version to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running.
Use it to download the necessary binaries with: 

##webdriver-manager update

Now start up a server with:
##webdriver-manager start


Now run the test with:
##protractor conf.js

More about protractor in https://www.protractortest.org/#/