
updateTime();

function updateTime() { 
    updateDayText();
    colorTimeBlocks();
    setInterval(() => {
        updateDayText();
        colorTimeBlocks();
    }, 30000);
};

function updateDayText() {
    const today = moment().format("dddd, MMMM Do");
    $('#currentDay').text(today);  
};

function colorTimeBlocks() {
    $('textarea').each(function () {
        let hourNow = moment().hour();
        let blockHour = parseInt($(this).attr('data-hour'));
        if (hourNow < blockHour) {
            $(this).removeClass('future');
            $(this).removeClass('present');
            $(this).addClass('past');
        } else if (hourNow > blockHour) {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        } else {
            $(this).removeClass('future');
            $(this).removeClass('past');
            $(this).addClass('present');
        };
    })
}
