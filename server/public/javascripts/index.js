function submitFile(file) {
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);
    const url = '/image-upload';
    const oReq = new XMLHttpRequest();
    oReq.open('POST', url);
    oReq.onload = function(oReqEvent) {
        console.log('onload', oReqEvent);
    }
    oReq.send(formData);
    
    
    return Promise.resolve();
}

function uploadFile(event) {
    const dt = event.dataTransfer;
    const files = dt.files;
    const reader  = new FileReader();

    for(let file of files) {
        file
            .arrayBuffer()
            .then(() => {
                submitFile(file)
                    .then(() => {
                        console.log('success');
                    })
                    .catch(console.error);
            })
            .catch(console.error);
    }
}

function dropHandler(event) {
    event.stopPropagation();
    event.preventDefault();
    uploadFile(event);
}

function dragHandler(event) {
    event.stopPropagation();
    event.preventDefault();
}