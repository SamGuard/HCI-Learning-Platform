$(document).ready(()=>{
    $("#loginButton").click(() => {
        window.location = "home.html"
    });

    $('.module').click(() => {
        window.location = "module.html"
    });

    $(`#ass`).click(() => {
        $('#catBox').show();
        const ass = [{name: "coursework 1", due: "5 days"}, {name: "coursework 2", due: "15 days"}];
        $('#catBox').html(`
        <table id="assTable" style="positiion: relative; width: 100%">
            <tr>
                <th>Coursework name</th>
                <th>Due in</th>
            </tr>
        </tabl>
        `);
        ass.forEach(function(val){
            $('#assTable').append(`
            <tr class="assLink">
                <th><a href="" style="color: black">${val.name}</a></th>
                <th>${val.due}</th>
            </tr>
            `);
        });
    });

    

    $(`#live`).click(() => {
        $('#catBox').show();
        const lect = [{day: "monday", len: "2 hours"}, {day: "wednesday", len: "1 hour"}];
        $('#catBox').html(`
        <table id="liveTable" style="positiion: relative; width: 100%">
            <tr>
                <th>Day</th>
                <th>Length</th>
            </tr>
        </tabl>
        `);
        lect.forEach(function(val){
            $('#liveTable').append(`
            <tr class="assLink">
                <th><a href="" style="color: black">${val.day}</a></th>
                <th>${val.len}</th>
            </tr>
            `);
        });
    });
    $(`#cont`).click(() => {
        $('#catBox').show();
        $(`#catBox`).html(`
            <p>Phone Number: 0118 999 881 999 119 7253</p>
            <p>Contact Name: Fabio</p>
            <p>Email: Fabio@bath.ac.uk</p>
        `);
    });
});