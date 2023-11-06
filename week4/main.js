
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://salma-s-hw.github.io/F28WP-lab/cities1.json');
  ourRequest.onload = function() {
    console.log(ourRequest.responseText);

  };
  ourRequest.send();
  
