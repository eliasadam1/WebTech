

function createCarsTable(){
        $.get("cars", function (req, res) {
            if(res === "success") {

                deleteCarRow();
                addCard(req);
                addCarRow(req);

            }
        });
}

function search(){

    let car = $("#searchCar").val();
    $.get("cars", function (req, res) {
        if(res === "success"){
            deleteCarRow();
            searchCard(car, req);
            searchCar(car, req);



        }

    });
}
function deleteCarRow(){

    $("#carstable td").remove();
    $(".listdiv").remove();
}


function addCarRow(data){

    for (let i = 0;i < data.length;i++) {
        let column = [data[i].manufacturer, data[i].name,   data[i].consumption, data[i].year, data[i].horsepower, data[i].color, data[i].available];
        let row = "<tr class='listtr'>";
        for(let j = 0;j < column.length;j++){
            row += "<td class='listtd'>" + column[j] + "</td>";
        }
        row += "</tr>";
        $("#carstable").append(row);
    };
}




function reset(){
    $("input[type=number]").text("");
    $("input[type=date]").text("");
    $("input[type=text]").text("");


}

function addCard(data){

    for (let i = 0;i < data.length;i++) {
        let column = ["Gyártó: " +  data[i].manufacturer, "Neve: " + data[i].name,"Fogyasztás: " +  data[i].consumption, "Év: " + data[i].year,"Teljesítmény: " +  data[i].horsepower, "Szín: " +  data[i].color,"Elérhető: " +   data[i].available]
        let row = "<div class='listdiv'>";
        for(let j = 0;j < column.length;j++){
            row += "<div class='listdivrow'>" + column[j] + "</div>";
        }
        row += "</div>";
        $("#cards").append(row);
    };
}

function searchCar(carname, data){
    for (let i = 0;i < data.length;i++) {
        if(data[i].name === carname){
            let column = [data[i].manufacturer, data[i].name,   data[i].consumption, data[i].year, data[i].horsepower, data[i].color,data[i].available];
            let row = "<tr class='listtr'>";
            for(let j = 0;j < column.length;j++){
                row += "<td class='listtd'>" + column[j] + "</td>";
            }
            row += "</tr>";
            $("#carstable").append(row);
        }
    }
}

function searchCard(carname, data){

    for (let i = 0;i < data.length;i++) {
        if(data[i].name === carname) {
            let column = ["Gyártó: " +  data[i].manufacturer, "Neve: " + data[i].name,"Fogyasztás: " +  data[i].consumption, "Év: " + data[i].year,"Teljesítmény: " +  data[i].horsepower, "Szín: " +  data[i].color,"Elérhető: " +   data[i].available]
            let row = "<div class='listdiv'>";
            for (let j = 0; j < column.length; j++) {
                row += "<div class='listdivrow'>" + column[j] + "</div>";
            }
            row += "</div>";
            $("#cards").append(row);
        }
    };
}



