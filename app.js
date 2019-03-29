 
var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
var bodyParser = require("body-parser");
 
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render( "home" );
});

var article = [
    {title:"newsA",author:"sam",content:"this is the news zzgdf gszfibskjjgzsfb lorem ipsum" ,category:"genral",fc :0}
    ,{title:"newsB",author:"sam",content:"this is the news zzgdf gszfibskjjgzsfb lorem ipsum" ,category:"genral",fc :0}
    ,{title:"newsC",author:"sam",content:"this is the news zzgdf gszfibskjjgzsfb lorem ipsum" ,category:"genral",fc :0}
]


app.get("/news", function(req, res){
    var data=article;
    res.render("news",{data : data});
     

});

app.get("/newpost", function(req, res){
    res.render("newpost1.ejs"); 
 });

 app.post("/newpost/new", function(req, res){
    // get data from form and add to campgrounds array
    console.log(req.body);
    var title = req.body.title;
    var author = req.body.author;
    var content = req.body.content; 
    var category = req.body.category;
    var newart ={title: title , author : author , content : content , category : category,fc : 0};
    article.push(newart);
    //redirect back to campgrounds page
    res.redirect("/news");
});

app.post("/fakevote/:name", function(req, res){
    console.log("b clicked");
    
    console.log(req.params.name);
    article.forEach(function(art){
        if(req.params.name == art["title"])
        {
            art["fc"]++;
        }
    });
    res.redirect("/news");
});








app.get("/login",function(req, res){
    res.render("login");
});
 
app.get("/signup",function(req,res){
    res.render("signup");
});
app.listen(3000,function(){
    console.log("server has started");
});