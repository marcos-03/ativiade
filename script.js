function trocarImagem(){
    const imgem = document.getElementByid("imagem");
    Imagem.style.animation = "rotateY  1s ease";
    const imagens = ("imagem1.jpg","imagem2.jpg","imagem3.jpg");
    const src = magem.src.split('/').pop();
    let index = imagem.indexOf(src);
    index  = (index + 1 )% imagem.lemgth;
    imagens.src = imagem[imagem];

    setTimeout ( () => {
        imagem.style.animations = "";
    },100);

}