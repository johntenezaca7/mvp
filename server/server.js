const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const AylienNewsApi = require('aylien-news-api');
const keys = require('./config/keys.js')
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('./webpack.config.js');
const app = express();

 
// const compiler = webpack(webpackConfig);


app.use(express.static(__dirname + '/client/public'));

app.use(bodyParser.json());

mongoose.connect(keys.mongoDB);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're connected!")
})

const Schema = mongoose.Schema;

const saveData = new Schema({
    title: String,
    publisher: String,
    summary: String,
    publishedAt: String
})
 


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
    'sortBy': "published_at",
    'publishedAtEnd': 'NOW', 
    'sortBy': "published_at"
  
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

var User = mongoose.model("User", saveData);

app.post('/saveMe', ( req, res) => {

    var u = new User({
        'title':req.body.title,
        'publisher':req.body.publisher,
        'summary':req.body.summary,
        'publishedAt': req.body.publishedAt
    });
    u.save(function(err) {
        if(err){
            console.log(err);
        } else {
            console.log('saved!')            
        }
    });

    res.send("Data Saved")
})

app.get('/mynews', ( req, res) => {
    User.find({}, function (err, data) {
        if (err){
            console.log(err)
        } else {
            res.send(data)
        }
      });
 
})

app.delete('/remove', ( req, res) =>{
    console.log(req.body.value)
    User.findById()
    res.send('Trying to remove')    
})

 

app.listen(8080, function() {

  console.log('Example app listening at port 8080');
});