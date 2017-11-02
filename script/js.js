 
function clickToHero()  { 
  $(".person").click(function (){
    $(this).children(".likeHero").css("display");
      thisHero=$(this).children(".likeHero");
      console.log(thisHero.css("display"));
      if  (thisHero.css("display") == "block"){
               
              thisHero.css("display" , "none");
          }
            
      else     thisHero.css("display" , "block");

               localStorage.setItem( "choseHero", $(".hero").html());
       
    });
}


  if(localStorage.getItem('choseHero') != (null)){
       $(".hero").html(localStorage.getItem('choseHero'));
       clickToHero();
       }

  else $.getJSON("https://swapi.co/api/people/?format=json" , function(data) { 
           let list=data.results;
           let hero="";
           $.each(list,  function(key , val){
               hero += "<div class='person'> <img src='img/dart.jpg' class='likeHero' id='"+val.name+"'>"+val.name+"</div>" ;
           });    
           
           $(".hero").html(hero);
           clickToHero();
        });
    
   