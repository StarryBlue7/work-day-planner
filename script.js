
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

$('.saveBtn').on('click', saveEvent);

function saveEvent(event) {
    event.stopPropagation();

    const newHour = $(this).siblings('.description').children('textarea').attr('data-hour');
    const newDescription = $(this).siblings('.description').children('textarea').val();
    const newEvent = {hour: newHour, description: newDescription};
    
    let schedule = JSON.parse(localStorage.getItem("schedule"));
    if (schedule) {
        schedule.push(newEvent);
    } else {
        schedule = [newEvent];
    };

    localStorage.setItem("schedule", JSON.stringify(schedule));
}

