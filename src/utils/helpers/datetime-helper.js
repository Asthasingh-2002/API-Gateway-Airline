function compareTime(timeString1, timeString2){
    let dateTime1 =new Date(timeString1);
    let dateTime2 =new Date(timeString2);
    return dateTtime1.getTime()> dataTime2.getTime();
    
}

module.exports = {
    compareTime
}