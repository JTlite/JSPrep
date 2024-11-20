const images=["https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg","https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg","https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg","https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"]

let currentIndex =0;
//get all elements
const galleryItems = document.querySelectorAll('.gallery-item');
const modal=document.getElementById('modal');
const prevbutton=document.getElementById('prevButton');
const modalimg = document.getElementById('modal-img');
const nextbutton=document.getElementById('nextButton');
const imageslength = images.length;
galleryItems.forEach(item=>{
    item.addEventListener('click',(e)=>{
        const index = parseInt(item.getAttribute('data-index'));
        modal.style.display="flex";
        currentIndex=index;
        modalimg.src=images[currentIndex];

})});


    

prevbutton.addEventListener('click',()=>{
    currentIndex =(currentIndex-1 + imageslength)%imageslength;
    modalimg.src = images[ currentIndex];
} );
nextbutton.addEventListener('click',()=> {
    currentIndex =(currentIndex+1)%imageslength ;
    modalimg.src = images[currentIndex];
});

modal.addEventListener('click',(e)=>{
    if(e.target === modal){
    modal.style.display="none";}
}
);
