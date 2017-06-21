// Create a "close" button and append it to each list item

var myNodelist = document.getElementByTagName('li');
var i;
for (i=0; i < myNodelist.length; i++) {
  var span = document.createElement('span');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
