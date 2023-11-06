//https://salma-s-hw.github.io/F28WP-lab/cities1.json
//https://iam2001Irsa.github.io/iam2001Irsa.github.io/cities1.json

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://iam2001Irsa.github.io/week4/cities1.json');
ourRequest.onload = function() {
var ourData = JSON.parse(ourRequest.responseText);
console.log(ourData[0]);
};
ourRequest.send();

