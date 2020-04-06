
$(document).ready(function(){
      $('.icon-text').hide(1000);
    });

$(document).ready(function(){
    $('.vision-icons').on('mouseover', function(){
      $('.icon-text').show(1000);
    });
});

function getConfirmation(){
    const retVal = confirm("Do you want to continue?");
    if(retVal == true){
      alert("Your input has been recorded!");
      return true;
    }else{
      alert("Resubmit your input.");
      return false;
    }
}

function hideDiv(){
   var x = document.getElementById("jobList");
   if (x.style.display === "none") {
     x.style.display = "block";
   } else {
     x.style.display = "none";
   }
 }

 function hideDiv2(){
   var x = document.getElementById("jobList2");
   if (x.style.display === "none") {
     x.style.display = "block";
   } else {
     x.style.display = "none";
   }
 }

 function hideDiv3(){
  var x = document.getElementById("jobList3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideDiv3(){
  var x = document.getElementById("jobList3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function hideDiv4(){
  var x = document.getElementById("jobList4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$(document).ready(function() {
  $('.scroll-down').on('click', function() {
    $('html, body, #hero').animate({ scrollTop: $('#scroll-to').offset().top}, 1000, 'linear');
  });
});
