var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var articles={
    'article-one':{
    title:"Article-One | Amulya Pokala",
    date:"Sept 15,2016",
    heading:"Article One",
    content:` <p>
                             This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.
                    </p>
                    `},
    
 'article-two':{title:"Article-Two | Amulya Pokala",
    date:"Sept 15,2016",
    heading:"Article Two",
    content:` <p>
                             This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.
                    </p>`},
 'article-three':{title:"Article-Three | Amulya Pokala",
    date:"Sept 15,2016",
    heading:"Article Three",
    content:` <p>
                             This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.This is the content.
                    </p>`}
};
function createTemplate(data){
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var title=data.title;
    
var htmlTemplate=`<html>
    <head>
        <title>
          ${title}
        </title>
        <meta name="viewport" content="width-device-width initial-scale-1" />
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
                <div>
                    <a href="/">Home</a>
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
    
    
</html>`;
return htmlTemplate;
}
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));

});

app.get('/ui/main.js', function(req,res){
   res.sendFile(path.join(__dirname,'ui','main.js')); 
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
