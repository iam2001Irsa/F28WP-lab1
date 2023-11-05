var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'cities.json');
ourRequest.onload = function() {
console.log(ourRequest.responseText);
};
ourRequest.send();
