#jQuery mask number
Works for desktop and mobile browsers

##Goals
An unique jQuery plugin that could format decimal and integer numbers on both desktop and mobile browsers, that's the reason to use concat and replace string functions. 

##Features

  * Format decimal numbers
  * Format integer numbers

##Usage
Open the example.html file in a browser and take a look of how to use and configure it.

```html
$('[name=currency-default]').maskNumber();
$('[name=currency-data-attributes]').maskNumber();
$('[name=currency-configuration]').maskNumber({decimal: '_', thousands: '*'});
$('[name=integer-default]').maskNumber({integer: true});
$('[name=integer-data-attribute]').maskNumber({integer: true});
$('[name=integer-configuration]').maskNumber({integer: true, thousands: '_'});
```