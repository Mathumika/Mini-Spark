<script>
    function changeColor() {
       
        var styleElement = document.getElementById("custom-style");

        
        var styleSheet = styleElement.sheet;

        
        styleSheet.insertRule('.custom-bg { --custom-color: #FACD5F; }', styleSheet.cssRules.length);
        styleSheet.insertRule('.btn-bg { --custom-color: #FAEDE0; }', styleSheet.cssRules.length);
        styleSheet.insertRule('.custom-text { --custom-color: #D975A6; }', styleSheet.cssRules.length);
        styleSheet.insertRule('.footer-text { --custom-color: #80767B; }', styleSheet.cssRules.length);
    }
</script>

document.addEventListener("DOMContentLoaded", function() {
  
    var customBgDiv = document.createElement("div");
    customBgDiv.className = "custom-bg h-10 p-2";
    document.head.appendChild(customBgDiv);

    
    var desktop1Div = document.createElement("div");
    desktop1Div.className = "desktop-1";
    document.head.appendChild(desktop1Div);

    
    var rectangle1Div = document.createElement("div");
    rectangle1Div.className = "rectangle-1";
    desktop1Div.appendChild(rectangle1Div);

    
    var flexContainerDiv = document.createElement("div");
    flexContainerDiv.className = "flex flex-col lg:flex-row items-center";
    desktop1Div.appendChild(flexContainerDiv);

   
    var textContainerDiv = document.createElement("div");
    textContainerDiv.className = "my-2.5 text-center mx-auto ml-4";
    flexContainerDiv.appendChild(textContainerDiv);

   
    var miniSparkHeading = document.createElement("div");
    miniSparkHeading.className = "font-bold custom-text text-4xl my-1.5 ml-4.5";
    miniSparkHeading.textContent = "Mini Spark";
    textContainerDiv.appendChild(miniSparkHeading);

    
    var storeSubheading = document.createElement("div");
    storeSubheading.className = "font-normal custom-text text-2xl my-1.5 ml-4.5";
    storeSubheading.textContent = "Store";
    textContainerDiv.appendChild(storeSubheading);

    
    var iconsContainerDiv = document.createElement("div");
    iconsContainerDiv.className = "flex flex-row";
    flexContainerDiv.appendChild(iconsContainerDiv);

  
    var searchIconDiv = document.createElement("div");
    searchIconDiv.className = "search mx-1.5";
    var searchIconImg = document.createElement("img");
    searchIconImg.src = "assests/images/Search.png";
    searchIconImg.alt = "Search Icon";
    searchIconDiv.appendChild(searchIconImg);
    iconsContainerDiv.appendChild(searchIconDiv);

    
    var profileIconDiv = document.createElement("div");
    profileIconDiv.className = "profile mx-1.5";
    var profileIconImg = document.createElement("img");
    profileIconImg.src = "assests/images/Profile.png";
    profileIconImg.alt = "Profile Icon";
    profileIconDiv.appendChild(profileIconImg);
    iconsContainerDiv.appendChild(profileIconDiv);

    
    var groupIconDiv = document.createElement("div");
    groupIconDiv.className = "profile mx-1.5";
    var groupIconImg = document.createElement("img");
    groupIconImg.src = "assests/images/Group.png";
    groupIconImg.alt = "Group Icon";
    groupIconDiv.appendChild(groupIconImg);
    iconsContainerDiv.appendChild(groupIconDiv);
})

document.addEventListener("DOMContentLoaded", function() {
    function createDiv(className, textContent = '') {
        const div = document.createElement('div');
        div.className = className;
        div.textContent = textContent;
        return div;
    }

    function createAnchor(href, className, textContent) {
        const anchor = document.createElement('a');
        anchor.href = href;
        anchor.className = className;
        anchor.textContent = textContent;
        return anchor;
    }

    function createImage(src, className, alt) {
        const img = document.createElement('img');
        img.src = src;
        img.className = className;
        img.alt = alt;
        return img;
    }

    function createParagraph(className, textContent) {
        const p = document.createElement('p');
        p.className = className;
        p.textContent = textContent;
        return p;
    }

    function createHeading(className, level, textContent) {
        const heading = document.createElement('h' + level);
        heading.className = className;
        heading.textContent = textContent;
        return heading;
    }

    function createStyledButton(href, textContent) {
        const button = createAnchor(href, 'cursor-pointer custom-bg h-6 w-40 text-center text-white text-sm font-semibold items-center justify-center rounded-2xl mx-auto my-2', textContent);
        return button;
    }

    const body = document.body;

    const mainContainer = createDiv('main-container');
    body.appendChild(mainContainer);

    const section1 = createDiv('bg-cover bg-center sm:bg-left md:bg-right lg:bg-center xl:bg-cover h-screen');
    section1.style.backgroundImage = "url('assests/images/cober.png')";

    const shopButtonContainer = createDiv('absolute bottom-0 left-0 right-0 text-center');
    const shopButton = createDiv('custom-bg h-10 w-40 text-center text-white text-2xl font-semibold items-center justify-center rounded-2xl mx-auto', 'Shop');
    shopButtonContainer.appendChild(shopButton);
    section1.appendChild(shopButtonContainer);

    mainContainer.appendChild(section1);

    const section2 = createDiv('flex flex-col lg:flex-row justify-center items-center my-16');
    const trendingText = createParagraph('text-2xl', 'TRENDING ON REELS');
    const trendingIcon = createImage('assests/images/trending.png', 'h-7 w-7 ml-1.5', 'icon');
    section2.appendChild(trendingText);
    section2.appendChild(trendingIcon);
    mainContainer.appendChild(section2);

    

});
