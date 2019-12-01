

    function manufacturenew(){

        var mname = document.getElementById("manufacturername").value;
        var mcountry= document.getElementById("country").value;
        var mfounded = document.getElementById("founded").value;
        var isright = true;
        var newmanufacturer;

            if(checkEmptiness(mname)){
                isright = false;
                changeRed("#manufacturername");
            }
            else{
                removeRed("#manufacturername");
            }
            if(checkEmptiness(mcountry)){
                isright = false;
                changeRed("#country");
            }
            else{
                removeRed("#country");
            }
            if(checkEmptiness(mfounded)){
                isright = false;
                changeRed("#founded");
            }
            else{
                removeRed("#founded");
                mfounded = checkDate(mfounded);
            }
        console.log(mname);

        if(isright){
            newmanufacturer = {"name": mname, "country": mcountry, "founded": mfounded};
            console.log(newmanufacturer);
            $.post("addManufacturers", newmanufacturer).done(navigate("manufacturers"));
        }
        else{
            alert("Rossz adatok!");
        }

    }

    function checkDate(founded) {

        var array = founded.split("-");

        var year = array[0];
        var month = array[1];
        var day = array[2];
        console.log(year)
        console.log(month)
        console.log(day)

        switch (month) {
            case '01':
            case '03':
            case '05':
            case '07':
            case '08':
            case '10':
            case '12':
                if(day>31){
                    day=31;
                }
                break;
            case '02':
                if(day>28){
                    day=28;
                }
                break;
            case '04':
            case '6':
            case '9':
            case '11':
                if(day>30){
                    day=30;
                }
                break;

        }
        switch (month) {
            case '01':
                month = "Január";
                break;
            case '02':
                month = "Február";
                break;
            case '03':
                month = "Március";
                break;
            case '04':
                month = "Április";
                break;
            case '05':
                month = "Május";
                break;
            case '06':
                month = "Június";
                break;
            case '07':
                month = "Julius";
                break;
            case '08':
                month = "Augusztus";
                break;
            case '09':
                month = "Szeptember";
                break;
            case '10':
                month = "Október";
                break;
            case '11':
                month = "November";
                break;
            case '12':
                month = "December";
                break;

        }

        return month + " " + day + ", " + year;



    }


