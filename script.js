var div1 = document.getElementById("div1").getBoundingClientRect();
var lart1 = Math.round(div1.top);
var djatht1 = Math.round(div1.right);
var majt1 = Math.round(div1.left);


var div2 = document.getElementById("div2").getBoundingClientRect();
var lart2 = Math.round(div2.top);
var majt2 = Math.round(div2.left);
var djatht2 = Math.round(div2.right);




var mbi = false;

if(djatht1 == majt2){
    mbi = true;
}
console.log(mbi);
console.log(djatht1 + " " + majt2);

var divi1 = document.getElementById("div1");

document.addEventListener("keypress" ,function(event){
    if(event.keyCode == 32){
        setTimeout( function ad(){
            divi1.classList.add("animacion");
        } , 0)
        setTimeout(function rm(){
            divi1.classList.remove("animacion");
        }, 1000)
    }
});

var nderprej = false;

var piket = 0;
var piket1 = function piket1(){

    var posht1 = Math.round(document.getElementById("div1").getBoundingClientRect().bottom);
    var posht2 = Math.round(document.getElementById("div2").getBoundingClientRect().bottom);

    var lart1 = Math.round(document.getElementById("div1").getBoundingClientRect().top);
    var lart2 = Math.round(document.getElementById("div2").getBoundingClientRect().top);

    var djatht1 = Math.round(document.getElementById("div1").getBoundingClientRect().right);
    var djatht2 = Math.round(document.getElementById("div2").getBoundingClientRect().right);

    var majt1 = Math.round(document.getElementById("div1").getBoundingClientRect().left);
    var majt2 = Math.round(document.getElementById("div2").getBoundingClientRect().left);

    if(majt2 < majt1){
        piket++;
    }
};



        

function fillo(a){
    var pengesat = document.getElementById("div2");
    piket = 0;

    if(a == 1){
        pengesat.classList.add("pengesa");
        pika = setInterval(piket1 ,3999);
    }
    else if(a == 2){
        pengesat.classList.add("pengesaMedium");
        pika = setInterval(piket1 ,2999);
    }
    else if(a == 3){
        pengesat.classList.add("pengesaHard");
        pika = setInterval(piket1 ,1999);
    }

    setInterval(humbur, 100);



    

    // document.getElementById("easy").addEventListener("click", (MouseEvent) => {
    //     pengesat.classList.add("pengesa");
    //     pika = setInterval(piket1 ,3999);
    //     setInterval(humbur, 100);
    // });
    // document.getElementById("medium").addEventListener("click", (MouseEvent) => {
    //     pengesat.classList.add("pengesaMedium");
    //     pika = setInterval(piket1 ,2999);
    //     setInterval(humbur(), 100);
    // });
    // document.getElementById("hard").addEventListener("click", (MouseEvent) => {
    //     pengesat.classList.add("pengesaHard");
    //     pika = setInterval(piket1 ,1999);
    //     setInterval(humbur(), 100);
    // });


    function humbur(){

        var posht1 = Math.round(document.getElementById("div1").getBoundingClientRect().bottom);
        var posht2 = Math.round(document.getElementById("div2").getBoundingClientRect().bottom);

        var lart1 = Math.round(document.getElementById("div1").getBoundingClientRect().top);
        var lart2 = Math.round(document.getElementById("div2").getBoundingClientRect().top);

        var djatht1 = Math.round(document.getElementById("div1").getBoundingClientRect().right);
        var djatht2 = Math.round(document.getElementById("div2").getBoundingClientRect().right);

        var majt1 = Math.round(document.getElementById("div1").getBoundingClientRect().left);
        var majt2 = Math.round(document.getElementById("div2").getBoundingClientRect().left);


            if( (majt2 < djatht1 && majt2 > majt1) && (lart2 > lart1 && lart2 < posht1) ){
                document.getElementById("div1").style.backgroundImage = "url('spongebob-lose.png')";
                setTimeout(
                    function(){
                        alert("Keni Humbur!!!\nMe shumë fat herave tjera.");
                    }, 100
                )
                setTimeout(
                    function(){
                        document.getElementById("div1").style.backgroundImage = "url('spongebob.png')";
                    }, 3000
                )
                setInterval(
                    function(){
                        piket = 0;
                    }, 120
                    
                )
                
                perfundo();
                clearInterval(humbur);
                clearInterval(piket1);
                nderprej = true;
            }
    };

    
}
function perfundo(){
    var pengesat = document.getElementById("div2");
    pengesat.classList.remove("pengesa");
    pengesat.classList.remove("pengesaMedium");
    pengesat.classList.remove("pengesaHard");
    window.clearInterval(this.pika);
}