/**
 * In this example, we'll use the Barcode module to display some information about
 * the scanned barcode.
 */
Titanium.Barcode = Ti.Barcode = require('ti.barcode');

var window = Ti.UI.createWindow({
    backgroundColor: 'white',
    layout: 'vertical'
});

/**
 * First, create a button that will trigger the barcode scanner.
 */
var button = Ti.UI.createButton({
    title: 'Scan Code',
    width: 150,
    height: 60,
    top: 20
});
button.addEventListener('click', function() {
    Ti.Barcode.capture({ animate: true });
});
window.add(button);

/**
 * Now listen for various events from the Barcode module. This is the modules way of communicating with us.
 */
Ti.Barcode.addEventListener('error', function(e) {
    scanResult.text = e.message;
    scanContentType.text = '';
    scanFormat.text = '';
});
Ti.Barcode.addEventListener('canceled', function(e) {
    scanResult.text = e.message;
    scanContentType.text = '';
    scanFormat.text = '';
});
Ti.Barcode.addEventListener('success', function(e) {
    scanResult.text = e.result;
    scanContentType.text = e.contentType;
    scanFormat.text = e.format;
});

/**
 * Finally, we'll add a couple labels to the window. When the user scans a barcode, we'll stick information about it in
 * to these labels.
 */
window.add(Ti.UI.createLabel({
    text: 'You may need to rotate the device',
    top: 10,
    height: 'auto', width: 'auto'
}));

window.add(Ti.UI.createLabel({
    text: 'Result: ', textAlign: 'left',
    top: 10, left: 10,
    color: 'black',
    height: 'auto'
}));
var scanResult = Ti.UI.createLabel({
    text: '', textAlign: 'left',
    top: 10, left: 10,
    color: 'black',
    height: 'auto'
});
window.add(scanResult);

window.add(Ti.UI.createLabel({
    text: 'Content Type: ',
    top: 10, left: 10,
    textAlign: 'left',
    color: 'black',
    height: 'auto'
}));
var scanContentType = Ti.UI.createLabel({
    text: '', textAlign: 'left',
    top: 10, left: 10,
    color: 'black',
    height: 'auto'
});
window.add(scanContentType);

window.add(Ti.UI.createLabel({
    text: 'Format: ', textAlign: 'left',
    top: 10, left: 10,
    color: 'black',
    height: 'auto'
}));
var scanFormat = Ti.UI.createLabel({
    text: '', textAlign: 'left',
    top: 10, left: 10,
    color: 'black',
    height: 'auto'
});
window.add(scanFormat);

window.open();