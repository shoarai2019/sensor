const getApi = (type, url) => {
    const xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.onreadystatechange = () => {
        if(this.readyState == 4 && this.status == 200){
            console.log(this.getAllResponseHeaders());
            console.log(this.responseText);
            let data = 0;
            if(type == 'sensor') {
                currentNioiValue = data;
            }
        }
    }

    xmlHttpRequest.open('GET', url, true);

    xmlHttpRequest.send();

}
