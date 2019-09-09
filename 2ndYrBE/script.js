
window.onload = function(){
    
    var sidebar = document.getElementsByClassName("sidebar")[0];
    var sidebar_subpages = sidebar.children;
    var site_header = document.getElementsByClassName("site_header")[0];
    var fixed_menu = document.getElementsByClassName("fixed_menu")[0];
    var popup_menu_button = document.getElementsByClassName("popup_menu_button")[0];
    
    site_header.visible = true; //add own show property to determine if site_header is being displayed
    popup_menu_button.poppedup = false;
    
   // site_header.style.transition = "top 600ms";
   // sidebar.style.transition = "top 600ms";

    site_header.show = (mode)=>{
        if (mode == "sidebar"){
        fixed_menu.classList.remove("sidebar_hidden");
        fixed_menu.classList.add("sidebar_visible");
        }
        if (mode == "topbar"){
            
        }
    };

    site_header.hide = (mode)=>{
        if (mode =="sidebar"){
        fixed_menu.classList.add("sidebar_hidden");
        fixed_menu.classList.remove("sidebar_visible");
        }
        if (mode == "topbar"){
            
        }

        
        
          
    };

    popup_menu_button.popup = ()=>{
        sidebar.classList.add("popup");
        popup_menu_button.poppedup = true;
    };
    popup_menu_button.close = ()=>{
        sidebar.classList.remove("popup");
        popup_menu_button.poppedup = false;
    };
    
    
    
    window.addEventListener('document_state_change', function(event){
       if(event.detail.newstate == "full"){
           
       }
    });
    
    
    popup_menu_button.addEventListener('click', function(){
        if(popup_menu_button.poppedup){
            popup_menu_button.close();
        }else{
            popup_menu_button.popup();
        }
    });

    
    window.addEventListener('resize', function(){
        
    });
        
    
    
    window.addEventListener('scroll', function(){
            if (site_header.visible == true && window.scrollY > 50){
            site_header.hide("sidebar");
            site_header.visible = false;
            }
            
            if (site_header.visible == false && window.scrollY < 50){
            site_header.show("sidebar");
            site_header.visible = true;
            }
       
        
            });




};
