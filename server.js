var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
    'article-one':{
        title: 'Article One | Lavanya',
        heading:'Article One',
        date: 'Sep 5 2016',
        content:
           '<p>its my birthday</p>'
    },
    'article-two':{
        title: 'Article Two | Lavanya',
        heading:'Article Two',
        date: 'Sep 10 2016',
        content:
            '<p>its not my birthday</p>'
    },
    'article-three':{
        title: 'Article Three | Lavanya',
        heading:'Article Three',
        date: 'Sep 15 2016',
        content:'<p>its not my birthday hee</p>'
    }
};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;

    var htmlTemplate = `
        <html>
        <head>
            <title>
                ${title} 
            </title>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class ="container">
                <div>
                <a href='/'>HOME</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`
    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleName', function (req, res) {
    
  
  var articleName = res.params.articleName;  
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; 
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
