$(document).ready(function() {
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position > 40) {
            $('.navbar').css('height', '50px');
        } else {
            $('.navbar').css('height', '80px');
        }
    })

    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 800) {
            $('#fromLeft1').addClass('fromLeft1');
            $('#fromLeft2').addClass('fromLeft2');
            $('#fromLeft3').addClass('fromLeft3');
            $('#fromRight').addClass('fromRight');
        } else {
            $('#fromLeft1').removeClass('fromLeft1');
            $('#fromLeft2').removeClass('fromLeft2');
            $('#fromLeft3').removeClass('fromLeft3');
            $('#fromRight').removeClass('fromRight');
        }
    })

    $('.gallery-list-item').click(function() {
        let value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.filter').show(1000);
        } else {
            $('.filter').not('.' + value).hide(1000);
            $('.filter').filter('.' + value).show(1000);
        }
    });

    $('#galleryLi li').click(function() {
        if ($(this).hasClass('active-item')) {
            $(this).removeClass('active-item');
        } else {
            $('li.active-item').removeClass('active-item');
            $(this).addClass('active-item');
        }
    });

    $('.btnContact').click(function(event) {


        let email = $('#emailInput').val();
        let subject = $('#subjectInput').val();
        let textArea = $('#textAreafield').val();

        let statusElement = $('.status');
        statusElement.empty();

        if (email.length > 5 && email.includes('@') && email.includes('.')) {

        } else {
            event.preventDefault();
            statusElement.append('<p style="color:red;">Vas email nije validan</p>');
            $('#emailInput').css('border-color', 'red');
        }

        if (subject.length >= 2) {

        } else {
            event.preventDefault();
            statusElement.append('<p p style="color:red;">Vas Subject nije validan</p>');
            $('#subjectInput').css('border-color', 'red');
        }

        if (textArea.length >= 5) {

        } else {
            event.preventDefault();
            statusElement.append('<p p style="color:red;">Vas tekst mejla nije validan</p>');
            $('#textAreafield').css('border-color', 'red');
        }
    });
});