$(document).ready(function () {
    $(".btnn-arrow").datepicker({
        onSelect: function (date) {
            var tempnum = $('.selecttt').parent().attr('id');
            setDate($(this).datepicker('getDate').getMonth() + 1, $(this).datepicker('getDate').getDate(), tempnum);
            $('.selecttt').removeClass('selecttt');
            $('div').not(".selecttt").find(".ui-datepicker").hide();
        }
    });
    $('.ui-datepicker').css('z-index', 100);
    $('tr').css('z-index', 50);
    $(".ui-datepicker").hide();
    $(".personList").offset({ top: $(".btnn-arrow1").offset().top +50, left: $(".btnn-arrow1").offset().left });

    $(".btnn-arrow1").click(function () {
        $('.personList').attr("style", "visibility: visible");
        $('.ui-datepicker').hide();
    }).mouseout(function () {
        setTimeout(function () {
            $('.personList').attr("style", "visibility: hidden");
        }, 3000);
    });


    $(".btnn-arrow").mouseover(function () {
        $('.personList').attr("style", "visibility: hidden");
        $('.btnn-arrow').removeClass('selecttt');
        $(this).addClass('selecttt');
        $('div').not(".selecttt").find(".ui-datepicker").hide();
        $('.selecttt').find('.ui-datepicker').show();
    }).mouseout(function () {
        setTimeout(function () {
            $('.selecttt').find('.ui-datepicker').hide();
        }, 5000);
        $(this).removeClass('selecttt');
    });

    function setDate(month,date,pos)
    {
        var tmpmonth = "01";
        var tmpdate = "01";

        if (String(month).length < 2 && String(month).length > 0) {
            tmpmonth = "0" + month;
        }
        else {
            tmpmonth =  month;
        }
        if (String(date).length < 2 && String(date).length > 0) {
            tmpdate = "0" + date;
        }
        else {
            tmpdate = date;
        }

        if (pos == "von") {
            $('#vonmonth').text(tmpmonth);
            $('#vondate').text(tmpdate);
        }
        else if (pos == "bis") {
            $('#bismonth').text(tmpmonth);
            $('#bisdate').text(tmpdate);
        }

    }

    $('#Submit').click(function () {
        alert('Your choice begin date: ' + $('#vondate').text() + '/' + $('#vonmonth').text() + ', and end date is :' + $('#bisdate').text() + '/' + $('#bismonth').text() + ' for ' + $('#personNum').text() + ' person(s).');
        var data=[{vondate:$('#vondate').text(),vonmonth:$('#vonmonth').text(),bisdate:$('#bisdate').text(),bismonth:$('#bismonth').text()}];
        $.post('http://www.test.com', data, function () { alert('success') });
    })

    $('.personList>div').click(function () {
        if($(this).hasClass('cube1'))
        {
            $('#personNum').text('01');
        }
        else if ($(this).hasClass('cube2')) {
            $('#personNum').text('02');
        }
        else if ($(this).hasClass('cube3')) {
            $('#personNum').text('03');

        }
        else if ($(this).hasClass('cube4')) {
            $('#personNum').text('04');
        }
        else if ($(this).hasClass('cube5')) {
            $('#personNum').text('05');
        }

        $('.personList').attr("style", "visibility: hidden");
    })
});