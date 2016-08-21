// this function will diable the auto slide feature in the carousel
// all you need to do is set the interval boolean to false
$(document).ready(function(){
     $("#myCarousel").carousel({
         interval : false
     });
});


// here i am creating a function using third party library highcharrjs - added to the head script src

// that can be used across multiple div elements to generate dough chart dynamically

function createDoughChart(id)
{

var id = document.getElementById(id);
id.highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Browser<br>shares<br>2015',
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Firefox',   10.38],
                ['IE',       56.33],
                ['Chrome', 24.03],
                ['Safari',    4.77],
                ['Opera',     0.91],
                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
}



// the function will dp previous next on slide show. Simple use of vanilla js. 
// set the current slide
// var slides = document.querySelectorAll('#sliders .slideNum');
// var currentSlide = 0;



// function goToSlide(n)
// {
//     slides[currentSlide].className = 'slideNum';
//     currentSlide = (n+slides.length)%slides.length;
//     slides[currentSlide].className = 'slideNum showing';
// }

// var next = document.getElementById('next');
// var previous = document.getElementById('previous');

// function nextSlide() {
//     goToSlide(currentSlide+1);
// }

// function previousSlide() {
//     goToSlide(currentSlide-1);
// }

// next.onclick = function(){
//  nextSlide();
// }

// previous.onclick = function(){
//  previousSlide();
// }




// since the process of creating a dough can be done throgh canvas arc. But it will be time consuming.
// also yet to get the desired output. so commenting the code here


// created cannvas
// var canvas = document.getElementById('myCanvas');
//  var context = canvas.getContext('2d');
//  var x = canvas.width / 2;
//  var y = canvas.height / 2;
//  var radius = 75;
//  var startAngle = 1.1 * Math.PI;
//  var endAngle = 1.9 * Math.PI;
//  var counterClockwise = false;

//  context.beginPath();
//  context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
//  context.lineWidth = 20;

// //       // line color
//   context.strokeStyle = 'red';
//    context.stroke();