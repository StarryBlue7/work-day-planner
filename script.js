
updateTime();

function updateTime() { 
    updateDayText();
    colorTimeBlocks();
    setInterval(() => {
        updateDayText();
        colorTimeBlocks();
    }, 1000);
};

function updateDayText() {
    const today = moment().format("dddd, MMMM Do");
    $('#currentDay').text(today);  
};

function colorTimeBlocks() {
    
}
