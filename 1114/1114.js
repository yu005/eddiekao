
$(document).ready(function () {
    $(".changeToOne").click(function(){
        $("#exam").text(1);
    })
    $(".changeToTwo").click(function(){
    $("#exam").text(2);
});
    
    $(".hide").click(function () {
    $(".main").slideUp(300);
    //main類別的全部物件會有動畫出現
    });
    
    $(".show").click(function () {
    $(".main").slideDown(300);
    });

    $("#addBtn").click(function (e){
        $("ol").append("<li>新增的</li>");
    });

    $("#removeBtn").click(function(){
        $("li:last-child").remove();
    });

    $("#prependBtn").click(function(e){
        $("#prependTest").prepend("新增的");
    });
});

