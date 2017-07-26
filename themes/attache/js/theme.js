
var matrixText = {
    title:"",
    current:"",
    count:0,
    init: function(subtitle) {
        this.title = subtitle;
        this.current="";
        this.count=0;
    },
    step: function() {
        if(this.count == 4) {
            this.current=this.title.substring(0, this.current.length+1);
            this.count=0;
        }
        if(this.current.length==this.title.length) {
            return this.title;
        }
        this.count++;
        return this.current+String.fromCharCode(33+Math.floor(Math.random()*92)); //33 to 126
    }
}
function putSubtitle() {
    doneTyping= false;
    flickerCount=0;
    $("#flicker").css('color', 'black');
    var subtitle = subtitles[Math.floor(Math.random()*subtitles.length)];
    matrixText.init(subtitle);
}
$("#subtitle").click(function() {
    putSubtitle();
});

// ----------------- animations ------------
var framecount=0;
var flickerOn = 1;
var flickerCount = 0;
var doneTyping = false;
var bodyobj = $('body').get(0);
var headerheight = $('header').height();

function reDraw() {
    framecount++;
    if(framecount%40 == 0) {
        if(flickerCount <= 4) {
            $("#flicker").css('color', ((flickerOn == 1) ? 'white' : 'black'));

            flickerOn = (flickerOn + 1) % 2;

            if(!doneTyping) flickerCount=0;
            flickerCount++;
        }
        if(flickerCount == 5) {
            $("#flicker").css('color', 'white');
        }
    }
    if(framecount % 3 == 0) {
        if(!doneTyping) {
            $("#actualtitle").text(matrixText.step());
            if(matrixText.step()==matrixText.title) {
                doneTyping = true;
            }
        }
    }
    if(framecount % 10 == 0 ) {
        var headerheight = $('header').height();
        if(bodyobj.scrollTop > headerheight+20) {
            $(".smallheader").css('top','0em');
        } else {
            $(".smallheader").css('top','-3em');
        }
    }

    window.requestAnimationFrame(reDraw);        
}
window.requestAnimationFrame(reDraw);



//-------------various click listeners ----------
//sidebars
$('.contactshower').click(function() {
    activateSidebar('contact');
});
$('.linkshower').click(function() {
    activateSidebar('links');
});
$(".sidebarhider").click(function() {
    activateSidebar('none');
});


//--------------- sidebar ----------------
var dur1 = 600, dur2 = 400;
var linkwidth = 16, contactwidth = 16;
var currentsidebar = "none";
function activateSidebar(sidebarname) {
    if (sidebarname=='none' || sidebarname == currentsidebar) {
        currentsidebar = 'none';
        $('#contactlink, #linklink').removeClass("active");
        $('#bodyContainer').animate({left:'0'},{duration:dur1, start: function() {
            $('#sidebarContact').animate({right: '-'+(contactwidth+2)+'em'},dur2);
            $('#sidebarLinks').animate({right: '-'+(linkwidth+2)+'em'},dur2);
        }});
    } else if(sidebarname=='contact') {
        currentsidebar='contact';
        $('#contactlink, #linklink').removeClass("active");
        $("#contactlink").addClass("active");
        $('#bodyContainer').animate({left: '-'+(contactwidth)+'em'}, {duration:dur1, start: function() {
            $('#sidebarLinks').animate({right: '-'+(linkwidth+2)+'em'},dur2);
            $('#sidebarContact').animate({right:'0em'},dur2);
        }});
    } else if (sidebarname=='links') {
        currentsidebar='links';
        $('#contactlink, #linklink').removeClass("active");
        $("#linklink").addClass("active");
        $('#bodyContainer').animate({left: '-'+(linkwidth)+'em'}, {duration:dur1, start: function() {
            $('#sidebarContact').animate({right: '-'+(contactwidth+2)+'em'},dur2);
            $('#sidebarLinks').animate({right:'0em'},dur2);
        }});
    } 
}

$(document).ready(function() {
$("header").animate({top:'0'}, {duration:200, done:function() {
    $('.notheader').fadeIn();
}});
putSubtitle();
});