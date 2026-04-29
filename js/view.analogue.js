"use strict";

export let analogView = {
    init : function() {
        this.container = document.getElementById("analogue");

        // custom Rick and Morty clock with some styling (made in Illustrator)
        this.container.style.backgroundImage = "url('clock.png')";
        this.container.style.backgroundSize = "contain";
        this.container.style.backgroundRepeat = "no-repeat";
        this.container.style.backgroundPosition = "left center";

        //hands for clock , the pointers
        this.hourHand = document.createElement("div");
        this.minuteHand = document.createElement("div");
        this.secondHand = document.createElement("div");

        this.hourHand.classList.add("hand", "hour");
        this.minuteHand.classList.add("hand","minute");
        this.secondHand.classList.add("hand","second");
        this.container.append(this.hourHand, this.minuteHand, this.secondHand );
    },

    //return 'rgb(${RED}, ${GREEN}, ${BLUE})'; & from geeks .style.transform = `rotate(${minuteDeg}deg)`;
    update : function(data) {
        this.hourHand.style.transform = "rotate(" + data.HDEG + "deg)";
        this.minuteHand.style.transform = "rotate(" + data.MDEG + "deg)";
        this.secondHand.style.transform = "rotate(" + data.SDEG + "deg)" ;
    }
};

analogView.init();

//from class
/*
export let analogueView ={
    init : function(){
        const CLOCKSIZE = 150;
        const HHANDSIZE = 6;
        const MSIZE = 4;
        const SSIZE = 2;

        aClock.style.width = CLOCKSIZE + 'px';
        aClock.style.height = CLOCKSIZE + 'px';
        aClock.style.backgroundColor = "white";

        aClock.innerHTML =
            '<div id = \"hHand\"></div>' +
            '<div id=\"mHand\"></div>' +
            '<div id=\"sHand\"></div>';

        //Hours -> same to mintues and seconds
        hHand.style.width = CLOCKSIZE * 0.25 + "px";
        hHand.style.height = HHANDSIZE + "px";
        hHand.style.backgroundColor = "black";
        hHand.style.transformOrigin = "0% 50%";
        hHand.style.position = "absolute";
        hHand.style.top = CLOCKSIZE/2 - (HHANDSIZE*0.5) + 'px';
        hHand.style.left = CLOCKSIZE/2 + 'px';
        //minutes
        mHand.style.width = CLOCKSIZE * 0.40 + "px"; // change here
        mHand.style.height = MSIZE + "px"; // change here
        mHand.style.backgroundColor = "black"; // maybe here
        mHand.style.transformOrigin = "0% 50%";
        mHand.style.position = "absolute";
        mHand.style.top = CLOCKSIZE/2 - (HHANDSIZE*0.5) + 'px';
        mHand.style.left = CLOCKSIZE/2 + 'px';
        // here seconds as well

    },

    //actual logic
    update : function(hh, mm, ss){
        this.rotateHands(this.calculateRotation(hh,mm,ss));
    },
    calculateRotation(hh, mm , ss){
        return{
            //the only three lines where you have to do some thinking
            hour: ((hh%12)) * (360/12)  - 90,
            minute: (mm * 6 - 90),
            second: (ss * (360/60) - 90)
        }
    },
    rotateHands : function() {
        hHand.style.transform = "rotate(" + degrees.hour+ "deg)" ;
        mHand.style.transform ="rotate(" + degrees.minute+ "deg)" ;
        sHand.style.transform ="rotate(" + degrees.second+ "deg)" ;
    }
}
*/
