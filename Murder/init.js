var events = require('events');

function serverlaunch(event){
  console.log("Server running Murder for Scriptcraft by 808dkaneohe");
  console.log("Type /js help for information");
  console.log("Report any bugs to https://github.com/HerpDerpModding/MurderGamePlugin/issues");
}
events.serverGuiStart(serverlaunch);

function onJoin(event){
    echo(event.player, "Server running Murder for Scriptcraft by 808dkaneohe");
    echo(event.player, "Type /js help for information");
    echo(event.player, "Report any bugs to https://github.com/HerpDerpModding/MurderGamePlugin/issues");
}
events.connection(onJoin);
