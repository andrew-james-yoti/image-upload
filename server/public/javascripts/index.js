function handleResult(success) {
    const loadedElement = document.querySelector('.file-loaded');

    if (!loadedElement) {
        console.error('No container element found');
        return;
    }

    // do animation
    loadedElement.classList.add(`${success ? 'success' : 'error'}`, 'leave', 'leave-active');

    setTimeout(() => {
        // clear animation
        loadedElement.classList.remove(`${success ? 'success' : 'error'}`, 'leave', 'leave-active');
    }, 1000)
}

function submitFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    const url = '/image-upload';
    const oReq = new XMLHttpRequest();
    oReq.open('POST', url);
    oReq.onload = function(oReqEvent) {
        handleResult(true);
    }
    oReq.onError = function(oReqEvent) {
        handleResult(false);
    }
    oReq.send(formData);
}

function uploadFile(event) {
    const dt = event.dataTransfer;
    const files = dt.files;
    const reader  = new FileReader();

    for(let file of files) {
        file
            .arrayBuffer()
            .then(() => {
                submitFile(file);
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