const express = require('express');
const bodyParser = require('body-parser')
const AylienNewsApi = require('aylien-news-api');
const keys = require('./config/keys.js')
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('./webpack.config.js');
const app = express();

 
// const compiler = webpack(webpackConfig);


app.use(express.static(__dirname + '/client/public'));

app.use(bodyParser.json());
 


const apiInstance = new AylienNewsApi.DefaultApi();

const app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = keys.alienID;

const app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = keys.alienKey;

var opts = {
    'title': '',
    'sortBy': 'social_shares_count.facebook',
    'language': ['en'],
    'notLanguage': ['es', 'it'],
    'publishedAtStart': 'NOW-20DAYS',
    'publishedAtEnd': 'NOW', 
  
};


//handle a get request from front end to /headlines
app.post('/headlines', (req, res) => {
    opts.title = req.body.value;
    apiInstance.listStories(opts, (err, data, response) => {
        if (err) {
            console.log(err);
        } else {
            res.send(data.stories)  
        }
    });  
})

 

app.listen(3000, function() {

  console.log('Example app listening at port 3000');
});