const path = require('path');

module.exports = {
 context: path.join(__dirname, 'client/src'),
 entry: [
   './main.js',
//    './search.js'
 ],
 output: {
   path: path.join(__dirname, '/client/public'),
   filename: 'bundle.js',
 },
 module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: [
         'babel-loader',
       ],
     },
   ],
 },
 resolve: {
   modules: [
     path.join(__dirname, 'node_modules'),
   ],
 },
};