const startTime = 9;

updateTime();
updateEvents();

function updateTime() { 
    updateDayText();
    colorTimeBlocks();
    setInterval(() => {
        updateDayText();
        colorTimeBlocks();
    }, 30000);
}

function updateDayText() {
    const today = moment().format("dddd, MMMM Do");
    $('#currentDay').text(today);  
}

function colorTimeBlocks() {
    $('textarea').each(function () {
        let hourNow = moment().hour();
        let blockHour = parseInt($(this).attr('data-index')) + startTime;
        if (hourNow > blockHour) {
            $(this).removeClass('future');
            $(this).removeClass('present');
            $(this).addClass('past');
        } else if (hourNow < blockHour) {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        } else {
            $(this).removeClass('future');
            $(this).removeClass('past');
            $(this).addClass('present');
        }
    });
}

$('.saveBtn').on('click', saveEvent);

function saveEvent(event) {
    event.stopPropagation();

    const index = parseInt($(this).siblings('.description').children('textarea').attr('data-index'));
    const newEvent = $(this).siblings('.description').children('textarea').val();
    
    let schedule = JSON.parse(localStorage.getItem("schedule"));
    if (!schedule) {
        schedule = buildDay();
    };

    schedule[index].description = newEvent;

    localStorage.setItem("schedule", JSON.stringify(schedule));
    updateEvents();
}

function updateEvents() {
    let schedule = JSON.parse(localStorage.getItem("schedule"));
    if (!schedule) {
        schedule = buildDay();
    };

    $('textarea').each(function () {
        let index = parseInt($(this).attr('data-index'));
        $(this).val(schedule[index].description);
    });
}

function buildDay() {
    let schedule = [];
    for (let hour = 9; hour <= 17; hour++) {
        schedule.push({hour, description: " "});
    }
    return schedule;
}
