document.addEventListener('DOMContentLoaded', () => {
    // window.addEventListener("deviceorientation", (e) => {
    //     document.getElementById('ori-a').innerText = e.alpha.toFixed(3);
    //     document.getElementById('ori-b').innerText = e.beta.toFixed(3);
    //     document.getElementById('ori-g').innerText = e.gamma.toFixed(3);
    // });

    // window.addEventListener('devicemotion', (e) => {
    //     let acc = e.acceleration;
    //     // let accG = e.accelerationIncludingGravity;
    //     let rot = e.rotationRate;

    //     document.getElementById('acc-x').innerText = acc.x.toFixed(3);
    //     document.getElementById('acc-y').innerText = acc.y.toFixed(3);
    //     document.getElementById('acc-z').innerText = acc.z.toFixed(3);
    //     document.getElementById('rot-a').innerText = rot.alpha.toFixed(3);
    //     document.getElementById('rot-b').innerText = rot.beta.toFixed(3);
    //     document.getElementById('rot-g').innerText = rot.gamma.toFixed(3);
    // })

    const requestDeviceMotionPermission = () => {
        if(
            DeviceMotionEvent &&
            typeof DeviceMotionEvent.requestDeviceMotionPermission === 'function'
        ) {
            // iOS 13+ の Safari
            // 許可を取得
            DeviceMotionEvent.requestPermission()
            .then(permissionState => {
                if(permissionState === 'granted') {
                    window.addEventListener('devicemotion', e => {
                        let acc = e.acceleration;
                        // let accG = e.accelerationIncludingGravity;
                        let rot = e.rotationRate;

                        document.getElementById('acc-x').innerText = acc.x.toFixed(3);
                        document.getElementById('acc-y').innerText = acc.y.toFixed(3);
                        document.getElementById('acc-z').innerText = acc.z.toFixed(3);
                        document.getElementById('rot-a').innerText = rot.alpha.toFixed(3);
                        document.getElementById('rot-b').innerText = rot.beta.toFixed(3);
                        document.getElementById('rot-g').innerText = rot.gamma.toFixed(3);
                    })
                } else {
                    //許可を得られなかった場合の処理
                }
            })
            .catch(console.log(error)) // https通信でない場合などで許可を取得できなかった場合
        } else {
            //iOS13以外でのブラウザ///////////////////////////////////////////////////////
            window.addEventListener('devicemotion', e => {
                let acc = e.acceleration;
                // let accG = e.accelerationIncludingGravity;
                let rot = e.rotationRate;

                document.getElementById('acc-x').innerText = acc.x.toFixed(3);
                document.getElementById('acc-y').innerText = acc.y.toFixed(3);
                document.getElementById('acc-z').innerText = acc.z.toFixed(3);
                document.getElementById('rot-a').innerText = rot.alpha.toFixed(3);
                document.getElementById('rot-b').innerText = rot.beta.toFixed(3);
                document.getElementById('rot-g').innerText = rot.gamma.toFixed(3);
            })
        }
    }

    const requestDeviceOrientationPermission = () => {
        if (
            DeviceOrientationEvent &&
            typeof DeviceOrientationEvent.requestPermission === 'function'
            ) {
                // iOS 13+ の Safari
                // 許可を取得
                DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        window.addEventListener('deviceorientation', e => {
                            document.getElementById('ori-a').innerText = e.alpha.toFixed(3);
                            document.getElementById('ori-b').innerText = e.beta.toFixed(3);
                            document.getElementById('ori-g').innerText = e.gamma.toFixed(3);
                        })
                    } else {
                        // 許可を得られなかった場合の処理
                    }
                })
                .catch(console.error) // https通信でない場合などで許可を取得できなかった場合
            } else {
                // iOS13以外のブラウザ
                window.addEventListener("deviceorientation", (e) => {
                    document.getElementById('ori-a').innerText = e.alpha.toFixed(3);
                    document.getElementById('ori-b').innerText = e.beta.toFixed(3);
                    document.getElementById('ori-g').innerText = e.gamma.toFixed(3);
                });
            }
        }

    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', () => {
        requestDeviceMotionPermission()
        requestDeviceOrientationPermission()
    }, false)


}, false);
