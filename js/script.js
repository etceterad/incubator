window.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Осталось', 'Завершенные', 'Незаконченные', 'В процессе'],
            datasets: [{
                data: [12, 21, 2, 7],
                backgroundColor: [
                    '#656363',
                    '#e7e7e7',
                    '#414141',
                    '#DB4747'
                ],
                borderColor: [
                    '#656363',
                    '#e7e7e7',
                    '#414141',
                    '#DB4747'
                ],
                borderWidth: 1
            }]
        },
        options: {
            cutoutPercentage: [80],
            legend: {
                display: false
            }
        }
    });
    var ctxx = document.getElementById('mySecondChart');
    var myChartt = new Chart(ctxx, {
        type: 'doughnut',
        data: {
            labels: ['Осталось', 'Завершенные', 'Незаконченные', 'В процессе'],
            datasets: [{
                data: [4, 38, 12, 21],
                backgroundColor: [
                    '#656363',
                    '#e7e7e7',
                    '#414141',
                    '#DB4747'
                ],
                borderColor: [
                    '#656363',
                    '#e7e7e7',
                    '#414141',
                    '#DB4747'
                ],
                borderWidth: 1
            }]
        },
        options: {
            cutoutPercentage: [80],
            legend: {
                display: false
            }
        }
    });
    var ctxxx = document.getElementById('myThirdChart');
    var myCharttt = new Chart(ctxxx, {
        type: 'doughnut',
        data: {
            labels: ['Осталось', 'Выполнено'],
            datasets: [{
                data: [38, 21],
                backgroundColor: [
                    '#656363',
                    '#e7e7e7'
                ],
                borderColor: [
                    '#656363',
                    '#e7e7e7'
                ],
                borderWidth: 1
            }]
        },
        options: {
            cutoutPercentage: [80],
            legend: {
                display: false
            }
        }
    });

    const deadline = '2021-02-02';
    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor((t / (1000 * 60 * 60 * 24))),
              hours = Math.floor(((t / (1000 * 60 * 60) % 24))),
              minutes = Math.floor (((t / 1000 / 60) % 60)),
              sec = Math.floor(((t / 1000) % 60));

        return {
            'total': t, 
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'sec': sec
        };      
    }

    function getZero(num) {
        if(num >= 0 && num < 10){
            return '0' + num;
        }else{
            return num;
        }
    }

    function setClock(selector, endtime) {
    
        const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                sec = timer.querySelector('#sec');
                timeInterval = setInterval(
                    function() {
                        const t = getTimeRemaining(endtime);
                        
                        days.innerHTML = getZero(t.days);
                        hours.innerHTML = getZero(t.hours);
                        minutes.innerHTML = getZero(t.minutes);
                        sec.innerHTML = getZero(t.sec);
             
                        if (t.total <= 0) {
                            clearInterval(timeInterval);
                        }
                     }, 1000);
    }

    setClock('.mainpage-next-lecture__timer', deadline);
});