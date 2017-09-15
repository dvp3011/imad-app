var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
            'article-one': {
              title: 'Article One | Deepa Patil',
              heading: 'Article One',
              date: 'sep 12, 2017',
              content: ` <p>
                                    Benedict Arnold led an expedition early in the American Revolutionary War from Cambridge, Massachusetts, through the wilderness of what is now Maine to the gates of Quebec City, setting out on September 11, 1775.
                                </p>
                                <p>
                                     Colonel Arnold's force of 1,100 Continental Army troops was part of a two-pronged invasion of the British Province of Quebec, along with Richard Montgomery's expedition pushing north from Lake Champlain.
                                </p>
                                <p>
                                    By the time Arnold reached the French settlements above the Saint Lawrence River in November, his force was reduced to 600 starving men. They had traveled about 350 miles (560 km) through poorly charted wilderness, twice the distance they had expected to cover. Assisted by the local French-speaking Canadiens, Arnold's troops crossed the Saint Lawrence on November 13 and 14 and attempted to put Quebec City under siege. 
                                </p>`    
            },
            'article-two': {
                 title: 'Article Two | Deepa Patil',
              heading: 'Article Two',
              date: 'sep 12, 2017',
              content: ` <p>
                      On May 10, 1775, shortly after the American Revolutionary War began, Benedict Arnold and Ethan Allen led an expedition that captured Fort Ticonderoga on Lake Champlain in the British Province of New York.[1] Allen and Arnold were aware that Quebec was lightly defended; there were only about 600 regular troops in the entire province.    
                    </p>
                    <p>
                       Arnold, who had done business in the province before the war,[3] also had intelligence that the French-speaking Canadiens would be favorably disposed toward a colonial force. Arnold and Allen each made arguments to the Second Continental Congress that Quebec could and should be taken from the British, pointing out that the British could use Quebec as a staging area for attacks down Lake Champlain and into the Hudson River valley.   
                    <p>
                       Congress did not want to alarm the people of Quebec, and rejected these arguments.[5] In July 1775, amid concerns that the British might use Quebec as a base for military movements into New York, they changed their position, and authorized an invasion of Quebec via Lake Champlain, assigning the task to Major General Philip Schuyler of New York. 
                    </p>`
            },
            'article-three': {
                 title: 'Article Three | Deepa Patil',
              heading: 'Article Three',
              date: 'sep 12, 2017',
              content: `  <p>
                      Arnold, who had hoped to lead the invasion, decided to pursue a different approach to Quebec. He went to Cambridge, Massachusetts in early August 1775, and approached George Washington with the idea of a second eastern invasion force aimed at Quebec City.[7] Washington approved of the idea in principle, but sent a message to General Schuyler on August 20 to ensure his support of the endeavor, since the two forces would need to coordinate their efforts.
                    </p>
                    <p>
                      Arnold's plan called for the expedition to sail from Newburyport, Massachusetts along the coast and then up the Kennebec River to Fort Western (now Augusta, Maine). From there, they would use shallow-draft river boats called bateaux to continue up the Kennebec River, cross the height of land to Lake Mégantic, and descend the Chaudière River to Quebec.[9] Arnold expected to cover the 180 miles (290 km) from Fort Western to Quebec in 20 days,[10] despite the fact that little was known about the route.
                    </p>
                    <p>
                      Arnold had acquired a map (copy pictured at left) and journal made by British military engineer John Montresor in 1760 and 1761, but Montresor's descriptions of the route were not very detailed, and Arnold did not know that the map contained some inaccuracies or that some details had been deliberately removed or obscured.
                    </p>`
            }
};

function createTemplate (data){
            var title = data.title;
            var heading = data.heading;
            var date = data.date;
            var content = data.content;
            
            var htmlTemplate=`
            <html>
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

var counter=0;
app.get('/counter', function(req,res) {
  counter = counter + 1;
  res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
    // articleName == article-one
    // articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(80, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
