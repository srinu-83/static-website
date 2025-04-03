var isLightTheme=true;
    function changetheme(){
        console.log("change theme")
        var element=document.body;
        element.classList.toggle("dark-theme");
        element.classList.toggle("light-theme");

        var image = document.getElementById("diwali");
        image.src = isLightTheme ? "diwali_img/new_background2.jpg" : "diwali_img/diwali_img.jpg"; 
       

        var headingElements =document.getElementsByTagName("h1");
        for(var i=0;i < headingElements.length;i++){
            headingElements[i].style.color=isLightTheme ?"white" : "black";
        }
      
        
        var listElements = document.getElementsByClassName("list");
        for(var i=0;i < listElements.length;i++){
            listElements[i].style.color=isLightTheme ?"white" : "black";
        }


      
        var paraElements =document.getElementsByTagName("p");
        for(var i=0;i < paraElements.length;i++){
            paraElements[i].style.color=isLightTheme ?"white" : "black";
        }

        isLightTheme=!isLightTheme;

    }