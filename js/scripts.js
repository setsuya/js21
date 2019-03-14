document.addEventListener("DOMContentLoaded",function(){if("serviceWorker"in navigator){navigator.serviceWorker.register("service_worker.js");}
game=new blackjackGame();if(!game.saveGame("check")){game.saveGame("save");}else{game.saveGame("load");}
game.checkDeck();});function toggleMenu(){let overlay_element=document.getElementsByTagName("overlay")[0];overlay_element.classList.toggle("show");}
function checkAccelerator(key){let button_element;switch(key.code){case "KeyB":button_element=document.getElementById("bet-button");if(!key.altKey&&!key.metaKey&&button_element){button_element.click();}
break;case "KeyR":button_element=document.getElementById("bet-return-button");if(!key.altKey&&!key.metaKey&&button_element){button_element.click();}
break;case "KeyH":button_element=document.getElementById("hit-button");if(!key.altKey&&!key.metaKey&&button_element){button_element.click();}
break;case "KeyN":button_element=document.getElementById("next-button");if(!key.altKey&&!key.metaKey&&button_element){button_element.click();}
break;case "KeyS":button_element=document.getElementById("stand-button");if(!key.altKey&&!key.metaKey&&button_element){button_element.click();}
break;case "KeyD":button_element=document.getElementById("double-down-button");if(!key.altKey&&!key.metaKey&&button_element){button_element.click();}
break;case "KeyO":button_element=document.getElementById("pass-button");if(!key.altKey&&!key.metaKey&&button_element){button_element.click();}
break;case "KeyM":button_element=document.getElementById("menu-icon");if(!key.altKey&&!key.metaKey&&button_element){button_element.click();}
break;case "Digit1":button_element=document.getElementById("bet-button-5");if(!key.altKey&&!key.metaKey&&button_element){button_element.click();}
break;case "Digit2":button_element=document.getElementById("bet-button-10");if(!key.altKey&&!key.metaKey&&button_element){button_element.click();}
break;case "Digit3":button_element=document.getElementById("bet-button-20");if(!key.altKey&&!key.metaKey&&button_element){button_element.click();}
break;case "Digit4":button_element=document.getElementById("bet-button-50");if(!key.altKey&&!key.metaKey&&button_element){button_element.click();}
break;case "Digit5":button_element=document.getElementById("bet-button-100");if(!key.altKey&&!key.metaKey&&button_element){button_element.click();}
break;case "KeyC":button_element=document.getElementById("bet-button-custom");if(!key.altKey&&!key.metaKey&&button_element){button_element.click();}
break;}}
function printCard(card){function printPips(card){let pips="";if(typeof(card.value)==="number"){let column_items=0;let column_rest=0;let halfway_items=0;let halfway_rest=0;let outer_column="";let inner_column="";if(Math.floor(card.value/4)<1){halfway_rest=Math.ceil(card.value/2);pips+=`<column></column>
                    <column>`;for(let i=0;i<card.value;i++){if(i<halfway_rest){pips+=`<suit>${card.suit}</suit>`;}else{pips+=`<suit class="upside-down">${card.suit}</suit>`;}}
pips+=`</column>
                    <column></column>`;}else{if(card.value===10){column_items=4;column_rest=2;halfway_items=2;halfway_rest=1;}else{column_items=Math.floor(card.value/2);column_rest=card.value%2;halfway_items=Math.ceil(column_items/2);halfway_rest=Math.ceil(column_rest/2);}
for(let i=0;i<column_items;i++){if(i<halfway_items){outer_column+=`<suit>${card.suit}</suit>`;}else{outer_column+=`<suit class="upside-down">${card.suit}</suit>`;}}
for(let i=0;i<column_rest;i++){if(i<halfway_rest){inner_column+=`<suit>${card.suit}</suit>`;}else{inner_column+=`<suit class="upside-down">${card.suit}</suit>`;}}
pips+=`<column>
                        ${outer_column}
                    </column>
                    <column>
                        ${inner_column}
                    </column>
                    <column>
                        ${outer_column}
                    </column>`;}}else{let image_name=card.description.replace(/ /g,"_");pips+=`<column></column>
                <column>
                    <img src="img/themes/default/${image_name}.jpg" />
                </column>
                <column></column>`;}
return pips;}
let finished_card=`<card data-value="${card.value}" data-suit="${card.suit}">
            <sides>
                <front>
                    <corner class="card-${card.color}">
                        <value>${card.value}</value>
                        <suit>${card.suit}</suit>
                    </corner>
                    <grid class="card-${card.color} grid-${card.color}">
                        ${printPips(card)}
                    </grid>
                    <corner class="card-${card.color} upside-down">
                        <value>${card.value}</value>
                        <suit>${card.suit}</suit>
                    </corner>
                </front>
                <back>
                    <grid class="card-back"></grid>
                </back>
            </sides>
        </card>`;return finished_card;}
