export default function headerButton () {
    document.addEventListener('click', function(e) {
        if (e.target && e.target.className == 'button' || e.target.parentNode.className == 'button') {
            
            var eTarget = e.target;          

            if (e.target.className !== 'button'){
                eTarget = e.target.parentNode;
            }
            
            var eTargetChildNodes = eTarget.parentNode.childNodes;
            var headerButtonArray = [];
            var headerContainer = document.querySelector('.header-container');
            var mainContainer = document.querySelector('.main-container');
            var mainNavButtonArray = mainContainer.querySelectorAll('.main-nav__button');
            var mainArticleArray = mainContainer.querySelectorAll('.article');

            for (let i = 0; i < eTargetChildNodes.length; i++){
                headerButtonArray.push(eTargetChildNodes[i]);
                var thisHeaderButtonIndex = headerButtonArray.indexOf(eTarget);
            }

            headerContainer.querySelector('.container').classList.add("container_animate");
            for (let a = 0; a < eTargetChildNodes.length; a++){
                eTargetChildNodes[a].classList.add("button_animate");
            }

            document.querySelector('.body-background').classList.add("body-background_main-bg");
            setTimeout(() => headerContainer.style.display = 'none', 950);
            setTimeout(() => mainContainer.style.display = 'block', 960);
            setTimeout(() => mainContainer.classList.add("main-container_animate"), 980);

            for (let h = 0; h < mainNavButtonArray.length; h++){
                
                if (h != thisHeaderButtonIndex){
                    if (mainNavButtonArray[h].classList.contains("main-nav__button_active")){
                        mainNavButtonArray[h].classList.remove("main-nav__button_active");
                    }
                } else {
                    if (!mainNavButtonArray[h].classList.contains("main-nav__button_active")){
                        mainNavButtonArray[h].classList.add("main-nav__button_active");
                    }
                }
            }

            for (let h = 0; h < mainArticleArray.length; h++){
                
                if (h != thisHeaderButtonIndex){
                    if (mainArticleArray[h].classList.contains("article_visible")){
                        mainArticleArray[h].classList.remove("article_visible");
                    }
                } else {
                    if (!mainArticleArray[h].classList.contains("article_visible")){
                        mainArticleArray[h].classList.add("article_visible");
                    }
                }
            }

            console.log(eTargetChildNodes);
        }
    });
}