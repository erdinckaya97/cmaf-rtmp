# cmaf-rtmp
CMAF transcoding
**İnstall FFmpeg**

**Ubuntu:** `sudo apt install ffmpeg -y`

**Fedora: ** `sudo dnf install ffmpeg -y`

**install RTMP:**

    # sudo apt update
    
    # sudo apt upgrade
    
    # sudo apt install nginx
    
    
    
    Note :Then you'll need to get the RTMP module so Nginx can handle your media stream:
    
    # sudo add-apt-repository universe
    
    # sudo apt install libnginx-mod-rtmp
    
    
    Note: Adjust your web server's configuration so it can accept and deliver your media stream.
    
    # sudo nano /etc/nginx/nginx.conf
    
    
    [Scroll to the bottom of the configuration file and add the following code]
    
    
    rtmp {
            server {
                    listen 1935;
                    chunk_size 4096;
    
                    application live {
                            live on;
                            record off;
                    }
            }
    }
    
    # sudo systemctl restart nginx

> fedora: dnf 
> ubuntu: apt
