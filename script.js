  function openTelegram() {
            // Try to open in Telegram app first
            const telegramAppUrl = 'tg://resolve?domain=marlonalpha';
            const telegramWebUrl = 'https://t.me/marlonalpha';
            
            // Create a hidden iframe to try opening the app
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = telegramAppUrl;
            document.body.appendChild(iframe);
            
            // Fallback to web version after a short delay
            setTimeout(() => {
                document.body.removeChild(iframe);
                window.open(telegramWebUrl, '_blank');
            }, 1000);
            
            // Prevent default link behavior
            return false;
        }
        
        // Alternative method: detect if user is on mobile
        function isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }
        
        // Update the button click handler based on device
        document.addEventListener('DOMContentLoaded', function() {
            const joinButton = document.querySelector('.join-button');
            
            if (isMobile()) {
                joinButton.href = 'tg://resolve?domain=marlonalpha';
                joinButton.onclick = function(e) {
                    // On mobile, try app first, then fallback
                    setTimeout(() => {
                        window.location.href = 'https://t.me/marlonalpha';
                    }, 2000);
                };
            } else {
                joinButton.href = 'https://t.me/marlonalpha';
                joinButton.target = '_blank';
            }
        });
