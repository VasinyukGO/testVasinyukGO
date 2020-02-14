export default function mainNavButton () {
    document.addEventListener('click', function(e) {
        if (e.target && e.target.className == 'main-nav__button'){
            
            var targetChildNodes = e.target.parentNode.childNodes;
            var buttonsArray = [];

            // раздел работы с кнопками
            for (let i = 0; i < targetChildNodes.length; i++){
                
                if (targetChildNodes[i].classList.contains("main-nav__button_active")) {
                    targetChildNodes[i].classList.remove("main-nav__button_active");
                }
                
                buttonsArray.push(targetChildNodes[i]);
                var thisButtonIndex = buttonsArray.indexOf(e.target);                
            }
            
            e.target.classList.add('main-nav__button_active');
            // раздел работы с кнопками

            // раздел работы со статьями
            var articleArray = document.querySelectorAll('.article');            

            for (let h = 0; h < articleArray.length; h++){                

                if (h != thisButtonIndex){
                    if (articleArray[h].classList.contains("article_visible")){
                        articleArray[h].classList.remove("article_visible");
                    }
                } else {
                    if (!articleArray[h].classList.contains("article_visible")){
                        articleArray[h].classList.add("article_visible");
                    }
                }
            }
            // раздел работы со статьями            
        }
    });    
}