var video = document.querySelector('video');
var mediaSource = new MediaSource();
video.src = URL.createObjectURL(mediaSource);
mediaSource.addEventListener('sourceopen', sourceOpen);

function sourceOpen() {
    URL.revokeObjectURL(video.src);
    var sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');

    fetch('/path/to/your/php/script.php?path=init.mp4')
        .then(response => response.arrayBuffer())
        .then(data => {
            sourceBuffer.appendBuffer(data);
            sourceBuffer.addEventListener('updateend', updateEnd);
        });

    function updateEnd() {
        sourceBuffer.removeEventListener('updateend', updateEnd);
        sourceBuffer.timestampOffset = video.duration;
        fetch('/path/to/your/php/script.php?path=segment1.m4s')
            .then(response => response.arrayBuffer())
            .then(data => sourceBuffer.appendBuffer(data));
    }
}
