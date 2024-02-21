function highlightProjectImgButton(projectBody){
    $(projectBody).find("button").css("background-color","#fbe8a6");
    $(projectBody).find("button").css("box-shadow","2px 4px 4px rgb(184, 181, 181");
    $(projectBody).find("button").css("font-weight","bold");
}

function restoreProjectImgButton(projectBody){
    $(projectBody).find("button").css("background-color","#f4946c");
    $(projectBody).find("button").css("box-shadow","none");
    $(projectBody).find("button").css("font-weight","regular");
}

/* highlight professional skills cards */

$("#research").on("mouseenter", function(){
    $(this.querySelector("img")).css("background-color","#fbe8ac"); 
})

$("#research").on("mouseleave", function(){
    $(this.querySelector("img")).css("background-color","#fff");
    
})
$("#empathy").on("mouseenter", function(){
    $(this.querySelector("img")).css("background-color","#b4dfe5"); 
})

$("#empathy").on("mouseleave", function(){
    $(this.querySelector("img")).css("background-color","#fff");
    
})
$("#software").on("mouseenter", function(){
    $(this.querySelector("img")).css("background-color","#f4976c"); 
})

$("#software").on("mouseleave", function(){
    $(this.querySelector("img")).css("background-color","#fff");
    
})

$("#project1Image").on("mouseenter", function(){
    $(highlightProjectImgButton("#project1Body"));
})

$("#project1Image").on("mouseleave", function(){
    $(restoreProjectImgButton("#project1Body"));
}) 
    
$("#project2Image").on("mouseenter", function(){
    $(highlightProjectImgButton("#project2Body"));
})

$("#project2Image").on("mouseleave", function(){
    $(restoreProjectImgButton("#project2Body"));
}) 
    
$("#project3Image").on("mouseenter", function(){
    $(highlightProjectImgButton("#project3Body"));
})

$("#project3Image").on("mouseleave", function(){
    $(restoreProjectImgButton("#project3Body"));
}) 
    
