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

/* apply a box shadow to both the image and button when mouse is over the project image */

$("#project1Image").on("mouseenter", function(){
    $(highlightProjectImgButton("#project1Body"))
    $(this).find("img").css("box-shadow","0.25rem 0.5rem 0.25rem rgb(184,181,181)");
})

$("#project1Image").on("mouseleave", function(){
    $(restoreProjectImgButton("#project1Body"));
    $(this).find("img").css("box-shadow","none");
}) 
    
$("#project2Image").on("mouseenter", function(){
    $(highlightProjectImgButton("#project2Body"));
    $(this).find("img").css("box-shadow","0.25rem 0.5rem 0.25rem rgb(184,181,181)");
})

$("#project2Image").on("mouseleave", function(){
    $(restoreProjectImgButton("#project2Body"));
    $(this).find("img").css("box-shadow","none");
}) 
    
$("#project3Image").on("mouseenter", function(){
    $(highlightProjectImgButton("#project3Body"));
    $(this).find("img").css("box-shadow","0.25rem 0.5rem 0.25rem rgb(184,181,181)");
})

$("#project3Image").on("mouseleave", function(){
    $(restoreProjectImgButton("#project3Body"));
    $(this).find("img").css("box-shadow","none");
}) 
    
