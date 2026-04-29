"use strict";

export let digitalView ={
    init : function() {
        this.container = document.getElementById("digital");
        this.display = document.createElement("div");
        this.display.classList.add("digital-clock");
        this.container.append(this.display);

        // style
        this.display.style.display = "inline-block";
        this.display.style.color = "lightgreen";
        this.display.style.fontWeight = "bold";
        this.display.style.fontSize = "30px";
        this.display.style.backgroundColor = "black";
        this.display.style.padding = "10px";
        this.display.style.border = "2px solid green";


    },

    update : function(date){
        this.display.textContent = date.DIGITAL_TIME;
    }
};

digitalView.init();