function blurElements () {
    const links = document.getElementsByTagName('a');
    for (let link of links) {
        link.addEventListener ("click", function(){
            link.blur();
        });
    }
    const buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener ("click", function(){
            button.blur();
        });
    }
}