
window.onload = function (){
    var mobilenavbarpath = "/Oral_English/1stYrBE/components/mobilenavbar.html";
    var header_and_sidebarpath = "/Oral_English/1stYrBE/components/header_and_sidebar.html";
    window.loadComponent(mobilenavbarpath).then(function(result){
        
        //Add CSS for navbar for mobile
        document.getElementsByTagName('head')[0].appendChild(result.style);
          
        
        //add navbar html to body
        var domparser = new DOMParser();
        var navbar = domparser.parseFromString(result.template.innerHTML, "text/html").querySelector('nav');   
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(navbar);
        
        
        //add script to make navbar burger and all that work when clicked
        var script = document.createElement('script');
        script.innerHTML=result.script.innerHTML;
        document.getElementsByTagName('head')[0].appendChild(script);
        
        
    });
    
    window.loadComponent(header_and_sidebarpath).then(function(result){
       
        //add CSS for sidebar and header
        document.getElementsByTagName('head')[0].appendChild(result.style);
        
        
        
        var domparser = new DOMParser();
        var body = document.getElementsByTagName('body')[0];
        
        //add the header and the sidebar html to body
        var header = domparser.parseFromString(result.template.innerHTML, "text/html").getElementsByClassName('hero')[0];
        var sidebar = domparser.parseFromString(result.template.innerHTML, "text/html").getElementById('contentformatting');
        body.appendChild(header);
        body.appendChild(sidebar);
        
        
        //fill in content_column with the page column from template on page
        var content = document.createElement('div');
        content.innerHTML = document.getElementById('page_content').innerHTML;
        document.getElementById('content_column').appendChild(content);
        
        
        //add the script that makes sidebar fixed and all that
        var script = document.createElement('script');
        script.innerHTML=result.script.innerHTML;
        document.getElementsByTagName('head')[0].appendChild(script);
        
    });
    

    
    
};


window.loadComponent = ( function() {
	function fetchAndParse( URL ) {
		return fetch( URL ).then( ( response ) => {
			return response.text();
		} ).then( ( html ) => {
			const parser = new DOMParser();
			const document = parser.parseFromString( html, 'text/html' );
			const head = document.head;
			const template = head.querySelector( 'template' );
			const style = head.querySelector( 'style' );
			const script = head.querySelector( 'script' );

			return {
				template,
				style,
				script
			};
		} );
	}




	function loadComponent( URL ) {
		return fetchAndParse( URL );
	}

	return loadComponent;
}() );

/*
Using code from https://medium.com/content-uneditable/implementing-single-file-web-components-22adeaa0cd17
*/