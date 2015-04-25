//设置express
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

//设置handlebars 视图引擎
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

//设置静态资源
app.use(express.static(__dirname + '/public'));

//设置随机数
var word = ['a','b','c','d'];

app.get('/',function (req,res){
  res.render('home');
})

app.get('/about',function (req,res){
  var randomWord = word[Math.floor(Math.random() * word.length)];
  res.render('about',{word: randomWord});
})

//定制404页面
app.use(function (req,res){
  res.status(404);
  res.render('404');
})

//定制500页面
app.use(function (req,res){
  res.status(500);
  res.render('500');
})

app.listen(app.get('port'),function (req,res){
  console.log('listent' + app.get('port'));
})




