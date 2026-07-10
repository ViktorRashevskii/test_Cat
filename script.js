const assets = [

    "assets/lavender-sky.png",
    "assets/cat.png",
    "assets/cat-head.png",
    "assets/cat-head-1.png",
    "assets/cat-head-2.png",
    "assets/cat-head-3.png",
    "assets/pokeball-machine.png",
    "assets/storm.gif",
    "assets/loading-cat.gif"

];


let loaded = 0;



assets.forEach(src => {


    let img = new Image();


    img.onload = () => {


        loaded++;


        let percent =
        Math.floor((loaded / assets.length) * 100);



        document.querySelector("#percent")
        .innerHTML = percent;



        document.querySelector("#progress")
        .style.width = percent + "%";



        if(loaded === assets.length){


            setTimeout(()=>{


                document.querySelector("#loader")
                .style.opacity = 0;



                setTimeout(()=>{


                    document.querySelector("#loader")
                    .remove();


                    startScene();


                },1000);



            },500);


        }


    }



    img.src = src;


});






function startScene(){


    const start =
    document.querySelector("#start-button");



    start.onclick = ()=>{


        start.style.opacity = 0;



        setTimeout(()=>{


            start.remove();



            setTimeout(()=>{


                document.querySelector("#character-layer")
                .style.opacity = 1;



                setTimeout(()=>{


                    document.querySelector("#dialog")
                    .style.bottom = "40px";



                    showDialog();



                },2000);



            },3000);



        },1000);



    }


}







let texts = [


"эй, тётка! не хочешь поучаствовать лотерее? здесь получают гарантированные призы.",


"подходи, не бойся. я не царапаюсь :3",


"сегодня у тебя удачный день. ты первый мой клиент. в таком случае я дам тебе 3 жетона бесплатно",


"о, нет. мои жетоны исчезли...",


"тётка, если хочешь получить призы - найди мои жетоны",


"скорее!"



];



let current = 0;








function showDialog(){


    typeText(texts[current]);



    document.querySelector("#next")
    .onclick = ()=>{



        current++;



        if(current === 3){


            storm();


            return;


        }



        if(current < texts.length){


            typeText(texts[current]);


        }



        if(current === texts.length){


            location.href = "page2.html";


        }


    }


}









let typing = false;

let typingTimer;





function typeText(message){



    const textBox =
    document.querySelector("#text");



    textBox.innerHTML = "";



    typing = true;



    let index = 0;



    clearInterval(typingTimer);



    startAvatarAnimation();





    typingTimer = setInterval(()=>{



        textBox.innerHTML += message[index];



        index++;




        if(index >= message.length){



            clearInterval(typingTimer);



            typing = false;



            stopAvatarAnimation();



        }



    },40);



}









function storm(){



    const storm =
    document.querySelector("#storm");



    storm.style.opacity = 1;




    setTimeout(()=>{



        storm.style.opacity = 0;




        setTimeout(()=>{



            current = 3;



            typeText(texts[current]);



        },1000);




    },3000);



}









let avatarTimer;



const avatarFrames = [


    "assets/cat-head-1.png",

    "assets/cat-head-2.png",

    "assets/cat-head-3.png"


];



let avatarFrame = 0;







function startAvatarAnimation(){



    const avatar =
    document.querySelector("#avatar-image");



    if(!avatar) return;



    clearInterval(avatarTimer);




    avatarTimer = setInterval(()=>{



        avatar.src =
        avatarFrames[avatarFrame];



        avatarFrame++;




        if(avatarFrame >= avatarFrames.length){


            avatarFrame = 0;


        }



    },200);



}









function stopAvatarAnimation(){



    clearInterval(avatarTimer);



    avatarFrame = 0;



    const avatar =
    document.querySelector("#avatar-image");



    if(avatar){


        avatar.src = "assets/cat-head.png";


    }



}