function submitFile(file) {
    console.log('file', file);
    return Promise.resolve();
}

function uploadFile(event) {
    console.log('uploadFile');
    const dt = event.dataTransfer;
    const files = dt.files;
    const reader  = new FileReader();
    console.log(dt);
    console.log(files);

    reader.onload = function() {
        console.log('files[0]', files[0]);
        submitFile(files[0])
        .then(function() {
            return Promise.resolve();
        })
        .catch(function(error) {
            return Promise.reject(error);
        });
    }
}

function dropHandler(event) {
    console.log('dropHandler');
    event.stopPropagation();
    event.preventDefault();
    uploadFile(event);
}

function dragHandler(event) {
    event.stopPropagation();
    event.preventDefault();
}