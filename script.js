const assets = [

"assets/lavender-sky.png",
"assets/cat.png",
"assets/cat-head.png",
"assets/pokeball-machine.png",
"assets/storm.gif",
"assets/loading-cat.gif"

];


let loaded = 0;


assets.forEach(src=>{

    let img = new Image();

    img.onload = ()=>{

        loaded++;

        let percent =
        Math.floor((loaded/assets.length)*100);


        document.querySelector("#percent")
        .innerHTML=percent;


        document.querySelector("#progress")
        .style.width=percent+"%";


        if(loaded===assets.length){

            setTimeout(()=>{

                document.querySelector("#loader")
                .style.opacity=0;


                setTimeout(()=>{

                    document.querySelector("#loader")
                    .remove();

                    startScene();

                },1000);


            },500);

        }

    }


    img.src=src;

});





function startScene(){


const start =
document.querySelector("#start-button");


start.onclick=()=>{


    start.style.opacity=0;


    setTimeout(()=>{

        start.remove();


        setTimeout(()=>{


            document.querySelector("#character-layer")
            .style.opacity=1;


            setTimeout(()=>{

                document.querySelector("#dialog")
                .style.bottom="40px";


                showDialog();


            },2000);



        },3000);


    },1000);


}



}





let texts=[

"эй, тётка! не хочешь поучаствовать лотерее? здесь получают гарантированные призы.",

"подходи, не бойся. я не царапаюсь :3",

"сегодня у тебя удачный день. ты первый мой клиент. в таком случае я дам тебе 3 жетона бесплатно",

"о, нет. мои жетоны исчезли...",

"тётка, если хочешь получить призы - найди мои жетоны",

"скорее!"

];


let current=0;



function showDialog(){


document.querySelector("#text")
.innerHTML=texts[current];


document.querySelector("#next")
.onclick=()=>{


current++;


if(current===3){


    storm();


    return;

}



if(current<texts.length){

document.querySelector("#text")
.innerHTML=texts[current];


}


if(current===texts.length){

location.href="page2.html";

}


}


}



function storm(){

    const storm =
    document.querySelector("#storm");


    // появление урагана
    storm.style.opacity = 1;


    // через 3 секунды исчезновение
    setTimeout(()=>{


        storm.style.opacity = 0;


        // возвращаем диалог после урагана
        setTimeout(()=>{

            current = 3;

            document.querySelector("#text")
            .innerHTML = texts[current];


        },1000);


    },3000);


}