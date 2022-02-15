class Forme{
 constructor(){
    this.entrada=createInput("name");
    this.botao=createButton('play');
    this.greeting=createElement('h2');
 }
 hide(){
this.entrada.hide();
this.botao.hide();
this.greeting.hide();
 }
 display(){
 var titulo=createElement('h2');
 titulo.html("jogo");   
titulo.position(130,0);


this.entrada.position(130,160);
this.botao.position(250,200);
this.botao.mousePressed(()=>{// conferir
this.entrada.hide();
this.botao.hide();   
player.name=this.entrada.value(); 
playerCount+=1;
player.index=playerCount;
player.update();
player.updateCount(playerCount);
this.greeting.html("olá "+player.name);
this.greeting.position(130,160);
})
 }   
}