function blackjackGame(){let game_info={"money":100,"hands_played":0,"hands_won":0,"hands_draw":0,"blackjacks":0};let panels={"waiting":`<span class="waiting-dice"><icon class="icofont icofont-dice"></icon> <icon class="icofont icofont-dice"></icon> <icon class="icofont icofont-dice"></icon> <icon class="icofont icofont-dice"></icon> <icon class="icofont icofont-dice"></icon></span>`,"results":`<button id="next-button" onclick="game.clearTable()"><span class="accelerator-key">N</span>Next hand</button>`,"bet":`<button id="bet-button-5" onclick="game.checkBet(5)"><span class="accelerator-key">1</span>$5</button><button id="bet-button-10" onclick="game.checkBet(10)"><span class="accelerator-key">2</span>$10</button><button id="bet-button-20" onclick="game.checkBet(20)"><span class="accelerator-key">3</span>$20</button><button id="bet-button-50" onclick="game.checkBet(50)"><span class="accelerator-key">4</span>$50</button><button id="bet-button-100" onclick="game.checkBet(100)"><span class="accelerator-key">5</span>$100</button><button id="bet-button-custom" onclick="game.changeHUD('custom_bet')"><span class="accelerator-key">C</span>Custom</button>`,"custom_bet":`<input type="number" min="5" placeholder="$5 minimum bet" tabindex="1" /><button id="bet-button" onclick="game.checkBet(this.previousElementSibling.value)"><span class="accelerator-key">B</span>Bet</button><button id="bet-return-button" onclick="game.changeHUD('bet')"><span class="accelerator-key">R</span>Return</button>`,"play":`<button id="hit-button" class="continue-button" onclick="game.dealCard([{'person': 'player', 'show': true}])"><span class="accelerator-key">H</span>Hit</button><button id="stand-button" class="stop-button" onclick="game.dealerLoop()"><span class="accelerator-key">S</span>Stand</button>`,"double_down":`<button id="double-down-button" onclick="game.doubleDown()"><span class="accelerator-key">D</span>Double down</button><button id="pass-button" onclick="game.changeHUD('play')"><span class="accelerator-key">O</span>Continue</button>`}
let available_cards=Array();let dealer_total=0;let player_total=0;let bet_money=0;let double_down=false;this.saveGame=function saveGame(action){function check(){if(localStorage.getItem("blackjackSave")===null){return false;}else{return true;}}
function save(){localStorage.blackjackSave=JSON.stringify(game_info);}
function load(){game_info=JSON.parse(localStorage.blackjackSave);}
function erase(){game_info={"money":100,"hands_played":0,"hands_won":0,"hands_draw":0,"blackjacks":0}
save();}
switch(action){case "check":return check();break;case "save":save();break;case "load":load();this.changeHUDInfo({"money":game_info.money.toFixed(2)});break;case "erase":erase();location.reload();break;}}
this.showConfirm=function showConfirm(){if(confirm("Are you sure you want to erase your game data?\n\nThis action cannot be undone and the page will be reloaded!\nAll your progress will be lost!")){this.saveGame("erase");}}
this.changeHUD=async function changeHUD(panel){let panel_element=document.getElementsByTagName("options")[0];if(panel_element.innerHTML!==panels[panel]){panel_element.classList.remove("show");await this.sleep(210);panel_element.innerHTML=panels[panel];panel_element.classList.add("show");}}
this.changeHUDInfo=function changeHUDInfo(new_values){let element=document.getElementsByTagName("hud")[0];for(key in new_values){element.getElementsByTagName(key)[0].getElementsByTagName("span")[0].innerText=new_values[key];}}
this.updateGameInfo=function updateGameInfo(new_values){for(key in new_values){game_info[key]=new_values[key];}}
this.checkDeck=async function checkDeck(){if(available_cards.length<65){let prev_deck_length=available_cards.length+1;let banner_elements=document.getElementsByTagName("banner");this.showResults("SHUFFLE","");this.changeHUD("waiting");this.prepareDeck();for(let i=prev_deck_length;i<=available_cards.length;i++){await this.sleep(30);this.changeHUDInfo({"deck":i});}
banner_elements[0].classList.remove("slide");banner_elements[1].classList.remove("slide");await this.sleep(850);document.getElementById("dealer").removeChild(banner_elements[0]);document.getElementById("player").removeChild(banner_elements[0]);}
this.changeHUD("bet");}
this.prepareDeck=function prepareDeck(){available_cards=Array.from(cards).concat(cards).concat(cards);}
this.clearTable=async function clearTable(){let fields=document.getElementsByTagName("cards");let cards=document.getElementsByTagName("card");let cards_elements=document.getElementsByTagName("cards");let banner_elements=document.getElementsByTagName("banner");this.changeHUD("waiting");banner_elements[0].classList.remove("slide");banner_elements[1].classList.remove("slide");for(let i=0;i<cards.length;i++){cards[i].classList.add("slide-down");}
await this.sleep(900);fields[0].innerHTML="";fields[1].innerHTML="";document.getElementById("dealer").removeChild(banner_elements[0]);document.getElementById("player").removeChild(banner_elements[0]);this.countTotal("dealer");this.countTotal("player");double_down=false;this.checkDeck();}
this.turnCard=async function turnCard(player){let location=document.getElementById(player);let card=location.getElementsByTagName("card");let cards_length=card.length;card[cards_length-1].classList.add("flip");await this.sleep(50);}
this.dealCard=async function dealCard(info){function drawRandomCard(){let random_card_index=Math.floor(Math.random()*(available_cards.length-1));let card=printCard(available_cards[random_card_index]);available_cards.splice(random_card_index,1);return card;}
if(info.length===1&&info[0].person==="player"){this.changeHUD("waiting");}
for(let i=0;i<info.length;i++){let card=drawRandomCard();let location=document.getElementById(info[i].person).getElementsByTagName("cards")[0];if(i>0){await this.sleep(1200);}
location.insertAdjacentHTML("beforeend",card);location.scrollLeft=location.scrollWidth;await this.sleep(100);await location.getElementsByTagName("card")[location.getElementsByTagName("card").length-1].classList.add("slide-up");await this.sleep(900);if(info[i].show){await this.turnCard(info[i].person);this.countTotal(info[i].person);}
this.changeHUDInfo({"deck":available_cards.length});}
if(info.length===1&&info[0].person==="player"){if(info[0].show){if(player_total>21){await this.sleep(1000);await this.turnCard("dealer");this.countTotal("dealer");this.checkResults();}else{this.changeHUD("play");}}else{await this.turnCard("player");this.countTotal("player");this.dealerLoop();}}}
this.checkBet=function checkBet(value){let bet=parseFloat(value);if(!isNaN(bet)&&bet>=5){this.updateGameInfo({"money":parseFloat(game_info.money-bet)});this.changeHUDInfo({"money":game_info.money.toFixed(2),"bet":bet.toFixed(2)});this.showChangeMoney("take",bet.toFixed(2));bet_money=bet;this.startGame();}}
this.doubleDown=function doubleDown(){this.updateGameInfo({"money":parseFloat(game_info.money-bet_money)});this.changeHUDInfo({"money":game_info.money.toFixed(2),"bet":(bet_money*2).toFixed(2)});this.showChangeMoney("take",bet_money.toFixed(2));bet_money+=bet_money;double_down=true;this.dealCard([{"person":"player","show":false}]);}
this.showChangeMoney=async function showChangeMoney(type,amount){let changes_element=document.getElementsByTagName("changes")[0];switch(type){case "take":changes_element.innerText=`-$${amount}`;changes_element.classList.add("take-money");await this.sleep(1000);changes_element.classList.remove("take-money");break;case "give":changes_element.innerText=`+$${amount}`;changes_element.classList.add("add-money");await this.sleep(1000);changes_element.classList.remove("add-money");break;}}
this.countTotal=function countTotal(person){let person_cards=document.getElementById(person).getElementsByTagName("card");let qty_ace_cards=0;let cards_sum=0;for(let i=0;i<person_cards.length;i++){let temp_value=person_cards[i].attributes["data-value"].value;if(temp_value==="A"){qty_ace_cards++;}else{if(temp_value==="J"||temp_value==="Q"||temp_value==="K"){cards_sum+=10;}else{cards_sum+=parseInt(temp_value);}}}
if(qty_ace_cards>0){if(cards_sum+qty_ace_cards<=21){let used_sum=false;let temp_sum=0;for(let i=0;i<=qty_ace_cards;i++){let this_sum=(1*i)+(11*(qty_ace_cards-i))+cards_sum;if(this_sum>temp_sum&&this_sum<=21){temp_sum=this_sum;used_sum=true;}}
if(!used_sum){temp_sum+=qty_ace_cards;}
cards_sum=temp_sum;}else{cards_sum+=qty_ace_cards;}}
switch(person){case "dealer":dealer_total=cards_sum;document.getElementsByTagName("totals")[0].getElementsByTagName("span")[0].innerText=dealer_total;break;case "player":player_total=cards_sum;document.getElementsByTagName("totals")[1].getElementsByTagName("span")[0].innerText=player_total;break;}}
this.dealerLoop=async function dealerLoop(){this.changeHUD("waiting");this.turnCard("dealer");this.countTotal("dealer");while(dealer_total<17){await this.dealCard([{"person":"dealer","show":true}]);this.countTotal("dealer");}
await this.checkResults();}
this.checkResults=async function checkResults(){let update_obj={"hands_played":game_info.hands_played+1};let total_pay=0;let dealer_cards_length=document.getElementsByTagName("cards")[0].getElementsByTagName("card").length;let player_cards_length=document.getElementsByTagName("cards")[1].getElementsByTagName("card").length;let totals_element=document.getElementsByTagName("totals");if(player_total===21){if(dealer_total!==21){if(player_cards_length===2){total_pay=bet_money*2.5;}else{total_pay=bet_money*2;}
update_obj.hands_won=game_info.hands_won+1;this.showResults("LOSE","WIN");}else{if(dealer_cards_length!==2){total_pay=bet_money*2.5;update_obj.hands_won=game_info.hands_won+1;this.showResults("LOSE","WIN");}else{total_pay=bet_money;this.showResults("DRAW","DRAW");update_obj.hands_draw=game_info.hands_draw+1;}}
if(double_down){total_pay=total_pay*1.5;}
update_obj.money=parseFloat(game_info.money+total_pay);update_obj.blackjacks=game_info.blackjacks+1;}else if(player_total<21){if(player_total>dealer_total||dealer_total>21){total_pay=bet_money*2;update_obj.hands_won=game_info.hands_won+1;this.showResults("LOSE","WIN");}else if(player_total===dealer_total){total_pay=bet_money;this.showResults("DRAW","DRAW");update_obj.hands_draw=game_info.hands_draw+1;}else{this.showResults("WIN","LOSE");}
if(double_down){total_pay=total_pay*1.5;}
update_obj.money=parseFloat(game_info.money+total_pay);}else{this.showResults("WIN","LOSE");}
this.updateGameInfo(update_obj);this.changeHUDInfo({"money":game_info.money.toFixed(2),"bet":"0.00"});if(total_pay!==0){this.showChangeMoney("give",total_pay.toFixed(2));}
this.saveGame("save");this.changeHUD("results");}
this.showResults=async function showResults(dealer_result,player_result){let field_elements=document.getElementsByTagName("field");let dealer_result_text=dealer_result.split("").join(" ");let player_result_text=player_result.split("").join(" ");field_elements[0].innerHTML+=`<banner><span class="${dealer_result.toLowerCase()}-text">${dealer_result_text}</span></banner>`;field_elements[1].innerHTML+=`<banner><span class="${player_result.toLowerCase()}-text">${player_result_text}</span></banner>`;await this.sleep(100);field_elements[0].getElementsByTagName("banner")[0].classList.add("slide");field_elements[1].getElementsByTagName("banner")[0].classList.add("slide");await this.sleep(550);}
this.startGame=async function startGame(){let initial_deal=[{"person":"player","show":true},{"person":"dealer","show":true},{"person":"player","show":true},{"person":"dealer","show":false}];this.changeHUD("waiting");await this.dealCard(initial_deal);this.countTotal("player");if(player_total===21){this.turnCard("dealer");this.countTotal("dealer");this.checkResults();}else if((player_total===9||player_total===10||player_total===11)&&(game_info.money>=(bet_money*2))){this.changeHUD("double_down");}else{this.changeHUD("play");}}
this.showSaveData=function showSaveData(){let stats_element=document.getElementsByTagName("stats")[0];stats_element.innerHTML=`<p><b>Total games:</b> ${game_info.hands_played}</p>
            <p><b>Games won:</b> ${game_info.hands_won} (${(game_info.hands_won===0||game_info.hands_played===0)?0:(((game_info.hands_won/game_info.hands_played)*100).toFixed(2))}%)</p>
            <p><b>Draws:</b> ${game_info.hands_draw} (${(game_info.hands_draw===0||game_info.hands_played===0)?0:(((game_info.hands_draw/game_info.hands_played)*100).toFixed(2))}%)</p>
            <p><b>Blackjacks:</b> ${game_info.blackjacks} (${(game_info.blackjacks===0||game_info.hands_played===0)?0:(((game_info.blackjacks/game_info.hands_played)*100).toFixed(2))}%)</p>`;}
this.sleep=function sleep(ms){return new Promise(resolve=>setTimeout(resolve,ms));}}