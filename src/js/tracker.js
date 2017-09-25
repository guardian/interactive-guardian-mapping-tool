export default function tracker(){

  var w = window.parent;
  var isTracking = (w.ga) ? true : false;
  var initialized = false;
  var events = {};

  function registerEvent(e, data){
    //console.log('event fired')
    //console.log("isTracking", isTracking, 'isInitialized', initialized);
    //is tracking
    if(isTracking){

      //make sure initialized
      if(!initialized){
        //console.log('init tracking')
        w.ga('create', 'UA-78705427-1', 'auto');
        w.ga('set', 'dimension3', 'theguardian.com' );
        initialized = true;
      }
      //send event

      if( e === 'stack_card_view'){

        if( !events[data]){
          events[data] = 0;
        }
        events[data] += 1;

        data = data + '_' + events[data];

      }

      w.ga("send", "event", "interactives", e, 'swipe_' + data);
    }
  }

  return {
    registerEvent: registerEvent
  }

}
