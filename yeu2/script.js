window.onload = function() {
    var lyrics = document.querySelector(".lyrics-large");
    var popup = document.querySelector(".lyrics-box");
  
  
    var fontSize = 30; 
    while (lyrics.scrollHeight > lyrics.offsetHeight) {
        fontSize -= 1;
        lyrics.style.fontSize = fontSize + "px";
    }
  
  
    var maxWidth = Math.max(lyrics.offsetWidth, lyrics.scrollWidth);
    popup.style.width = maxWidth + "px";
  }
  
  var currentIndex = 0; 
  
  function closeAlert() {
    var lyrics = document.querySelector(".lyrics-large");
    var songLines = [
        "",
        "ANH",
        "YÊU",
        "EM",
        "LẮM",
        "ĐÓ",
        "BÉ",
        "IU"
    ];
  
    currentIndex = (currentIndex + 1) % songLines.length; 
    lyrics.textContent = songLines[currentIndex]; 
  }