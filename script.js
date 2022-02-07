$(".iron").hide();
$(".hulk").hide();
$(".black").hide();
$(".thor").hide();
$(".headh").hide();
$(".headi").hide();
$(".headb").hide();
$(".headt").hide();
$(".heading2").hide();
$(".q1").hide();
$(".q2").hide();
$(".but").hide();
$(".question1").hide();
$(".question2").hide();
$(".rest").hide();
var counter1 = 0;

$(".b1").click(function() {
    $(".heading").hide();
    $(".img1").hide();
    $(".b1").hide();
    $(".heading2").show();
    $(".q1").show();
    $(".q2").show();
    $(".but").show();
    $(".question1").show();
    $(".question2").hide();
    $("p").show();

});

$(".firste").click(function() {
    var ans1 = $(".firstq").val();
    var ans2 = $(".secq").val();
    
    if (ans1 === "Bold") {
        if (ans2 >= 6) {
            $(".hulk").show();
            $(".heading2").hide();
            $(".q1").hide();
            $(".q2").hide();
            $(".but").hide();
            $(".question1").hide();
            $(".headh").show();
            $(".rest").show();
        }}
    
    if (ans1 === "Bold") {
        if (ans2 < 6) {
            $(".thor").show();
            $(".hulk").hide();
            $(".heading2").hide();
            $(".q1").hide();
            $(".q2").hide();
            $(".but").hide();
            $(".question1").hide();
            $(".headt").show();
            $(".headh").hide();
            $(".rest").show();
        }}
    
    if (ans1 === "Lenient") {
        if (ans2 >= 6) {
            $(".iron").show();
            $(".heading2").hide();
            $(".q1").hide();
            $(".q2").hide();
            $(".but").hide();
            $(".question1").hide();
            $(".headi").show();
            $(".rest").show();
        }}
    
    if (ans1 === "Lenient") {
        if (ans2 < 6) {
            $(".black").show();
            $(".hulk").hide();
            $(".heading2").hide();
            $(".q1").hide();
            $(".q2").hide();
            $(".but").hide();
            $(".question1").hide();
            $(".headb").show();
            $(".headh").hide();
            $(".rest").show();
        }}
    counter1 += 1;
    $(".counter1").text(counter1);
});

$(".rest").click(function() {
    $(".iron").hide();
$(".hulk").hide();
$(".black").hide();
$(".thor").hide();
$(".headh").hide();
$(".headi").hide();
$(".headb").hide();
$(".headt").hide();
$(".heading2").hide();
$(".q1").hide();
$(".q2").hide();
$(".but").hide();
$(".question1").hide();
$(".question2").hide();
$(".rest").hide();
$(".heading").show();
$(".img1").show();
$(".b1").show();
    
    
   });