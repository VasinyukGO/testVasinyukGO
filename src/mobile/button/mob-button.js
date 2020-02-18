export default function mobileButton () {
    document.addEventListener('click', function(e) {
        if (e.target && e.target.className == 'mob-button' || e.target.parentNode.className == 'mob-button') {
            
            var thisButton = e.target;

            if (e.target.className !== 'mob-button'){
                thisButton = e.target.parentNode;
            }

            var thisToggleIcon = thisButton.querySelector('.mob-button__arrow');
            var thisArticle = thisButton.nextElementSibling;
            var allArticlesArray = thisButton.parentNode.querySelectorAll('.mob-article');
            var allToggleIconsArray = thisButton.parentNode.querySelectorAll('.mob-button__arrow');

            

            if (thisArticle.style.display != 'block') {
                for (let i = 0; i < allArticlesArray.length; i++) {
                    allArticlesArray[i].style.display = 'none';        
                }

                for (let h = 0; h < allArticlesArray.length; h++) {
                    allToggleIconsArray[h].style.transform = 'rotate('+0+'deg)';        
                }
                
                thisArticle.style.display = 'block';
                thisToggleIcon.style.transform = 'rotate('+180+'deg)';
                document.querySelector('.body-background').classList.add("body-background_mob-bg");                

            } else {
                thisArticle.style.display = 'none'
                thisToggleIcon.style.transform = 'rotate('+0+'deg)';
                document.querySelector('.body-background').classList.remove("body-background_mob-bg");
            }
        }
    });
}