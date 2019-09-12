 window.onload = function(){
            var header = document.getElementById("header");
            var header_height = header.offsetHeight;
            var sidebar_container = document.getElementById("sidebar_container");
            var sidebar_mode = "relative";
            
            //navbar stuff
            var burger_button = document.querySelector('[role="button"]:last-of-type');
            var navbar_menu = document.getElementsByClassName("navbar-menu")[0];
            
            
            window.addEventListener('resize',()=>{//updates the header_height when window is resized
                header_height = header.offsetHeight;
                if(sidebar_mode=="relative"){
                    sidebar_container.style.top = String(header_height)+'px';
                }
            });
            
            burger_button.addEventListener('click',()=>{//when burger is pressed
                if(burger_button.classList.contains("is-active")){
                    burger_button.classList.remove("is-active");
                    navbar_menu.classList.remove("is-active");
                }else{
                    burger_button.classList.add("is-active");
                    navbar_menu.classList.add("is-active");
                }
                
            });
            
            
            window.addEventListener('scroll',()=>{//do not directly do these changes for every single scroll event because that takes up a lot of resources. Check like maybe once every 3 scroll events or something?
                var scrollpixels = window.scrollY;
                if(window.innerHeight > 550){
                    if (scrollpixels > header_height && sidebar_mode=="relative"){
                    sidebar_container.classList.add("fix_sidebar");
                     sidebar_container.style.top = '0px';
                    sidebar_mode = "fixed";
                }else if (scrollpixels < header_height && sidebar_mode=="fixed"){
                    sidebar_container.classList.remove("fix_sidebar");
                    sidebar_container.style.top = String(header_height)+'px';
                    sidebar_mode = "relative";
                }
                   }
               
            });
            
        };
        