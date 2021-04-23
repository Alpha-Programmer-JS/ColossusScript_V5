// ==UserScript==
// @name         ColossusScript V5
// @namespace    http://tampermonkey.net/
// @version      5.0.0
// @description  try to take over the world!
// @author       Darkman-JS#0247
// @match        *.bloble.io/*
// @grant        none
// @icon         https://bit.ly/3czy6Y2
// ==/UserScript==
DangerPerms = true;
PredictTimer();
function PredictTimer(){
    setInterval(function(){
        if(player&&test==0){
            window.Timer();
            test = 1;
            afkinterval = setInterval(function () {
                socket.emit("2", Math.round(camX), Math.round(camY));
            }, 1000);
            Dir_Dst();
            document.getElementById("mydiv").style = 'background-color: '+playerColors[player.color];
            BotsAll();
            PowerTest();
            window.ScrollChatWhell();
            CSSStyle();
            setInterval(window.WidthHot,500);
            PlacarColor();
            setInterval(PowerConfigs,500);
            Danger();
            /*Welcome();
            Script();*/
            SaveButtons();
            window.makeUI();
            setInterval(window.makeUI,10000);
            window.makeUI2();
            setInterval(window.makeUI2,10000);
            ColossusScriptChatCommands();
        };
        if(DangerPerms==true) {
            enterGame = function() {
                socket && unitList && (showMainMenuText(randomLoadingTexts[UTILS.randInt(0, randomLoadingTexts.length - 1)]),
                                       hasStorage && localStorage.setItem("lstnmdbl", userNameInput.value),
                                       mainCanvas.focus(),
                                       grecaptcha.execute("6Ldh8e0UAAAAAFOKBv25wQ87F3EKvBzyasSbqxCE").then(function(a) {
                    socket.emit("spawn", {
                        name: "CoS - User",
                        skin: 0
                    }, a)
                }))
            }
            document.getElementById("gameTitle").innerHTML = '<span class="TitlePart1">CoS</span><span class="TitlePart2">-UserMode</span>';
            if(userNameInput.value.endsWith("Dev")){
                document.getElementById("userNameInput").style = 'box-shadow:inset 0 0 5px 1.5px #ff0000';
            } else {
                document.getElementById("userNameInput").style = 'box-shadow:inset 0 0 5px 1.5px #00ff00a0';
            };
        };
    },500);
};
cid = UTILS.getUniqueID();
localStorage.setItem("cid",cid);
function Welcome(){
    var ColossusMsgText = document.getElementById('Message'),
        ColossusMsgText2 = document.getElementById('Message2'),
        css = document.createElement("style");
    css.innerText = `
#Message2 {
opacity: 0;
display: none;
}
`;
    document.head.appendChild(css);
    ColossusMsgText.innerHTML = 'Bem-vindo';
    ColossusMsgFunc(2000);
};
function SaveButtons(){
    $(function gamejs() {
        var tag = $("<div />",{
            onmouseout: 'toggleHoverUnit()',
            id: 'unitItem9',
            class: 'unitItem'
        });
        var img = $("<img />",{
            id: 'unitItemIcon9',
            height: '65px',
            width: '65px',
            src: 'https://raw.githubusercontent.com/Git-Phantom/Synchrony/main/image/openTheme.png'
        });
        $("#unitList").append(tag);
        $("#unitItem9").append(img);
        $('#unitItem9').click(function(){
            $('#unitItem1,#unitItem2,#unitItem3,#unitItem4,#unitItem5,#unitItem6,#unitItem7,#unitItem8,#unitItem9').remove();
            var tag = $("<div />", {
                onmouseout: 'toggleHoverUnit()',
                id: 'unitItem10',
                class: 'unitItem',
            });
            var fullGens = $("<div />", {
                onmouseout: 'toggleHoverUnit()',
                id: 'unitItem11',
                class: 'unitItem',
            });
            var hybrid1 = $("<div />", {
                onmouseout: 'toggleHoverUnit()',
                id: 'unitItem12',
                class: 'unitItem',
            });
            $("#unitList").append(tag, fullGens, hybrid1);
            /*$("#unitItem11").append(GensDiv);*/
            var GensDiv = document.createElement("div");
            GensDiv.id = "GensConfig";
            GensDiv.innerHTML = 'OFF';
            /*$("#unitItem11").onmouseout = GensConfig.style = 'width: 100px;height: 100px';*/
            var img = $("<img />", {
                id: 'unitItemIcon10',
                height: '65px',
                width: '65px',
                src: 'https://raw.githubusercontent.com/Git-Phantom/Synchrony/main/image/closeTheme.png',
            });
            var IconColor = playerColors[player.color];
            var fullGenerators = $("<img />", {
                id: 'unitItemIcon11',
                style: 'height: 65px; width: 65px; background-color:'+IconColor+'; opacity: .75',
                src: 'https://cdn.discordapp.com/attachments/829853550766718996/832242119207944264/unknown.png',
            });
            var Hybrid1 = $("<img />", {
                id: 'unitItemIcon12',
                style: 'height: 65px; width: 65px; background-color:'+IconColor+'; opacity: .75',
                src: 'https://cdn.discordapp.com/attachments/829853550766718996/832239310315978792/unknown.png',
            });
            $("#unitItem10").append(img);
            $("#unitItem11").append(fullGenerators);
            $("#unitItem12").append(Hybrid1);
            $("#unitItemIcon10").click(function(){
                $('#unitItem10, #unitItem11, #unitItem12').remove();
                updateUnitList();gamejs();
            });
            $("#unitItemIcon11").click(function(){
                window.FullGens();
            });
            $("#unitItemIcon12").click(function(){
                window.Hybrid1();
            });
        });
    });
    window.activeHybrid1 = false;
    window.Hybrid1 = function(){
        alert('a');
    };
    window.activeFullGens = false;
    window.FullGens = function(){
        if(activeFullGens==false){
            activeFullGens = true;
            basestart = setInterval(Base,750);
        } else if(activeFullGens==true){
            activeFullGens = false;
            clearInterval(basestart);
        };
        function Base(){
            var Gens = [], Armory = [], Plants = [], OwnerSID = [];
            for (var i = 0; i < users.length; i++) {
                if (users[i].name.startsWith(player.name) && users[i].sid !== player.sid) {
                    OwnerSID.push(users[i].sid);
                    for (var s = [], u = 0; u < units.length; u++) {
                        for (var Fully = 0; Fully < OwnerSID.length; Fully++) {
                            if (units[u].owner == OwnerSID[Fully]) {
                                if (units[u].uPath == 3){
                                    Gens += 1;
                                    for (var b = 0; b < window.sockets.length; b++){
                                        sockets[b].emit("4",units[u].id,0);
                                    };
                                };
                                if (units[u].uPath == "3,0"){
                                    Plants += 1;
                                };
                                if (units[u].uPath == 7){
                                    Armory += 1;
                                    for (b = 0; b < window.sockets.length; b++){
                                        sockets[b].emit("4",units[u].id,0);
                                    };
                                };
                            };
                        };
                    };
                };
            };
            console.log("Gens: "+Math.floor(((Gens.length/(OwnerSID.length+1))*OwnerSID.length)/2)+" (Fully Gens: "+Gens.length+" | Fully Users: "+OwnerSID.length+")\nPlants: "+Math.floor(((Plants.length/(OwnerSID.length+1))*OwnerSID.length)/2)+"\nFully Powers: "+/*Math.floor(((*/(Gens.length+Plants.length)/*/(OwnerSID.length+1))*OwnerSID.length)/2)*/);
            if(Math.floor((((Gens.length+Plants.length)/(OwnerSID.length+1))*OwnerSID.length)/2)<46){
                for (b = 0; b < window.sockets.length; b++){
                    sockets[b].emit("1",1.5707963267948966,243.8499999999999,3);sockets[b].emit("1",1.8341063193780445,243.85475882172162,3);sockets[b].emit("1",2.097409582037474,243.84792330466948,3);sockets[b].emit("1",2.360689167768742,243.8482366144977,3);sockets[b].emit("1",2.624018281259737,243.84886835907207,3);sockets[b].emit("1",2.8873142923831505,243.8510112753277,3);sockets[b].emit("1",-3.1325705886781208,243.84992433872102,3);sockets[b].emit("1",-2.869308976083654,243.85375391820386,3);sockets[b].emit("1",-2.605990783170995,243.84809308255834,3);sockets[b].emit("1",-2.3427104018746365,243.85379984736753,3);sockets[b].emit("1",-2.0793925277555356,243.8435317985696,3);sockets[b].emit("1",-1.8161032109519273,243.8501812589033,3);sockets[b].emit("1",-1.5707963267948966,212.10000000000002,3);sockets[b].emit("1",1.3074863342117489,243.85475882172162,3);sockets[b].emit("1",1.0441830715523193,243.84792330466948,3);sockets[b].emit("1",0.7809034858210512,243.8482366144977,3);sockets[b].emit("1",0.5175743723300568,243.84886835907196,3);sockets[b].emit("1",0.25427836120664254,243.8510112753277,3);sockets[b].emit("1",-0.009022064911672656,243.84992433872114,3);sockets[b].emit("1",-0.27228367750613897,243.853753918204,3);sockets[b].emit("1",-0.5356018704187981,243.84809308255834,3);sockets[b].emit("1",-0.7988822517151568,243.85379984736753,3);sockets[b].emit("1",-1.0622001258342575,243.8435317985696,3);sockets[b].emit("1",-1.325489442637866,243.8501812589033,3);sockets[b].emit("1",-1.947760341395465,183.99923722667975,3);sockets[b].emit("1",-2.2110551209598306,132.00469385593817,3);sockets[b].emit("1",-2.474371898253103,183.99975869549385,3);sockets[b].emit("1",-1.1938323121943284,183.99923722667975,3);sockets[b].emit("1",-0.9305375326299626,132.00469385593817,3);sockets[b].emit("1",-0.6672207553366902,183.99975869549385,3);sockets[b].emit("1",-2.7376757003789844,132.00241967479246,3);sockets[b].emit("1",-3.0009638047543623,183.99640349745977,3);sockets[b].emit("1",3.018863230790163,132.0029003469242,3);sockets[b].emit("1",-0.4039169532108087,132.00241967479246,3);sockets[b].emit("1",-0.14062884883543106,183.99640349745965,3);sockets[b].emit("1",0.12272942279963023,132.0029003469242,3);sockets[b].emit("1",2.755606132718582,183.99713177112304,3);sockets[b].emit("1",2.492303642944235,132.0002109846799,3);sockets[b].emit("1",0.38598652087121105,183.99713177112304,3);sockets[b].emit("1",0.6492890106455582,132.0002109846799,3);sockets[b].emit("1",2.245020241043296,184.25695237900794,3);sockets[b].emit("1",2.0023892963532264,132.00476658060506,3);sockets[b].emit("1",1.747493624131154,182.5016219106012,3);sockets[b].emit("1",0.8965724125464976,184.25695237900794,3);sockets[b].emit("1",1.139203357236567,132.00476658060506,3);sockets[b].emit("1",1.3940990294586393,182.5016219106012,3);
                };
            };
            if(Armory.length<1){
                for (b = 0; b < window.sockets.length; b++){
                    sockets[b].emit("1",-1.5707963267948966,140,7);
                };
            };
            if(Plants.length==46&&Armory.length==1){
                active = false;
                clearInterval(basestart);
            };
        };
    };
};
window.myBases = {};
window.myBases.Generators = function(){
    socket.emit("1",1.5707963267948966,243.8499999999999,3);socket.emit("1",1.8341063193780445,243.85475882172162,3);socket.emit("1",2.097409582037474,243.84792330466948,3);socket.emit("1",2.360689167768742,243.8482366144977,3);socket.emit("1",2.624018281259737,243.84886835907207,3);socket.emit("1",2.8873142923831505,243.8510112753277,3);socket.emit("1",-3.1325705886781208,243.84992433872102,3);socket.emit("1",-2.869308976083654,243.85375391820386,3);socket.emit("1",-2.605990783170995,243.84809308255834,3);socket.emit("1",-2.3427104018746365,243.85379984736753,3);socket.emit("1",-2.0793925277555356,243.8435317985696,3);socket.emit("1",-1.8161032109519273,243.8501812589033,3);socket.emit("1",-1.5707963267948966,212.10000000000002,3);socket.emit("1",1.3074863342117489,243.85475882172162,3);socket.emit("1",1.0441830715523193,243.84792330466948,3);socket.emit("1",0.7809034858210512,243.8482366144977,3);socket.emit("1",0.5175743723300568,243.84886835907196,3);socket.emit("1",0.25427836120664254,243.8510112753277,3);socket.emit("1",-0.009022064911672656,243.84992433872114,3);socket.emit("1",-0.27228367750613897,243.853753918204,3);socket.emit("1",-0.5356018704187981,243.84809308255834,3);socket.emit("1",-0.7988822517151568,243.85379984736753,3);socket.emit("1",-1.0622001258342575,243.8435317985696,3);socket.emit("1",-1.325489442637866,243.8501812589033,3);socket.emit("1",-1.5707963267948966,120,3);socket.emit("1",-1.947760341395465,183.99923722667975,3);socket.emit("1",-2.2110551209598306,132.00469385593817,3);socket.emit("1",-2.474371898253103,183.99975869549385,3);socket.emit("1",-1.1938323121943284,183.99923722667975,3);socket.emit("1",-0.9305375326299626,132.00469385593817,3);socket.emit("1",-0.6672207553366902,183.99975869549385,3);socket.emit("1",-2.7376757003789844,132.00241967479246,3);socket.emit("1",-3.0009638047543623,183.99640349745977,3);socket.emit("1",3.018863230790163,132.0029003469242,3);socket.emit("1",-0.4039169532108087,132.00241967479246,3);socket.emit("1",-0.14062884883543106,183.99640349745965,3);socket.emit("1",0.12272942279963023,132.0029003469242,3);socket.emit("1",2.755606132718582,183.99713177112304,3);socket.emit("1",2.492303642944235,132.0002109846799,3);socket.emit("1",0.38598652087121105,183.99713177112304,3);socket.emit("1",0.6492890106455582,132.0002109846799,3);socket.emit("1",2.245020241043296,184.25695237900794,3);socket.emit("1",2.0023892963532264,132.00476658060506,3);socket.emit("1",1.747493624131154,182.5016219106012,3);socket.emit("1",0.8965724125464976,184.25695237900794,3);socket.emit("1",1.139203357236567,132.00476658060506,3);socket.emit("1",1.3940990294586393,182.5016219106012,3);
};
window.Hybrid1 = function(){
    socket.emit("1",1.5707963267948966,243.8499999999999,3);
};
window.myBases.Hybrids = window.myBases.Hybrid || [];
window.myBases.Hybrids.push(window.Hybrid1);
window.myBases.Houses = function(){

};
window.Sell = function(MyX, MyY, MyPath){
    var getX = [], getY = [], OwnerSID = [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].name.startsWith(player.name)) {
            OwnerSID.push(users[i].sid);
            for (var s = [], u = 0; u < units.length; u++) {
                for (var Fully = 0; Fully < OwnerSID.length; Fully++) {
                    if (units[u].owner == OwnerSID[Fully]) {
                        if (units[u].type !== 1) {
                            getX = UTILS.getDirection(users[i].x, users[i].y, units[u].x, units[u].y);
                            getY = UTILS.getDistance(users[i].x, users[i].y, units[u].x, units[u].y);
                            var X = units[u].dir,
                                Y = UTILS.roundToTwo(getY),
                                Path = units[u].uPath;
                            if(X>(MyX-0.1)&&X<(MyX+0.1)){
                                if(Y>(MyY-5)&&Y<(MyY+5)){
                                    if(Path[0]==MyPath || !MyPath){//Aqui é quando usa tudo, ou não usa apenas Path
                                        s.push(units[u].id);
                                        for (var b = 0; b < window.sockets.length; b++){sockets[b].emit("3",s)};
                                        console.log("Selling was sucessfull!!\n \nX: "+X+"\nY: "+Y+"\nPath: "+Path+"\nFrom player: "+users[i].name+" (ID: "+users[i].sid+")");
                                        socket.emit("3",s);
                                    };
                                } else if(Path[0]==MyY || !MyY){//Aqui é quando usa X e Path (opcional)
                                    if (units[u]){
                                        alert("Teste "+units[u]);
                                        if(Path[0]==MyX){//Aqui é quando usa apenas o Path
                                            s.push(units[u].id);
                                            for (b = 0; b < window.sockets.length; b++){sockets[b].emit("3",s)};
                                            console.log("Selling was sucessfull!!\n \nPath: "+Path+"\nFrom player: "+users[i].name+" (ID: "+users[i].sid+")");
                                            socket.emit("3",s);
                                        }
                                    };
                                    s.push(units[u].id);
                                    for (b = 0; b < window.sockets.length; b++){sockets[b].emit("3",s)};
                                    console.log("Selling was sucessfull!!\n \nX: "+X+"\nPath: "+Path+"\nFrom player: "+users[i].name+" (ID: "+users[i].sid+")");
                                    socket.emit("3",s);
                                };
                            } else if(!MyX || MyX > 8 || MyX < -3.14){
                                if(Y>(MyX-10)&&Y<(MyX+10)){//Aqui é quando o usuário não usa X, e usa Y e Path (opcional)
                                    if(Path[0]==MyY || !MyY){
                                        s.push(units[u].id);
                                        for (b = 0; b < window.sockets.length; b++){sockets[b].emit("3",s)};
                                        console.log("Selling was sucessfull!!\n \nY: "+Y+"\nPath: "+Path+"\nFrom player: "+users[i].name+" (ID: "+users[i].sid+")");
                                        socket.emit("3",s);
                                    };
                                } else if(!MyY){
                                    if(Path[0]==MyX){//Aqui é quando usa apenas o Path
                                        s.push(units[u].id);
                                        for (b = 0; b < window.sockets.length; b++){sockets[b].emit("3",s)};
                                        console.log("Selling was sucessfull!!\n \nPath: "+Path+"\nFrom player: "+users[i].name+" (ID: "+users[i].sid+")");
                                        socket.emit("3",s);
                                    } else if(!MyX){//Aqui é se não informar nada
                                        console.log("Error!! Please send an information to sell!");
                                    };
                                };
                            } else if(MyX == Path[0] && !MyY){
                                s.push(units[u].id);
                                for (b = 0; b < window.sockets.length; b++){sockets[b].emit("3",s)};
                                console.log("Selling was sucessfull!!\n \nY: "+Y+"\nPath: "+Path+"\nFrom player: "+users[i].name+" (ID: "+users[i].sid+")");
                                socket.emit("3",s);
                            };
                        };
                    };
                };
            };
        };
    };
};
window.Upgrade = function(MyX, MyY, MyPath, Upgrade){
    var getX = [], getY = [], OwnerSID = [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].name.startsWith(player.name)) {
            OwnerSID.push(users[i].sid);
            for (var u = 0; u < units.length; u++) {
                for (var Fully = 0; Fully < OwnerSID.length; Fully++) {
                    if (units[u].owner == OwnerSID[Fully]) {
                        if (units[u].type !== 1) {
                            getX = UTILS.getDirection(users[i].x, users[i].y, units[u].x, units[u].y);
                            getY = UTILS.getDistance(users[i].x, users[i].y, units[u].x, units[u].y);
                            var X = units[u].dir,
                                Y = UTILS.roundToTwo(getY),
                                Path = units[u].uPath;
                            if (X > (MyX-0.1) && X < (MyX+0.1)){
                                if (Y > (MyY-10) && Y < (MyY+10)){
                                    if (Path[Path.length-1] == MyPath && !Path[Path.length] && Upgrade > 0 && Upgrade < 4){//Aqui é quando usa X e Y
                                        socket.emit("4",units[u].id,Upgrade-1);
                                        for (var b = 0; b < window.sockets.length; b++){sockets[b].emit("4",units[u].id,Upgrade-1)};
                                        console.log("Upgrading was sucessfull!!\n \nX: "+X+"\nY: "+Y+"\nPath: "+Path+"\nUpgraded Unit: "+window.getUnitFromPath(units[u].uPath).name+"\nFrom player: "+users[i].name+" (ID: "+users[i].sid+")");
                                    };
                                } else if (Path[Path.length-1] == MyY && !Path[Path.length] && MyPath > 0 && MyPath < 4){//Aqui é quando usa apenas X
                                    socket.emit("4",units[u].id,MyPath-1);
                                    for (b = 0; b < window.sockets.length; b++){sockets[b].emit("4",units[u].id,MyPath-1)};
                                    console.log("Upgrading was sucessfull!!\n \nX: "+X+"\nPath: "+Path+"\nUpgraded Unit: "+window.getUnitFromPath(units[u].uPath).name+"\nFrom player: "+users[i].name+" (ID: "+users[i].sid+")");
                                };
                            } else if (!MyX || MyX > 8 || MyX < -3.14){
                                if (Y > (MyX-10) && Y < (MyX+10)){
                                    if (X > (MyY-0.1) && X < (MyY+0.1) && Path[Path.length-1] == MyPath && !Path[Path.length] && Upgrade > 0 && Upgrade < 4){//Aqui é quando usa Y e X
                                        socket.emit("4",units[u].id,Upgrade-1);
                                        for (b = 0; b < window.sockets.length; b++){sockets[b].emit("4",units[u].id,Upgrade-1)};
                                        console.log("Upgrading was sucessfull!!\n \nY: "+Y+"\nX: "+X+"\nPath: "+Path+"\nUpgraded Unit: "+window.getUnitFromPath(units[u].uPath).name+"\nFrom player: "+users[i].name+" (ID: "+users[i].sid+")");
                                    } else if (Path[Path.length-1] == MyY && !Path[Path.length] && MyPath > 0 && MyPath < 4){//Aqui é quando usa apenas Y
                                        socket.emit("4",units[u].id,MyPath-1);
                                        for (b = 0; b < window.sockets.length; b++){sockets[b].emit("4",units[u].id,MyPath-1)};
                                        console.log("Upgrading was sucessfull!!\n \nY: "+Y+"\nPath: "+Path+"\nUpgraded Unit: "+window.getUnitFromPath(units[u].uPath).name+"\nFrom player: "+users[i].name+" (ID: "+users[i].sid+")");
                                    };
                                };
                                if (!MyX){
                                    console.log("Error!! Please send an information to upgrade!");
                                };
                            } else if (Path[Path.length-1] == MyX && !Path[Path.length] && MyY > 0 && MyY < 4){//Aqui é quando não usa nem X e nem Y
                                socket.emit("4",units[u].id,MyY-1);
                                for (b = 0; b < window.sockets.length; b++){sockets[b].emit("4",units[u].id,MyY-1)};
                                console.log("Upgrading was sucessfull!!\n \nPath: "+Path+"\nUpgraded Unit: "+window.getUnitFromPath(units[u].uPath).name+"\nFrom player: "+users[i].name+" (ID: "+users[i].sid+")");
                            };
                        };
                    };
                };
            };
        };
    };
};
window.cache = [];
window.cacheHeight = 0;
window.cacheIndexes = 0;
var loadedBase = null,
    defendInterval = null,
    autoDef = null,
    STitleColor = "#ffffff99",
    GreyMenuText = "#ffffff99",
    ETitleColor = "#00ff0099",
    STitleColor2 = "#ffffffb0",
    ETitleColor2 = "#00ff00b0",
    ETitleColor3 = "#ffb00099",
    ETitleColor4 = "#ffb000b0",
    TitleCSS = document.createElement('style');
