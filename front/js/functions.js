let degree = 0;
let rotationSpeed = 2;
// let intervalId;

let meterSpeed = 0;

let currentNioiValue = 0;
let oldNioiValue = 0;

//においボタン押下回数（においレベルに換算できる想定）
let shotCount = 0;

//ボタンクリック非活性
let disabled = false;

let nowStage = '0';

// const startPuropera = () => {

//     intervalId = setInterval(() => {
//         if(degree >= 360) {
//             degree = 0;
//         }

//         degree += rotationSpeed;
//         puropera.style.transform = `rotate(${degree}deg)`
//     }, 0);
// }

// const stopPuropera = () => {
//     clearInterval(intervalId);
// }

const meterUpdate = (meter, needle, newVal) => {
    // meterSpeed += (val * 100 - meterSpeed) * 0.1;
    // meter.style.left = meterSpeed + 'px';
    // if(oldNioiValue == newVal || shotCount == 0) {return}

    let revisionVal = 1;

    if(shotCount == 0) {return}
    let deg = 10;
    if(shotCount == 1) {
        if(newVal >= 3) {
            revisionVal = 3;
        } else {
            revisionVal = 2;
        }
    } else if(shotCount >= 2) {
        if(newVal >= 5) {
            revisionVal = 5;
        } else if(newVal <= 1) {
            revisionVal = 1;
        } else {
            revisionVal = 4;
        }
    }

    switch(revisionVal) {
        case 1:
            deg = 10;
            break;
        case 2:
            deg = 55;
            break;
        case 3:
            deg = 100;
            break;
        case 4:
            deg = 145;
            break;
        case 5:
            deg = 190;
            break;
        default:
            break;
    }

    console.log(newVal);
    console.log(deg);

    setTimeout(() => {
        meter.style.backgroundImage = `url(../img/control/mater_Lv${revisionVal}.png)`
    }, 1300)
    needle.style.transform = `rotate(${deg}deg)`;
}

const bgUpdate = (bg, bgBunsi, newVal) => {
    if(oldNioiValue == newVal) {return}
    bg.style.opacity = (newVal - 1) * 0.25; //1-5を0-1に変換

    if(newVal <= 1) {
        bgBunsi.style.backgroundImage = ''
        bgBunsi.style.backgroundSize = ''
        bgBunsi.style.backgroundPosition = ''
    } else if(newVal == 2) {
        bgBunsi.style.backgroundImage = 'url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png)'
        bgBunsi.style.backgroundSize = '5% auto, 3% auto, 4% auto, 5% auto, 3% auto, 4% auto, 3% auto, 4% auto, 5% auto'
        bgBunsi.style.backgroundPosition = 'left 6% top 3%, left 15% bottom 5%, right 24% top 16%, right 36% bottom 20%, left 30% top 20%, left 30% bottom 0%, right 27% top 5%, right 10% bottom 10%, left 30% top 50%'
    } else if(newVal == 3) {
        bgBunsi.style.backgroundImage = 'url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png)'
        bgBunsi.style.backgroundSize = '5% auto, 3% auto, 4% auto, 5% auto, 3% auto, 4% auto, 3% auto, 4% auto, 5% auto, 4% auto, 3% auto, 5% auto, 3% auto'
        bgBunsi.style.backgroundPosition = 'left 6% top 3%, left 15% bottom 5%, right 24% top 16%, right 36% bottom 20%, left 30% top 20%, left 30% bottom 0%, right 27% top 5%, right 10% bottom 10%, left 30% top 50%, left 1% bottom 33%, right 45% bottom 21%, right 49% top 30%, right 20% top 40%'
    } else if(newVal == 4) {
        bgBunsi.style.backgroundImage = 'url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png)'
        bgBunsi.style.backgroundSize = '5% auto, 3% auto, 4% auto, 5% auto, 3% auto, 4% auto, 3% auto, 4% auto, 5% auto, 4% auto, 3% auto, 5% auto, 3% auto, 3% auto, 4% auto, 4% auto, 5% auto'
        bgBunsi.style.backgroundPosition = 'left 6% top 3%, left 15% bottom 5%, right 24% top 16%, right 36% bottom 20%, left 30% top 20%, left 30% bottom 0%, right 27% top 5%, right 10% bottom 10%, left 30% top 50%, left 1% bottom 33%, right 45% bottom 21%, right 49% top 30%, right 20% top 40%, left 3% top 15%, left 20% bottom 15%, top 50% right 40%, top 55% right 5%'
    } else if(newVal == 5) {
        bgBunsi.style.backgroundImage = 'url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png), url(../img/common/bunsi_midori.png)'
        bgBunsi.style.backgroundSize = '5% auto, 3% auto, 4% auto, 5% auto, 3% auto, 4% auto, 3% auto, 4% auto, 5% auto, 4% auto, 3% auto, 5% auto, 3% auto, 3% auto, 4% auto, 4% auto, 5% auto, 4% auto, 4% auto, 4% auto, 4% auto'
        bgBunsi.style.backgroundPosition = 'left 6% top 3%, left 15% bottom 5%, right 24% top 16%, right 36% bottom 20%, left 30% top 20%, left 30% bottom 0%, right 27% top 5%, right 10% bottom 10%, left 30% top 50%, left 1% bottom 33%, right 45% bottom 21%, right 49% top 30%, right 20% top 40%, left 3% top 15%, left 20% bottom 15%, top 50% right 40%, top 55% right 5%, left 12% top 45%, left 40% bottom 32%, right 30% bottom 45%, right 1% top 15%'
    }

}

