var bioDisplayed = false;

$(".cat-nav-item").hover((function(){
    $(this).css("color","white")
}),function(){
    $(this).css("color","black")
});

$(".about-me-text").click(function(){
    if(!bioDisplayed){ 
        $(this).html("Hey! My name is Jonathan, I'm an SEO Analyst at a marketing agency in the triangle. If you'd like to learn more about me feel free to check out my portfolio or Github, or send me a message on LinkedIn.<br><br>Cheers!")
        bioDisplayed = true;
        $("#overlay").css("visibility","hidden");
    } else {
        $(this).html("CLICK HERE")
        bioDisplayed = false;
        $("#overlay").css("visibility","visible");
    }
})

