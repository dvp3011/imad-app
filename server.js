var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title: 'Article One | Deepa Patil',
    heading: 'Article One',
    date: 'Sep 12, 2017',
    content:`        <p>
                        Benedict Arnold led an expedition early in the American Revolutionary War from Cambridge, Massachusetts, through the wilderness of what is now Maine to the gates of Quebec City, setting out on September 11, 1775.
                    </p>
                    <p>
                         Colonel Arnold's force of 1,100 Continental Army troops was part of a two-pronged invasion of the British Province of Quebec, along with Richard Montgomery's expedition pushing north from Lake Champlain.
                    </p>
                    <p>
                        By the time Arnold reached the French settlements above the Saint Lawrence River in November, his force was reduced to 600 starving men. They had traveled about 350 miles (560 km) through poorly charted wilderness, twice the distance they had expected to cover. Assisted by the local French-speaking Canadiens, Arnold's troops crossed the Saint Lawrence on November 13 and 14 and attempted to put Quebec City under siege. 
                    </p>`
    
};

function createTemplate (data)
{
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
            
            var htmlTemplate=`<html>
                <head>
                    <title>
                        ${title} 
                    </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
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
            </html>
             `;
             return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
}); 

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
