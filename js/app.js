var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "7f17ee55",
  application_key: "2e463d568fd162562719c74956cfa542"
});

textapi.sentiment({
    //Amazon
  'text': 'Amazon has always been, and always will be, committed to diversity and inclusion. We seek builders from all backgrounds to join our teams, and we encourage our employees to bring their authentic, original, and best selves to work.'
}, function(error, response) {
  if (error === null) {
    console.log(response.polarity_confidence);
  }
});

textapi.sentiment({
    //JPMC
  'text': 'Employees are our greatest asset, and we strive to attract talent from the broadest pool to foster innovation, creativity and productivity. There is tremendous power that results from this kind of diversity. In fact, creating a diverse and inclusive environment is critical to our success, and we are deeply committed to hiring and retaining employees from different backgrounds, experiences and locations.Diversity brings together people with unique perspectives, and inclusion creates opportunities for all individuals to contribute and work together to achieve success as a whole. We believe working in an inclusive environment motivates exceptional effort, or—put more simply—it makes us all better at what we do. Our diverse workforce helps our customers and business partners achieve their business goals. By recruiting the highest quality people who reflect the customers and communities that we serve, we increase our ability to deliver the best possible solutions.'
}, function(error, response) {
  if (error === null) {
    console.log(response.polarity_confidence);
  }
});

