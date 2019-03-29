 
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
    {title:"How BJP beats Congress",author :"Chetan Kumar",  content:"Much of BJP's dominance in electoral politics in the past " ,category:"politics",fc :0}
    ,{title:"No BCCI curators at top three IPL venues",author:"sam",content:"The Chepauk pitch was criticised after it took prodigiou .." ,category:"sports",fc :0}
    ,{title:"Google Pay looks for expansion", author:"Chetan Kumar",content:"Google’s renewed push comes at a time when rivals Phonepe an .. " ,category:"general",fc :0}
]

app.get("/news", function(req, res){
    var data=article;
    res.render("news",{data : data});
     

});


app.get("/news/:cat", function(req, res){
    
    
    var data=article;
    var data1=[];
    console.log(req.params.cat);
    data.forEach(function(arti){
        // console.log(arti.category);
        if(arti["category"] ==  req.params['cat']){
            // console.log(arti);
        data1.push(arti);}

    });
    
    res.render("news",{data : data1});
     
    
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