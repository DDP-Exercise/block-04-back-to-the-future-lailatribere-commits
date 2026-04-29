"use strict";

export let clockModel ={
    getTime(){
        const NOW = new Date();
        const SECONDS = NOW.getSeconds();
        const MINUTES = NOW.getMinutes();
        const HOURS = NOW.getHours();

        // degrees on clock , calculation
        const SDEG = SECONDS * 6
        const MDEG = MINUTES * 6
        const HDEG = (HOURS % 12) * 30 + (MINUTES * 0.5)

        return {
            SDEG :  SDEG,
            MDEG : MDEG,
            HDEG : HDEG,
            DIGITAL_TIME : NOW.toLocaleTimeString()
        };
    }
};

// from class
/*
export let timeModel(){

    updateTime : function(){
    this.time = new.Date();
    },
    getHours : function(){
        return this.time.getHours();
    },
    getMinutes : function(){
        return this.time.getMinutes();
    },
    getSeconds : function(){
        return this.time.getSeconds();
    }
}
*/