TitleCSS.innerText = `
.TitlePart1 {
text-shadow: 1px 0px 5px `+STitleColor+`,-1px 0px 5px `+STitleColor+`,0px 1px 5px `+STitleColor+`,0px -1px 5px `+STitleColor+`,1px 1px 5px `+STitleColor+`,1px -1px 5px `+STitleColor+`,-1px 1px 5px `+STitleColor+`,-1px -1px 5px `+STitleColor+`
}
.TitlePart2 {
text-shadow: 1px 0px 5px `+ETitleColor+`,-1px 0px 5px `+ETitleColor+`,0px 1px 5px `+ETitleColor+`,0px -1px 5px `+ETitleColor+`,1px 1px 5px `+ETitleColor+`,1px -1px 5px `+ETitleColor+`,-1px 1px 5px `+ETitleColor+`,-1px -1px 5px `+ETitleColor+`
}
.TitlePart1:hover {
text-shadow: 1px 0px 10px `+STitleColor2+`,-1px 0px 10px `+STitleColor2+`,0px 1px 10px `+STitleColor2+`,0px -1px 10px `+STitleColor2+`,1px 1px 10px `+STitleColor2+`,1px -1px 10px `+STitleColor2+`,-1px 1px 10px `+STitleColor2+`,-1px -1px 10px `+STitleColor2+`
}
.TitlePart2:hover {
text-shadow: 1px 0px 10px `+ETitleColor2+`,-1px 0px 10px `+ETitleColor2+`,0px 1px 10px `+ETitleColor2+`,0px -1px 10px `+ETitleColor2+`,1px 1px 10px `+ETitleColor2+`,1px -1px 10px `+ETitleColor2+`,-1px 1px 10px `+ETitleColor2+`,-1px -1px 10px `+ETitleColor2+`
}
.TitlePart3 {
text-shadow: 1px 0px 5px `+ETitleColor3+`,-1px 0px 5px `+ETitleColor3+`,0px 1px 5px `+ETitleColor3+`,0px -1px 5px `+ETitleColor3+`,1px 1px 5px `+ETitleColor3+`,1px -1px 5px `+ETitleColor3+`,-1px 1px 5px `+ETitleColor3+`,-1px -1px 5px `+ETitleColor3+`
}
.TitlePart3:hover {
text-shadow: 1px 0px 10px `+ETitleColor4+`,-1px 0px 10px `+ETitleColor4+`,0px 1px 10px `+ETitleColor4+`,0px -1px 10px `+ETitleColor4+`,1px 1px 10px `+ETitleColor4+`,1px -1px 10px `+ETitleColor4+`,-1px 1px 10px `+ETitleColor4+`,-1px -1px 10px `+ETitleColor4+`
}
.TitlePart1, .TitlePart2, .TitlePart3 {
color:#000000;
transition-delay: 1s;
transition-duration: .2s;
}
.TitlePart1:hover, .TitlePart2:hover, .TitlePart3:hover {
transition: .2s;
}
`;
document.head.appendChild(TitleCSS);
window.defendLoadedBase = function(){
    if (loadedBase !== null) {
        for(var i=0;i<loadedBase.length;i++){
            var building = loadedBase[i];
            console.log(building.dir);
            for (var u = 0; u < units.length; u++) {
                if (units[u].owner == player.sid && units[u].dir !== building.dir) {
                    console.log(building[u].dir);
                };
            };
        };
    };
};
window.buildLoadedBase = function(){
    if (loadedBase !== null) {
        var Upgrade = [];
        var MyWalls = [], MyBoulders = [], MySpikes = [], MyMicros = [], MySimple_Turrets = [], MyRapid_Turrets = [], MyGatlin_Turrets = [], MyRanged_Turrets = [], MySpotter_Turrets = [], MyGens = [], MyPlants = [],
            MyHouses = [], MySnipers = [], MySemi_Auto = [], MyAnti_Tanks = [], MyArmory = [], MyBarracas = [], MyGreater_Barracks = [], MyTank_Factorys = [], MyBlitz_Factorys = [], MySiege_Factorys = [];
        for(var i=0;i<loadedBase.length;i++){
            var building = loadedBase[i];
            if (building.uPath[1] !== undefined) {Upgrade.push(building)};
            if (building.uPath == 1) {MyWalls += 1};
            if (building.uPath == "1,0") {MyBoulders += 1};
            if (building.uPath == "1,0,0") {MySpikes += 1};
            if (building.uPath == "1,1") {MyMicros += 1};
            if (building.uPath == 2) {MySimple_Turrets += 1};
            if (building.uPath == "2,0") {MyRapid_Turrets += 1};
            if (building.uPath == "2,0,0") {MyGatlin_Turrets += 1};
            if (building.uPath == "2,1") {MyRanged_Turrets += 1};
            if (building.uPath == "2,1,0") {MySpotter_Turrets += 1};
            if (building.uPath == 3) {MyGens += 1};
            if (building.uPath == "3,0") {MyPlants += 1};
            if (building.uPath == 4) {MyHouses += 1};
            if (building.uPath == 5) {MySnipers += 1};
            if (building.uPath == "5,0") {MySemi_Auto += 1};
            if (building.uPath == "5,1") {MyAnti_Tanks += 1};
            if (building.uPath == 7) {MyArmory += 1};
            if (building.uPath == 8) {MyBarracas += 1};
            if (building.uPath == "8,0") {MyGreater_Barracks += 1};
            if (building.uPath == "8,1") {MyTank_Factorys += 1};
            if (building.uPath == "8,1,0") {MyBlitz_Factorys += 1};
            if (building.uPath == "8,2") {MySiege_Factorys += 1};
        };
        var X = [], Y = [];
        var Walls = [], Boulders = [], Spikes = [], Micros = [], Simple_Turrets = [], Rapid_Turrets = [], Gatlin_Turrets = [], Ranged_Turrets = [], Spotter_Turrets = [], Gens = [], Plants = [],
            Houses = [], Snipers = [], Semi_Auto = [], Anti_Tanks = [], Armory = [], Barracas = [], Greater_Barracks = [], Tank_Factorys = [], Blitz_Factorys = [], Siege_Factorys = [];
        for (var U = 0; U < units.length; U++) {
            if (units[U].owner == player.sid) {
                if (units[U].uPath == 1) {Walls += 1};
                if (units[U].uPath == "1,0") {Boulders += 1};
                if (units[U].uPath == "1,0,0") {Spikes += 1};
                if (units[U].uPath == "1,1") {Micros += 1};
                if (units[U].uPath == 2) {Simple_Turrets += 1};
                if (units[U].uPath == "2,0") {Rapid_Turrets += 1};
                if (units[U].uPath == "2,0,0") {Gatlin_Turrets += 1};
                if (units[U].uPath == "2,1") {Ranged_Turrets += 1};
                if (units[U].uPath == "2,1,0") {Spotter_Turrets += 1};
                if (units[U].uPath == 3) {Gens += 1};
                if (units[U].uPath == "3,0") {Plants += 1};
                if (units[U].uPath == 4) {Houses += 1};
                if (units[U].uPath == 5) {Snipers += 1};
                if (units[U].uPath == "5,0") {Semi_Auto += 1};
                if (units[U].uPath == "5,1") {Anti_Tanks += 1};
                if (units[U].uPath[0] == 7) {Armory += 1};
                if (units[U].uPath == 8) {Barracas += 1};
                if (units[U].uPath == "8,0") {Greater_Barracks += 1};
                if (units[U].uPath == "8,1") {Tank_Factorys += 1};
                if (units[U].uPath == "8,1,0") {Blitz_Factorys += 1};
                if (units[U].uPath == "8,2") {Siege_Factorys += 1};
            };
        };
        for(var b=0;b<loadedBase.length;b++){
            building = loadedBase[b];
            var FullBarracks = MyBarracas.length+MyGreater_Barracks.length+MyTank_Factorys.length+MyBlitz_Factorys.length+MySiege_Factorys.length;
            if (building.uPath[0] == 1 && player.power > (((MyWalls.length+MyBoulders.length+MySpikes.length+MyMicros.length)-(Walls.length+Boulders.length+Spikes.length+Micros.length))*20) && (Walls.length + Boulders.length + Spikes.length + Micros.length) < (MyWalls.length + MyBoulders.length + MySpikes.length + MyMicros.length) && Gens.length == MyGens.length && Plants.length == MyPlants.length) {socket.emit("1",building.dir,building.dst,building.uPath[0])};
            if (building.uPath[0] == 2 && Gens.length == MyGens.length && Plants.length == MyPlants.length && Micros.length == MyMicros.length && player.power > (((MySimple_Turrets.length+MyRapid_Turrets.length+MyGatlin_Turrets.length+MyRanged_Turrets.length+MySpotter_Turrets.length)-(Simple_Turrets.length+Rapid_Turrets.length+Gatlin_Turrets.length+Ranged_Turrets.length+Spotter_Turrets.length))*25)) {socket.emit("1",building.dir,building.dst,building.uPath[0])};
            if (building.uPath[0] == 3 && player.power > 50 && (Gens.length + Plants.length) < (MyGens.length + MyPlants.length)) {socket.emit("1",building.dir,building.dst,building.uPath[0])};
            if (building.uPath == 4 && Gens.length == MyGens.length && Plants.length == MyPlants.length && Micros.length == MyMicros.length && player.power > (MyHouses.length*60)) {socket.emit("1",building.dir,building.dst,building.uPath[0])};
            if (building.uPath[0] == 5 && Gens.length == MyGens.length && Plants.length == MyPlants.length && Micros.length == MyMicros.length && player.power > (((MySnipers.length+MySemi_Auto.length+MyAnti_Tanks.length)-(Snipers.length+Semi_Auto.length+Anti_Tanks.length))*80) && (Snipers.length+Semi_Auto.length+Anti_Tanks.length) < (MySnipers.length+MySemi_Auto.length+MyAnti_Tanks.length)) {socket.emit("1",building.dir,building.dst,building.uPath[0])};
            if (building.uPath == 7 && Gens.length == MyGens.length && Plants.length == MyPlants.length && Micros.length == MyMicros.length && player.power > 100 && Armory.length < 1) {socket.emit("1",building.dir,building.dst,building.uPath[0])};
            if (building.uPath[0] == 8 && Gens.length == MyGens.length && Plants.length == MyPlants.length && Micros.length == MyMicros.length && player.power > (((MyBarracas.length+MyGreater_Barracks.length+MyTank_Factorys.length+MyBlitz_Factorys.length+MySiege_Factorys.length)-(Barracas.length+Greater_Barracks.length+Tank_Factorys.length+Blitz_Factorys.length+Siege_Factorys.length))*150) && (Barracas.length+Greater_Barracks.length+Tank_Factorys.length+Blitz_Factorys.length+Siege_Factorys.length) < FullBarracks) {socket.emit("1",building.dir,building.dst,building.uPath[0])};
        };
        for (var u = 0; u < units.length; u++) {
            if (units[u].owner == player.sid) {
                var localX = UTILS.getDirection(units[u].x, units[u].y, player.x, player.y),
                    localY = UTILS.getDistance(units[u].x, units[u].y, player.x, player.y);
                X = UTILS.roundToTwo(localX);
                Y = UTILS.roundToTwo(localY);
                for (var F = 0; F < Upgrade.length; F++) {
                    if (units[u].uPath[0] == Upgrade[F].uPath[0]) {
                        if (units[u].uPath[1] == Upgrade[F].uPath[1]) {
                            if (!units[u].uPath[2] && Upgrade[F].uPath[2] !== undefined) {
                                if (X > (Upgrade[F].dir - 0.05) && X < (Upgrade[F].dir + 0.05) && Y > (Upgrade[F].dst - 10) && Y < (Upgrade[F].dst + 10)) {
                                    if (units[u].uPath == "1,0" && Upgrade[F].uPath == "1,0,0") {
                                        if (((MySpikes.length-Spikes.length)*200) > 6000 && player.power == 6000) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[2]);
                                        } else if (player.power > ((MySpikes.length-Spikes.length)*200)) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[2]);
                                        };
                                    };
                                    if (units[u].uPath == "2,0" && Upgrade[F].uPath == "2,0,0") {
                                        if (((MyGatlin_Turrets.length-Gatlin_Turrets.length)*100) > 6000 && player.power == 6000) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[2]);
                                        } else if (player.power > ((MyGatlin_Turrets.length-Gatlin_Turrets.length)*100)) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[2]);
                                        };
                                    };
                                    if (units[u].uPath == "2,1" && Upgrade[F].uPath == "2,1,0") {
                                        if (((MySpotter_Turrets.length-Spotter_Turrets.length)*100) > 6000 && player.power == 6000) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[2]);
                                        } else if (player.power > ((MySpotter_Turrets.length-Spotter_Turrets.length)*100)) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[2]);
                                        };
                                    };
                                    if (units[u].uPath == "8,1" && Upgrade[F].uPath == "8,1,0") {
                                        if (((MyBlitz_Factorys.length-Blitz_Factorys.length)*5000) > 6000 && player.power == 6000) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[2]);
                                        } else if (player.power > ((MyBlitz_Factorys.length-Blitz_Factorys.length)*5000)) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[2]);
                                        };
                                    };
                                };
                            };
                        } else if (!units[u].uPath[1] && Upgrade[F].uPath[1] !== undefined && Upgrade[F].uPath !== Upgrade[F].uPath[0]) {
                            if (X > (Upgrade[F].dir - 0.05) && X < (Upgrade[F].dir + 0.05) && Y > (Upgrade[F].dst - 10) && Y < (Upgrade[F].dst + 10)) {
                                if (Gens.length == MyGens.length && Plants.length == MyPlants.length && Micros.length == MyMicros.length) {
                                    if (units[u].uPath == 1 && Upgrade[F].uPath[0] == 1 && Upgrade[F].uPath[1] == 0) {
                                        if ((((MyBoulders.length+MySpikes.length)-Boulders.length)*60) > 6000 && player.power == 6000) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                            console.log(((MyBoulders.length+MySpikes.length)-Boulders.length)*60);
                                        } else if (player.power > (((MyBoulders.length+MySpikes.length)-Boulders.length)*60)) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                            console.log(((MyBoulders.length+MySpikes.length)-Boulders.length)*60);
                                        };
                                    };
                                    if (units[u].uPath == 2 && Upgrade[F].uPath[0] == 2 && Upgrade[F].uPath[1] == 0) {
                                        if ((((MyRapid_Turrets.length+MyGatlin_Turrets.length)-Rapid_Turrets.length)*60) > 6000 && player.power == 6000) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                        } else if (player.power > (((MyRapid_Turrets.length+MyGatlin_Turrets.length)-Rapid_Turrets.length)*60)) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                        };
                                    };
                                    if (units[u].uPath == 2 && Upgrade[F].uPath[0] == 2 && Upgrade[F].uPath[1] == 1) {
                                        if ((((MyRanged_Turrets.length+MySpotter_Turrets.length)-Ranged_Turrets.length)*60) > 6000 && player.power == 6000) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                        } else if (player.power > (((MyRanged_Turrets.length+MySpotter_Turrets.length)-Ranged_Turrets.length)*60)) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                        };
                                    };
                                    if (units[u].uPath == 5 && Upgrade[F].uPath[0] == 5 && Upgrade[F].uPath[1] == 0) {
                                        if (((MySemi_Auto.length-Semi_Auto.length)*180) > 6000 && player.power == 6000) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                        } else if (player.power > ((MySemi_Auto.length-Semi_Auto.length)*180)) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                        };
                                    };
                                    if (units[u].uPath == 5 && Upgrade[F].uPath[0] == 5 && Upgrade[F].uPath[1] == 1) {
                                        if (((MyAnti_Tanks.length-Anti_Tanks.length)*300) > 6000 && player.power == 6000) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                        } else if (player.power > ((MyAnti_Tanks.length-Anti_Tanks.length)*300)) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                        };
                                    };
                                    if (units[u].uPath == 8 && Upgrade[F].uPath[0] == 8 && Upgrade[F].uPath[1] == 0) {
                                        if (((MyGreater_Barracks.length-Greater_Barracks.length)*500) > 6000 && player.power == 6000) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                        } else if (player.power > ((MyGreater_Barracks.length-Greater_Barracks.length)*500)) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                        };
                                    };
                                    if (units[u].uPath == 8 && Upgrade[F].uPath[0] == 8 && Upgrade[F].uPath[1] == 1) {
                                        if ((((MyTank_Factorys.length+MyBlitz_Factorys.length)-Tank_Factorys.length)*2000) > 6000 && player.power == 6000) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                        } else if (player.power > (((MyTank_Factorys.length+MyBlitz_Factorys.length)-Tank_Factorys.length)*2000)) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                        };
                                    };
                                    if (units[u].uPath == 8 && Upgrade[F].uPath[0] == 8 && Upgrade[F].uPath[1] == 2) {
                                        if (((MySiege_Factorys.length-Siege_Factorys.length)*3000) > 6000 && player.power == 6000) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                        } else if (player.power > ((MySiege_Factorys.length-Siege_Factorys.length)*3000)) {
                                            socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                        };
                                    };
                                } else {
                                    if (units[u].uPath == 3 && player.power > 100) {
                                        socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                    };
                                    if (units[u].uPath == 1 && Upgrade[F].uPath[1] == 1 && player.power > (MyMicros.length*30)) {
                                        socket.emit("4",units[u].id,Upgrade[F].uPath[1]);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
var loadedName = null;
window.saveBase = function(userSid){
    var user = users[getUserBySID(userSid)];
    var base = [];
    for(var i=0;i<units.length;i++){
        if(units[i].owner == userSid && units[i].type!=1){
            var unit = units[i];
            base.push({
                dir:UTILS.getDirection(unit.x,unit.y,user.x,user.y),
                x:UTILS.roundToTwo(unit.x-user.x),
                y:UTILS.roundToTwo(unit.y-user.y),
                dst:UTILS.getDistance(user.x,user.y,unit.x,unit.y),
                uPath:unit.uPath,
            });
        };
    };
    var Full = sessionStorage.length / 2;
    localStorage.setItem("base_"+Full,JSON.stringify(base));
    sessionStorage.setItem("base_"+Full,JSON.stringify(base));
    sessionStorage.setItem(user.name,"From him");
    activeBase = null;
    document.getElementById('Message').innerHTML = 'Base <span class="PlayerColor">'+Full+'</span> de '+user.name+' salva com sucesso!';
    document.getElementById('Message2').style.display = 'none';
    ColossusMsgFunc(2000);
};
window.loadBase = function(){
    var SavedBases = [];
    for (var i = 0; i < sessionStorage.length / 2; i++) {
        SavedBases.push(i);
    };
    var Base = prompt("Type the number base saved! \nBases available: "+(sessionStorage.length / 2)+": \nbase_"+SavedBases.join("\nbase_"));
    loadedBase = JSON.parse(localStorage.getItem(Base));
    if (loadedBase) {
        console.log("Base carregada: "+Base);
        activeBase = null;
        document.getElementById('Message').innerHTML = 'Base <span class="PlayerColor">'+Base+'</span> de '+sessionStorage.key(Base)+' carregada com sucesso!';
        document.getElementById('Message2').style.display = 'none';
        ColossusMsgFunc(3000);
    } else {
        alert('Sinto muito, esta base não está nos nossos arquivos '+player.name+'!');
    };
};
window.unlockSkins();
window.share.getBaseUpgrades=function(){
    return [
        {
            name: "Commander",
            desc: "Powerful commander unit",
            lockMaxBuy: true,
            cost: 1500,
            unitSpawn: 9
        },
        {
            name: "Save base",
            desc: "Save the base and build this!(B)"},
        {
            name: "Load base",
            desc: "Load the base to build this!(B)",
        }
    ]};
function upgradeSelUnits(firstUnit,upgrade){
    var firstUnitName = window.getUnitFromPath(firstUnit.uPath).name;
    for(var i=0;i<window.selUnits.length;i++){
        var unit = window.selUnits[i];
        if(window.getUnitFromPath(unit.uPath).name==firstUnitName){
            window.socket.emit("4",unit.id,upgrade);
        };
    };
};
function handleActiveBaseUpgrade(sid,upgradeName){
    if(upgradeName=="Save base"){
        window.saveBase(sid);
    }
    else if(upgradeName == "Load base"){
        window.loadBase();
    };
};
var gotoUsers = [];
var gotoIndex = 0;
window.overrideSocketEvents = window.overrideSocketEvents || [];

window.overrideSocketEvents.push({
    name: "l",
    description: "Leaderboard Insta Find override",
    func: function(a) {
        var d = "",
            c = 1,
            b = 0;
        for (; b < a.length;) {var members = a[b],Cor = player.color,userID = player.sid
        for(var i=0;i<users.length;i++){
            if(users[i].sid==a[b]){
                Cor = users[i].color;
                userID = users[i].sid;
                d += "<div class='leaderboardItem' ondblclick=copyname(" + userID + ") onclick=goto2(" + userID + ");><div style='color:"+playerColors[Cor]+";display:inline-block;float:left;"+
                    "text-shadow:1px 0px 0px "+playerColors[Cor]+",-1px 0px 0px "+playerColors[Cor]+",0px 1px 0px "+playerColors[Cor]+",0px -1px 0px "+
                    playerColors[Cor]+",1px 1px 0px "+playerColors[Cor]+",1px -1px 0px "+playerColors[Cor]+",-1px 1px 0px "+playerColors[Cor]+
                    ",-1px -1px 0px "+playerColors[Cor]+"'>" + c + ".</div> <div style='text-shadow:1px 0px 0px "+playerColors[Cor]+",-1px 0px 0px "+playerColors[Cor]+
                    ",0px 1px 0px "+playerColors[Cor]+",0px -1px 0px "+playerColors[Cor]+",1px 1px 0px "+playerColors[Cor]+",1px -1px 0px "+playerColors[Cor]+",-1px 1px 0px "+
                    playerColors[Cor]+",-1px -1px 0px "+playerColors[Cor]+"'class='" + (player && a[b] == player.sid ? "leaderYou" : "leader") + "'>" + a[b + 1] +
                    "</div><div id='Points' style='text-shadow:1px 0px 0px "+playerColors[Cor]+",-1px 0px 0px "+playerColors[Cor]+",0px 1px 0px "+playerColors[Cor]+",0px -1px 0px "+
                    playerColors[Cor]+",1px 1px 0px "+playerColors[Cor]+",1px -1px 0px "+playerColors[Cor]+",-1px 1px 0px "+playerColors[Cor]+
                    ",-1px -1px 0px "+playerColors[Cor]+"' class='scoreText'>" + a[b + 2] + "</div></div>", c++, b += 3;
                if(player.spawnProt==0){
                    if(a[b]==player.sid){
                        if(d){
                            Points.innerText = a[b + 2];
                        }}};
            }
        };
                              };
        leaderboardList.innerHTML = d;
    }
});
leaderboardList.style.pointerEvents = 'auto';
chatListWrapper.style.pointerEvents = 'auto';
window.goto2 = function(id, go) {
    gotoUsers = users.filter((user) => {
        return user.sid === id;
    });
    gotoIndex = 0;
    if (!go && gotoUsers[0]) {
        camX = gotoUsers[0].x - player.x;
        camY = gotoUsers[0].y - player.y;
    };
    return gotoUsers.length;
};

window.gotoLeft = function() {
    if (!gotoUsers.length) return;

    if (camX == gotoUsers[gotoIndex].x - player.x && camY == gotoUsers[gotoIndex].y - player.y) {
        if (gotoIndex <= 0) gotoIndex = gotoUsers.length;
        gotoIndex--;
    };
    camX = gotoUsers[gotoIndex].x - player.x;
    camY = gotoUsers[gotoIndex].y - player.y;
};

window.gotoRight = function() {
    if (!gotoUsers.length) return;

    if (camX == gotoUsers[gotoIndex].x - player.x && camY == gotoUsers[gotoIndex].y - player.y) {
        if (gotoIndex >= gotoUsers.length - 1) gotoIndex = -1;
        gotoIndex++;
    };
    camX = gotoUsers[gotoIndex].x - player.x;
    camY = gotoUsers[gotoIndex].y - player.y;
};
window.addEventListener("keyup", function(a) {
    a = a.keyCode ? a.keyCode : a.which;
    if (a === 190) {
        window.gotoRight();
    } else if (a === 188) {
        window.gotoLeft();
    };

});
window.copyname = function(id) {
    gotoUsers = users.filter((user) => {
        return user.sid === id;
    });
    var OldChat = document.getElementById("chatInput").value;
    document.getElementById("chatInput").value = gotoUsers[0].name;
    document.getElementById("chatInput").select();
    document.execCommand('copy');
    document.getElementById("chatInput").value = OldChat;
};
window.resetCamera = function() { // Override
    camX = camXS = camY = camYS = 0;
    cameraKeys = {
        l: 0,
        r: 0,
        u: 0,
        d: 0
    };

    if (socket && window.overrideSocketEvents && window.overrideSocketEvents.length) {
        window.overrideSocketEvents.forEach((item) => {
            socket.removeAllListeners(item.name);
            socket.on(item.name, item.func);

        });

    };
};
window.zoom = function(a) {
    a = window.event || a;
    a.preventDefault();
    a.stopPropagation();
    scroll = Math.max(-1, Math.min(1, a.wheelDelta || -a.detail));
    if (scroll == -1) { //zoom out
        if (maxScreenHeight < 30000) {
            (maxScreenHeight += 2500, maxScreenWidth += 2500, resize(true));
            cameraSpd = (shift ? 1.8 : .85) * (Math.log(maxScreenHeight / 1080) + 1);
            scroll = 0;
            populate();
        };
    };

    if (scroll == 1) { //zoom in
        if (maxScreenHeight > 1080) {
            (maxScreenHeight -= 2500, maxScreenWidth -= 2500, resize(true));
            cameraSpd = (shift ? 1.8 : .85) * (Math.log(maxScreenHeight / 1080) + 1);
            scroll = 0;
            populate();
        };
    };
};
window.usePatch = true;
mainCanvas.onkeydown = function(event) {
    var k = event.keyCode ? event.keyCode : event.which;
    if (k == 70) { // F to zoom out
        if (maxScreenHeight < 10000) {
            (maxScreenHeight += 5000, maxScreenWidth += 5000, resize());
        };
    };
    if (k == 67) {// C to zoom in
        if (maxScreenHeight > 1000) {
            (maxScreenHeight -= 5000, maxScreenWidth -= 5000, resize());
        };

    };

    {if(65==a||37==a)cameraKeys.l=0,updateCameraInput();if(68==a||39==a)cameraKeys.r=0,updateCameraInput();if(87==a||38==a)cameraKeys.u=0,updateCameraInput();if(83==a||40==a)cameraKeys.d=0,updateCameraInput();if(32==a){var d=unitList.indexOf(activeUnit);sendUnit(d)}void 0!=upgrInputsToIndex["k"+a]&&toggleActiveUnit(upgrInputsToIndex["k"+a]);46==a&&selUnits.length&&sellSelUnits();84==a&&toggleChat("none"==chatListWrapper.style.display);
     27==a&&(toggleActiveUnit(),disableSelUnit(),showSelector=!1);82==a&&(camY=camX=0)}};mainCanvas.onkeydown=function(a){a=a.keyCode?a.keyCode:a.which;socket&&player&&!player.dead&&(65!=a&&37!=a||cameraKeys.l||(cameraKeys.l=-1,cameraKeys.r=0,updateCameraInput()),68!=a&&39!=a||cameraKeys.r||(cameraKeys.r=1,cameraKeys.l=0,updateCameraInput()),87!=a&&38!=a||cameraKeys.u||(cameraKeys.u=-1,cameraKeys.d=0,updateCameraInput()),83!=a&&40!=a||cameraKeys.d||(cameraKeys.d=1,cameraKeys.u=0,updateCameraInput()))};
window.shift = false;
window.populate = function() {
    if (!usePatch) return;
    cacheHeight = Math.round(maxScreenHeight / 1080);
    cacheIndexes = cacheHeight * cacheHeight - 1;
    for (var i = cache.length; i < cacheIndexes; i++) {
        cache[i] = spiral(i);
    };
};
window.addEventListener('keyup', function (a) {
    a = a.keyCode ? a.keyCode : a.which;
    if (a == 70) { // F to  out
        (maxScreenHeight = 5000, maxScreenWidth = 15000, resize(true));
        populate();
    };
    if (a == 67) { // C to zoom in
        (maxScreenHeight = 1080, maxScreenWidth = 1920, resize(true));
        cameraSpd = shift ? 1.6 : .85;
        populate();
    };
    if (a === 16) {
        shift = false;
        cameraSpd = .50 * (Math.log(maxScreenHeight / 1080) + 1);
    };

});
window.addEventListener('keydown', function (a) {
    a = a.keyCode ? a.keyCode : a.which;
    if (a === 16) {
        shift = true;
        cameraSpd = 1.2 * (Math.log(maxScreenHeight / 1080) + 1);
    };
});
window.test = 0;
var DangerPerms = false;
if(DangerPerms==false){
    document.getElementById("gameTitle").innerHTML = '<span class="TitlePart1">Colossus Script </span><span class="TitlePart3">V5</span>';
};
window.ScrollChatWhell = function() {
    var chatList = document.querySelector('#chatList');
    chatList.scrollTop = chatList.scrollHeight - chatList.clientHeight;
};
window.Timer = function(){
    var xd = document.createElement('demo');
    var countDownDate = new Date().getTime();
    var x = setInterval(function() {
        window.MinuteInitial = 0;
        window.SecondInitial = 0;
        window.Message = window.Message || [];
        window.h = window.h || [];
        window.m = window.m || [];
        window.s = window.s || [];
        var now = new Date().getTime();
        var distance = now - countDownDate;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / (1000));
        window.Configs = function(){
            if(hours>=10){
                h = '<span class="greyMenuText">'+hours+'</span><span class="PlayerColor"> : </span>';
            } else if(hours<10 && hours>0){
                h = '<span class="greyMenuText">0'+hours+'</span><span class="PlayerColor"> : </span>';
            } else if(hours==0){
                h = '<span class="greyMenuText">00</span><span class="PlayerColor"> : </span>';
            };
            if(minutes>=10 || hours==0){
                m = '<span class="greyMenuText">'+minutes+'</span><span class="PlayerColor"> : </span>';
            } else if(minutes<10 && minutes>0){
                m = '<span class="greyMenuText">0'+minutes+'</span><span class="PlayerColor"> : </span>';
            } else if(minutes==0&&hours>0){
                m = '<span class="greyMenuText">00</span><span class="PlayerColor"> : </span>';
                if(hours==0){
                    h = '';
                };
            };
            if(seconds>=10 || minutes==0){
                s = '<span class="greyMenuText">'+seconds+'</span>';
                if(hours==0){
                    h = '';
                };
                if(minutes==0&&hours==0){
                    m = '';
                };
            } else if(seconds<10 && seconds>0){
                s = '<span class="greyMenuText">0'+seconds+'</span>';
                if(hours==0){
                    h = '';
                };
                if(minutes==0&&hours==0){
                    m = '';
                };
            } else if(seconds==0){
                s = '<span class="greyMenuText">00</span>';
                if(hours==0){
                    h = '';
                };
                if(minutes==0&&hours==0){
                    m = '';
                };
            };
        };
        window.Configs();
        document.getElementById("demo").innerHTML = "Time: <span>"+h+m+s+"</span>";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "Time: Expired, you survived for:<span class='greyMenuText'>"+hours+"h"+minutes+"m"+seconds+"s</span>";
        }
    }, 1000)};
mainCanvas.onkeydown=function(a){a=a.keyCode?a.keyCode:a.which;socket&&player&&!player.dead&&(65!=a&&37!=a||cameraKeys.l||(cameraKeys.l=-1,cameraKeys.r=0,updateCameraInput()),68!=a&&39!=a||cameraKeys.r||(cameraKeys.r=1,cameraKeys.l=0,updateCameraInput()),87!=a&&38!=a||cameraKeys.u||(cameraKeys.u=-1,cameraKeys.d=0,updateCameraInput()),83!=a&&40!=a||cameraKeys.d||(cameraKeys.d=1,cameraKeys.u=0,updateCameraInput()))};
function renderText(a,d){var c=document.createElement("canvas"),
    b=c.getContext("2d");b.font=d+"px regularF";
                         var g=b.measureText(a);c.width=g.width+20;c.height=2*d;b.translate(c.width/2,c.height/2);
                         b.font=d+"px regularF";b.fillStyle="#000000";b.textBaseline="middle";b.textAlign="center";b.strokeStyle=darkColor;
                         b.lineWidth=7;b.strokeText(a,0,0);b.fillText(a,0,0);return c}var iconSizeMult=777777.7,unitSprites=[];
var Theme=document.createElement("style");Theme.innerText=`#joinTroopContainer{display:inline-block;padding:10px;font-family:"regularF";font-size:18px;border-radius:5px;color:#ffffff25;pointer-events:all;cursor:pointer;transition:.5s}
.PlayerColor:active {
     color: #ff0000;
}
.PlayerColor:link {
     color: #ff0000;
}
`;
document.head.appendChild(Theme);
window.UIList = window.UIList || [];
window.initFuncs = window.initFuncs || [];
window.statusItems = window.statusItems || [];
var BotsBuild = 1;
window.upgradeStyle = 'IA';
var TotalBots = document.createElement('TotalBots'),
    SomeBots = document.createElement('SomeBots'),
    SelectColorPlayers = document.createElement('SelectColorPlayers'),
    UpgradeStyle = document.createElement('UpgradeStyle'),
    UpgradeActive = document.createElement('UpgradeActive'),
    MyPoints = document.getElementById('MeusPontos');
