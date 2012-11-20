// inspired by:
// http://stackoverflow.com/questions/11459745/can-we-create-environment-variables-for-backbone-applications

define([], function(){

    var Tweeds = {};
    Tweeds.Config = {
       Local : {
         ig_key: '0f0dfb220860435e8ea0b15d6a8d5785'
       },
       Dev : {
         ig_key: '3fd509da44eb473e92a62b4e7ed70333'
       },
       Prod : {
         ig_key: ''
       }
    };

    var Env = {
        getValue : function(key){
            var env;
            switch( window.location.hostname ){
                case "localhost":
                case "127.0.0.1":
                case "local.tweeds.com":
                    env = 'Local';
                    break;
                case "tweeds.workofjonas.com":
                case "tweeds.italic-studio.com":
                    env = 'Dev';
                    break;
                case "tweeds.com":
                    env = 'Prod';
                    break;
                default:
                    throw('Unknown environment: ' + window.location.hostname );
            }
            return Tweeds.Config[env][key];
        }
    };

    return Env;

});