//script that provides the global document_state variable, the document_state_change event, 

//no need for this anymore because of CSS?!?!?!

var document_state;
var document_state_change = new CustomEvent('document_state_change', {
    detail: {newstate: document_state
            }
});

function change_Document_State(state){
    if(state =="popup"){
        document_state = "popup";
        document_state_change.detail.newstate = "popup";
        window.dispatchEvent(document_state_change);
    } else if(state == "narrow"){
        document_state = "narrow";
        document_state_change.detail.newstate = "narrow";
        window.dispatchEvent(document_state_change);
    }else if(state =="full"){
        document_state = "full";
        document_state_change.detail.newstate = "full";
        window.dispatchEvent(document_state_change);
    }else{
        console.error("Invalid Argument for Document State");
    }
    
}