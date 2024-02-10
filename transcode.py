import subprocess

command = [
    'ffmpeg',
    '-i', 'rtmp://your-rtmp-source',
    '-map', '0',
    '-c:v', 'libx264',
    '-b:v:0', '800k',
    '-b:v:1', '300k',
    '-s:v:1', '640x360',
    '-profile:v:0', 'main',
    '-profile:v:1', 'main',
    '-bf', '1',
    '-keyint_min', '120',
    '-g', '120',
    '-sc_threshold', '0',
    '-b_strategy', '0',
    '-ar:a:1', '22050',
    '-use_timeline', '1',
    '-use_template', '1',
    '-window_size', '5',
    '-adaptation_sets', 'id=0,streams=v id=1,streams=a',
    '-f', 'dash',
    '/path/to/output.mpd'
]

subprocess.run(command)
