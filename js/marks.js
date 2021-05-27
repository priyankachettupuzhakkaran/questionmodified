var $divv=$("<div class='container-fluid'></div>")
var $row=$("<div class='row'></div>")
var $col1=$("<div class='col-6 col-md-4'></div>")
 var $col2=$("<div class='col-md-8'></div>")
 $row.append($col1).append($col2)
$divv.append($row)
$("body").append($divv);
//$(".yesclass").write(percentcounty)
//$(".noclass").write(percentcountn)
//$(".dontknowclass").write(percentcountd)

$result1=$("<div class='result1'></div>")
var $result2=$("<div class='result2'></div>")
var $result3=$("<div class='result3'></div>")
var $re1=$result1.append($("<div class='yup'>No. of Yes checkbox checked:</div>")).append($("<div class='percenty'></div>"))
var $re2=$result2.append($("<div class='nope'>No. of No checkbox checked:</div>")).append($("<div class='percentn'></div>"))
var $re3=$result3.append($("<div class='neither'>No. of dontknow checkbox checked:</div>")).append($("<div class='percentd'></div>"))
$(".col-md-8").append($re1)
$(".col-md-8").append($re2)
$(".col-md-8").append($re3)
var questionsy =JSON.parse(localStorage.getItem('marksy'));
var questionsn =JSON.parse(localStorage.getItem('marksn'));
var questionsd =JSON.parse(localStorage.getItem('marksd'));
$(".percenty").html(questionsy)
$(".percentn").html(questionsn)
$(".percentd").html(questionsd)