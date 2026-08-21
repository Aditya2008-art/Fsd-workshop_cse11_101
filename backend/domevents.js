import {EventEmitter} from "node:events"
function createDomElements()
{
    EventEmitter= new EventEmitter();
    return {
        addEventListener(eventType,listener){
            emitter.on(eventType,listener);
        },
        removeEventListener(eventType,listener){
            emitter.on(eventType,listener);
    },
    dispatchEvent(event)
    {
        event.target=this;
        event.currentTarget=this;
        emitter.emit()
    }
}
}
function createDomElements()
{

}
const button =createDomElements();
button.addEventListener('save',()=>{
    console.log("saving...")
})
button.addEventListener('submit',()=>{
    console.log("data submitted successfully...")
})
function handleClick(event){
    console.log("button clicked");
    console.log(event.eventType);
    console.log('message:${event.detail}');
}
button.addEventListener('click',handleClick); //first way to fire click event where it is defined separately and then passed as a reference to the addEventListener method
button.addEventListener('click',(event)=>{ //second way to fire click event where it is defined inline
    console.log("button clicked");
    console.log(event.eventType);
    console.log('message:${event.detail}');
}
);
button.dispatchEvent({
    eventType:"save"
})
button.dispatchEvent({
    eventType:"submit"
});