const playMovie = (stageNum) => {
    nowStage = stageNum;
    const aromaShooter = document.getElementById('aroma-shooter');
    const video = document.getElementById('video');
    video.style.display = 'block';

    if(nowStage == '2') {
        video.setAttribute('src', '../video/2-2_3ue.webm');
        setTimeout(() => {
            meter.style.opacity = "1";
            document.getElementById('meter-sound').play();
        }, 6000)

        video.load();
        video.loop = false;
        video.play();
        video.currentTime = 0;

    } else if(nowStage == '2-4') {

        aromaShooter.style.display = 'block';
        setTimeout(() => {
            aromaShooter.style.opacity = 1;
        }, 0)

        video.setAttribute('src', '../video/2-4ab_ue.webm');
        // video.style.pointerEvents = 'none';

        setTimeout(() => {
            video.load();
            video.loop = false;
            video.play();
            video.currentTime = 0;
        }, 300)

    } else if(nowStage == '2-5') {
        video.setAttribute('src', '../video/2-5ab.webm');
        video.load();
        video.loop = false;
        video.play();
        video.currentTime = 0;

        const intervalId1 = setInterval(() => {
            if(currentNioiValue >= 3) {
                video.style.display = 'none';
                video.pause();
                playMovie('2-6');
                aromaShooter.style.display = 'block;'
                clearInterval(intervalId1);
            }
        }, 800)

    } else if(nowStage == '2-6') {
        aromaShooter.style.display = 'block';
        setTimeout(() => {
            aromaShooter.style.opacity = 1;
        }, 0)

        video.setAttribute('src', '../video/2-6ab_ue.webm');

        setTimeout(() => {
            video.load();
            video.loop = true;
            video.play();
            video.currentTime = 0;
        }, 300)

        const intervalId3 = setInterval(() => {
            if(currentNioiValue >= 5 || shotCount == 2) {
                video.style.display = 'none';
                video.pause();
                aromaShooter.style.display = 'none';
                playMovie('2-7ab');
                clearInterval(intervalId3);
            }
        }, 800)

    } else if(nowStage == '2-7ab') {
        video.setAttribute('src', '../video/2-7ab.webm');
        video.load();
        video.loop = false;
        video.play();
        video.currentTime = 0;

        // aromaShooter.style.display = 'block';

        const intervalId4 = setInterval(() => {
            if(currentNioiValue >= 5) {
                video.style.display = 'none';
                video.pause();
                // aromaShooter.style.display = 'none';
                playMovie('2-7c');
                clearInterval(intervalId4);
            }
        }, 800)

    } else if(nowStage == '2-7c') {
        video.setAttribute('src', '../video/2-7cd.webm');
        video.load();
        video.loop = false;
        video.play();
        video.currentTime = 0;

        setTimeout(() => {
            getApi("air", airURL);
            console.log("脱臭機on")
        }, 7500)

        const intervalId5 = setInterval(() => {
            if(currentNioiValue <= 1) {
                setTimeout(() => {
                    playMovie('2-8');
                }, 1000)
                clearInterval(intervalId5);
            }
        }, 800)

    } else if(nowStage == '2-8'){
        video.setAttribute('src', '../video/2-8_2-9.webm');
        video.load();
        video.loop = false;
        video.play();
        video.currentTime = 0;
    } else {
        video.setAttribute('src', `../video/nioi0${nowStage}.mp4`);
        video.load();
        video.loop = false;
        video.play();
        video.currentTime = 0;
    }

    video.addEventListener('ended', () => {
        console.log(nowStage)
        if(nowStage == '2') {
            // startExperience();
            playMovie('2-4');
        } else if(nowStage == '2-4') {
            video.pause();
            //微妙に巻き戻す
            video.currentTime -= 0.1

        } else if(nowStage == '2-5') {
            video.play();
            video.currentTime = 6;

            // playMovie('2-5_2');
        } else if(nowStage == '2-7ab') {
            video.play();
            video.currentTime = 4;
        } else if(nowStage == '2-7c') {
            video.play();
            video.currentTime = 12;
        } else if(nowStage == '2-8') {
            video.style.display = 'none';
            meter.style.opacity = '0';
            menu.style.opacity = '1';
            disabled = false;
        } else {
            video.style.display = 'none';
            menu.style.opacity = '1';
            disabled = false;
            shotCount = 0;
            oldNioiValue = 0;
            currentNioiValue = 0;
        }
    })

}
