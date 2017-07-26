var clicked = false;
var canLoseFocus = true;

var normaltags = [];
var othertags = [];

var $grid;
function doMasonry() {
    if(!$grid) return;
    $grid.masonry('destroy');
    $grid = $('.grid').masonry({
      // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true
    });
}


$("#iconUpp").click(function() {
    $("#searchdiv").get(0).scrollTop=0;
});
$("#iconUp").click(function() {
    $("#searchdiv").get(0).scrollTop-=20;
});
$("#iconDown").click(function() {
    $("#searchdiv").get(0).scrollTop+=20;
});
$("#iconDownn").click(function() {
    $("#searchdiv").get(0).scrollTop=100000;
});



$('div.toInsert').each(function() {
    var contentid = $(this).attr("data-whichparent");
    var str = contentid.substring(0, contentid.length-8);
    console.log(str);
    $(this).insertAfter($('span.insertAnchor[data-isparent="'+str+'"]'));
});
//preprocessing steps

$("#options li .anchor").each(function() {
    var text = $(this).text();
    if(text!="all") normaltags.push(text);
});

function makeClicks() {
    $("#options li .anchor").each(function() {
        var text = $(this).text();
        $(this).click(function() {
            filterTags(text);
        });
        $(this).parent().click(function() {
            filterTags(text);
        });
    });
}
makeClicks();


$(".grid-item").each(function() {
    var classes = $(this).attr("class").split(" ");
    for(var i=0; i<classes.length; i++) {
        if(classes[i] != 'grid-item' && !normaltags.includes(classes[i]) && !othertags.includes(classes[i])) {
            othertags.push(classes[i]);
        }
    }
});
othertags = othertags.sort();

for(var i=0; i<othertags.length; i++) {
    $("<li></li>").append($("<span></span>")
        .text(othertags[i]).addClass("anchor"))
    .appendTo($("#searchdiv ul"));
}
$("#searchdiv > ul > li > .anchor").click(function() {
    filterTags($(this).text());
});
$("#slidercontainer").hide();

function doSearch() {
    var searchval = $("#search").val();
    var myTag = "";

    myTag = othertags[Math.floor(Math.random()*othertags.length)];
    if(searchval.length!=0) {
        for(var i=0; i<othertags.length; i++) {
            if(othertags[i].includes(searchval)) {
                myTag = othertags[i];
                break;
            }
        }
    }
    filterTags(myTag);
}
$("#search").keyup(function(event) {
    if(event.which==13) { //enter
        doSearch();
        $(this).blur();
    }
    $(this).val($(this).val().replace(/\s+/g, "")); //filter out spaces
    var searchstr = $(this).val();
    if(searchstr.length==0) {
        $(".hidden").removeClass("hidden");  
        $("#searchdiv ul li").each(function() {
            $(this).html('<span class="anchor">'+$(this).text()+'</span>');
        });
    }
    else if(searchstr.length >= 1) {
        $(".hidden").removeClass("hidden");
        $("#searchdiv ul li").each(function() {
            var tagstr = $(this).text();
            var indexOfStr= tagstr.indexOf(searchstr);
            if(indexOfStr == -1) {
                $(this).addClass("hidden");
            } else {
                var part1 = tagstr.substring(0, indexOfStr);
                var part2 = searchstr;
                var part3 = tagstr.substring(indexOfStr+searchstr.length, tagstr.length);
                $(this).html('<span class="anchor">'+part1+"<b>"+part2+"</b>"+part3+'</span>');
            }
        });
    }

    makeClicks();
});


$("#searchdiv, #slidercontainer, #arrowicon").mouseenter(function() {
    canLoseFocus = false;
}).mouseleave(function() {
    canLoseFocus = true;
});
$("#arrowicon").click(function() {
    doSearch();
});

function clickHandler() {
    if(!clicked) {
        $("#search").val("").removeClass("unclicked");
        $("#search").animate({marginRight:'1.2em'}, 200);
        $("#arrowicon").animate({right:'0.75em'}, 200);
    }
    clicked = true;
}
$("#searchicon,#nav li:last-child").click(function() {
    clickHandler();
    $("#search").focus();
});
$("#search").click(function() {
    clickHandler();
}).focusin(function() {
    $("#searchicon, #arrowicon").removeClass('unclicked');
    $('#searchdiv, #slidercontainer').slideDown();
}).focusout(function(event) {
    if(canLoseFocus) {
        $("#searchicon, #arrowicon").addClass('unclicked');
        $('#searchdiv, #slidercontainer').slideUp();
    }
});

$("#search").focusout(function() {
    if(!canLoseFocus) {
        $(this).focus();
    }
});


function filterTags(tag) {
    $("#nav .active").removeClass("active");

    if(tag == 'all') { // is all
        $(".grid-item").show();
        $("#option-all").addClass('active');
    } else { 
        $(".grid-item").hide();
        $(".grid-item").filter("."+tag).show(); //show elements
        if(normaltags.includes(tag)) { //do active stuff
            $("#option-"+tag).addClass("active");
        } else {
            $("#search").val(tag);
            $("#optionSearch").addClass("active");
            $("#search").addClass("active");
        }
    }
    doMasonry();
}


//------- masonry
$("header").animate({top:'0'}, {duration:200, done:function() {
    $('.notheader').fadeIn();
    $grid= $('.grid').masonry({
      // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true
    });
}});
