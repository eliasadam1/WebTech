

function addCar(){
    var manufacturer = document.getElementById("manufacturerNames").value;
    var name = document.getElementById("carname").value;
    var consumption = document.getElementById("consumption").value;
    var year =document.getElementById("year").value;
    var horsepower = document.getElementById("horsepower").value;
    var color = document.getElementById("color").value;
    var available = document.getElementById("available").value;
    var isright = true;
    var newcar = { "manufacturer": "gyarto", "name": "nev", "consumption": "fogyasztas" + "l/100km",  "year": "ev", "horsepower": "loero", "color": "szin", "available": "elerheto"};
    console.log(name);
    console.log(manufacturer);

   if(checkEmptiness(name)){
        isright = false;
        changeRed("#carname");
    }
   else{
       removeRed("#consumption");
   }

    if(checkInput(1, consumption, 50)){
        isright= false;
        changeRed("#consumption");
    }
    else{
        consumption += "l/100km";
        removeRed("#consumption");
    }

    if(checkInput(1, available, 100)){
        isright = false;
        changeRed("#available");
    }
    else{
        removeRed("#available");
    }
    if(checkInput(1850, year, new Date().getFullYear())){
        isright = false;
        changeRed("#year");
    }
    else{
        removeRed("#year");
    }

    if(checkInput(1, horsepower, 1000)){
        isright = false;
        changeRed("#horsepower");
    }
    else{
        removeRed("#horsepower");
    }

    if(isright === true){
        newcar={ "manufacturer": manufacturer, "name": name, "consumption": consumption ,  "year": year, "horsepower": horsepower, "color": color, "available": available}
        $.post("addCar",newcar).done(navigate("cars")).fail();
    }
    else{
        alert("Rossz adatok!");
    }


}




