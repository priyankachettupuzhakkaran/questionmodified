function cardcreate(){
    var rrow=$("<div class='row'></div>")
    var coll=$("<div class='col-sm'></div>")
    var cardd=$("<div class='card' style='width: 18rem'><div>")
    var cardbod=$("<div class='card-body'></div>")
    var headi=$("<h5 class='card-title'>Electronic Devices</h5>")
    var textdetails=$("<div class='questiontime'></div>")
    var p1=$("<p class='card-text'> Questions:5 </p>")
    var p2=$("<p class='card-text' style='margin-left:10px'>Time:1 min </p>")
    var linking=$("<a href ='Taketest.html' class='card-link'></a>")
    var butt=$("<button type='button' class='btn btn-success'>take test</button>")
    linking.append(butt)
    textdetails.append(p1).append(p2)
    cardbod.append(headi).append(textdetails).append(linking)
    cardd.append(cardbod)
    coll.append(cardd)
    rrow.append(coll)
    $(".container-fluid").append(rrow)
}