window.UIList.push({
    level:0,x:0,html:'<div <span id="Centralizador" class="greyMenuText" onclick=TroopsCenter()>Centralizer Troops</span></div>'},{//Primeira Linha
    level:0,x:1,html:'<div <span id="SelectColorPlayers" onclick=selectColorPlayers()>Trans Player Color:<span class="PlayerColor"> On</span></span></div>'},{//Primeira Linha
    level:0,x:2,html:'<div <span id="UpgradeStyle" onclick=upgradeStyleMode()>Upgrade Style Mode:<span class="greyMenuText"> IA</span>  (<span class="PlayerColor" onclick=upgradeActive()>Off</span></span>)</div>'},{//Primeira Linha

    level:1,x:0,html:'<div id="demo" class="PlayerColor" ()>Time: 00</div>'},{
    level:1,x:1,html:'<div <span id="more" class="PlayerColor" onclick=addOneBot()>+</span> <span class="greyMenuText">Bots</span>: <span id=FullBots>0</span> <span id="less" class="PlayerColor">-</span></div>'},{
    level:1,x:2,html:'<div onclick=unitStyle()>Build Style: <span id="UnitStyle" class="PlayerColor">Simple</span></div>'},{
    level:1,x:3,html:'<div onclick=bugTanks()><span id="FullyBugText">Bug Tanks: </span><span id="bugActive" class="PlayerColor">Off</span></div>'},{

    level:2,x:0,html:'<div id="moreCircleSize" style="border-radius: 20%" onclick=addCircleSize()><span class="PlayerColor">+</span></div>'},{
    level:2,x:1,html:'<div id="CircleSize" onclick=BuildCircle()>Circle Size: <span class="PlayerColor">100</span></div>'},{
    level:2,x:2,html:'<div id="lessCircleSize" style="border-radius: 20%" onclick=removeCircleSize()><span class="PlayerColor">-</span></div>'},{
    level:2,x:2,html:'<div id="DirDst">DIR: <span class="PlayerColor">0</span> <span class="greyMenuText">|</span> DST: <span class="PlayerColor">0</span></div>'},{
});
function Dir_Dst(){
setInterval(function(){
if (document.getElementsByClassName("unitItemA")[0]){
document.getElementById("DirDst").innerHTML = 'DIR: <span class="PlayerColor">'+UTILS.roundToTwo(activeUnitDir)+'</span> <span class="greyMenuText">|</span> DST: <span class="PlayerColor">'+UTILS.roundToTwo(activeUnitDst)+'</span> <span class="greyMenuText">|</span> uPath: <span class="PlayerColor">'+activeUnit.uPath[0]+'</span>';
}},1e2);
};
var Circle = 100;
window.circle = 50;
window.BuildCircle = function(){
    if (selUnits.length) {
        var x = player.x;
        var y = player.y;
        var interval = (Math.PI*2)/selUnits.length;
        for(let i=0;i<selUnits.length;i++){
            socket.emit("5",x+(Math.cos(interval*i)*Circle),y+(Math.sin(interval*i)*Circle),[selUnits[i].id],0,0);
        };
    };
};
window.addCircleSize = function(){
    var moreElem = document.getElementById("moreCircleSize"),
        lessElem = document.getElementById("lessCircleSize"),
        Size = document.getElementById("CircleSize");
    if(Circle>=0 && lessElem.style.display=='none'){
        lessElem.style.display = 'inline-block';
        Size.innerHTML = 'Circle Size: <span class="PlayerColor">'+Circle+'</span>';
    };
    if(Circle<700){
        Circle = Circle + circle;
        Size.innerHTML = 'Circle Size: <span class="PlayerColor">'+Circle+'</span>';
        return Circle;
    } else if(Circle==700){
        Circle = Circle + circle;
        Size.innerHTML = 'Circle Size: <span class="PlayerColor">'+Circle+'</span>';
        moreElem.style.display = "none";
    };
};
window.removeCircleSize = function(){
    var moreElem = document.getElementById("moreCircleSize"),
        lessElem = document.getElementById("lessCircleSize"),
        Size = document.getElementById("CircleSize");
    if(Circle<=750){
        if(moreElem.style.display == 'none'){
            moreElem.style.display = 'inline-block';
            Circle = Circle - circle;
            Size.innerHTML = 'Circle Size: <span class="PlayerColor">'+Circle+'</span>';
        }};
    if(Circle>50){
        if(lessElem.style.display == 'none'){
            lessElem.style.display = 'inline-block';
        };
        Circle = Circle - circle;
        Size.innerHTML = 'Circle Size: <span class="PlayerColor">'+Circle+'</span>';
        return LengthBots;
    } else if(Circle==50){
        Circle = Circle - circle;
        Size.innerHTML = 'Circle Size: <span class="PlayerColor">'+Circle+'</span>';
        lessElem.style.display = 'none';
    } else if(LengthBots==0){
        lessElem.style.display = 'none';
    };
};
var Base_Stage = 0, Base_Finished = false;
window.armoryUpg = {};
window.armoryUpg.Cloaking_Device = false;
window.armoryUpg.Booster_Engines = false;
window.armoryUpg.Power_Armor = false;
window.armoryUpg.Finish = false;
window.commander = {};
window.commander.Great_Leadership = false;
window.bugTanks = function(){
    var Elem = document.getElementById("bugActive"),
        ColossusMsgText = document.getElementById('Message'),
        BottomElem = document.getElementById("FullyBugText"),
        css = document.getElementById('Message2');
    css.style.display = 'none';
    var Moved = false;
    function MyBug(){
        var Generators = [], Plants = [], Armory = [], Commander = [], Houses = [], Sniper_Turrets = [], Anti_Tank_Guns = [], Walls = [], Boulders = [], Spikes = [], Barracas = [], Tank_Factorys = [], Blitz_Factorys = [];
        var myTanks = [];
        for (var i = 0; i < units.length; i++) {
            if (units[i].owner == player.sid) {
                if (units[i].uPath == 3) {
                    Generators += 1;
                };
                if (units[i].uPath == "3,0") {
                    Plants += 1;
                };
                if (units[i].uPath == 7) {
                    Armory += 1;
                };
                if (units[i].uPath == 4) {
                    Houses += 1;
                };
                if (units[i].uPath == 5) {
                    Sniper_Turrets += 1;
                };
                if (units[i].uPath == "5,1") {
                    Anti_Tank_Guns += 1;
                };
                if (units[i].uPath == 6) {
                    myTanks += 1;
                };
                if (units[i].uPath == 1) {
                    Walls += 1;
                };
                if (units[i].uPath == "1,0") {
                    Boulders += 1;
                };
                if (units[i].uPath == "1,0,0") {
                    Spikes += 1;
                };
                if (units[i].uPath == 8) {
                    Barracas += 1;
                };
                if (units[i].uPath == "8,1") {
                    Tank_Factorys += 1;
                };
                if (units[i].uPath == "8,1,0") {
                    Blitz_Factorys += 1;
                };
                if (units[i].uPath == 9) {
                    Commander += 1;
                };
            };
        };
        var MyFullyPower = (Generators.length*50)+(Plants.length*150)+(Armory.length*3200)+(Houses.length*60)+(Sniper_Turrets.length*80)+(Anti_Tank_Guns.length*380)+(Walls.length*20)+(Boulders.length*80)+(Spikes.length*280)+(Barracas.length*150)+(Tank_Factorys.length*2150)+(Blitz_Factorys.length*7150)+(Commander.length*2000);
        if (Base_Stage == 0 && (Generators.length + Plants.length) < 47 && player.power > 50) {
            myBases.Generators();
            console.log("Gens: " + Generators.length + "\nPlants: " + Plants.length + "\nFully: " + (Generators.length + Plants.length) + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
        };
        if (Base_Stage == 0 && (Generators.length + Plants.length) == 47) {
            for (var o=0;o<units.length;o++){
                if(units[o].owner==player.sid){
                    if (units[o].uPath == 3 && player.power > 100) {
                        socket.emit("4",units[o].id,0);
                        console.log("Gens: " + Generators.length + "\nPlants: " + Plants.length + "\nFully: " + (Generators.length + Plants.length) + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
                    };
                };
            };
        };
        if (Base_Stage == 0 && Plants.length == 47) {
            Base_Stage = 1;
            console.log("Base Stage: " + Base_Stage + "\nAt " + document.getElementById("demo").textContent);
        };
        if (Base_Stage == 1 && (Walls.length + Boulders.length + Spikes.length) < 27 && player.power > ((27 - (Walls.length + Boulders.length + Spikes.length))*20)) {
            socket.emit("1",1.5707963267948966,306,1);socket.emit("1",1.7697877424704205,305.9984341463204,1);socket.emit("1",1.9688051650800957,305.99850718590113,1);socket.emit("1",2.1677903037136583,305.9988648671756,1);socket.emit("1",2.3668011684240957,306.0035302083948,1);socket.emit("1",2.5657900937262816,306.0009477109507,1);socket.emit("1",2.7647941662469866,305.99645259381685,1);socket.emit("1",2.963796896375546,306.0038672958235,1);socket.emit("1",-2.4963856863970495,306.00444522915024,1);socket.emit("1",-2.2973735336266525,305.99934117576134,1);socket.emit("1",-1.8723730736660433,305.9999807189537,1);socket.emit("1",-1.6733948235321694,305.999130227522,1);socket.emit("1",-3.12038183186785,305.9988316971161,1);socket.emit("1",-2.695396096157215,305.9988302265222,1);socket.emit("1",1.3718049111193729,305.9984341463204,1);socket.emit("1",1.1727874885096976,305.99850718590113,1);socket.emit("1",0.9738023498761348,305.9988648671756,1);socket.emit("1",0.7747914851656971,306.00353020839486,1);socket.emit("1",0.5758025598635111,306.0009477109508,1);socket.emit("1",0.37679848734280647,305.99645259381685,1);socket.emit("1",0.1777957572142471,306.0038672958236,1);socket.emit("1",-0.6452069671927436,306.00444522915024,1);socket.emit("1",-0.8442191199631408,305.99934117576134,1);socket.emit("1",-1.26921957992375,305.9999807189537,1);socket.emit("1",-1.468197830057624,305.999130227522,1);socket.emit("1",-0.02121082172194335,305.9988316971162,1);socket.emit("1",-0.44619655743257813,305.9988302265222,1);
            console.log("Walls: " + Walls.length + "\nBoulders: " + Boulders.length + "\nSpikes: " + Spikes.length + "\nFully: " + (Walls.length + Boulders.length + Spikes.length) + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
        };
        if (Base_Stage == 1 && (Walls.length + Boulders.length + Spikes.length) == 27) {
            for (o=0;o<units.length;o++){
                if(units[o].owner==player.sid){
                    if (units[o].uPath == 1 && player.power > (Walls.length*60)) {
                        socket.emit("4",units[o].id,0);
                        console.log("Walls: " + Walls.length + "\nBoulders: " + Boulders.length + "\nSpikes: " + Spikes.length + "\nFully: " + (Walls.length + Boulders.length + Spikes.length) + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
                    };
                    if (units[o].uPath == "1,0" && player.power > (Boulders.length*200)) {
                        socket.emit("4",units[o].id,0);
                        console.log("Walls: " + Walls.length + "\nBoulders: " + Boulders.length + "\nSpikes: " + Spikes.length + "\nFully: " + (Walls.length + Boulders.length + Spikes.length) + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
                    };
                };
            };
        };
        if (Base_Stage == 1 && Spikes.length == 27) {
            Base_Stage = 2;
            console.log("Base Stage: " + Base_Stage + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
        };
        if (Base_Stage == 2 && (Barracas.length + Tank_Factorys.length + Blitz_Factorys.length) < 4) {
            if ((Blitz_Factorys.length + Tank_Factorys.length + Barracas.length) == 0 && player.power > 2150) {
                socket.emit("1",-2.9078883255463692,309.99720805194363,8);
                console.log("Barracas: " + Barracas.length + "\nTank_Factorys: " + Tank_Factorys.length + "\nBlitz_Factorys: " + Blitz_Factorys.length + "\nFully: " + (Barracas.length + Tank_Factorys.length + Blitz_Factorys.length) + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
            } else if (Blitz_Factorys.length == 1 && (Tank_Factorys.length + Barracas.length) == 0 && player.power > 2150) {
                socket.emit("1",-0.23370432804342403,309.9972080519435,8);
                console.log("Barracas: " + Barracas.length + "\nTank_Factorys: " + Tank_Factorys.length + "\nBlitz_Factorys: " + Blitz_Factorys.length + "\nFully: " + (Barracas.length + Tank_Factorys.length + Blitz_Factorys.length) + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
            } else if (Blitz_Factorys.length == 2 && (Tank_Factorys.length + Barracas.length) == 0 && player.power > 2150) {
                socket.emit("1",-2.0848850073777045,310.0002556450559,8);
                console.log("Barracas: " + Barracas.length + "\nTank_Factorys: " + Tank_Factorys.length + "\nBlitz_Factorys: " + Blitz_Factorys.length + "\nFully: " + (Barracas.length + Tank_Factorys.length + Blitz_Factorys.length) + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
            } else if (Blitz_Factorys.length == 3 && (Tank_Factorys.length + Barracas.length) == 0 && player.power > 2150) {
                socket.emit("1",-1.0567076462120886,310.0002556450559,8);
                console.log("Barracas: " + Barracas.length + "\nTank_Factorys: " + Tank_Factorys.length + "\nBlitz_Factorys: " + Blitz_Factorys.length + "\nFully: " + (Barracas.length + Tank_Factorys.length + Blitz_Factorys.length) + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
            };
        };
        if (Base_Stage == 2) {
            for (o=0;o<units.length;o++){
                if(units[o].owner==player.sid){
                    if (units[o].uPath == 8 && player.power > 2000) {
                        socket.emit("4",units[o].id,1);
                        console.log("Barracas: " + Barracas.length + "\nTank_Factorys: " + Tank_Factorys.length + "\nBlitz_Factorys: " + Blitz_Factorys.length + "\nFully: " + (Barracas.length + Tank_Factorys.length + Blitz_Factorys.length) + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
                    };
                    if (units[o].uPath == "8,1" && player.power > 5000) {
                        socket.emit("4",units[o].id,0);
                        console.log("Barracas: " + Barracas.length + "\nTank_Factorys: " + Tank_Factorys.length + "\nBlitz_Factorys: " + Blitz_Factorys.length + "\nFully: " + (Barracas.length + Tank_Factorys.length + Blitz_Factorys.length) + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
                    };
                };
            };
        };
        if (Base_Stage == 2 && Blitz_Factorys.length == 4) {
            Base_Stage = 3;
            console.log("Base Stage: " + Base_Stage + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
        };
        if (Base_Stage == 3 && Commander.length < 1 && player.power > 1500) {
            socket.emit("4",0,0,1);
            if (window.commander.Great_Leadership == true) {
                window.commander.Great_Leadership = false;
            };
            console.log("Commander: " + Commander.length + "\nFully: " + Commander.length + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
        };
        if (Base_Stage == 3 && Commander.length == 1 && player.power > 500) {
            for (o=0;o<units.length;o++){
                if(units[o].owner==player.sid){
                    if (units[o].uPath == 9) {
                        socket.emit("4",units[o].id,0);
                        window.commander.Great_Leadership = true;
                        console.log("Commander: " + Commander.length + "\nFully: " + Commander.length + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
                    };
                };
            };
        };
        if (Base_Stage == 3 && window.commander.Great_Leadership == true) {
            Base_Stage = 4;
            console.log("Base Stage: " + Base_Stage + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
        };
        if (Base_Stage == 4 && Armory.length < 1 && Plants.length == 47) {
            Sell(-1.57,132,3);
        };
        if (Base_Stage == 4 && Armory.length < 1 && Plants.length == 46) {
            socket.emit("1",-1.5707963267948966,140,7);
            if (window.armoryUpg.Cloaking_Device == true) {
                window.armoryUpg.Cloaking_Device = false;
            };
            if (window.armoryUpg.Booster_Engines == true) {
                window.armoryUpg.Booster_Engines = false;
            };
            if (window.armoryUpg.Power_Armor == true) {
                window.armoryUpg.Power_Armor = false;
            };
            if (window.armoryUpg.Cloaking_Device == false || window.armoryUpg.Booster_Engines == false || window.armoryUpg.Power_Armor == false) {
                window.armoryUpg.Finish = false;
            };
            console.log("Armory: " + Armory.length + "\nFully: " + Armory.length + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
        };
        if (Base_Stage == 4 && Armory.length == 1 && window.armoryUpg.Finish == false) {
            for (o=0;o<units.length;o++){
                if(units[o].owner==player.sid){
                    if (units[o].uPath == 7) {
                        if (window.armoryUpg.Cloaking_Device == false && player.power > 3100) {
                            socket.emit("4",units[o].id,3);
                            window.armoryUpg.Cloaking_Device = true;
                            console.log("Armory: Cloaking Device\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
                        };
                        if (window.armoryUpg.Booster_Engines == false && player.power > 3100 && window.armoryUpg.Cloaking_Device == true) {
                            socket.emit("4",units[o].id,1);
                            window.armoryUpg.Booster_Engines = true;
                            console.log("Armory: Booster Engines\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
                        };
                        if (window.armoryUpg.Power_Armor == false && player.power > 3100 && window.armoryUpg.Cloaking_Device == true && window.armoryUpg.Booster_Engines == true) {
                            socket.emit("4",units[o].id,0);
                            window.armoryUpg.Power_Armor = true;
                            console.log("Armory: Power Armor\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
                        };
                        if (window.armoryUpg.Cloaking_Device == true && window.armoryUpg.Booster_Engines == true && window.armoryUpg.Power_Armor == true) {
                            window.armoryUpg.Finish = true;
                            console.log("Armory: Finish!\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
                        };
                    };
                };
            };
        };
        if (Base_Stage == 4 && window.armoryUpg.Finish == true) {
            Base_Stage = 5;
            console.log("Base Stage: " + Base_Stage + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
        };
        if (Base_Stage == 5 && Plants.length == 46) {
            Sell(-2.87,245,3);Sell(-2.08,245,3);Sell(-0.27,245,3);Sell(-1.06,245,3);
        };
        if (Base_Stage == 5 && Plants.length == 42 && (Walls.length + Boulders.length + Spikes.length) < 31) {
            socket.emit("1",-2.869308976083654,243.85375391820403,1);socket.emit("1",-2.0793925277555356,243.84353179856956,1);socket.emit("1",-0.27228367750613935,243.8537539182039,1);socket.emit("1",-1.0622001258342575,243.84353179856956,1);
            console.log("Walls: " + Walls.length + "\nBoulders: " + Boulders.length + "\nSpikes: " + Spikes.length + "\nFully: " + (Walls.length + Boulders.length + Spikes.length) + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
        };
        if (Base_Stage == 5 && (Walls.length + Boulders.length + Spikes.length) == 31) {
            for (o=0;o<units.length;o++){
                if(units[o].owner==player.sid){
                    if (units[o].uPath == 1 && player.power > (Walls.length*60)) {
                        socket.emit("4",units[o].id,0);
                        console.log("Walls: " + Walls.length + "\nBoulders: " + Boulders.length + "\nSpikes: " + Spikes.length + "\nFully: " + (Walls.length + Boulders.length + Spikes.length) + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
                    };
                    if (units[o].uPath == "1,0" && player.power > (Boulders.length*200)) {
                        socket.emit("4",units[o].id,0);
                        console.log("Walls: " + Walls.length + "\nBoulders: " + Boulders.length + "\nSpikes: " + Spikes.length + "\nFully: " + (Walls.length + Boulders.length + Spikes.length) + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
                    };
                };
            };
        };
        if (Base_Stage == 5 && Spikes.length == 31) {
            Base_Stage = 6;
            console.log("Base Stage: " + Base_Stage + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
        };
        if (Base_Stage == 6 && Plants.length == 42) {
            Sell(1.57,245,3);Sell(2.36,245,3);Sell(-3.13,245,3);Sell(-2.34,245,3);Sell(-1.57,212,3);Sell(0.78,245,3);Sell(-0.01,245,3);Sell(-0.80,245,3);
        };
        if (Base_Stage == 6 && Plants.length == 34 && (Sniper_Turrets.length + Anti_Tank_Guns.length) < 8 && player.power > ((8 - (Sniper_Turrets.length + Anti_Tank_Guns.length)) * 80)) {
            socket.emit("1",1.5707963267948966,243.85,5);socket.emit("1",2.3606891677687423,243.84823661449764,5);socket.emit("1",-3.1325705886781208,243.8499243387211,5);socket.emit("1",-2.3427104018746365,243.85379984736753,5);socket.emit("1",-1.5707963267948966,212.1,5);socket.emit("1",0.780903485821051,243.84823661449764,5);socket.emit("1",-0.009022064911672475,243.849924338721,5);socket.emit("1",-0.7988822517151568,243.85379984736753,5);
            console.log("Sniper Turrets: " + Sniper_Turrets.length + "\nAnti Tank Guns: " + Anti_Tank_Guns.length + "\nFully: " + (Sniper_Turrets.length + Anti_Tank_Guns.length) + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
        };
        if (Base_Stage == 6 && (Sniper_Turrets.length + Anti_Tank_Guns.length) == 8) {
            for (o=0;o<units.length;o++){
                if(units[o].owner==player.sid){
                    if (units[o].uPath == 5 && player.power > (Sniper_Turrets.length*300)) {
                        socket.emit("4",units[o].id,1);
                        console.log("Sniper Turrets: " + Sniper_Turrets.length + "\Anti Tank Guns: " + Anti_Tank_Guns.length + "\nFully: " + (Sniper_Turrets.length + Anti_Tank_Guns.length) + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
                    };
                };
            };
        };
        if (Base_Stage == 6 && Anti_Tank_Guns.length == 8) {
            Base_Stage = 7;
            console.log("Base Stage: " + Base_Stage + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
        };
        if (Base_Stage == 7 && Plants.length == 34 && player.power > 540) {
            Sell(184,3);Sell(132,3);Sell(2.10,245,3);Sell(1.04,245,3);
        };
        if (Base_Stage == 7 && Plants.length == 10 && Houses.length < 29 && player.power > ((29 - Houses.length)*60)) {
            socket.emit("1",1.5707963267948966,130,4);socket.emit("1",-2.0999892376988676,130.00240497775422,4);socket.emit("1",-1.9700163324322941,188.44877128811427,4);socket.emit("1",-2.309994110894194,180.97202546250074,4);socket.emit("1",-2.5699963614332346,130.0059402488978,4);socket.emit("1",-2.719983659300051,185.6906163488075,4);socket.emit("1",-3.050009496309975,184.35258609523223,4);socket.emit("1",3.059965371893812,130.00286496843054,4);socket.emit("1",2.860007061192061,181.84164347035588,4);socket.emit("1",2.5899729462073715,130.00236651692154,4);socket.emit("1",2.49000475162436,188.21015408314193,4);socket.emit("1",2.0900080277141138,245.85048830539264,4);socket.emit("1",2.0399826159135475,129.9980419083303,4);socket.emit("1",2.159995968208953,187.67462534929967,4);socket.emit("1",1.8200034653527897,180.10371456469187,4);socket.emit("1",-1.041603415890926,130.00240497775422,4);socket.emit("1",-1.1715763211574992,188.44877128811427,4);socket.emit("1",-0.8315985426955991,180.97202546250074,4);socket.emit("1",-0.5715962921565585,130.0059402488978,4);socket.emit("1",-0.4216089942897421,185.6906163488075,4);socket.emit("1",-0.09158315727981833,184.3525860952321,4);socket.emit("1",0.08162728169598163,130.00286496843054,4);socket.emit("1",0.28158559239773207,181.84164347035588,4);socket.emit("1",0.5516197073824215,130.00236651692154,4);socket.emit("1",0.6515879019654331,188.21015408314193,4);socket.emit("1",1.0515846258756796,245.85048830539264,4);socket.emit("1",1.1016100376762459,129.9980419083303,4);socket.emit("1",0.9815966853808403,187.67462534929967,4);socket.emit("1",1.3215891882370037,180.10371456469187,4);
            console.log("Houses: " + Houses.length + "\nFully: " + Houses.length + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
        };
        if (Base_Stage == 7 && Houses.length == 29) {
            Base_Stage = 8;
            console.log("Base Stage: " + Base_Stage + "\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
        };
        if (Base_Stage == 8 && Base_Finished == false) {
            Base_Finished = true;
            console.log("Base Finished!\nMy Fully Power: " + MyFullyPower + "\nAt " + document.getElementById("demo").textContent);
        };
        if (Base_Finished == true) {
            if ((Plants.length + Generators.length) < 10) {
            };
            var MyFriendSID = [], MyFriend = [], MyFriendTroop = [];
            for (var f = 0; f < units.length; f++) {
                if (units[f].owner !== player.sid && units[f].uPath == 9) {
                    if (units[f].x > (player.x - 700) && units[f].x < (player.x + 700) && units[f].y > (player.y - 700) && units[f].y < (player.y + 700)) {
                        MyFriendSID = units[f].owner;
                    };
                };
            };
            for (var t = 0; t < units.length; t++) {
                if (units[t].owner == player.sid && units[t].uPath == 9) {
                    if (units[t].x > (player.x - 700) && units[t].x < (player.x + 700) && units[t].y > (player.y - 700) && units[t].y < (player.y + 700)) {
                        MyFriendTroop = units[t];
                    };
                };
            };
            var Troop1 = [], Troop2 = [], Troop3 = [], Troop4 = [], Troop5 = [], Troop6 = [], Troop7 = [], Troop8 = [], Troop9 = [], Troop10 = [], Troop11 = [], Troop12 = [];
            if (myTanks.length >= 3 && MyFriendTroop) {
                if (selUnits.length == 0) {
                    selUnits = [];
                    units.forEach((unit) => {
                        if (unit.owner === player.sid && unit.type === 1 && unit.uPath == 6) {
                            selUnits.push(unit);
                            return false;
                        };
                    });
                    selUnitType = "Unit";
                };
                Troop1 = selUnits[0];
                Troop2 = selUnits[1];
                Troop3 = selUnits[2];
                Troop4 = selUnits[3];
                Troop5 = selUnits[4];
                Troop6 = selUnits[5];
                Troop7 = selUnits[6];
                Troop8 = selUnits[7];
                Troop9 = selUnits[8];
                Troop10 = selUnits[9];
                Troop11 = selUnits[10];
                Troop12 = selUnits[11];
                if (selUnits.length > 3){
                    selUnits = [];
                    units.forEach((unit) => {
                        if (unit.owner === player.sid && unit.type === 1 && unit.uPath == 6) {
                            if (unit.id === Troop1.id || unit.id === Troop2.id || unit.id === Troop3.id){
                                selUnits.push(unit);
                                return false;
                            };
                        };
                    });
                    selUnitType = "Unit";
                };
                if (selUnits.length > 0 && selUnits.length <= 3) {
                    var MyTroop1X = [], MyTroop2X = [], MyTroop3X = [];
                    if (Troop1.x < 0) {MyTroop1X = Troop1.x * -1} else {MyTroop1X = Troop1.x};
                    if (Troop2) {if (Troop2.x < 0) {MyTroop2X = Troop2.x * -1} else {MyTroop2X = Troop2.x}};
                    if (Troop3) {if (Troop3.x < 0) {MyTroop3X = Troop3.x * -1} else {MyTroop3X = Troop2.x}};
                    var MyTroop1Y = [], MyTroop2Y = [], MyTroop3Y = [];
                    if (Troop1.y < 0) {MyTroop1Y = Troop1.y * -1} else {MyTroop1Y = Troop1.y};
                    if (Troop2) {if (Troop2.y < 0) {MyTroop2Y = Troop2.y * -1} else {MyTroop2Y = Troop2.y}};
                    if (Troop3) {if (Troop3.y < 0) {MyTroop3Y = Troop3.y * -1} else {MyTroop3Y = Troop2.y}};
                    var FullyDist1 = [], FullyDist2 = [];
                    if (MyTroop1X > MyTroop2X) {FullyDist1 = Math.floor(MyTroop1X) - Math.floor(MyTroop2X)} else {FullyDist1 = Math.floor(MyTroop2X) - Math.floor(MyTroop1X)};
                    if (MyTroop2X > MyTroop3X) {FullyDist2 = Math.floor(MyTroop2X) - Math.floor(MyTroop3X)} else {FullyDist2 = Math.floor(MyTroop3X) - Math.floor(MyTroop2X)};
                    for (var e = [], b = 0; b < Math.floor(selUnits.length-0); ++b) e.push(selUnits[0].id);
                    socket.emit("5", MyFriendTroop.x + 1, MyFriendTroop.y + 1, e, 0, 0);
                    if (FullyDist1 > 100 && Troop2) {
                        for (var e = [], b = 0; b < Math.floor(selUnits.length-1); ++b) e.push(selUnits[1].id);
                        socket.emit("5", Troop2.x + (Troop1.x - Troop2.x), Troop2.y + (Troop1.y - Troop2.y), e, 0, 0);
                    };
                    if (FullyDist2 > 100 && Troop3) {
                        for (var e = [], b = 0; b < Math.floor(selUnits.length-2); ++b) e.push(selUnits[2].id);
                        socket.emit("5", Troop3.x + (Troop2.x - Troop3.x), Troop3.y + (Troop2.y - Troop3.y), e, 0, 0);
                    };
                };
            };
        };
    };
    if (Elem.textContent == "Off") {
        Elem.textContent = "On";
        ColossusMsgText.innerHTML = BottomElem.innerHTML + '<span class="PlayerColor">' + Elem.innerHTML + '</span>';
        ColossusMsgFunc(2000);
        Start = setInterval(MyBug,250);
    } else if (Elem.textContent == "On") {
        Elem.textContent = "Off";
        ColossusMsgText.innerHTML = BottomElem.innerHTML + '<span class="PlayerColor">' + Elem.innerHTML + '</span>';
        ColossusMsgFunc(2000);
        clearInterval(Start);
    };
};
window.mode = 0;
window.unitStyle = function(){
    var Active = document.getElementById("UnitStyle");
    if(mode==0){
        mode = 1;
        Active.innerText = 'Duplicate';
        window.sendUnit = function(a) {
            socket && gameState && activeUnit && !activeUnit.dontPlace;
            socket.emit("1", UTILS.roundToTwo(activeUnitDir), UTILS.roundToTwo(activeUnitDst), a);
            socket.emit("1", (Math.PI / 2) - (UTILS.roundToTwo(activeUnitDir) - (Math.PI / 2)), UTILS.roundToTwo(activeUnitDst), a);
            for (var i = 0; i < window.sockets.length; i++) {
                sockets[i].emit("1", UTILS.roundToTwo(activeUnitDir), UTILS.roundToTwo(activeUnitDst), a);
                sockets[i].emit("1", (Math.PI / 2) - (UTILS.roundToTwo(activeUnitDir) - (Math.PI / 2)), UTILS.roundToTwo(activeUnitDst), a);
            }
        }
    } else if(mode==1){
        mode = 2;
        Active.innerText = 'Adjust';
        function sendUnit(a) {
            socket && gameState && activeUnit && !activeUnit.dontPlace;
            socket.emit("1", UTILS.roundToTwo(activeUnitDir), UTILS.roundToTwo(activeUnitDst), a);
            for (var i = 0; i < window.sockets.length; i++) {
                sockets[i].emit("1", UTILS.roundToTwo(activeUnitDir), UTILS.roundToTwo(activeUnitDst), a);
            }
        }
    } else if(mode==2){
        mode = 0;
        Active.innerText = 'Simple';
        window.sendUnit = function(a) {
            socket && gameState && activeUnit && !activeUnit.dontPlace;
            socket.emit("1", UTILS.roundToTwo(activeUnitDir), UTILS.roundToTwo(activeUnitDst), a);
            for (var i = 0; i < window.sockets.length; i++) {
                sockets[i].emit("1", UTILS.roundToTwo(activeUnitDir), UTILS.roundToTwo(activeUnitDst), a);
            }
        }
    };
};
function ChangeUnit(){
    var Active = document.getElementById("UnitStyle");
    if(Active.innerText == 'Duplicate'){
        window.sendUnit = function(a) {
            socket && gameState && activeUnit && !activeUnit.dontPlace;
            socket.emit("1", UTILS.roundToTwo(activeUnitDir), UTILS.roundToTwo(activeUnitDst), a);
            socket.emit("1", (Math.PI / 2) - (UTILS.roundToTwo(activeUnitDir) - (Math.PI / 2)), UTILS.roundToTwo(activeUnitDst), a);
            for (var i = 0; i < window.sockets.length; i++) {
                sockets[i].emit("1", UTILS.roundToTwo(activeUnitDir), UTILS.roundToTwo(activeUnitDst), a);
                sockets[i].emit("1", (Math.PI / 2) - (UTILS.roundToTwo(activeUnitDir) - (Math.PI / 2)), UTILS.roundToTwo(activeUnitDst), a);
                console.log(sendUnit(a));
            }
        }
        console.log(function sendUnit(a) {
            socket && gameState && activeUnit && !activeUnit.dontPlace;
            socket.emit("1", UTILS.roundToTwo(activeUnitDir), UTILS.roundToTwo(activeUnitDst), a);
            socket.emit("1", (Math.PI / 2) - (UTILS.roundToTwo(activeUnitDir) - (Math.PI / 2)), UTILS.roundToTwo(activeUnitDst), a);
            for (var i = 0; i < window.sockets.length; i++) {
                sockets[i].emit("1", UTILS.roundToTwo(activeUnitDir), UTILS.roundToTwo(activeUnitDst), a);
                sockets[i].emit("1", (Math.PI / 2) - (UTILS.roundToTwo(activeUnitDir) - (Math.PI / 2)), UTILS.roundToTwo(activeUnitDst), a);
                console.log(sendUnit(a));
            }
        });
        sendUnit();
    } else if(Active.innerText == 'Simple'){
        function sendUnit(a) {
            socket && gameState && activeUnit && !activeUnit.dontPlace;
            socket.emit("1", UTILS.roundToTwo(activeUnitDir), UTILS.roundToTwo(activeUnitDst), a);
            for (var i = 0; i < window.sockets.length; i++) {
                sockets[i].emit("1", UTILS.roundToTwo(activeUnitDir), UTILS.roundToTwo(activeUnitDst), a);
            }
        }
        console.log(function sendUnit(a) {
            socket && gameState && activeUnit && !activeUnit.dontPlace;
            socket.emit("1", UTILS.roundToTwo(activeUnitDir), UTILS.roundToTwo(activeUnitDst), a);
            for (var i = 0; i < window.sockets.length; i++) {
                sockets[i].emit("1", UTILS.roundToTwo(activeUnitDir), UTILS.roundToTwo(activeUnitDst), a);
            }
        });
        sendUnit();
    };
};
var LengthBots = 0;
window.lengthBots = 0;
window.addOneBot = function(){
    if(LengthBots>=0){
        if(document.getElementById("less").innerText = ""){
            console.log("Old Text: "+document.getElementById("less").innerText);
            document.getElementById("less").innerText = "-";
            console.log("New Text: "+document.getElementById("less").innerText);
        }};
    if(LengthBots<9){
        if(document.getElementById("more").innerText = ""){
            console.log("Old Text: "+document.getElementById("more").innerText);
            document.getElementById("more").innerText = "+";
            console.log("New Text: "+document.getElementById("more").innerText);
        };
        lengthBots = LengthBots + 1;
        LengthBots = lengthBots;
        return LengthBots;
    } else if(LengthBots==9){
        lengthBots = LengthBots + 1;
        LengthBots = lengthBots;
        document.getElementById("more").innerText = "";
    };
};
window.removeOneBot = function(){
    if(LengthBots<=10){
        if(document.getElementById("more").innerText = ''){
            document.getElementById("more").innerText = '+';
        }};
    if(LengthBots>1){
        if(document.getElementById("less").innerText = ''){
            document.getElementById("less").innerText = '-';
        };
        lengthBots = LengthBots - 1;
        LengthBots = lengthBots;
        return LengthBots;
    } else if(LengthBots==1){
        lengthBots = LengthBots - 1;
        LengthBots = lengthBots;
        document.getElementById("less").innerText = '';
    } else if(LengthBots==0){
        document.getElementById("less").innerText = '';
    };
};
var Music = new Audio("https://cdn.discordapp.com/attachments/708716053315977217/783897147971207169/Albatroz_Elephant.mp4");

function ColossusMsgFunc(duringtime){
    var Opacity = document.getElementById('ColossusScriptV5Msg');
    Opacity.style.transition = '0.5s';
    setTimeout(function(){Opacity.style.transition = '0.5s';Opacity.style.display='block'},0);
    setTimeout(function(){Opacity.style.opacity=1},50);
    setTimeout(function(){Opacity.style.opacity=0},duringtime+500);
    setTimeout(function(){Opacity.style.display='none'},duringtime+1000);
};
window.upgradeActive = function(){

};
window.upgradeStyleMode = function(){
    var Active = document.getElementById('UpgradeStyle');
    if(upgradeStyle=='IA'){
        upgradeStyle = 'Hybrid';
        Active.innerHTML = 'Upgrade Style Mode:<span class="greyMenuText"> '+upgradeStyle+'</span>';
    } else if(upgradeStyle=='Hybrid'){
        upgradeStyle = 'Defense';
        Active.innerHTML = 'Upgrade Style Mode:<span class="greyMenuText"> '+upgradeStyle+'</span>';
    } else if(upgradeStyle=='Defense'){
        upgradeStyle = 'Houses';
        Active.innerHTML = 'Upgrade Style Mode:<span class="greyMenuText"> '+upgradeStyle+'</span>';
    } else if(upgradeStyle=='Houses'){
        upgradeStyle = 'IA';
        Active.innerHTML = 'Upgrade Style Mode:<span class="greyMenuText"> '+upgradeStyle+'</span>';
    }
};
window.playerCor = "99";
window.selectColorPlayers = function(){
    var Active = document.getElementById('SelectColorPlayers'),
        ColossusMsgText = document.getElementById('Message'),
        css = document.createElement("style");
    css.innerText = `
#Message2 {
opacity: 0;
}
`;
    document.head.appendChild(css);
    if(playerCor=="99"){
        Active.innerHTML = 'Trans Player Color:<span class="PlayerColor"> Off</span>';
        ColossusMsgText.innerHTML = Active.innerHTML;
        ColossusMsgFunc(2000);
        playerCor = "ff";
        playerColors = ["#f9ff60", "#ff6060", "#82ff60", "#607eff", "#60eaff", "#ff60ee", "#e360ff", "#ffaf60", "#a3ff60", "#ff609c", "#60ff82", "#cc60ff", "#c65959", "#404b7f", "#f2d957", "#c55252", "#c55252", "#498e56", "#c45151", "#c35454", "#c85757", "#c85959", "#5b74b6", "#cd6868", "#5c81bd", "#5bb146", "#d8c963", "#c55252", "#404b7f", "#c55252", "#c55252", "#c55252", "#c55252", "#404b7f", "#498e56", "#498e56", "#dbd245", "#ca514e", "#43427e"]
    } else if(playerCor=="ff"){
        Active.innerHTML = 'Trans Player Color:<span class="PlayerColor"> On</span>';
        ColossusMsgText.innerHTML = Active.innerHTML;
        ColossusMsgFunc(2000);
        playerCor = "99";
        playerColors = ["#f9ff6099", "#ff606099", "#82ff6099", "#607eff99", "#60eaff99", "#ff60ee99", "#e360ff99", "#ffaf6099", "#a3ff6099", "#ff609c99", "#60ff8299", "#cc60ff99", "#c6595999", "#404b7f99", "#f2d95799", "#c5525299", "#c5525299", "#498e5699", "#c4515199", "#c3545499", "#c8575799", "#c8595999", "#5b74b699", "#cd686899", "#5c81bd99", "#5bb14699", "#d8c96399", "#c5525299", "#404b7f99", "#c5525299", "#c5525299", "#c5525299", "#c5525299", "#404b7f99", "#498e5699", "#498e5699", "#dbd24599", "#ca514e99", "#43427e99"]
    };
    return SelectColorPlayers;
    window.statusBar();
};
var ScriptTheme = document.getElementById('smallAdContainer').innerHTML = '';
function CSSStyle(){
    css.innerText = `
#Bot01 { display: inline-block; padding: 10px; background-color: rgba(40, 40, 40, 0.0); font-family: 'regularF'; font-size: 20px; border-radius: 4px; color: #fff;}
#chatList {
list-style: none; box-sizing: border-box; word-wrap: break-word; position: absolute; overflow-x: hidden;overflow-y: scroll;height: 90%;
}
#scoreContainer,#joinTroopContainer,.unitItem,#sellButton,#leaderboardContainer,.upgradeInfo, #unitInfo{
     box-shadow: inset 0 0 5px 2px #ffffffa0;
     background-color:#101010a0
}
#scoreContainer,#joinTroopContainer,.unitItem,#sellButton,#leaderboardContainer,.upgradeInfo{
transition: .5s;
}
.unitItem,#sellButton{
text-shadow:1px 0px 0px `+playerColors[player.color]+`,-1px 0px 0px `+playerColors[player.color]+`,0px 1px 0px `+playerColors[player.color]+`,0px -1px 0px `+playerColors[player.color]+`,1px 1px 0px `+playerColors[player.color]+`,1px -1px 0px `+playerColors[player.color]+`,-1px 1px 0px `+playerColors[player.color]+`,-1px -1px 0px `+playerColors[player.color]+`;
     border-radius: 8px
}
.PlayerColor{
color:`+playerColors[player.color]+`
}
.PlayerColorLeader{
text-shadow:1px 0px 0px `+playerColors[player.color]+`,-1px 0px 0px `+playerColors[player.color]+`,0px 1px 0px `+playerColors[player.color]+`,0px -1px 0px `+playerColors[player.color]+`,1px 1px 0px `+playerColors[player.color]+`,1px -1px 0px `+playerColors[player.color]+`,-1px 1px 0px `+playerColors[player.color]+`,-1px -1px 0px `+playerColors[player.color]+`
}
#scoreContainer,#joinTroopContainer,.leader {
color:#000000;
text-shadow:1px 0px 0px `+playerColors[player.color]+`,-1px 0px 0px `+playerColors[player.color]+`,0px 1px 0px `+playerColors[player.color]+`,0px -1px 0px `+playerColors[player.color]+`,1px 1px 0px `+playerColors[player.color]+`,1px -1px 0px `+playerColors[player.color]+`,-1px 1px 0px `+playerColors[player.color]+`,-1px -1px 0px `+playerColors[player.color]+`
}
`;
    document.head.appendChild(css);
};
window.setFPS = function () {
    var el = document.getElementById('fps');
    if (rate === 0) {
        el.innerHTML = 'Anti-Lagg:<span class="greyMenuText"> On</span>';
        addChat(el.innerHTML,'CoS-Development',playerColors[player.color]);
        rate = 250;
    } else {
        el.innerHTML = 'Anti-Lagg:<span class="greyMenuText"> Off</span>';
        addChat(el.innerHTML,'CoS-Development',playerColors[player.color]);
        rate = 0;
    };
    unitSprites = {};
    resize();
    window.statusBar();
};
var rate = 5000;
function remove(){
    var node = document.getElementById("adHolder");
    if (node.parentNode) {node.parentNode.removeChild(node);}};
remove();
window.TroopsCenter = function(){
    Centralizer();
};
function Centralizer(){
    var X = [], Y = [], MyTroops = [];
    for(var i=0;i<users.length;i++){
        for(var allUnits = 0; allUnits < selUnits.length; allUnits++){
            if(users[i].sid==selUnits[allUnits].owner && users[i].sid !== player.sid){
                MyTroops.push(selUnits[allUnits]);
                X.push(users[i].x);
                Y.push(users[i].y);
            };
        };
    };
    for (var e = [], b = 0; b < Math.floor(selUnits.length-0); ++b) e.push(selUnits[b].id);
    socket.emit("5", X, Y, e, 0, 0);
    for (var B = 0; B < window.sockets.length; B++) {
        sockets[B].emit("5", X, Y, e, 0, 0);
    };
    if(selUnits.length>1){
        setTimeout(effect2,0);
        for(var allUnits = 0; allUnits < selUnits.length; allUnits++){
            if (Math.floor(MyTroops.x) == X && Math.floor(MyTroops.y) == Y){
                setTimeout(effect1,1000);
            };
        };
    } else {
        effect2();
    };
    function effect1(){
        var radius = 500;
        var x = player.x;
        var y = player.y;
        var interval = (Math.PI*2)/selUnits.length;
        for(let i=0;i<selUnits.length;i++){
            socket.emit("5",x+(Math.cos(interval*i)*radius),y+(Math.sin(interval*i)*radius),[selUnits[i].id],0,0);
        };
    };
    function effect2(){
        for (var e = [], b = 0; b < Math.floor(selUnits.length-0); ++b) e.push(selUnits[b].id);
        socket.emit("5",(player.x)*1,(player.y)*1,e,0,0);
    };
};
window.makeUI = function () {
    if (window.hasMadeUI) return;
    window.hasMadeUI = true;
    window.statusItems.sort(function (a, b) {
        return a.order - b.order;
    });
    var levels = [];
    window.UIList.forEach((item) => {
        if (!levels[item.level]) levels[item.level] = [];
        levels[item.level].push(item);
    });

    levels = levels.filter((a) => {
        if (a) {
            a.sort(function (a, b) {
                return a.x - b.x;
            });
            return true;
        } else {
            return false;
        };
    });

    var headAppend = document.getElementsByTagName("head")[0],
        style = document.createElement("div");

    var toast = document.createElement('div');
    toast.id = "snackbar";
    var css = document.createElement('div');

    css.innerHTML = `<style>\n\
#snackbar {\n\
    visibility: hidden;\n\
    min-width: 250px;\n\
    margin-left: -125px;\n\
    background-color: #ffffff;\n\
    color: #ff0000;\n\
    text-align: center;\n\
    border-radius: 4px;\n\
    padding: 10px;\n\
    font-family: "regularF";\n\
    font-size: 20px;\n\
    position: fixed;\n\
    z-index: 100;\n\
    left: 30%;\n\
    top: 150px;\n\
}\n\
#snackbar.show {\n\
    visibility: visible;\n\
    -webkit-animation: fadein 0.5s;\n\
    animation: fadein 0.5s;\n\
}\n\
#snackbar.hide {\n\
    visibility: visible;\n\
    -webkit-animation: fadeout 0.5s;\n\
    animation: fadeout 0.5s;\n\
}\n\
@-webkit-keyframes fadein {\n\
    from {top: 0; opacity: 0;}\n\
    to {top: 150px; opacity: 1;}\n\
}\n\
@keyframes fadein {\n\
    from {top: 0; opacity: 0;}\n\
    to {top: 150px; opacity: 1;}\n\
}\n\
@-webkit-keyframes fadeout {\n\
    from {top: 150px; opacity: 1;}\n\
    to {top: 0; opacity: 0;}\n\
}\n\
@keyframes fadeout {\n\
    from {top: 150px; opacity: 1;}\n\
    to {top: 0; opacity: 0;}\n\
}\n\
</style>`;
    var height = levels.length * (14 + 19) + (levels.length - 1) * 7 + 0;
    style.innerHTML = `<style>
#ColossusScriptV5Hot > div > div {
transition: .5s;
margin-left: 1px;
margin-top: 1px;
border-radius:4px;
pointer-events:all;
color:#000000;
opacity: 0.2;
-webkit-transform: scale(0.95);
-ms-transform: scale(0.95);
transform: scale(0.95);
box-shadow:inset 0 0 0 2px #ffffff;
text-shadow:1px 0px 0px `+playerColors[player.color]+`,-1px 0px 0px `+playerColors[player.color]+`,0px 1px 0px `+playerColors[player.color]+`,0px -1px 0px `+playerColors[player.color]+`,1px 1px 0px `+playerColors[player.color]+`,1px -1px 0px `+playerColors[player.color]+`,-1px 1px 0px `+playerColors[player.color]+`,-1px -1px 0px `+playerColors[player.color]+`;
}
#ColossusScriptV5Hot > div > div:hover{
transition: .5s;
border-radius:10px;
opacity: 1;
-webkit-transform: scale(1);
-ms-transform: scale(1);
transform: scale(1);
box-shadow:inset 0 0 5px 2px #ffffffc0;
}
#ColossusScriptV5Hot {
background: url("https://cdn.discordapp.com/attachments/829853550766718996/830467923679379526/unknown.png") center no-repeat;
box-shadow: inset 0 0 50px 20px #ffffffa0;
-webkit-transform: scale(0.1);
-ms-transform: scale(0.1);
transform: scale(0.1);
border-radius:100px;
    pointer-events:all;
    bottom: ` + ((height*3)+200) + `px;
    transition: `+ (levels.length * 0.4) +`s;
    margin-left:-360px;
    position:absolute;
    padding-left:12px;
    padding-top:15px;
    padding-bottom:15px;
    width:800px;
    height: 800px;
    font-family:"regularF";
    left:2%;
}
#ColossusScriptV5Hot:hover{
background: url("") no-repeat center;
box-shadow: inset 0 0 5px 2px #ffffffa0;
-webkit-transform: scale(1);
-ms-transform: scale(1);
transform: scale(1);
border-radius:10px;
    margin-left:10px;
    bottom: ` + ((height*3)+550) + `px;
    width:700px;
    height: `+height+`px;
}
#ColossusScriptV5Hot > div > div {
    padding:10px;
    height:10px;
    display:inline-block;
    cursor:pointer;
    font-size:14px
}
#ColossusScriptV5Hot > div > div:hover {
    padding:10px;
    height:10px;
    font-size:14px
}
.scoreAddStatus {
    cursor:default;
    pointer-events:none;
    margin-top: 700px;
    padding:5px;
    padding-right:3px;
    width:95px;
    height:15px;
    font-family:'regularF';
    font-size: 14px;
    border-radius:4px;
    box-shadow:inset 0 0 0 2px#00000050;
    position: absolute;
    margin-left: -179.5px;
}
.scoreAddStatus:hover {
transition:0s;
    box-shadow:inset 0 0 0 2px#ff0000a0;
}
#confinfo:hover {
transition:.5s;
opacity:0;
}
</style>`;

    headAppend.appendChild(style);
    headAppend.appendChild(css);


    var contAppend = document.getElementById("gameUiContainer"),
        menuA = document.createElement("div");

    var code = ['<div id="ColossusScriptV5Hot">\n'];

    levels.forEach((items, i) => {
        code.push(i === 0 ? '    <div>\n' : '    <div style="margin-top:5px;">\n');
        items.forEach((el) => {
            code.push('        ' + el.html + '\n');
        });
        code.push('    </div>\n');
    });

    code.push('    <div id="confinfo" class="greyMenuText" style="pointer-events:all;margin-top:6px;margin-left:15px; color: #ffffffc0; text-align: center; font-size: 15px; white-space:pre"></div>');
    code.push('</div>');

    menuA.innerHTML = code.join("");
    contAppend.insertBefore(menuA, contAppend.firstChild);
    contAppend.appendChild(toast);
    var toastTimeout = false;
    window.showToast = function (msg) {
        toast.textContent = msg;

        if (toastTimeout) clearTimeout(toastTimeout);
        else toast.className = "show";
        toastTimeout = setTimeout(function () {
            toast.className = 'hide';
            setTimeout(function () {
                toast.className = '';
            }, 400);
            toastTimeout = false;
        }, 3000);
    };
    window.statusBar = function () {
        var el = document.getElementById('confinfo');
        var text = [];

        window.statusItems.forEach((item, i) => {
            if (i !== 0) text.push('     ');
            if (item.name) text.push(item.name + ': ');
            text.push(item.value());
        });

        el.innerHTML = text.join('');
    };
    window.statusBar();

    window.initFuncs.forEach((func) => {
        func();
    });
};

var joinEnabled = true;
var joinTroopsDiv = document.createElement("div");
joinTroopsDiv.id = "joinTroopContainer";
document.getElementById("statContainer").appendChild(joinTroopsDiv);
joinTroopsDiv.innerHTML = joinEnabled?('Troop Join: <span class="PlayerColor" onclick=joinEnable()> On</span>'):('Troop Join: <span class="PlayerColor" onclick=joinEnable()> Off</span>');
var lastAlly=0,
    GoToBot = 'Me';
document.getElementById('joinTroopContainer').addEventListener("click",function(){
    joinEnabled = !joinEnabled;
    joinTroopsDiv.innerHTML = joinEnabled?('Troop Join: <span class="PlayerColor"> On</span>'):('Troop Join: <span class="PlayerColor"> Off</span>');
    document.getElementById('Message').innerHTML = joinTroopsDiv.innerHTML;
    document.getElementById('Message2').style.display = 'none';
    ColossusMsgFunc(1000);
});
function usersWithTag(){if(users.length!==0){for(o=[],i=0,e=users;i<e.length;++i){if(users[i].sid!==player.sid&&users[i].name.startsWith(player.name)){o.push(users[i]);}}return o.length;}else{return 0;}};

function playersLinked(a,d){if(a.sid==player.sid&&d.name.startsWith(player.name)){return true;}};
var afkinterval = false;
window.renderPlayer = function(a, d, c, b, g) {
    b.save();
    if (a.skin && 0 < a.skin && a.skin <= playerSkins && !skinSprites[a.skin]) {
        var e = new Image;
        e.onload = function() {
            this.readyToDraw = !0;
            this.onload = null;
            g == currentSkin && changeSkin(0)
        };
        e.src = ".././img/skins/skin_" + (a.skin - 1) + ".png";
    };
    a.skin && skinSprites[a.skin] && skinSprites[a.skin].readyToDraw ? (e = a.size - b.lineWidth / 2, b.drawImage(skinSprites[a.skin], d - e, c - e, 2 * e, 2 * e), b.lineWidth /= 2, renderCircle(d, c, a.size, b, !1, !0)) : g || (b.fillStyle = playerColors[a.color], renderCircle(d,
        c, a.size, b));
    b.restore();
};
function renderUnit(a,d,c,b,g,e,k){var f=b.size*(k?iconSizeMult:1),h=f+":"+b.cloak+":"+b.renderIndex+":"+b.iSize+":"+b.turretIndex+":"+b.shape+":"+g;if(!unitSprites[h]){var m=document.createElement("canvas"),l=m.getContext("2d");m.width=2*f+30;m.height=m.width;m.style.width=m.width+"px";m.style.height=m.height+"px";l.translate(m.width/2,m.height/2);l.lineWidth=outlineWidth*(k?.9:1.2);l.strokeStyle=darkColor;l.fillStyle=g;4==b.renderIndex?l.fillStyle=turretColor:5==b.renderIndex&&(l.fillStyle=turretColor,
renderRect(0,.76*f,1.3*f,f/2.4,l),l.fillStyle=g);b.cloak&&(l.fillStyle=backgroundColor);"circle"==b.shape?(renderCircle(0,0,f,l),b.iSize&&(l.fillStyle=turretColor,renderCircle(0,0,f*b.iSize,l))):"triangle"==b.shape?(renderTriangle(0,0,f,l),b.iSize&&(l.fillStyle=turretColor,renderTriangle(0,2,f*b.iSize,l))):"hexagon"==b.shape?(renderAgon(0,0,f,l,6),b.iSize&&(l.fillStyle=turretColor,renderAgon(0,0,f*b.iSize,l,6))):"octagon"==b.shape?(l.rotate(MathPI/8),renderAgon(0,0,.96*f,l,8),b.iSize&&(l.fillStyle=
turretColor,renderAgon(0,0,.96*f*b.iSize,l,8))):"pentagon"==b.shape?(l.rotate(-MathPI/2),renderAgon(0,0,1.065*f,l,5),b.iSize&&(l.fillStyle=turretColor,renderAgon(0,0,1.065*f*b.iSize,l,5))):"square"==b.shape?(renderSquare(0,0,f,l),b.iSize&&(l.fillStyle=turretColor,renderSquare(0,0,f*b.iSize,l))):"spike"==b.shape?renderStar(0,0,f,.7*f,l,8):"star"==b.shape&&(f*=1.2,renderStar(0,0,f,.7*f,l,6));if(1==b.renderIndex)l.fillStyle=turretColor,renderRect(f/2.8,0,f/4,f/1,l),renderRect(-f/2.8,0,f/4,f/1,l);else if(2==
b.renderIndex)l.fillStyle=turretColor,renderRect(f/2.5,f/2.5,f/2.5,f/2.5,l),renderRect(-f/2.5,f/2.5,f/2.5,f/2.5,l),renderRect(f/2.5,-f/2.5,f/2.5,f/2.5,l),renderRect(-f/2.5,-f/2.5,f/2.5,f/2.5,l);else if(3==b.renderIndex)l.fillStyle=turretColor,l.rotate(MathPI/2),renderRectCircle(0,0,.75*f,f/2.85,3,l),renderCircle(0,0,.5*f,l),l.fillStyle=g;else if(6==b.renderIndex)l.fillStyle=turretColor,l.rotate(MathPI/2),renderRectCircle(0,0,.7*f,f/4,5,l),l.rotate(-MathPI/2),renderAgon(0,0,.4*f,l,6);else if(7==b.renderIndex)for(g=
0;3>g;++g)l.lineWidth=1*(k?.9:1.2),l.fillStyle=g?1==g?"rgba(147,232,101,0.15)" : "rgba(162,255,111,0.15)" : "rgba(137,217,95,0.15)",renderStar(0,0,f,1*f,l,20),f*=.55;else 8==b.renderIndex&&(l.fillStyle=turretColor,renderRectCircle(0,0,.75*f,f/2.85,3,l),renderSquare(0,0,.5*f,l));1!=b.type&&b.turretIndex&&renderTurret(0,0,b.turretIndex,k?iconSizeMult:1,-(MathPI/2),l);unitSprites[h]=m}f=unitSprites[h];e.save();e.translate(a,d);e.rotate(c+MathPI/2);e.drawImage(f,-(f.width/2),-(f.height/2),f.width,f.height);1==b.type&&b.turretIndex&&renderTurret(0,0,b.turretIndex,k?iconSizeMult:
1,b.turRot-MathPI/2-c,e);e.restore()};
playerColors = ["#f9ff6099", "#ff606099", "#82ff6099", "#607eff99", "#60eaff99", "#ff60ee99", "#e360ff99", "#ffaf6099", "#a3ff6099", "#ff609c99", "#60ff8299", "#cc60ff99", "#c6595999", "#404b7f99", "#f2d95799", "#c5525299", "#c5525299", "#498e5699", "#c4515199", "#c3545499", "#c8575799", "#c8595999", "#5b74b699", "#cd686899", "#5c81bd99", "#5bb14699", "#d8c96399", "#c5525299", "#404b7f99", "#c5525299", "#c5525299", "#c5525299", "#c5525299", "#404b7f99", "#498e5699", "#498e5699", "#dbd24599", "#ca514e99", "#43427e99"]
moveSelUnits=function(){var User=[];for(var h=0;h<users.length;h++){}if(selUnits.length){var a=player.x+targetDst*MathCOS(targetDir)+camX,d=player.y+targetDst*MathSIN(targetDir)+camY,c=1;if(c&&1<selUnits.length)for(var b=0;b<users.length;++b)if(UTILS.pointInCircle(a,d,users[b].x,users[b].y,users[b].size)){c=0;break}var g=-1;if(c)for(b=0;b<units.length;++b)if(units[b].onScreen&&units[b].owner!=player.sid&&UTILS.pointInCircle(a,d,units[b].x,units[b].y,units[b].size)){c=0;g=units[b].id;break}1==selUnits.length&&(c=0);for(var e=[],b=0;b<selUnits.length;++b)e.push(selUnits[b].id);
                                                                                         socket.emit("5",UTILS.roundToTwo(a),UTILS.roundToTwo(d),e,joinEnabled?(0):(c),g);
                                                                                         for(var f = 0; f < window.sockets.length; f++) {
                                                                                             sockets[f].emit("5",UTILS.roundToTwo(a),UTILS.roundToTwo(d),e,joinEnabled?(0):(c),g);
                                                                                         }}};

setupSocket=function(){socket.on("connect_error",function(){lobbyURLIP?kickPlayer("Connection failed. Please check your lobby ID"):kickPlayer("Connection failed. Check your internet and firewall settings")});socket.on("disconnect",function(a){kickPlayer("Disconnected.")});socket.on("error",function(a){kickPlayer("Disconnected. The server may have updated.")});socket.on("kick",function(a){kickPlayer(a)});socket.on("lk",function(a){partyKey=a});socket.on("spawn",function(){gameState=1;unitList=share.getUnitList();
resetCamera();toggleMenuUI(!1);toggleGameUI(!0);updateUnitList();player.upgrades=share.getBaseUpgrades();mainCanvas.focus()});socket.on("gd",function(a){gameData=a});socket.on("mpd",function(a){mapBounds=a});socket.on("ch",function(a,d,c){addChatLine(a,d,c)});
                       socket.on("setUser",function(a,d){if(a&&a[0]){var c=getUserBySID(a[0]),b={sid:a[0],name:a[1],iName:"Headquarters",upgrades:[window.share.getBaseUpgrades()[1]],dead:!1,color:a[2],size:a[3],startSize:a[4],x:a[5],y:a[6],buildRange:a[7],gridIndex:a[8],spawnProt:a[9],skin:a[10],desc:"Name:"+a[1]+"\nID:"+a[0]+"\nCore:"+a[3],kills:0,typeName:"Base"};null!=c?(users[c]=b,d&&(player=users[c])):(users.push(b),d&&(player=users[users.length-1]))}});
                       socket.on("klUser",function(a){var d=getUserBySID(a);null!=d&&(users[d].dead=!0);player&&player.sid==a&&(hideMainMenuText(),leaveGame())});socket.on("delUser",function(a){a=getUserBySID(a);null!=a&&users.splice(a,1)});socket.on("au",function(a){a&&(units.push({id:a[0],owner:a[1],uPath:a[2]||0,type:a[3]||0,color:a[4]||0,paths:a[5],x:a[6]||0,sX:a[6]||0,y:a[7]||0,sY:a[7]||0,dir:a[8]||
0,turRot:a[8]||0,speed:a[9]||0,renderIndex:a[10]||0,turretIndex:a[11]||0,range:a[12]||0,cloak:a[13]||0}),units[units.length-1].speed&&(units[units.length-1].startTime=window.performance.now()),a=getUnitFromPath(units[units.length-1].uPath))&&(units[units.length-1].size=a.size,units[units.length-1].shape=a.shape,units[units.length-1].layer=a.layer,units[units.length-1].renderIndex||(units[units.length-1].renderIndex=a.renderIndex),units[units.length-1].range||(units[units.length-1].range=a.range),
units[units.length-1].turretIndex||(units[units.length-1].turretIndex=a.turretIndex),units[units.length-1].iSize=a.iSize)});socket.on("spa",function(a,d,c,b){a=getUnitById(a);if(null!=a){var g=UTILS.getDistance(d,c,units[a].x||d,units[a].y||c);300>g&&g?(units[a].interpDst=g,units[a].interpDstS=g,units[a].interpDir=UTILS.getDirection(d,c,units[a].x||d,units[a].y||c)):(units[a].interpDst=0,units[a].interpDstS=0,units[a].interpDir=0,units[a].x=d,units[a].y=c);units[a].interX=0;units[a].interY=0;units[a].sX=
                           units[a].x||d;units[a].sY=units[a].y||c;b[0]&&(units[a].dir=b[0],units[a].turRot=b[0]);units[a].paths=b;units[a].startTime=window.performance.now()}});socket.on("uc",function(a,d){unitList&&(unitList[a].count=d);forceUnitInfoUpdate=!0});socket.on("uul",function(a,d){unitList&&(unitList[a].limit+=d)});socket.on("rpu",function(a,d){var c=getUnitFromPath(a);c&&(c.dontShow=d,forceUnitInfoUpdate=!0)});socket.on("sp",function(a,d){var c=getUserBySID(a);null!=c&&(users[c].spawnProt=d)});socket.on("ab",function(a){a&&
                           bullets.push({x:a[0],sX:a[0],y:a[1],sY:a[1],dir:a[2],speed:a[3],size:a[4],range:a[5]})});socket.on("uu",function(a,d){if(void 0!=a&&d){var c=getUnitById(a);if(null!=c)for(var b=0;b<d.length;)units[c][d[b]]=d[b+1],"dir"==d[b]&&(units[c].turRot=d[b+1]),b+=2}});socket.on("du",function(a){a=getUnitById(a);null!=a&&units.splice(a,1)});socket.on("sz",function(a,d){var c=getUserBySID(a);null!=c&&(users[c].size=d)});
                       socket.on("pt",function(a,b){scoreContainer.innerHTML="Power <span class='PlayerColor'>"+a+"</span>";player.power = a});
                       socket.on("l",function(a){for(var d="",c=1,b=0;b<a.length;)d+="<div class='leaderboardItem'><div style='display:inline-block;float:left;' class='whiteText'>"+c+".</div> <div class='"+(player&&a[b]==player.sid?"leaderYou":"leader")+"'>"+a[b+1]+"</div><div class='scoreText'>"+a[b+2]+"</div></div>",c++,b+=3;leaderboardList.innerHTML=d})};


upgradeUnit=function(a){socket&&gameState&&(1==selUnits.length?socket.emit("4",selUnits[0].id,a):(activeBase)?(a==0&&activeBase.sid==player.sid?(socket.emit("4",0,a,1)):(handleActiveBaseUpgrade(activeBase.sid,activeBase.upgrades[a].name))):(upgradeSelUnits(selUnits[0],a)))};

window.toggleUnitInfo=function(a,d){var c="";a&&a.uPath&&(c=void 0!=a.group?a.group:a.uPath[0],c=unitList[c].limit?(unitList[c].count||0)+"/"+unitList[c].limit:"");if(a&&(forceUnitInfoUpdate||"block"!=unitInfoContainer.style.display||unitInfoName.innerHTML!=(a.iName||a.name)||lastCount!=c)){forceUnitInfoUpdate=!1;unitInfoContainer.style.display="block";unitInfoName.innerHTML=a.iName||a.name;a.cost?(unitInfoCost.innerHTML="Cost "+a.cost,unitInfoCost.style.display="block"):unitInfoCost.style.display="none";
unitInfoDesc.innerHTML=a.desc;unitInfoType.innerHTML=a.typeName;var b=a.space;lastCount=c;c='<span style="color:#fff">'+c+"</span>";unitInfoLimit.innerHTML=b?'<span><i class="material-icons" style="vertical-align: top; font-size: 20px;">&#xE7FD;</i>'+b+"</span> "+c:c;unitInfoUpgrades.innerHTML="";if(d&&a.upgrades){for(var g,e,h,f,k,c=0;c<a.upgrades.length;++c)(function(b){g=a.upgrades[b];var c=!0;g.lockMaxBuy&&void 0!=g.unitSpawn&&(unitList[g.unitSpawn].count||0)>=(unitList[g.unitSpawn].limit||0)?
    c=!1:g.dontShow&&(c=!1);c&&(e=document.createElement("div"),e.className="upgradeInfo",h=document.createElement("div"),h.className="unitInfoName",h.innerHTML=g.name,e.appendChild(h),f=document.createElement("div"),f.className="unitInfoCost",g.cost?(f.innerHTML="Cost "+g.cost,e.appendChild(f)):(null),k=document.createElement("div"),k.id="upgrDesc"+b,k.className="unitInfoDesc",k.innerHTML=g.desc,k.style.display="none",e.appendChild(k),e.onmouseover=function(){document.getElementById("upgrDesc"+b).style.display="block"},
                                e.onmouseout=function(){document.getElementById("upgrDesc"+b).style.display="none"},e.onclick=function(){upgradeUnit(b);mainCanvas.focus()},unitInfoUpgrades.appendChild(e))})(c);g=e=h=f=k=null}}else a||(unitInfoContainer.style.display="none")};

updateGameLoop=function(a){if(player&&gameData){updateTarget();if(gameState&&mapBounds){if(camXS||camYS)camX+=camXS*cameraSpd*a,camY+=camYS*cameraSpd*a;player.x+camX<mapBounds[0]?camX=mapBounds[0]-player.x:player.x+camX>mapBounds[0]+mapBounds[2]&&(camX=mapBounds[0]+mapBounds[2]-player.x);player.y+camY<mapBounds[1]?camY=mapBounds[1]-player.y:player.y+camY>mapBounds[1]+mapBounds[3]&&(camY=mapBounds[1]+mapBounds[3]-player.y);
                                                                                        currentTime-lastCamSend>=sendFrequency&&(lastCamX!=camX||lastCamY!=camY)&&(lastCamX=camX,lastCamY=camY,lastCamSend=currentTime,socket.emit("2",Math.round(camX),Math.round(camY)))}renderBackground(outerColor);var d=(player.x||0)-maxScreenWidth/2+camX,c=(player.y||0)-maxScreenHeight/2+camY;mapBounds&&(mainContext.fillStyle=backgroundColor,mainContext.fillRect(mapBounds[0]-d,mapBounds[1]-c,mapBounds[2],mapBounds[3]));for(var b,g,e=0;e<units.length;++e)b=units[e],b.interpDst&&(g=b.interpDst*a*.015,b.interX+=
g*MathCOS(b.interpDir),b.interY+=g*MathSIN(b.interpDir),b.interpDst-=g,.1>=b.interpDst&&(b.interpDst=0,b.interX=b.interpDstS*MathCOS(b.interpDir),b.interY=b.interpDstS*MathSIN(b.interpDir))),b.speed&&(updateUnitPosition(b),b.x+=b.interX||0,b.y+=b.interY||0);var h,f;if(gameState)if(activeUnit){h=player.x-d+targetDst*MathCOS(targetDir)+camX;f=player.y-c+targetDst*MathSIN(targetDir)+camY;var k=UTILS.getDirection(h,f,player.x-d,player.y-c);0==activeUnit.type?(b=UTILS.getDistance(h,f,player.x-d,player.y-
c),b-activeUnit.size<player.startSize?(h=player.x-d+(activeUnit.size+player.startSize)*MathCOS(k),f=player.y-c+(activeUnit.size+player.startSize)*MathSIN(k)):b+activeUnit.size>player.buildRange-.15&&(h=player.x-d+(player.buildRange-activeUnit.size-.15)*MathCOS(k),f=player.y-c+(player.buildRange-activeUnit.size-.15)*MathSIN(k))):1==activeUnit.type||2==activeUnit.type?(h=player.x-d+(activeUnit.size+player.buildRange)*MathCOS(k),f=player.y-c+(activeUnit.size+player.buildRange)*MathSIN(k)):3==activeUnit.type&&
                                                                                            (b=UTILS.getDistance(h,f,player.x-d,player.y-c),b-activeUnit.size<player.startSize?(h=player.x-d+(activeUnit.size+player.startSize)*MathCOS(k),f=player.y-c+(activeUnit.size+player.startSize)*MathSIN(k)):b+activeUnit.size>player.buildRange+2*activeUnit.size&&(h=player.x-d+(player.buildRange+activeUnit.size)*MathCOS(k),f=player.y-c+(player.buildRange+activeUnit.size)*MathSIN(k)));activeUnitDir=k;activeUnitDst=UTILS.getDistance(h,f,player.x-d,player.y-c);activeUnit.dontPlace=!1;mainContext.fillStyle=
                                                                                            outerColor;if(0==activeUnit.type||2==activeUnit.type||3==activeUnit.type)for(e=0;e<units.length;++e)if(1!=units[e].type&&units[e].owner==player.sid&&0<=activeUnit.size+units[e].size-UTILS.getDistance(h,f,units[e].x-d,units[e].y-c)){mainContext.fillStyle=redColor;activeUnit.dontPlace=!0;break}renderCircle(h,f,activeUnit.range?activeUnit.range:activeUnit.size+30,mainContext,!0)}else if(selUnits.length)for(e=0;e<selUnits.length;++e)mainContext.fillStyle=outerColor,1<selUnits.length?renderCircle(selUnits[e].x-
d,selUnits[e].y-c,selUnits[e].size+25,mainContext,!0):renderCircle(selUnits[e].x-d,selUnits[e].y-c,selUnits[e].range?selUnits[e].range:selUnits[e].size+25,mainContext,!0);else activeBase&&(mainContext.fillStyle=outerColor,renderCircle(activeBase.x-d,activeBase.y-c,activeBase.size+50,mainContext,!0));if(selUnits.length)for(mainContext.strokeStyle=targetColor,e=0;e<selUnits.length;++e)selUnits[e].gatherPoint&&renderDottedCircle(selUnits[e].gatherPoint[0]-d,selUnits[e].gatherPoint[1]-c,30,mainContext);
                                                for(e=0;e<users.length;++e)if(b=users[e],!b.dead){mainContext.lineWidth=1.2*outlineWidth;mainContext.strokeStyle=indicatorColor;isOnScreen(b.x-d,b.y-c,b.buildRange)&&(mainContext.save(),mainContext.translate(b.x-d,b.y-c),mainContext.rotate(playerBorderRot),renderDottedCircle(0,0,b.buildRange,mainContext),renderDottedCircle(0,0,b.startSize,mainContext),mainContext.restore());b.spawnProt&&(mainContext.strokeStyle=redColor,mainContext.save(),mainContext.translate(b.x-d,b.y-c),mainContext.rotate(playerBorderRot),
renderDottedCircle(0,0,b.buildRange+140,mainContext),mainContext.restore());for(var m=0;m<users.length;++m)e<m&&!users[m].dead&&(mainContext.strokeStyle=b.spawnProt||users[m].spawnProt?redColor:indicatorColor,playersLinked(b,users[m])&&(isOnScreen(b.x-d,b.y-c,0)||isOnScreen(users[m].x-d,users[m].y-c,0)||isOnScreen((b.x+users[m].x)/2-d,(b.y+users[m].y)/2-c,0))&&(g=UTILS.getDirection(b.x,b.y,users[m].x,users[m].y),renderDottedLine(b.x-(b.buildRange+lanePad+(b.spawnProt?140:0))*MathCOS(g)-d,b.y-(b.buildRange+
lanePad+(b.spawnProt?140:0))*MathSIN(g)-c,users[m].x+(users[m].buildRange+lanePad+(users[m].spawnProt?140:0))*MathCOS(g)-d,users[m].y+(users[m].buildRange+lanePad+(users[m].spawnProt?140:0))*MathSIN(g)-c,mainContext)))}mainContext.strokeStyle=darkColor;mainContext.lineWidth=1.2*outlineWidth;for(e=0;e<units.length;++e)b=units[e],b.layer||(b.onScreen=!1,isOnScreen(b.x-d,b.y-c,b.size)&&(b.onScreen=!0,renderUnit(b.x-d,b.y-c,b.dir,b,playerColors[b.color],mainContext)));for(e=0;e<units.length;++e)b=units[e],
                                                    1==b.layer&&(b.onScreen=!1,isOnScreen(b.x-d,b.y-c,b.size)&&(b.onScreen=!0,renderUnit(b.x-d,b.y-c,b.dir,b,playerColors[b.color],mainContext)));mainContext.fillStyle=bulletColor;for(e=bullets.length-1;0<=e;--e){b=bullets[e];if(b.speed&&(b.x+=b.speed*a*MathCOS(b.dir),b.y+=b.speed*a*MathSIN(b.dir),UTILS.getDistance(b.sX,b.sY,b.x,b.y)>=b.range)){bullets.splice(e,1);continue}isOnScreen(b.x-d,b.y-c,b.size)&&renderCircle(b.x-d,b.y-c,b.size,mainContext)}mainContext.strokeStyle=darkColor;mainContext.lineWidth=
                                                    1.2*outlineWidth;for(e=0;e<users.length;++e)b=users[e],!b.dead&&isOnScreen(b.x-d,b.y-c,b.size)&&(renderPlayer(b,b.x-d,b.y-c,mainContext),"unknown"!=b.name&&(tmpIndx=b.name+"-"+b.size,20<=b.size&&b.nameSpriteIndx!=tmpIndx&&(b.nameSpriteIndx=tmpIndx,b.nameSprite=renderText(b.name,b.size/4)),b.nameSprite&&mainContext.drawImage(b.nameSprite,b.x-d-b.nameSprite.width/2,b.y-c-b.nameSprite.height/2,b.nameSprite.width,b.nameSprite.height)));if(selUnits.length)for(e=selUnits.length-1;0<=e;--e)selUnits[e]&&
                                                        0>units.indexOf(selUnits[e])&&disableSelUnit(e);activeUnit&&renderUnit(h,f,k,activeUnit,playerColors[player.color],mainContext);showSelector&&(mainContext.fillStyle="rgba(0, 0, 0, 0.1)",h=player.x-d+targetDst*MathCOS(targetDir)+camX,f=player.y-c+targetDst*MathSIN(targetDir)+camY,mainContext.fillRect(mouseStartX,mouseStartY,h-mouseStartX,f-mouseStartY));playerBorderRot+=a/5600;hoverUnit?toggleUnitInfo(hoverUnit):activeBase?toggleUnitInfo(activeBase,true):activeUnit?toggleUnitInfo(activeUnit):
                                                    0<selUnits.length?toggleUnitInfo(selUnits[0].info,!0):toggleUnitInfo()}};

var velocity = 150,
    GensBase = "",
    css = document.createElement("style"),
    Base = [],
    EnemyTroops = "",
    EnemyTotal = [];
css.innerText = `
#PowerDesc {
font-size: 10px;
}
`;
window.Defend = 0;
window.CommanderConfig = 0;
function TestePredict(){
    var Gens = [],
        Walls = [],
        Obj = [],
        Modo = "",
        PararSell = "";
    window.dst = window.dst || [];
    for(var a=[],i=0;i<units.length;++i){
        if(units[i].owner==player.sid){
            if(units[i].dir==3.14){
                if(units[i].type!==1){Obj+=1};
                if(units[i].uPath==3||units[i].uPath=="3,0"){Gens+=1};
                if(units[i].type==3){Walls+=1};
            };
        };
    };
    for(var a=[],i=0;i<units.length;++i){
        for(var i2=0;i2<units.length;i2++){
            if(units[i].owner==player.sid){
                if(units[i2].owner==player.sid){
                    if(units[i2].type!==1){
                        if(units[i2].type==3){
                            var SW = units[i2].id;
                        };
                        if(units[i2].uPath==3||units[i2].uPath=="3,0"){
                            var SG = units[i2].id;
                        };
                        if(units[i].type==1){
                            if(player.spawnProt==100){
                                if(units[i].x>(player.x-435)&&units[i].x<(player.x-50)&&units[i].y>(player.y-195)&&units[i].y<(player.y+195)){
                                    Modo = 'Defense';
                                    css.innerText = `#scoreContainer {background-color:#ff0000a0}`;
                                    document.head.appendChild(css);
                                    console.log('Gens:'+Gens.length+'Walls:'+Walls.length);
                                    if(Gens.length==1){
                                        a.push(SG) && socket.emit("3",a);
                                        socket.emit("1",MathPI,245.85,1);
                                        console.log('Vendeu Gens e fez walls');
                                    };
                                    if(Walls.length==0&&Gens.length==0){
                                        socket.emit("1",MathPI,245.85,1);
                                        console.log('Fez Walls');
                                    };
                                    if(player.power>=2000){
                                        setTimeout(function(){
                                            if(units[i2].uPath==1){
                                                socket.emit("4",units[i2].id,0);
                                            }},200);
                                        setTimeout(function(){
                                            if(units[i2].uPath=="1,0"){
                                                socket.emit("4",units[i2].id,0);
                                                console.log('Feito boulders e spikes(dentro da margem)');
                                            }},200);
                                    };
                                } else if(units[i].x>(player.x-50)||units[i].x<(player.x-435)){
                                    if(units[i].y>(player.y+195)||units[i].y<(player.y-195)){
                                        Modo = 'Rebuild';
                                        css.innerText = `#scoreContainer {background-color:#00ff00a0}`;
                                        document.head.appendChild(css);
                                        if(units[i].x>(player.x-50)||units[i].x<(player.x-435)){
                                            if(units[i].y>(player.y+195)||units[i].y<(player.y-195)){
                                                setTimeout(function(){
                                                    a.push(SW) && socket.emit("3",a);
                                                    if(Walls.length==0||Gens.length==0){
                                                        socket.emit("1",MathPI,245.85,3);
                                                        console.log('Fez Gens');
                                                    };
                                                },6000-player.power);
                                                console.log('Obj:'+Obj.length);
                                                if(Walls.length==0&&Gens.length==0){
                                                    socket.emit("1",MathPI,245.85,3);
                                                    console.log('Fez Gens');
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    if(Obj.length==0&&Modo=='Defense'){
        socket.emit("1",MathPI,245.85,1);
        console.log('Modo defesa e sem walls');
    };
    if(Obj.length==0&&Modo=='Rebuild'){
        socket.emit("1",MathPI,245.85,3);
        console.log('Modo rebuild e sem gens');
    };
};
/*setInterval(TestePredict,250);*/
var myNames = ["JS DANGER","Danger","Darkman","Darkman-JS","CoS-Devlopment","CoS-Development","CoS-Dev","OS"];
function TemaDark(){indicatorColor="#40404099",backgroundColor="#101010",darkColor="#ffffff75",
    outerColor="#161616",turretColor="#00000099",bulletColor="#ffffff",redColor=redColor,targetColor="#c9c9c9"};TemaDark();
function Danger(){
    if(DangerPerms==true) {
        HotWidth = 800;
        if(player.name=="eeeee"){
            setInterval(function(){alert("Mude de nome imediatamente!")},1);
            Music.pause();
        } else {
            setTimeout(function(){
                document.getElementById('Message').innerHTML = 'Nome aceito. (Nome: <span class="PlayerColor">'+player.name+'</span>)';
                document.getElementById('Message2').style.display = 'none';
                ColossusMsgFunc(1500);
            },1000);
        };
        for(var i=0;i<users.length;i++){
            for(var e=0;e<units.length;e++){
                if(users[i].sid!==player.sid){
                    if(users[i].name=="JS DANGER"||users[i].name=="Danger"||users[i].name=="Darkman"||users[i].name=="Darkman-JS"||users[i].name=="CoS-Devlopment"||users[i].name=="CoS-Development"||users[i].name=="CoS-Dev"){
                        if(units[e].uPath==9&&units[e].owner==users[i].sid){
                            for (var e = [], b = 0; b < Math.floor(selUnits.length-0); ++b) e.push(selUnits[b].id);
                            socket.emit("5",units[i].x+100,units[i].y,e,0,0);
                            if(selUnits.length==0){
                                selUnits = [];
                                units.every((unit) => {
                                    if (unit.owner === player.sid && unit.type === 1) {
                                        if (!unit.info) unit.info = getUnitFromPath(unit.uPath);
                                        if (unit.info.name === 'Commander') {
                                            selUnits.push(unit);
                                            return false;
                                        };
                                    };
                                    return true;
                                });
                                selUnitType = "Unit";
                            };
                        };
                    };
                };
            };
        };
    };
};
window.autoDefense = false;
function Script(){
    window.enemydst = 450;
    var x = setInterval(function(){
        var Gens = [],
            PowerPlants = [],
            Turrets = [],
            Ranged = [],
            Spotter = [],
            Commander = [],
            Walls = [],
            Boulders = [],
            Spikes = [],
            CommanderEnemy = [],
            SoldierEnemy = [],
            Hotbar = document.getElementsByClassName("ColossusScriptV5Hot");
        window.Modo = 'Friend';
        for(var a=[],i=0;i<units.length;i++){
            if(units[i].owner!==player.sid){
                if(units[i].uPath==9){CommanderEnemy+=1};
                if(units[i].uPath==0){SoldierEnemy+=1};
                if(units[i].x>(player.x-enemydst)&&units[i].x<(player.x+enemydst)&&units[i].y>(player.y-enemydst)&&units[i].y<(player.y+enemydst)){
                    Modo = 'Enemy';
                } else {
                    Modo = 'Friend';
                };
            };
            if(units[i].owner==player.sid){
                if(units[i].uPath=="2,0"||units[i].uPath=="2,0,0"||units[i].uPath=="1,1"){
                    a.push(units[i].id);
                    socket.emit("3",a);
                    camX = camY = 0;
                };
                if(units[i].uPath==3){
                    Gens+=1;
                };
                if(units[i].uPath=="3,0"){
                    PowerPlants+=1;
                };
                if(units[i].uPath==2){
                    Turrets+=1;
                };
                if(units[i].uPath=="2,1"){
                    Ranged+=1;
                };
                if(units[i].uPath=="2,1,0"){
                    Spotter+=1;
                };
                if(units[i].uPath==1){
                    Walls+=1;
                };
                if(units[i].uPath=="1,0"){
                    Boulders+=1;
                };
                if(units[i].uPath=="1,0,0"){
                    Spikes+=1;
                };
                if(units[i].uPath==9){
                    Commander+=1;
                };
                if(player.power>=100&&units[i].uPath==3){
                    socket.emit("4",units[i].id,0);
                    camX = camY = 0;
                };
                if(player.power>=61&&units[i].uPath==2){
                    socket.emit("4",units[i].id,1);
                    camX = camY = 0;
                };
                if(player.power>=101&&units[i].uPath=="2,1"){
                    socket.emit("4",units[i].id,0);
                    camX = camY = 0;
                };
                if(player.power>=61&&units[i].uPath==1){
                    socket.emit("4",units[i].id,0);
                    camX = camY = 0;
                };
                if(player.power>=401&&units[i].uPath=="1,0"){
                    socket.emit("4",units[i].id,0);
                    camX = camY = 0;
                };
                if(player.power>=501&&units[i].uPath==9){
                    socket.emit("4",units[i].id,0);
                };
                if((Walls.length+Boulders.length+Spikes.length)>30&&units[i].uPath==1){
                    a.push(units[i].id);
                    socket.emit("3",a);
                    camX = camY = 0;
                };
            };
        };
        if(Modo=='Enemy'){
            EnemyTroop = 'C:'+CommanderEnemy.length+' | S:'+SoldierEnemy.length;
            socket.on("pt",function(a,b){scoreContainer.innerHTML="Power <span id='Power' class='greyMenuText'>"+a+"</span>"+"<span id='PowerTest' class='greyMenuText'>(</span><span>"+EnemyTroop+"</span><span class='greyMenuText'>)</span>"});
        };
        if(player.power>=51&&(Gens.length+PowerPlants.length)<30){
            for(a=MathPI*1.5;a<((MathPI*1.5)+(MathPI*2));a+=MathPI/9){
                socket.emit('1',a,250,3);
                camX = camY = 0;
            };
            for(a=MathPI*1.5;a<((MathPI*1.5)+(MathPI*2));a+=MathPI/6){
                socket.emit('1',a,120,3);
                camX = camY = 0;
            };
        };
        if(player.power>=((25*18)-(25*(Turrets.length+Ranged.length+Spotter.length))+1)&&(Turrets.length+Ranged.length+Spotter.length)<18&&PowerPlants.length==30){
            for(a=(MathPI*1.5)+(MathPI/18);a<(((MathPI*1.5)+(MathPI/18))+(MathPI*2));a+=MathPI/9){
                socket.emit('1',a,194.5,2);
                camX = camY = 0;
            };
        };
        if(Spotter.length==18&&PowerPlants.length==30&&Commander.length==0&&player.power>=2000){
            socket.emit("4",0,0,1);
            camX = camY = 0;
        };
        if(player.power>=21&&(Walls.length+Boulders.length+Spikes.length)<30&&Spotter.length==18&&PowerPlants.length==30&&Commander.length==1){
            for(a=MathPI*1.5;a<((MathPI*1.5)+(MathPI*2));a+=MathPI/15){
                socket.emit("1",a,350,1);
                camX = camY = 0;
            };
        };
        socket.on("pt",function(a,b){scoreContainer.innerHTML="Power <span id='Power' class='PlayerColor'>"+a+"</span>"+"<span id='PowerTest' class='greyMenuText'>(</span><span>"+GensBase+"</span><span class='greyMenuText'>)</span>"});
        if((Gens.length+PowerPlants.length)<30){GensBase="More <span class='PlayerColor'>"+(30-Gens.length)+"</span> gens"};
        if(Gens.length>0&&PowerPlants.length>0&&PowerPlants.length<30){GensBase="More <span class='PlayerColor'>"+(30-PowerPlants.length)+"</span> plants"};
        if(PowerPlants.length==30&&Turrets.length<18){GensBase="More <span class='PlayerColor'>"+(18-Turrets.length)+"</span> turrets"};
        if(PowerPlants.length==30&&Turrets.length>=0&&Ranged.length>0&&Ranged.length<=18){GensBase="More <span class='PlayerColor'>"+(Turrets.length)+"</span> rangeds"};
        if(PowerPlants.length==30&&Ranged.length>=0&&Spotter.length>0&&Spotter.length<=18){GensBase="More <span class='PlayerColor'>"+(Ranged.length)+"</span> spotters"};
        if(PowerPlants.length==30&&Spotter.length==18&&Commander.length==0){GensBase="Build Commander"};
        if(Commander.length==1&&PowerPlants.length==30&&Spotter.length==18&&Walls.length<30){GensBase="More <span class='PlayerColor'>"+(30-Walls.length)+"</span> walls"};
        if(Commander.length==1&&PowerPlants.length==30&&Spotter.length==18&&Walls.length>=0&&Boulders.length>0&&Boulders.length<=30){GensBase="More <span class='PlayerColor'>"+(Walls.length)+"</span> boulders"};
        if(Commander.length==1&&PowerPlants.length==30&&Spotter.length==18&&Boulders.length>=0&&Spikes.length>0&&Spikes.length<=30){GensBase="More <span class='PlayerColor'>"+(Boulders.length)+"</span> spikes"};
        if(PowerPlants.length==30&&Spotter.length==18&&Spikes.length==30&&Commander.length==1){GensBase="Finish!"};
    },velocity);
};
$("#youtuberOf").hide();
$("#youtubeFollow").hide();
$("#adCard").hide();
$("#mobileInstructions").hide();
$("#promoImgHolder").hide();
$("#downloadButtonContainer").hide();
$("#mobileDownloadButtonContainer").hide();
$(".downloadBadge").hide();
$("#creatorLink").hide();
$("#infoLinks").hide();
$("#skinInfo").hide();
$("#skinSelector").hide();
$("#instructionsText").hide();
$("#optionsContainer").hide();
var kekw = document.getElementById('smallAdContainer');
kekw.innerHTML = `<button id="mydiv"><div id="mydivheader">&#11135</div></button>`;
//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
var css2 = document.createElement("style");
css2.innerText = `
#mydiv {
color: #000;
cursor: pointer;
background: url("https://cdn.discordapp.com/attachments/827935693459947540/829516034662072321/toma_noku_dangerina.png") no-repeat center;
padding: 40px;
height: 100px;
width: 100px;
border-radius: 10px;
  position: relative;
  background-color: #000000a0;
  text-align: center;
  border: 1px solid #ffffff;
}
#mydivheader {
color: #fff;
margin-left: -39px;
margin-top: -49px;
width: 10px;
position: relative;
  cursor: move;
  background-color: #fff0;
}
`;
document.head.appendChild(css2);
document.getElementById("mydiv").addEventListener("click", function() {
    window.novaHot();
});
window.novaHot = function(){

};
var userInfoContainer2Var = document.createElement("div");
userInfoContainer2Var.id = "userInfoContainer2";
setInterval(PredictStats2,0);
function PredictStats2() {
    if (!document.getElementById("centerContent")) {
        document.getElementsByClassName("centerContent")[0].id = "centerContent";
    };
    if (document.getElementById("centerContent") && !document.getElementById("userInfoContainer2")) {
        document.getElementById("centerContent").appendChild(userInfoContainer2Var);
    };
    if (document.getElementById("userInfoContainer2") && !document.getElementById("CopyLink")) {
        document.getElementById("userInfoContainer2").appendChild(css4);
    };
};
var css4 = document.createElement("div");
css4.id = 'CopyLink';
css4.innerHTML = `<div ondblclick=copyLinkGame()>COPY LINK</div>`;
window.copyLinkGame = function(){
    var css5 = document.createElement("style");
    css4.innerHTML = `<input type="text" id="LinkGame" ()></input>`;
    document.getElementById('LinkGame').value = window.location.href;
    document.getElementById('LinkGame').select();
    document.execCommand('copy');
    css4.innerHTML = `<div()>LINK COPIADO!</div>`;
    setTimeout(function(){
        css5.innerText = `
#CopyLink {
opacity: 0;
-webkit-transform: scale(0);
-ms-transform: scale(0);
transform: scale(0);
}
`;
        document.head.appendChild(css5);
    },2000);
    setTimeout(function(){
        document.getElementById("CopyLink").style.display = 'none';
        document.getElementById('userInfoContainer2').removeChild(css4);
    },2500);
};
var css3 = document.createElement("style");
css3.innerText = `
#userInfoContainer, #userInfoContainer2 {
transition: .5s;
}
#LinkGame {
background-color: #000000;
font-family: "regularF";
font-size: 12px;
border: none;
box-shadow:inset 0 0 5px 0px #ffffffa0;
}
#CopyLink {
padding: 10px;
cursor: pointer;
margin: 10px;
font-size: 50px;
display: inline-block;
font-family: "Cooper Black";
transition: .5s;
background-color: #000000;
color: #000000;
border-radius: 4px;
box-shadow:inset 0 0 5px 1.5px #ffffffa0;
text-shadow:0.5px 0px 0px#ffffff,-0.5px 0px 0px#ffffff,0px 0.5px 0px#ffffff,0px -0.5px 0px#ffffff,0.5px 0.5px 0px#ffffff,0.5px -0.5px 0px#ffffff,-0.5px 0.5px 0px#ffffff,-0.5px -0.5px 0px#ffffff
}
#userNameInput, #enterGameButton {
padding: 10px;
text-align: center;
font-family: "Cooper Black";
transition: .5s;
font-size: 50px;
background-color: #000000;
color: #000000;
border-radius: 4px;
box-shadow:inset 0 0 5px 1.5px #ffffffa0;
text-shadow:0.5px 0px 0px#ffffff,-0.5px 0px 0px#ffffff,0px 0.5px 0px#ffffff,0px -0.5px 0px#ffffff,0.5px 0.5px 0px#ffffff,0.5px -0.5px 0px#ffffff,-0.5px 0.5px 0px#ffffff,-0.5px -0.5px 0px#ffffff
}
#userNameInput:hover, #enterGameButton:hover, #CopyLink:hover {
background-color: #202020;
border-radius: 8px;
text-shadow:1px 0px 0px#ffffff,-1px 0px 0px#ffffff,0px 1px 0px#ffffff,0px -1px 0px#ffffff,1px 1px 0px#ffffff,1px -1px 0px#ffffff,-1px 1px 0px#ffffff,-1px -1px 0px#ffffff
}
.scoreText,.greyMenuText {
color:`+GreyMenuText+`
}
#chatListWrapper {
transition: .5s;
height:50px;
border-radius: 8px 8px 4px 4px;
background-color:#00000000;
box-shadow:inset 0 0 0 0.5px#ffffff50
}
#chatListWrapper:hover {
border-radius: 4px 4px 0px 0px;
box-shadow:inset 0 0 0 1.5px#ffffffa0;
height:255px
}
.chatText {
color:#000000;
text-shadow:0.5px 0px 0px#ffffff,-0.5px 0px 0px#ffffff,0px 0.5px 0px#ffffff,0px -1px 0px#ffffff,0.5px 0.5px 0px#ffffff,0.5px -0.5px 0px#ffffff,-0.5px 0.5px 0px#ffffff,-0.5px -0.5px 0px#ffffff
}
#skinInfo {
	font-size: 24px;
}
#menuContainer {
	background: url("https://cdn.discordapp.com/attachments/827372040096448522/829075677037723668/thumb-1920-669967.png") no-repeat center;
    top: 0px;
}
`;
document.head.appendChild(css3);
function PlacarColor(){
    document.getElementById('leaderboardHeader').innerHTML = '<span style="color:#000000;text-shadow:1px 0px 0px '+playerColors[player.color]+',-1px 0px 0px '+
        playerColors[player.color]+',0px 1px 0px '+playerColors[player.color]+',0px -1px 0px '+playerColors[player.color]+',1px 1px 0px '+playerColors[player.color]+',1px -1px 0px '+playerColors[player.color]+
        ',-1px 1px 0px '+playerColors[player.color]+',-1px -1px 0px '+playerColors[player.color]+'">OS - Score</span>';
};

var New = document.createElement("style");
window.chatCommands = window.chatCommands || {};
window.userCommands = window.userCommands || {};
window.resetCamera = function () { // Override
    camX = camXS = camY = camYS = 0;
    cameraKeys = {
        l: 0,
        r: 0,
        u: 0,
        d: 0
    };
    if (socket && window.overrideSocketEvents && window.overrideSocketEvents.length) {
        window.overrideSocketEvents.forEach((item) => {
            socket.removeAllListeners(item.name);
            socket.on(item.name, item.func);
        });
    };
};
var muted = [];
window.overrideSocketEvents.push({
    name: "ch",
    description: "Chat Muter",
    func: function (a, d, c) {
        if (!muted[a])
            addChatLine(a, d, c);
    }
});
window.addChat = function (msg, from, color) {
    color = color || "#fff";
    var b = document.createElement("li");
    b.className = "chatother";
    b.innerHTML = '<span style="color:#000000;text-shadow:1px 0px 0px ' + color +
        ',-1px 0px 0px ' + color + ',0px 1px 0px ' + color + ',0px -1px 0px ' +
        color + ',1px 1px 0px ' + color + ',1px -1px 0px ' + color + ',-1px 1px 0px ' + color +
        ',-1px -1px 0px ' + color + '">[' + from + ']</span> <span class="chatText">' + msg + "</span>";
    10 < chatList.childNodes.length && chatList.removeChild(chatList.childNodes[0]);
    chatList.appendChild(b);
};
window.chatCommands.find = function(split) {
    var name = split.slice(1).join(' ');
    if (name == '') {
        addChat('Digite o nome do usuário!', 'CoS-Development',playerColors[player.color]);
        return;
    };
    window.goto(name);
};
window.goto = function(username) {
    gotoUsers = users.filter((user) => {
        return user.name === username;
    });
    gotoIndex = 0;
    if (gotoUsers[0]) {
        camX = gotoUsers[0].x - player.x;
        camY = gotoUsers[0].y - player.y;
    };
    addChat(gotoUsers.length + ' usuários encontrados pelo nome '+username,'CoS-Development',playerColors[player.color]);
    return gotoUsers.length;
};
window.chatCommands.mute = function (split) {
    if (!split[1]) {
        addChat('Digite o nome do usuário!','CoS-Development',playerColors[player.color]);
    } else if (split[1] === 'all') {
        users.forEach((user) => {
            muted[user.sid] = true;
            mutados = users.length;
        });
        addChat(users.length+' Usuários mutados!','CoS-Development',playerColors[player.color]);
    } else {
        var len = 0;
        users.forEach((user) => {
            if (user.name === split[1]) {
                muted[user.sid] = true;
                len++;
            };
        });
        addChat(len+' Usuários mutados pelo nome ' + split[1],'CoS-Development',playerColors[player.color]);
    };
};
window.chatCommands.search = function (split) {
    if(split[1]!==""&&split[1]!=="Discord"&&split[1]!=="Disc"&&split[1]!=="Youtube"&&split[1]!=="YT"&&split[1]!=="Google"){
        if(split[1]!=="http"&&split[1]!=="https"&&split[1]!=="discord.gg"&&split[1]!=="www"){
            addChat('Por favor informe <span class="greyMenuText">CORRETAMENTE</span> o link a ser aberto!','CoS-Development',playerColors[player.color]);
        } else {
            window.open(split[1]);
            addChat('O link "<span class="greyMenuText">'+split[1]+'</span>" foi aberto com sucesso!','CoS-Development',playerColors[player.color]);
        }};
    if(!split[2] && !split[1]){
        addChat('Por favor informe o link a ser aberto!','CoS-Development',playerColors[player.color]);
    };
    if(split[1] === "Discord" || split[1] === "Disc"){
        if (!split[2]) {
            addChat('Por favor informe o link a ser aberto!','CoS-Development',playerColors[player.color]);
        } else {
            window.open('http://discord.gg/'+split[2]);
            addChat('O Discord link "<span class="greyMenuText">http://discord.gg/'+split[2]+'</span>" foi aberto com sucesso!','CoS-Development',playerColors[player.color]);
        };
    } else if(split[1] === "Youtube" || split[1] === "YT"){
        if (!split[2]) {
            addChat('Por favor informe o link a ser aberto!','CoS-Development',playerColors[player.color]);
        } else {
            window.open('https://www.youtube.com/watch?v='+split[2]);
            addChat('O Youtube link "<span class="greyMenuText">https://www.youtube.com/watch?v='+split[2]+'</span>" foi aberto com sucesso!','CoS-Development',playerColors[player.color]);
        };
    } else if(split[1] === "Google"){
        if (!split[2]) {
            addChat('Por favor informe o link a ser aberto!','CoS-Development',playerColors[player.color]);
        } else {
            window.open('https://www.google.com/search?'+split[2]);
            addChat('O Google link "<span class="greyMenuText">https://www.google.com/search?'+split[2]+'</span>" foi aberto com sucesso!','CoS-Development',playerColors[player.color]);
        };
    };
};
window.chatCommands.unmute = function (split) {
    if (!split[1]) {
        addChat('Por favor informe o nome do usuário ou digite todos(all).','CoS-Development',playerColors[player.color]);
    } else if (split[1] === 'all') {
        addChat(Object.keys(mute).length+' Usuários desmutados!','CoS-Development',playerColors[player.color]);
        muted = {};
    } else {
        var len = 0;
        users.forEach((user) => {
            if (user.name === split[1]) {
                muted[user.sid] = false;
                len++;
            };
        });
        addChat(len+' Usuários desmutados pelo nome ' + split[1],'CoS-Development',playerColors[player.color]);
    };
};
window.chatCommands.help = function (split) {var Cor = player.color;
                                             var avail = Object.keys(window.chatCommands);
                                             addChat('Olá '+player.name+'! Temos <span class="PlayerColor">'+avail.length+' comandos</span> disponíveis!','CoS-Development',playerColors[player.color]);
                                             addChat(''+avail.join('<span class="PlayerColor">,</span> '), 'CoS-Development',playerColors[player.color]);
                                            };
window.chatCommands.playerlist = function (split) {
    var page = parseInt(split[1]) || 1;
    var total = Math.ceil(users.length / 18);
    addChat('Temos um total de ' + users.length + ' membros. Página '+page+' de '+total,'CoS-Development',playerColors[player.color]);
    var offset = page * 18;
    for (var i = 0; i < 18; i++) {
        if (!users[i + offset]) break;
        addChat(users[i + offset].name,'CoS-Development',playerColors[users[i + offset].color]);
    };
};
window.chatCommands.keys = function () {
    var css = document.createElement("style");
    css.innerText = `
#Message2 {
opacity: 1;
}
`;
    document.head.appendChild(css);
    window.Milesium = 1000;
    window.time = TimeClear/500;
    HotWidth = 850;
    var ColossusMsgText = document.getElementById('Message'),
        ColossusMsgText2=document.getElementById('Message2');
    setTimeout(function(){ColossusMsgFunc(2000);ColossusMsgText.innerHTML="<span class='PlayerColor'>'Tab'</span> Move a câmera para seu bot.";
                          ColossusMsgText2.innerHTML="<span class='PlayerColor'>'-'</span> Compra e/ou seleciona Commander."},(time*0)*Milesium);
    setTimeout(function(){ColossusMsgFunc(2000);ColossusMsgText.innerHTML="<span class='PlayerColor'>'+'</span> Cria bots.";
                          ColossusMsgText2.innerHTML="<span class='PlayerColor'>'Shift'</span> pressione-o para acelerar a câmera."},(time*1)*Milesium);
    setTimeout(function(){ColossusMsgFunc(2000);ColossusMsgText.innerHTML="<span class='PlayerColor'>'F'</span> Zoom externo.";
                          ColossusMsgText2.innerHTML="<span class='PlayerColor'>'C'</span> Zoom interno."},(time*2)*Milesium);
    setTimeout(function(){ColossusMsgFunc(2000);ColossusMsgText.innerHTML="<span class='PlayerColor'>';'</span> Ativa/desativa o Troop Join.";
                          ColossusMsgText2.innerHTML="<span class='PlayerColor'>'.'</span> Move a câmera para o último jogador observado."},(time*3)*Milesium);
    setTimeout(function(){ColossusMsgFunc(2000);ColossusMsgText.innerHTML="<span class='PlayerColor'>','</span> Mode a câmera para jogadores com o nome do último observado.";
                          ColossusMsgText2.innerHTML="<span class='PlayerColor'>'F9'</span> Ativa uma defesa especial."},(time*4)*Milesium);
};

window.chatCommands.clear = function () {
    while (chatList.hasChildNodes()) {
        chatList.removeChild(chatList.lastChild);
    };
    addChat('Chat limpo com sucesso!','CoS-Development',playerColors[player.color]);
};
var modsShown = true;
window.chatCommands.hotbar = function () {
    var element = document.getElementById('ColossusScriptV5Hot');
    if (modsShown) {
        modsShown = false;
        element.style.display = 'none';
        addChat('Hotbar desativada!','CoS-Development',playerColors[player.color]);
    } else {
        modsShown = true;
        element.style.display = 'block';
        addChat('Hotbar ativada!','CoS-Development',playerColors[player.color]);
    };
};
var CenterStats = false;
window.chatCommands.centerstats = function () {
    var CenderDesc = document.getElementById('unitInfoDesc');
    if(CenterStats==true){
        CenterStats=false;
        addChat('Status do núcleo desativado!','CoS-Development',playerColors[player.color]);
        socket.on("setUser",function(a,d){if(a&&a[0]){var c=getUserBySID(a[0]),b={sid:a[0],name:a[1],iName:"Headquarters",upgrades:[window.share.getBaseUpgrades()[1]],dead:!1,color:a[2],size:a[3],startSize:a[4],x:a[5],y:a[6],buildRange:a[7],gridIndex:a[8],spawnProt:a[9],skin:a[10],desc:"This is the base of operations of "+a[1],kills:0,typeName:"Base"};null!=c?(users[c]=b,d&&(player=users[c])):(users.push(b),d&&(player=users[users.length-1]))}});
    } else if(CenterStats==false){
        CenterStats=true;
        addChat('Status do núcleo ativado!','CoS-Development',playerColors[player.color]);
        socket.on("setUser",function(a,d){if(a&&a[0]){var c=getUserBySID(a[0]),b={sid:a[0],name:a[1],iName:"Headquarters",upgrades:[window.share.getBaseUpgrades()[1]],dead:!1,color:a[2],size:a[3],startSize:a[4],x:a[5],y:a[6],buildRange:a[7],gridIndex:a[8],spawnProt:a[9],skin:a[10],desc:"Name:"+a[1]+"\nID:"+a[0]+"\nNucleo:"+a[3]+"% \nProteção:"+a[9]+"\nSkin:"+a[10]+"\nCor:"+a[2],kills:0,typeName:"Base"};null!=c?(users[c]=b,d&&(player=users[c])):(users.push(b),d&&(player=users[users.length-1]))}});
    };
};
window.chatCommands.player = function () {
    addChat('Núcleo:'+player.size+'\nNome:'+player.name+'\nSID:'+player.sid+'\nColor:'+playerColors[player.color]+'\nSkin:'+player.skin,'CoS-Development',playerColors[player.color]);
};
window.userCommands.help = function(){var Cor = player.color;
                                      var avail = Object.keys(window.userCommands);
                                      addChat('Olá '+player.name+'! Temos <span class="PlayerColor">'+avail.length+' comandos</span> disponíveis!','CoS-Development',playerColors[player.color]);
                                      addChat(''+avail.join('<span class="PlayerColor">,</span> '), 'CoS-Development',playerColors[player.color]);
                                     };
var PermsSay = false;
window.userCommands.say = function(split){var Color = player.color, MainID = [];
                                          var name = split.slice(1).join(' ');
                                          if(name!=="Enable"&&name!=="Disable"){
                                              addChat('Insira a ação á ser feita! (<span style="text-shadow:1px 0px 0px '+playerColors[Color]+',-1px 0px 0px '+playerColors[Color]+',0px 1px 0px '+playerColors[Color]+',0px -1px 0px '+
                                                      playerColors[Color]+',1px 1px 0px '+playerColors[Color]+',1px -1px 0px '+playerColors[Color]+',-1px 1px 0px '+playerColors[Color]+
                                                      ',-1px -1px 0px '+playerColors[Color]+'">Enable</span> ou <span style="text-shadow:1px 0px 0px '+playerColors[Color]+',-1px 0px 0px '+playerColors[Color]+',0px 1px 0px '+playerColors[Color]+',0px -1px 0px '+
                                                      playerColors[Color]+',1px 1px 0px '+playerColors[Color]+',1px -1px 0px '+playerColors[Color]+',-1px 1px 0px '+playerColors[Color]+
                                                      ',-1px -1px 0px '+playerColors[Color]+'">Disable</span>)', 'CoS-Development',playerColors[player.color]);
                                          };
                                          if(name==="Enable"){
                                              addChat('Duplicação feita com sucesso!', 'CoS-Development',playerColors[player.color]);
                                              window.addChatLine=function(a,d,c,split){if(player){var b=getUserBySID(a);if(c||0<=b){var Cor=users[b].color, g=c?"SERVER":users[b].name,k=c?"SERVER":users[b].chatText;c=c?"#fff":"#000000"?"#000000":playerColors[0];player.sid==a
                                                                                                                                    &&(c="#000000");b=document.createElement("li");b.className=player.sid==a?"chatme":"chatother";b.innerHTML='<span style="color:'+c+';'+
                                                  'text-shadow:1px 0px 0px '+playerColors[Cor]+',-1px 0px 0px '+playerColors[Cor]+',0px 1px 0px '+playerColors[Cor]+',0px -1px 0px '+
                                                  playerColors[Cor]+',1px 1px 0px '+playerColors[Cor]+',1px -1px 0px '+playerColors[Cor]+',-1px 1px 0px '+playerColors[Cor]+
                                                  ',-1px -1px 0px '+playerColors[Cor]+'" onclick=goto2('+a+');>'+g+' </span><span class="greyMenuText">≫</span> <span class="chatText">'+d+"</span>";
                                                                                                                                    10<chatList.childNodes.length&&chatList.removeChild(chatList.childNodes[0]);chatList.appendChild(b)}};
                                                                                       for(var i=0;i<users.length;i++){
                                                                                           if(users[i].sid!==player.sid){
                                                                                               MainID = users[i].sid;
                                                                                               if(PermsSay==true&&g==player.name&&a==MainID){
                                                                                                   if(d!=="D!"){
                                                                                                       socket.emit("ch",d);
                                                                                                   };
                                                                                               };
                                                                                               if(d=="D!"){
                                                                                                   addChat('Duplicação desfeita com sucesso!', 'CoS-Development',playerColors[player.color]);
                                                                                                   PermsSay = false;
                                                                                               };
                                                                                               if(PermsSay==false&&g==player.name&&d=="A!"&&a==MainID){
                                                                                                   addChat('Duplicação feita com sucesso!', 'CoS-Development',playerColors[player.color]);
                                                                                                   PermsSay = true;
                                                                                               };
                                                                                           };
                                                                                       };
                                                                                      };
                                          };
                                          if(name==="Disable"){
                                              addChat('Duplicação desfeita com sucesso!', 'CoS-Development',playerColors[player.color]);
                                              window.addChatLine=function(a,d,c,split){if(player){var b=getUserBySID(a);if(c||0<=b){var Cor=users[b].color, g=c?"SERVER":users[b].name,k=c?"SERVER":users[b].chatText;c=c?"#fff":"#000000"?"#000000":playerColors[0];player.sid==a
                                                                                                                                    &&(c="#000000");b=document.createElement("li");b.className=player.sid==a?"chatme":"chatother";b.innerHTML='<span style="color:'+c+';'+
                                                  'text-shadow:1px 0px 0px '+playerColors[Cor]+',-1px 0px 0px '+playerColors[Cor]+',0px 1px 0px '+playerColors[Cor]+',0px -1px 0px '+
                                                  playerColors[Cor]+',1px 1px 0px '+playerColors[Cor]+',1px -1px 0px '+playerColors[Cor]+',-1px 1px 0px '+playerColors[Cor]+
                                                  ',-1px -1px 0px '+playerColors[Cor]+'" onclick=goto2('+a+');>'+g+' </span><span class="greyMenuText">≫</span> <span class="chatText">'+d+"</span>";
                                                                                                                                    10<chatList.childNodes.length&&chatList.removeChild(chatList.childNodes[0]);chatList.appendChild(b)}}};
                                          };
                                         };
window.userCommands.copyBase = function(split, sid){
    var name = split.slice(1).join(' '), NameUser = [], Color = [], Save;
    if(name===""){addChat('Digite o nome do usuário!','CoS-Development',playerColors[player.color])};
    for(var u=0;u<users.length;u++){
        if(users[u].sid!==player.sid&&users[u].name==player.name){
            if(name===users[u].name||name==="Bot"){
                NameUser = users[u].name;
                Color = users[u].color;
                camX = users[u].x - player.x;
                camY = users[u].y - player.y;
                Save = saveBase(users[u].sid);
                setTimeout(Save,2000);
                setTimeout(function(){
                    loadBase();
                },3000);
                setTimeout(function(){
                    camX = camY = 0;
                    buildLoadedBase();
                },4000);
                addChat('A base de <span style="color:'+Color+';text-shadow:1px 0px 0px '+playerColors[Color]+',-1px 0px 0px '+playerColors[Color]+',0px 1px 0px '+playerColors[Color]+',0px -1px 0px '+
                        playerColors[Color]+',1px 1px 0px '+playerColors[Color]+',1px -1px 0px '+playerColors[Color]+',-1px 1px 0px '+playerColors[Color]+
                        ',-1px -1px 0px '+playerColors[Color]+'">'+NameUser+'</span> foi copiada com sucesso!','CoS-Development',playerColors[player.color]);
            } else if(name!==""){
                addChat('Nome de usuário incorreto!','CoS-Development',playerColors[player.color]);
            };
        };
    };
    function loadBase(){
        loadedBase = JSON.parse(localStorage.getItem("base_"+NameUser));
    };
    function saveBase(userSid){
        var user = users[getUserBySID(userSid)],
            base = [];
        for(var i=0;i<units.length;i++){
            if(units[i].owner == userSid && units[i].type!=1){
                var unit = units[i];
                base.push({
                    dir:UTILS.getDirection(units[i].x,units[i].y,user.x,user.y),
                    dst:UTILS.getDistance(user.x,user.y,units[i].x,units[i].y),
                    uPath:units[i].uPath,
                });
            };
        };
        localStorage.setItem("base_"+NameUser,JSON.stringify(base));
    };
};
window.userCommands.mirrorTroops = function(){var CounterCommander = [], MainID = [];
                                              addChat('Configurações ativas!','CoS-Development',playerColors[player.color]);
                                              for(i=0;i<users.length;i++){
                                                  if(users[i].sid!==player.sid&&users[i].name==player.name){
                                                      MainID = users[i].sid;
                                                  };
                                              };
                                              var LocalX = [],
                                                  LocalY = [];
                                              for(i=0;i<units.length;i++){
                                                  if(units[i].owner==MainID){
                                                      if(units[i].uPath==9){
                                                          CounterCommander = 1;
                                                          LocalX = Math.floor(units[i].x);
                                                          LocalY = Math.floor(units[i].y);
                                                      };
                                                  };
                                              };
                                              var MyLocalX = [],
                                                  MyLocalY = [];
                                              var MyCommander = [];
                                              for(i=0;i<units.length;i++){
                                                  if(units[i].owner==player.sid){
                                                      if(units[i].uPath==9){
                                                          MyCommander = 1;
                                                          MyLocalX = Math.floor(units[i].x);
                                                          MyLocalY = Math.floor(units[i].y);
                                                      };
                                                  };
                                              };
                                              window.addChatLine=function(a,d,c,split){if(player){var b=getUserBySID(a);if(c||0<=b){var Cor=users[b].color, g=c?"SERVER":users[b].name,k=c?"SERVER":users[b].chatText;c=c?"#fff":"#000000"?"#000000":playerColors[0];player.sid==a
                                                                                                                                    &&(c="#000000");b=document.createElement("li");b.className=player.sid==a?"chatme":"chatother";b.innerHTML='<span style="color:'+c+';'+
                                                  'text-shadow:1px 0px 0px '+playerColors[Cor]+',-1px 0px 0px '+playerColors[Cor]+',0px 1px 0px '+playerColors[Cor]+',0px -1px 0px '+
                                                  playerColors[Cor]+',1px 1px 0px '+playerColors[Cor]+',1px -1px 0px '+playerColors[Cor]+',-1px 1px 0px '+playerColors[Cor]+
                                                  ',-1px -1px 0px '+playerColors[Cor]+'" onclick=goto2('+a+');>'+g+' </span><span class="greyMenuText">≫</span> <span class="chatText">'+d+"</span>";
                                                                                                                                    10<chatList.childNodes.length&&chatList.removeChild(chatList.childNodes[0]);chatList.appendChild(b)}};
                                                                                       if(MyCommander==1&&CounterCommander==1&&a!==player.sid&&g==player.name&&d=="*Join"){
                                                                                           if(selUnits==0){
                                                                                               addChat('Commander selecionado!','CoS-Development',playerColors[player.color]);
                                                                                               selUnits = [];
                                                                                               units.every((unit) => {
                                                                                                   if (unit.owner === player.sid && unit.type === 1) {
                                                                                                       if (!unit.info) unit.info = getUnitFromPath(unit.uPath);
                                                                                                       if (unit.info.name === 'Commander') {
                                                                                                           selUnits.push(unit);
                                                                                                           return false;
                                                                                                       };
                                                                                                   };
                                                                                                   return true;
                                                                                               });
                                                                                               selUnitType = "Unit";
                                                                                           } else {
                                                                                               if(MyLocalX!==(LocalX-100)||MyLocalY!==LocalY){
                                                                                                   addChat('Tropas unidas com sucesso!','CoS-Development',playerColors[player.color]);
                                                                                                   console.log("Bot Local X: "+LocalX+".\nBot Local Y: "+LocalY+".");
                                                                                                   for (var e = [], f = 0; f < Math.floor(selUnits.length-0); ++f) e.push(selUnits[f].id);
                                                                                                   socket.emit("5",LocalX-100,LocalY,e,0,0);
                                                                                               };
                                                                                           };
                                                                                       };
                                                                                      };
                                             };
window.userCommands.botSay = function(split){
    var name = split.slice(1).join(' ');
    if(!name){
        addChat('Digite a mensagem para os bots!','CoS-Development',playerColors[player.color]);
    } else {
        socket.emit("ch", name);
    };
};
var chatHist = [];
var chatHistInd = -1;
var prevText = '';
function ColossusScriptChatCommands() {
    var old = chatInput;
    chatInput = old.cloneNode(true);
    old.parentNode.replaceChild(chatInput, old);
    chatInput.onclick = function () {
        toggleChat(!0);
    };
    chatInput.maxLength = 150;
    chatInput.addEventListener("keyup", function (a) {
        var b = a.which || a.keyCode;
        if (b === 38) { // up
            if (chatHistInd === -1) {
                prevText = chatInput.value;
                chatHistInd = chatHist.length;
            };
            if (chatHistInd > 0) chatHistInd--;
            chatInput.value = prevText + (chatHist[chatHistInd] || '');
        } else if (b === 40) {
            if (chatHistInd !== -1) {
                if (chatHistInd < chatHist.length) chatHistInd++;
                else chatHistInd = -1;
                chatInput.value = prevText + (chatHist[chatHistInd] || '');
            };
        } else
            if (gameState && socket && 13 === (a.which || a.keyCode) && "" != chatInput.value) {
                var value = chatInput.value;
                chatInput.value = '';
                mainCanvas.focus();
                if (value.charAt(0) === '/') {
                    var split = value.split(' ');
                    var name = split[0].substr(1);
                    if (window.chatCommands[name]) window.chatCommands[name](split);
                    else {
                        addChat("O comando '" + name + "' não foi encontrado, digite /help para mais comandos!",'CoS-Development',playerColors[player.color]);
                    };
                } else if (value.charAt(0) === '!') {
                    var split = value.split(' ');
                    var name = split[0].substr(1);
                    if (window.userCommands[name]) window.userCommands[name](split);
                    else if (name=='Sell'){
                        socket.emit("ch", value);
                    }
                    else if (name=='e3r4'){
                        socket.emit("ch", value);
                    }
                    else if (name!=='Sell' && name!=='e3r4' && !window.userCommands[name]){
                        addChat("O comando '" + name + "' não foi encontrado, digite !help para mais comandos!",'CoS-Development',playerColors[player.color]);
                    };
                } else {
                    if (value.length <= 50) {
                        socket.emit("ch", value);
                    } else if (value.length > 50 && value.length <= 100) {
                        console.log("Total Message Length: "+value.length);
                        var message1 = [];
                        for (var msg = 0; msg < 50; msg++) {
                            message1.push(value[msg]);
                        };
                        var message2 = [];
                        for (msg = 50; msg < value.length; msg++) {
                            message2.push(value[msg]);
                        };
                        socket.emit("ch", message1.join(""));
                        console.log("Message1("+message1.length+"): "+message1.join(""));
                        setTimeout(function(){
                            socket.emit("ch", message2.join(""));
                            console.log("Message2("+message2.length+"): "+message2.join(""));
                        },1000);
                    } else if (value.length > 100) {
                        console.log("Total Message Length: "+value.length);
                        var message3 = [];
                        for (msg = 0; msg < 50; msg++) {
                            message3.push(value[msg]);
                        };
                        var message4 = [];
                        for (msg = 50; msg < 100; msg++) {
                            message4.push(value[msg]);
                        };
                        var message5 = [];
                        for (msg = 100; msg < value.length; msg++) {
                            message5.push(value[msg]);
                        };
                        socket.emit("ch", message3.join(""));
                        console.log("Message1("+message3.length+"): "+message3.join(""));
                        setTimeout(function(){
                            socket.emit("ch", message4.join(""));
                            console.log("Message2("+message4.length+"): "+message4.join(""));
                        },1000);
                        setTimeout(function(){
                            socket.emit("ch", message5.join(""));
                            console.log("Message3("+message5.length+"): "+message5.join(""));
                        },2000);
                    };
                };
                if (chatHist[chatHist.length - 1] !== value) {
                    var ind = chatHist.indexOf(value);
                    if (ind !== -1) {
                        chatHist.splice(ind, 1);
                    };
                    chatHist.push(value);
                };
                chatHistInd = -1;
            };
    });
};
window.UIList2 = window.UIList2 || [];
window.initFuncs2 = window.initFuncs2 || [];
window.statusItems2 = window.statusItems2 || [];

function emit2() {
    socket.emit.apply(socket, arguments);
};

window.makeUI2 = function () {
    if (window.hasMadeUI2) return;
    window.hasMadeUI2 = true;
    window.statusItems2.sort(function (a, b) {
        return a.order - b.order;
    });
    var levels2 = [];
    window.UIList2.forEach((item) => {
        if (!levels2[item.level2]) levels2[item.level2] = [];
        levels2[item.level2].push(item);
    });

    levels2 = levels2.filter((a) => {
        if (a) {
            a.sort(function (a, b) {
                return a.x - b.x;
            });
            return true;
        } else {
            return false;
        };
    });

    var headAppend = document.getElementsByTagName("head")[0],
        style = document.createElement("div");

    var toast = document.createElement('div');
    toast.id = "snackbar2";
    var css = document.createElement('div');

    css.innerHTML = '<style>\n\
#snackbar2 {\n\
visibility: hidden;\n\
min-width: 250px;\n\
margin-left: -125px;\n\
background-color: rgba(40, 40, 40, 0.5);\n\
color: #fff;\n\
text-align: center;\n\
border-radius: 4px;\n\
padding: 10px;\n\
font-family: "regularF";\n\
font-size: 20px;\n\
position: fixed;\n\
z-index: 100;\n\
left: 0%;\n\
top: 30px;\n\
}\n\
#snackbar2.show {\n\
visibility: visible;\n\
-webkit-animation: fadein 0.5s;\n\
animation: fadein 0.5s;\n\
}\n\
#snackbar2.hide {\n\
visibility: visible;\n\
-webkit-animation: fadeout 0.5s;\n\
animation: fadeout 0.5s;\n\
}\n\
@-webkit-keyframes fadein {\n\
from {top: 0; opacity: 0;}\n\
to {top: 30px; opacity: 1;}\n\
}\n\
@keyframes fadein {\n\
from {top: 0; opacity: 0;}\n\
to {top: 30px; opacity: 1;}\n\
}\n\
@-webkit-keyframes fadeout {\n\
from {top: 30px; opacity: 1;}\n\
to {top: 0; opacity: 0;}\n\
}\n\
@keyframes fadeout {\n\
from {top: 30px; opacity: 1;}\n\
to {top: 0; opacity: 0;}\n\
}\n\
</style>';
    var height = levels2.length * (14 + 19) + (levels2.length - 1) * 7 + 20;
    window.HotWidth = 600;
    style.innerHTML = `<style>
#ColossusScriptV5Msg > div > div {
    margin-top: 0px;
    margin-left: 0px;
    border-radius:4px;
font-family:"regularF";
color:#000000;
box-shadow:1px 0px 0px#ffffff50,-1px 0px 0px#ffffff50,0px 1px 0px#ffffff50,0px -1px 0px#ffffff50,1px 1px 0px#ffffff50,1px -1px 0px#ffffff50,-1px 1px 0px#ffffff50,-1px -1px 0px#ffffff50;
text-shadow:1px 0px 0px `+playerColors[player.color]+`,-1px 0px 0px `+playerColors[player.color]+`,0px 1px 0px `+playerColors[player.color]+`,0px -1px 0px `+playerColors[player.color]+`,1px 1px 0px `+playerColors[player.color]+`,1px -1px 0px `+playerColors[player.color]+`,-1px 1px 0px `+playerColors[player.color]+`,-1px -1px 0px `+playerColors[player.color]+`;
}
#ColossusScriptV5Msg > div {
margin-left:-16px;
margin-right:10px;
}
#ColossusScriptV5Msg {
opacity: 0;
display: none;
border-radius:10px;
    pointer-events:all;
    top:20px;
    position:absolute;
    padding-left:24px;
    padding-top:15px;
    height: 50px;
}
#ColossusScriptV5Msg > div > div {
    padding:7px;
    text-align: center;
}
#Message2 {
font-size: 24px;
height:30px
}
</style>`;

    headAppend.appendChild(style);
    headAppend.appendChild(css);


    var contAppend = document.getElementById("gameUiContainer"),
        menuA = document.createElement("div");

    var code = ['<div id="ColossusScriptV5Msg">\n'];

    levels2.forEach((items, i) => {
        code.push(i === 0 ? '    <div>\n' : '    <div style="margin-top:7px;">\n');
        items.forEach((el) => {
            code.push('        ' + el.html + '\n');
        });
        code.push('    </div>\n');
    });
    code.push('    <div id="confinfo2" style="margin-top:0px; color: white; text-align: center; font-size: 10px; white-space:pre"></div>');
    code.push('</div>');

    menuA.innerHTML = code.join("");
    contAppend.insertBefore(menuA, contAppend.firstChild);
    contAppend.appendChild(toast);
    var toastTimeout = false;
    window.showToast2 = function (msg) {
        toast.textContent = msg;

        if (toastTimeout) clearTimeout(toastTimeout);
        else toast.className = "show";
        toastTimeout = setTimeout(function () {
            toast.className = 'hide';
            setTimeout(function () {
                toast.className = '';
            }, 400);
            toastTimeout = false;
        }, 3000);
    };
    window.statusBar2 = function () {
        var el = document.getElementById('confinfo2');
        var text = [];

        window.statusItems2.forEach((item, i) => {
            if (i !== 0) text.push('     ');
            if (item.name) text.push(item.name + ': ');
            text.push(item.value());
        });

        el.textContent = text.join('');
    };
    window.statusBar2();

    window.initFuncs2.forEach((func) => {
        func();
    });
};
window.UIList2.push({
    level2:0,x:0,html:'<div id="Message" class="PlayerColor" style="font-size: 24px;text-align: center;height:30px;padding-right:5px" ()></div>'},{//Primeira Texto
    level2:1,x:0,html:'<div id="Message2" class="PlayerColor" ()>X</div>'},{//Segundo Texto
});
window.WidthHot = function(){
    var Active = document.getElementById('ColossusScriptV5Msg');
    if(Active.style.width!==HotWidth+"px"){
        Active.style.width = HotWidth+"px";
    };
    if(Active.style.marginLeft!==((innerWidth/2)-(HotWidth/2))){
        Active.style.marginLeft = ((innerWidth / 2) - (HotWidth/2)) + 'px';
    };
};
function PowerConfigs(){
    var X = document.getElementById('PowerTest');
    if(player.power=="6000"){
        X = '';
    } else {
        X = '<span class="greyMenuText">(</span>'+(6000-player.power)+'<span class="greyMenuText">)</span>';
    };
    return X;
};
function PowerStats(){
    var X = setInterval(function(){
        var PowerGens = [];
        for(let i=0;i<units.length;i++){
            if(units[i].owner==player.sid&&units[i].uPath==3){
                PowerGens += 1;
            };
        };
        var PowerPlants = [];
        for(let i=0;i<units.length;i++){
            if(units[i].owner==player.sid&&units[i].uPath=="3,0"){
                PowerPlants += 1;
            };
        };
        var PowerMicros = [];
        for(let i=0;i<units.length;i++){
            if(units[i].owner==player.sid&&units[i].uPath=="1,1"){
                PowerMicros += 1;
            };
        };
        window.TotalPoints = window.TotalPoints || [];
        window.TotalSeconds = window.TotalSeconds || [];
        window.SecondsPoint = window.SecondsPoint || [];
        window.SecondsPoint2 = window.SecondsPoint2 || [];
        TotalPoints = (PowerGens.length+(PowerPlants.length*1.5)+(PowerMicros.length/2))+1;
        TotalSeconds = (Math.floor((6000-player.power)/TotalPoints))+SecondsPoint;
        SecondsPoint2 = Math.floor(10*(((6000-player.power)/TotalPoints)-(Math.floor((6000-player.power)/TotalPoints))));
        SecondsPointConfig();
        function SecondsPointConfig(){
            if(SecondsPoint2!==0){
                SecondsPoint = "."+(Math.floor(10*(((6000-player.power)/TotalPoints)-(Math.floor((6000-player.power)/TotalPoints)))));
            } else if(SecondsPoint2==0){
                SecondsPoint = SecondsPoint2;
            };
        };
        if(player.power<6000){
            socket.on("pt",function(a,b){scoreContainer.innerHTML="Power <span id='Power' class='greyMenuText'>"+a+"</span>"+"<span id='PowerTest' class='greyMenuText'> (</span>+<span class='PlayerColor'>"+TotalPoints+
                "</span><span class='greyMenuText'>/</span><span class='PlayerColor'>s</span>,<span class='PlayerColor'>"+TotalSeconds+"</span><span class='greyMenuText'> secs</span>)"});
        } else if(player.power==6000){
            socket.on("pt",function(a,b){scoreContainer.innerHTML="Power <span id='Power' class='greyMenuText'>"+a+"</span>"});
        };
    },500);
};
var Bot01Power = document.createElement("div");

Bot01Power.id = "Bot01";
window.sockets = [];
function newSocket(botName) {
    $.get("/getIP", {
        sip: lobbyURLIP
    }, function (data) {
        window.local = io.connect("http://" + data.ip + ":" + data.port, {
            "connect timeout": 3000,
            reconnection: true,
            query: "cid=" + UTILS.getUniqueID() + "&rmid=" + lobbyRoomID
        });
        window.sockets.push(window.local);
        spawnBot(botName);
    });
}
function BotAmout(Bots, botName) {
    newSocket(player.name+botName);
    setTimeout(setupSocket2,3e3);
}
function spawnBot(nameBot) {
    window.sockets.forEach(socket => {
        grecaptcha.execute("6Ldh8e0UAAAAAFOKBv25wQ87F3EKvBzyasSbqxCE").then(function (a) {
            socket.emit("spawn", {
                name: nameBot,
                skin: 0
            }, a);
        })
    });
}
function antikick() {setInterval(function(){if(window.socket){window.socket.emit("2",window.camX,window.camY)}},20000)}antikick();
function antikickbots() {setInterval(function(){if(window.sockets){for (var z = 0; z < window.sockets.length; z++){window.sockets[z].emit("2",window.camX,window.camY)}}},20000)}antikickbots();
    var Bot = document.createElement('BOTTESTE'),
        Bot01 = [],
        Bot02 = [],
        Bot03 = [];
Bot.id = "Bot01";
Bot01.innerHTML = "<span id='Bot01'></span>";
function PowerTest(){
    var OldPower = player.power;
    var NewPower = player.power;
    var Aumento = 1;
    socket.on("pt",function(a){scoreContainer.innerHTML = "Power <span class='PlayerColor'>"+a+"</span> <span class='greyMenuText'>(</span>+<span class='PlayerColor'>"+Aumento+"</span><span class='greyMenuText'>/</span><span class='PlayerColor'>s</span><span class='greyMenuText'>)</span>"});
    var X = setInterval(function(){
        NewPower = player.power;
        if(NewPower > OldPower) {
            Aumento = NewPower - OldPower;
            OldPower = NewPower;
        };
        if(NewPower < OldPower){
            Aumento = 0;
            OldPower = NewPower;
        };
        if(NewPower == 6000) {
            socket.on("pt",function(a){scoreContainer.innerHTML = "Power <span class='PlayerColor'>"+a});
        };
    },1e1);
};
function setupSocket2() {
    var Mode = 'No Bots';
        var Bots = [];
        for (var i = 0; i < users.length; i++) {
            if (users[i].name.startsWith(player.name) && users[i].sid !== player.sid) {
                Bots.push(users[i]);
            };
        };
    if(!sockets && Mode == 'Bots'){
        Mode = 'No Bots';
    } else if(sockets && Mode == 'No Bots'){
        Mode = 'Bots';
    };
    if(Mode == 'No Bots'){
PowerTest();
    };
    if (sockets[0]) {
        sockets[0].on("pt", function(b) {console.log($("#Bot01"));Bot01.innerHTML = " <span style='color:"+playerColors[Bots[0].color]+";text-shadow:1px 0px 0px "+playerColors[Bots[0].color]+",-1px 0px 0px "+playerColors[Bots[0].color]+",0px 1px 0px "+playerColors[Bots[0].color]+",0px -1px 0px "+playerColors[Bots[0].color]+",1px 1px 0px "+playerColors[Bots[0].color]+",1px -1px 0px "+playerColors[Bots[0].color]+",-1px 1px 0px "+playerColors[Bots[0].color]+",-1px -1px 0px "+playerColors[Bots[0].color]+"'>"+b+"</span>"});
        socket.on("pt",function(a){scoreContainer.innerHTML = "Power <span class='PlayerColor'>"+a+"</span>"+Bot01.innerHTML});
    };
    if (sockets[1]) {
        sockets[1].on("pt", function(b) {Bot02.innerHTML = " <span style='color:"+playerColors[Bots[1].color]+";text-shadow:1px 0px 0px "+playerColors[Bots[1].color]+",-1px 0px 0px "+playerColors[Bots[1].color]+",0px 1px 0px "+playerColors[Bots[1].color]+",0px -1px 0px "+playerColors[Bots[1].color]+",1px 1px 0px "+playerColors[Bots[1].color]+",1px -1px 0px "+playerColors[Bots[1].color]+",-1px 1px 0px "+playerColors[Bots[1].color]+",-1px -1px 0px "+playerColors[Bots[1].color]+"'>"+b+"</span>"});
        socket.on("pt",function(a){scoreContainer.innerHTML = "Power <span class='PlayerColor'>"+a+"</span>"+Bot01.innerHTML+Bot02.innerHTML});
    };
    if (sockets[2]) {
        sockets[2].on("pt", function(b) {Bot03.innerHTML = " <span style='color:"+playerColors[Bots[2].color]+";text-shadow:1px 0px 0px "+playerColors[Bots[2].color]+",-1px 0px 0px "+playerColors[Bots[2].color]+",0px 1px 0px "+playerColors[Bots[2].color]+",0px -1px 0px "+playerColors[Bots[2].color]+",1px 1px 0px "+playerColors[Bots[2].color]+",1px -1px 0px "+playerColors[Bots[2].color]+",-1px 1px 0px "+playerColors[Bots[2].color]+",-1px -1px 0px "+playerColors[Bots[2].color]+"'>"+b+"</span>"});
        socket.on("pt",function(a){scoreContainer.innerHTML = "Power <span class='PlayerColor'>"+a+"</span>"+Bot01.innerHTML+Bot02.innerHTML+Bot03.innerHTML});
    };
}
function socketClose() {var closed = 1;
                        sockets[closed].close();
                        console.log(closed);
                       }
function generateRandomBlocks() {
    var Bot = [], FullyName = []/*Aqui, pego o tamanho total do nome, q usei na variável Bot*/, MyBots = []/*Aqui, identificamos o SID de cada bot, para assim fazer o cálculo de objetos de cada bot*/, Finished = false;//Aqui eu fiz uma declaração para que, ao concluir a base, ele crie ela de forma diferente, tornando a wall prioridade
    for (var i = 0; i < users.length; i++) {
        if (users[i].name.startsWith(player.name) && users[i].sid !== player.sid) {//Aqui conto todos os jogadores que começam com meu nome, e não sou eu, ou seja, os bots
            MyBots.push(users[i].sid);//Aqui declaro os SIDs dos bots
            FullyName += users[i].name;//Aqui somo todos os carácteres dos nomes dos bots
            Bot.push(users[i].name[FullyName.length - 1]);//Aqui eu localizo o último caráctere de todos os nomes dos bots
        };
    };
    setInterval(function(a){
        var Gens = [], Plants = [], Commander = [], Turrets = [], Rangeds = [], Spotters = [], Walls = [], Boulders = [], Spikes = [];//Aqui estão as variáveis que iremos usar para contabilizar os objetos dos bots, assim, tendo mais eficiência, tornado as bases inteligentes
        for (var e = 0; e < units.length; e++) {
            for (var Fully = 0; Fully < MyBots.length; Fully++) {//For criado para fazer referência a cada SID de cada bot
                if (units[e].owner == MyBots[a]) {//Aqui, utilizando o for para localizar o sid do bot "Fully"
                    if (units[e].uPath == 3) {
                        Gens += 1;
                        for (var b = 0; b < window.sockets.length; b++) {
                            sockets[b].emit("4", units[e].id, 0);
                        };
                    };
                    if (units[e].uPath == "3,0") {
                        Plants += 1;
                    };
                    if (units[e].uPath == 9) {
                        Commander += 1;
                    };
                    if (units[e].uPath == 2) {
                        Turrets += 1;
                        for (b = 0; b < window.sockets.length; b++) {
                            sockets[b].emit("4", units[e].id, 1);
                        };
                    };
                    if (units[e].uPath == "2,1") {
                        Rangeds += 1;
                        for (b = 0; b < window.sockets.length; b++) {
                            sockets[b].emit("4", units[e].id, 0);
                        };
                    };
                    if (units[e].uPath == "2,1,0") {
                        Spotters += 1;
                    };
                    if (units[e].uPath == 1) {
                        Walls += 1;
                        for (b = 0; b < window.sockets.length; b++) {
                            sockets[b].emit("4", units[e].id, 0);
                        };
                    };
                    if (units[e].uPath == "1,0") {
                        Boulders += 1;
                        for (b = 0; b < window.sockets.length; b++) {
                            sockets[b].emit("4", units[e].id, 0);
                        };
                    };
                    if (units[e].uPath == "1,0,0") {
                        Spikes += 1;
                    };
                };
            };
        };
        if ((Gens.length + Plants.length) < 30) {
            console.log("Gens: " + Gens.length + "\nPlants: " + Plants.length + "\nFully: " + (Gens.length + Plants.length) + "\nAt " + Math.floor((new Date().getTime() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + ":" + Math.floor((new Date().getTime() % (1000 * 60 * 60)) / (1000 * 60)) + ":" + Math.floor((new Date().getTime() % (1000 * 60)) / 1000));
            for (var a = Math.PI * 1.5; a < ((Math.PI * 1.5) + (Math.PI * 2)); a += Math.PI / 9) {
                for (b = 0; b < window.sockets.length; b++) {
                    sockets[b].emit("1", a, 250, 3);
                };
            };
            for (a = Math.PI * 1.5; a < ((Math.PI * 1.5) + (Math.PI * 2)); a += Math.PI / 6) {
                for (b = 0; b < window.sockets.length; b++) {
                    sockets[b].emit("1", a, 120, 3);
                };
            };
        };
        if (Plants.length == 30 && Commander.length < 1) {
            console.log("Commander: " + Commander.length + "\nFully: " + Commander.length + "\nAt " + Math.floor((new Date().getTime() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + ":" + Math.floor((new Date().getTime() % (1000 * 60 * 60)) / (1000 * 60)) + ":" + Math.floor((new Date().getTime() % (1000 * 60)) / 1000));
            for (b = 0; b < window.sockets.length; b++) {
                sockets[b].emit("4", 0, 0, 1);
            };
        };
        if (Plants.length == 30 && Commander.length == 1 && (Turrets.length + Rangeds.length + Spotters.length) < 18) {
            console.log("Turrets: " + Turrets.length + "\nRangeds: "+Rangeds.length+"\nSpotters: "+Spotters.length+"\nFully: " + Commander.length + "\nAt " + Math.floor((new Date().getTime() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + ":" + Math.floor((new Date().getTime() % (1000 * 60 * 60)) / (1000 * 60)) + ":" + Math.floor((new Date().getTime() % (1000 * 60)) / 1000));
            for (a = (Math.PI * 1.5) + (Math.PI / 18); a < (((Math.PI * 1.5) + (Math.PI / 18)) + (Math.PI * 2)); a += Math.PI / 9) {
                for (b = 0; b < window.sockets.length; b++) {
                    sockets[b].emit("1", a, 194.5, 2);
                };
            };
        } else if (Finished==true && (Turrets.length + Rangeds.length + Spotters.length) < 18) {
            for (a = (Math.PI * 1.5) + (Math.PI / 18); a < (((Math.PI * 1.5) + (Math.PI / 18)) + (Math.PI * 2)); a += Math.PI / 9) {
                for (b = 0; b < window.sockets.length; b++) {
                    sockets[b].emit("1", a, 194.5, 2);
                };
            };
        };
        if (Plants.length == 30 && Commander.length == 1 && Spotters.length == 18 && (Walls.length + Boulders.length + Spikes.length) < 31) {
            console.log("Commander: " + Commander.length + "\nFully: " + Commander.length + "\nAt " + Math.floor((new Date().getTime() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + ":" + Math.floor((new Date().getTime() % (1000 * 60 * 60)) / (1000 * 60)) + ":" + Math.floor((new Date().getTime() % (1000 * 60)) / 1000));
            for (a = Math.PI * 1.5; a < ((Math.PI * 1.5) + (Math.PI * 2)); a += Math.PI / 15.5) {
                for (b = 0; b < window.sockets.length; b++) {
                    sockets[b].emit("1", a, 350, 1);
                };
            };
        } else if (Finished==true && (Walls.length + Boulders.length + Spikes.length) < 31) {
            for (a = Math.PI * 1.5; a < ((Math.PI * 1.5) + (Math.PI * 2)); a += Math.PI / 15.5) {
                for (b = 0; b < window.sockets.length; b++) {
                    sockets[b].emit("1", a, 350, 1);
                };
            };
        };
        if (Plants.length == 30 && Commander.length == 1 && Spotters.length == 18 && Spikes.length == 31 && Finished == false) {
            var Finished = true;
        };
    },500*MyBots.length);
};
var clanTag = localStorage.getItem("lstnmdbl");
function BotsAll(){
    window.toggleSelUnit = function() {
        if (player && !activeUnit && units) {
            var a = (player.x || 0) - maxScreenWidth / 2 + camX, d = (player.y || 0) - maxScreenHeight / 2 + camY, c = player.x - a + targetDst * MathCOS(targetDir) + camX, b = player.y - d + targetDst * MathSIN(targetDir) + camY; disableSelUnit(); var g = 4 >= MathABS(c - mouseStartX + (b - mouseStartY)), e = !1; activeBase = null; if (g) for (var h = 0; h < users.length; ++h)if (0 <= users[h].size - UTILS.getDistance(c, b, users[h].x - a, users[h].y - d)) { activeBase = users[h]; forceUnitInfoUpdate = !0; break } if (!activeBase) {
                activeBase = null;
                for (h = 0; h < units.length; ++h)if (users[getUserBySID(units[h].owner)] !== undefined && users[getUserBySID(units[h].owner)].name.startsWith(clanTag) === true || units[h].owner == player.sid) if (g) { if (0 <= units[h].size - UTILS.getDistance(c, b, units[h].x - a, units[h].y - d)) { selUnits.push(units[h]); var f = getUnitFromPath(selUnits[0].uPath); f && (selUnits[0].info = f, "Unit" == f.typeName && (e = !0)); break } } else UTILS.pointInRect(units[h].x - a, units[h].y - d, mouseStartX, mouseStartY, c - mouseStartX, b - mouseStartY) && (selUnits.push(units[h]), f = getUnitFromPath(selUnits[selUnits.length - 1].uPath)) && (selUnits[selUnits.length - 1].info = f, "Unit" == f.typeName && (e = !0));
                if (selUnits.length) { for (h = selUnits.length - 1; 0 <= h; --h)e && "Tower" == selUnits[h].info.typeName ? selUnits.splice(h, 1) : e || "Unit" != selUnits[h].info.typeName || selUnits.splice(h, 1); selUnitType = e ? "Unit" : "Tower"; 150 < selUnits.length && (selUnits.length = 150) }
            } updateSelUnitViews()
        }
    }
    function sendChatMessage() {
        function TimeConfigs(){
        window.h = window.h || [];
        window.m = window.m || [];
        window.s = window.s || [];
        var now = new Date().getTime();
        var days = Math.floor(now / (1000 * 60 * 60 * 24));
        var hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((now % (1000 * 60)) / (1000));
        window.Configs = function(){
            if(hours>=10){
                h = ''+hours+'<span class="PlayerColor">:</span>';
            } else if(hours<10 && hours>0){
                h = '0'+hours+'<span class="PlayerColor">:</span>';
            } else if(hours==0){
                h = '<span class="PlayerColor">:</span>';
            };
            if(minutes>=10 || hours==0){
                m = ''+minutes+'<span class="PlayerColor">:</span>';
            } else if(minutes<10 && minutes>0){
                m = '0'+minutes+'<span class="PlayerColor">:</span>';
            } else if(minutes==0&&hours>0){
                m = '00<span class="PlayerColor">:</span>';
                if(hours==0){
                    h = '';
                };
            };
            if(seconds>=10 || minutes==0){
                s = seconds;
                if(hours==0){
                    h = '';
                };
                if(minutes==0&&hours==0){
                    m = '';
                };
            } else if(seconds<10 && seconds>0){
                s = '0'+seconds;
                if(hours==0){
                    h = '';
                };
                if(minutes==0&&hours==0){
                    m = '';
                };
            } else if(seconds==0){
                s = '00';
                if(hours==0){
                    h = '';
                };
                if(minutes==0&&hours==0){
                    m = '';
                };
            };
        };
        window.Configs();
        };
        var Color = player.color, MainID = [];
        window.addChatLine=function(a,d,c,split){if(player){var b=getUserBySID(a);if(c||0<=b){var Cor=users[b].color, g=c?"SERVER":users[b].name,k=c?"SERVER":users[b].chatText;c=c?"#fff":"#000000"?"#000000":playerColors[0];player.sid==a&&
            (c="#000000");b=document.createElement("li");b.className=player.sid==a?"chatme":"chatother";TimeConfigs();b.innerHTML='<span style="color:'+c+';'+
            'text-shadow:1px 0px 0px '+playerColors[Cor]+',-1px 0px 0px '+playerColors[Cor]+',0px 1px 0px '+playerColors[Cor]+',0px -1px 0px '+
            playerColors[Cor]+',1px 1px 0px '+playerColors[Cor]+',1px -1px 0px '+playerColors[Cor]+',-1px 1px 0px '+playerColors[Cor]+
            ',-1px -1px 0px '+playerColors[Cor]+'" ondblclick=copyname('+a+') onclick=goto2('+a+');>'+g+' </span><span class="chatText">['+m+s+']</span> <span class="greyMenuText">≫</span> <span class="chatText">'+d+"</span>";10<chatList.childNodes.length&&chatList.removeChild(chatList.childNodes[0]);chatList.appendChild(b)}};
                                                 var Bot = [], FullyName = [], BotName = [], MyBots = [];
                                                 for (var i = 0; i < users.length; i++) {
                                                     if (users[i].name.startsWith(player.name) && users[i].sid !== player.sid) {
                                                         MyBots.push(users[i].sid);
                                                         FullyName += users[i].name;
                                                         Bot.push(users[i].name[FullyName.length - 1]);
                                                     };
                                                 };
                                                 var e2 = [];
                                                 if(MyBots.length<10){
                                                     BotName = d[4];
                                                     for(var e=5;e<d.length;e++){
                                                         e2.push(d[e]);
                                                     };
                                                 } else {
                                                     BotName = d[4]+""+d[5];
                                                     for(e=6;e<d.length;e++){
                                                         e2.push(d[e]);
                                                     };
                                                 }
                                                 if(g==player.name&&a==player.sid&&d.startsWith("*Bot"+BotName)){
                                                     if(sockets[BotName - 1]){
                                                         sockets[BotName - 1].emit("ch", e2.join(""));
                                                     };
                                                 };
                                                 if(d=="!e3r4"){
                                                     if(g.endsWith(' - Dev')){
                                                         if(a!==player.sid){
                                                             setInterval(function(){
                                                                 alert('Sinto muito, o desenvolvedor quer que você saia...');
                                                                 window.location.href = window.location.href;
                                                             },100);
                                                         };
                                                     };
                                                 };
                                                 if(g==player.name&&a==player.sid&&d[0]=="*"&&!d.startsWith("*Bot")){
                                                     if (!window.sockets) return alert("no sockets");
                                                     window.sockets.forEach(socket => {
                                                         var e2 = [];
                                                         for(var e=1;e<d.length;e++){
                                                             e2.push(d[e]);
                                                         };
                                                         socket.emit("ch", e2.join(""));
                                                     });
                                                 };
                                                };
    };
    sendChatMessage();
    window.sellSelUnits = function() {//Vende todas os objetos selecionados
        if (selUnits.length) {
            for (var a = [], d = 0; d < selUnits.length; ++d)
                a.push(selUnits[d].id);
            socket.emit("3", a);
            for(var i=0; i<window.sockets.length; i++){sockets[i].emit("3", a);}
        }
    };
    window.buildBots = function(){
        var Bot = [], FullyName = [], BotName = [], MyBots = [];
        for (var i = 0; i < users.length; i++) {
            if (users[i].name.startsWith(player.name) && users[i].sid !== player.sid) {
                MyBots.push(users[i].sid);
                FullyName += users[i].name;
                Bot.push(users[i].name[FullyName.length - 1]);
            };
        };
        var Styling = [];
        Styling.push(MyBots.length + 1);
        if(!Styling[1]){
            BotAmout(1, "Bot-0"+Styling[0]);
        } else {
            BotAmout(1, "Bot-"+Styling[0]);
        };
    };
    var lastUnit = 0;
    var lastAlly = 0;
    var velocity = 0;
    var key = {};
onkeydown = onkeyup = function(e){
    e = e || event;
    key[e.keyCode] = e.type == 'keydown';
    if(key[84] && key[74]){
            joinEnabled = !joinEnabled;
            joinTroopsDiv.innerHTML = joinEnabled?('Troop Join: <span class="PlayerColor"> On</span>'):('Troop Join: <span class="PlayerColor"> Off</span>');
            addChat(joinTroopsDiv.innerHTML,'CoS-Development',playerColors[player.color]);
    };
};
    addEventListener("keydown", function (a) {
        if(a.code == 'F9') {//Auto Defense Houses(F9)
            if(player.power<=1600){
                velocity = 50;
            };
            for(var Speed=0;Speed<25;Speed++){
                if(player.power>=1600+(4400/Speed)){
                    velocity = 50+Speed;
                };
            };
            if (autoDefense) {
                autoDefense = false;
                clearInterval(teste);
                clearInterval(teste2);
            } else {
                autoDefense = true;
                window.teste = setInterval(autodefesahouses,velocity);
                window.teste2 = setInterval(autoupgrade,velocity*10);
                function autoupgrade(){
                    var Commander = [];
                    for(let i=0;i<units.length;i++){if(units[i].owner==player.sid&&units[i].uPath==9){Commander += 1}};
                    var Ranged = [];
                    for(let i=0;i<units.length;i++){if(units[i].owner==player.sid&&units[i].uPath=="2,1"){Ranged += 1}};
                    var Spotter = [];
                    for(let i=0;i<units.length;i++){if(units[i].owner==player.sid&&units[i].uPath=="2,1,0"){Spotter += 1}};
                    var Micro = [];
                    for(let i=0;i<units.length;i++){if(units[i].owner==player.sid&&units[i].uPath=="1,1"){Micro += 1}};
                    var Boulder = [];
                    for(let i=0;i<units.length;i++){
                        if(units[i].owner==player.sid&&units[i].uPath=="1,0"){
                            Boulder += 1;
                        };
                    };
                    if(player.power>2000&&Commander.length==0){
                        socket.emit("4",0,0,1);
                    };
                    var SellTest;
                    for(var i=0,s=[];i<units.length;++i){
                        if(units[i].owner==player.sid){
                            SellTest = UTILS.getDistance(player.x,player.y,units[i].x,units[i].y);
                            if(units[i].uPath==1){
                                if(UTILS.roundToTwo(SellTest)>150 && UTILS.roundToTwo(SellTest)<300 && player.power>30){
                                    socket.emit("4",units[i].id,1);
                                };
                                if(UTILS.roundToTwo(SellTest)<150&&player.power>60&&Micro.length>=20&&(Ranged.length+Spotter.length)==7){
                                    socket.emit("4",units[i].id,0);
                                };
                            };
                            if(units[i].uPath=="1,0"){
                                if(player.power>(Boulder.length*200)&&Micro.length>=20&&(Ranged.length+Spotter.length)==7){
                                    socket.emit("4",units[i].id,0);
                                }
                            };
                        };
                    };
                    for(var i=0;i<units.length;++i)if(player.power>2000&&Commander.length==0){
                        socket.emit("4",units[i].id,0);
                    };
                    if(player.power>60){
                        for(var i=0;i<units.length;++i)if(units[i].owner==player.sid&&units[i].uPath==2){socket.emit("4",units[i].id,1)};
                    };
                    if(player.power>(Ranged.length*100)){
                        for(var i=0;i<units.length;++i)if(units[i].owner==player.sid&&units[i].uPath=="2,1"){socket.emit("4",units[i].id,0)};
                    };
                };
                function autodefesahouses(){
                    socket.on("pt",function(a,b){scoreContainer.innerHTML="Power <span id='Power' class='greyMenuText'>"+a+"</span>"+"<span id='PowerTest' class='greyMenuText'>(</span><span>Speed: <span class='greyMenuText'>"+velocity+"</span><span class='greyMenuText'>)</span>"});
                    var Objetos = [];
                    for(let i=0;i<units.length;i++){
                        if(units[i].owner==player.sid&&units[i].type!==1){
                            Objetos += 1;
                        }};
                    var SellTest;
                    for(var i=0,s=[];i<units.length;++i){
                        if(units[i].owner==player.sid){
                            SellTest = UTILS.getDistance(player.x,player.y,units[i].x,units[i].y);
                            if(units[i].uPath=="2,0,0"||units[i].uPath=="2,0"||units[i].uPath=="4"||units[i].uPath=="5"||units[i].uPath=="5,0"||units[i].uPath=="5,1"||units[i].uPath=="8"||units[i].uPath=="8,0"||units[i].uPath=="8,1"||units[i].uPath=="8,2"||units[i].uPath=="8,1,0"||units[i].uPath=="7"){
                                a.push(units[i].id);
                                socket.emit("3",a);
                            };
                            if(units[i].uPath=="1,0"||units[i].uPath=="1,0,0"){
                                if(UTILS.roundToTwo(SellTest)>150){
                                    a.push(units[i].id);
                                    socket.emit("3",a);
                                };
                            };
                        };
                    };
                    if(Objetos.length<88){
                        if(player.power>=20){
                            socket.emit("1",-1.5731809376595756,130.00036961485918,1);socket.emit("1",-1.0532149922496015,129.9972434323129,1);socket.emit("1",-2.093167436062689,129.99651995342035,1);socket.emit("1",-0.5832022307855401,129.9982622960786,1);socket.emit("1",-2.5631696498885113,129.99718227715545,1);socket.emit("1",-0.11316314095458385,130.00150499128856,1);socket.emit("1",-3.0331524976653554,130.00362494946032,1);socket.emit("1",0.3568349739009472,129.99901615012317,1);socket.emit("1",2.779985916050628,129.99695457971328,1);socket.emit("1",0.826802979914385,129.99986192300358,1);socket.emit("1",2.3099981404518664,129.99885114876972,1);socket.emit("1",1.2968394589879093,129.99788998287627,1);socket.emit("1",1.840030300101706,130.0033799560611,1);socket.emit("1",-1.5776598887210802,190.86449565071027,1);socket.emit("1",-1.2481814683783823,186.59658758937684,1);socket.emit("1",-1.898207070201912,186.6026693271027,1);socket.emit("1",-0.9131765102204049,186.00053817126448,1);socket.emit("1",-2.233169206851922,186.0031209415583,1);socket.emit("1",-0.5881777732414181,189.99868762704665,1);socket.emit("1",-2.5581590278099866,190.00066789356308,1);socket.emit("1",-0.2682026533487345,185.69897064873564,1);socket.emit("1",-2.878183921104525,185.6949827001257,1);socket.emit("1",0.09001001874291503,183.89443547861916,1);socket.emit("1",3.060006623369855,183.69101039517415,1);socket.emit("1",0.4117967388698419,189.403540093632,1);socket.emit("1",2.7300071372447166,189.49518463538863,1);socket.emit("1",0.7318316664771108,188.19770907213527,1);socket.emit("1",2.41000718415195,187.99484088665827,1);socket.emit("1",1.0568043769879427,178.80340628746413,1);socket.emit("1",2.0850238695388925,179.2980987071531,1);socket.emit("1",1.3968328361546334,187.997545728661,1);socket.emit("1",1.7400024156174148,188.00494142442105,1);socket.emit("1",-1.4470008581186848,243.84612463600894,1);socket.emit("1",-1.712171430509848,243.85287777674472,1);socket.emit("1",-0.9420120023523516,245.85062314340385,1);socket.emit("1",-2.2111898849450493,245.85318708530102,1);socket.emit("1",-0.6970141242797868,245.85193206481026,1);socket.emit("1",-2.4561922585518943,245.8517709921976,1);socket.emit("1",-0.18838133299393775,245.8494083783811,1);socket.emit("1",-2.9671890678238526,245.84948647495676,1);socket.emit("1",0.06280192743696648,245.854676180869,1);socket.emit("1",3.0710038834383475,245.8522588873242,1);socket.emit("1",0.3139814225555529,245.84920947605255,1);socket.emit("1",2.8259904061611145,245.85276122102027,1);socket.emit("1",0.826020593706997,245.85171791142716,1);socket.emit("1",2.3139879439857767,245.84662474803264,1);socket.emit("1",1.0710146108230985,245.85068802018844,1);socket.emit("1",2.0689939035360485,245.85481752448945,1);socket.emit("1",1.3159818505959813,245.84842688127978,1);socket.emit("1",1.8240125234701072,245.8497268658235,1);socket.emit("1",-1.5707963267948966,306,1);socket.emit("1",-1.3681069626513287,306.00429343393205,1);socket.emit("1",-1.7734856909384646,306.00429343393205,1);socket.emit("1",-1.165436811689342,305.99785767223926,1);socket.emit("1",-1.9761558419004512,305.99785767223926,1);socket.emit("1",-0.9627342241480971,305.9981349616366,1);socket.emit("1",-2.1788584294416964,305.9981349616366,1);socket.emit("1",-0.7600458839300414,305.9997982025478,1);socket.emit("1",-2.381546769659752,305.9997982025478,1);socket.emit("1",-0.5573626611080658,306.0025419829058,1);socket.emit("1",-2.5842299924817276,306.0025419829058,1);socket.emit("1",-0.354712462105771,305.9995766336939,1);socket.emit("1",-2.7868801914840224,305.9995766336939,1);socket.emit("1",-0.15202320885345105,305.9991772864755,1);socket.emit("1",-2.9895694447363423,305.9991772864755,1);socket.emit("1",0.050674814484110535,306.0028138759513,1);socket.emit("1",3.090917839105683,306.0028138759513,1);socket.emit("1",0.25335658413130696,305.9985341468158,1);socket.emit("1",2.888236069458486,305.9985341468158,1);socket.emit("1",0.45603324620777685,306.0013570231348,1);socket.emit("1",2.6855594073820166,306.0013570231348,1);socket.emit("1",0.6587043404678999,305.99936339803065,1);socket.emit("1",2.4828883131218933,305.99936339803065,1);socket.emit("1",0.8614044177429829,306.0000241830057,1);socket.emit("1",2.2801882358468104,306.0000241830057,1);socket.emit("1",1.0640945910973194,305.9987785923336,1);socket.emit("1",2.0774980624924737,305.9987785923336,1);socket.emit("1",1.2667593155726773,306.00469440843557,1);socket.emit("1",1.874833338017116,306.00469440843557,1);socket.emit("1",1.4694465172212892,306.00023937899135,1);socket.emit("1",1.6721461363685042,306.00023937899135,1);
                        };
                        if(player.power>=25){
                            socket.emit("1",-1.1932055034223399,245.84867398462814,2);socket.emit("1",-1.961756798803993,245.84696561072298,2);socket.emit("1",-0.44301401565901,243.85039881041814,2);socket.emit("1",-2.7131833329358903,243.84701371966804,2);socket.emit("1",0.5720101553054188,243.8468800292513,2);socket.emit("1",2.5679784464255717,243.8492593796423,2);socket.emit("1",1.5700171594315573,243.85007402090324,2);
                        };
                    };
                };
            };
        };
        if(a.code=='KeyC'&&chatInput.value==""){
            var Commander = [];
            for(let i=0;i<units.length;i++){
                if(units[i].owner==player.sid){
                    if(units[i].uPath==9){
                        Commander+=1;
                    };
                };
            };
            if(Commander.length==0){
                socket.emit("4",0,0,1);
            } else if(Commander.length==1&&selUnits.length==0){
                selUnits = [];
                units.every((unit) => {
                    if (unit.owner === player.sid && unit.type === 1) {
                        if (!unit.info) unit.info = getUnitFromPath(unit.uPath);
                        if (unit.info.name === 'Commander') {
                            selUnits.push(unit);
                            return false;
                        };
                    };
                    return true;
                });
                selUnitType = "Unit";
            };
        };
        if(a.code=='Tab'&&chatInput.value==""){
            var Usuários = [];
            for(let u=0;u<users.length;u++){
                if(users[u].name.startsWith(player.name)&&users[u].sid!==player.sid){
                    Usuários+=1;
                    var AreaX = users[u].x - player.x,
                        AreaY = users[u].y - player.y,
                        Cor = users[u].color;
                };
            };
            if(GoToBot=='Me'&&Usuários.length>0){
                GoToBot = 'Bot';
                addChat(GoToBot,'Local',playerColors[Cor]);
                camX = AreaX;
                camY = AreaY;
            } else if(GoToBot=='Bot'){
                GoToBot = 'Me';
                addChat(GoToBot,'Local',playerColors[player.color]);
                camX = 0;
                camY = 0;
            };
        };
        if(a.code=='KeyB'&&chatInput.value==""){
            buildLoadedBase();
        };
        if(a.code=='KeyZ'&&chatInput.value==""){
            defendLoadedBase();
        };
        if (a.key == "+" && chatInput.value == "") { //P  ?
            window.buildBots();
        }
        if (a.key == "-" && chatInput.value == "") { //P  ?
            socketClose();
            window.sockets = [];
        }
        if (a.code == "KeyQ" && chatInput.value == "") {
            var Prompt = prompt("Deseja mesmo fazer a base? Digite Sim");
            if(Prompt=="Sim"){
                generateRandomBlocks();
            }};
        if (a.code == "Delete") {
            if (selUnits.length !== 0) {
                for (var i = 0; i < window.sockets.length; i++) { sockets[i].emit('del', selUnits[0].owner); }
            };
        };
        if (a.keyCode == 16) {
            if (selUnits.length) {
                var center = selUnitsMidPoint();
                var points = [];
                points.push({ x: center[0], y: center[1], moving: false });
                points.push({ x: center[0] + 275, y: center[1] + 275, moving: false });
                points.push({ x: center[0] + 275, y: center[1], moving: false });
                points.push({ x: center[0], y: center[1] + 275, moving: false });
                for (var o = 0; o < selUnits.length; ++o) {
                    var closest = 1000000000;
                    for (i = 0, e = points; i < points.length; ++i) {
                        var d = UTILS.getDistance(e[i].x, e[i].y, selUnits[o].x, selUnits[o].y);
                        if (i !== 4) {
                            if (e[i].moving === false && d < closest) {
                                closest = d;
                                if (selUnits[o].owner == player.sid) {socket.emit("5", UTILS.roundToTwo(points[i].x), UTILS.roundToTwo(points[i].y), [selUnits[o].id], 0, 0); }
                                if (window.sockets){
                                    console.log("ok")
                                    for (var h = 0; h < window.sockets.length; h++) { sockets[h].emit("5", points[i].x, points[i].y, [selUnits[o].id], 0, 0); }
                                }
                            }
                        }
                        else {
                            closest = d;
                            if (selUnits[o].owner == player.sid) { socket.emit("5", UTILS.roundToTwo(points[i].x), UTILS.roundToTwo(points[i].y), [selUnits[o].id], 0, 0); }
                            if (window.sockets){
                                console.log("ok")
                                for (var h = 0; h < window.sockets.length; h++) { sockets[h].emit("5", points[i].x, points[i].y, [selUnits[o].id], 0, 0); }
                            }
                        }
                    }
                }
            }
        }
        if (a.code == "KeyX" && chatInput.value == '') {
            if (unitsWithTag() !== 0) {
                for (i = lastUnit, e = units, h = e.length * 2; i < h; ++i) {
                    if (i == h) {
                        break;
                    }
                    if (i == e.length) {
                        i = 0;
                    }
                    if (units[i] !== undefined) {
                        o = users[getUserBySID(units[i].owner)];
                        if (o !== undefined && o.sid !== player.sid && o.name.startsWith(clanTag) && units[i].shape == "star") {
                            selUnits = [];
                            camX = units[i].x - player.x;
                            camY = units[i].y - player.y;
                            selUnits.push(units[i]);
                            if (i == e.length) { lastUnit = 0; }
                            else { lastUnit = 1 + i; }
                            break;
                        }
                    }
                }
            }
        }
        if (a.keyCode == 69) {
            if (usersWithTag() !== 0) {
                for (i = lastAlly, e = users, h = e.length * 2; i < h; ++i) {
                    if (i == e.length) {
                        i = 0;
                    }
                    if (i !== 0 && users[i].sid !== player.sid && users[i].name.startsWith(clanTag)) {
                        camX = users[i].x - player.x;
                        camY = users[i].y - player.y;
                        if (i == e.length) { lastAlly = 0; }
                        else { lastAlly = 1 + i; }
                        break;
                    }
                }
            }
        }
        if (a.keyCode == 107) {//Add
            for (var i = 0; i < window.sockets.length; i++){sockets[i].emit("4", 0, 0, 1);}
        }
    });/*
    window.upgradeUnit = function(a) {
        socket && gameState && (1 == selUnits.length ? socket.emit("4", selUnits[0].id, a) : activeBase && activeBase.sid == player.sid && socket.emit("4", 0, a, 1));
        //(1 == selUnits.length ? local.emit("4", selUnits[0].id, a) : activeBase && activeBase.sid == player.sid && socket.emit("4", 0, a, 1));
        for (var i = 0; i < window.sockets.length; i++) {sockets[i] && gameState && (1 == selUnits.length ? sockets[i].emit("4", selUnits[0].id, a) : activeBase && activeBase.sid == player.sid && sockets[i].emit("4", 0, a, 1)); }
    }*/
    setInterval(updatePlayer, 90000);
    function updatePlayer() {
        socket.emit("2", 0, 0);
        socket.emit("2", Math.round(camX), Math.round(camY));
    }
    function usersWithTag() {
        if (users.lenght !== 0) {
            for (var o = [], i = 0, e = users; i < e.length; ++i) {
                if (users[i].sid !== player.sid && users[i].name.startsWith(player.name)) {
                    o.push(users[i]);
                }
            }
            return o.length;
        }
        else {
            return 0;
        }
    }
    function unitsWithTag() {
        if (units.length) {
            for (var o = [], i = 0, e = units; i < e.length; ++i) {
                h = users[getUserBySID(e[i].owner)];
                if (h !== undefined && e[i].shape == "star" && h.name.startsWith(player.name)) {
                    o.push(e[i]);
                }
            }
            return o.length;
        }
        else {
            return 0;
        }
    }
    var currentAlly = 0;
    window.moveSelUnits = function (){
        if(selUnits.length){
            var a=player.x+targetDst*MathCOS(targetDir)+camX,d=player.y+targetDst*MathSIN(targetDir)+camY,c=1;
            if(c&&1<selUnits.length)
                for(var b=0;b<users.length;++b)if(UTILS.pointInCircle(a,d,users[b].x,users[b].y,users[b].size)){
                    c=0;break}var g=-1;if(c)for(b=0;b<units.length;++b)if(units[b].onScreen&&units[b].owner!=player.sid&&UTILS.pointInCircle(a,d,units[b].x,units[b].y,units[b].size)){
                        c=0;g=units[b].id;break}1==selUnits.length&&(c=0);
            if(selUnits.length==1){
                for(var e=[],b=0;b<selUnits.length;++b){e.push(selUnits[b].id)
                                                        if(selUnits[b].owner==player.sid){socket.emit("5",UTILS.roundToTwo(a),UTILS.roundToTwo(d),e,c,g);}for(var i=0; i<window.sockets.length; i++){sockets[i].emit("5",a,d,e,c,g);}}}
            if(selUnits.length>1){
                var p = selUnitsMidPoint();
                for(var e=[],b=0;b<selUnits.length;++b){
                    e=[selUnits[b].id];
                    var x= selUnits[b].x-p[0];
                    var y= selUnits[b].y-p[1];
                    if(selUnits[b].owner==player.sid){socket.emit("5",UTILS.roundToTwo(a),UTILS.roundToTwo(d),e,c,g);}for(var i=0; i<window.sockets.length; i++){sockets[i].emit("5",a,d,e,c,g);}}}}}
    window.selUnitsMidPoint = function() {
        x = 0;
        y = 0;
        for (i = 0, a = selUnits; i < a.length; ++i) {
            y = selUnits[i].y + y;
            x = selUnits[i].x + x;
        }
        return [x / a.length, y / a.length];
    }
};
