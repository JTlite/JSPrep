const gallery=document.getElementById('gallery');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const bullets = document.getElementById('bullets');
const modal=document.getElementById('modal');
const modalimg = document.getElementById('modal-img');
const closeModal = document.getElementById('close-button');

let images;
let currentIndex = 0;

const fetchImages =async()=>{
   const res = await fetch('https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json');
   const data = await res.json();
   images = Object.values(data).map(item =>  item.flag.large); 
   images=images.slice(0,4);
   createGallery(images);
   modal.style.display="none";
}
fetchImages();

function createGallery(images){
   for(let i=0;i<images.length;i++){
      const galleryItem = document.createElement('div');
      const image = document.createElement('img');
      image.src=images[i];
      image.classList.add('gallery-item-img');
      galleryItem.appendChild(image);
      galleryItem.dataIndex=i;     
      galleryItem.classList.add('gallery-item');

      galleryItem.addEventListener('click',()=>handleImageClick(i));
      gallery.appendChild(galleryItem);
   }

}

function handleImageClick(index){
   console.log(index);
  modal.style.display="flex";
   currentIndex=index;
   modalimg.src=images[currentIndex];
}

function createBullets(length){
   for(let i=0;i<length;i++){      
      const bullet = document.createElement('div');
      bullet.id=`bullet-${i}`;
      bullet.innerHTML ='o';
      bullet.classList.add('bullet');
      bullet.style.color = i==0 ?'red':'yellow';
      bullets.appendChild(bullet);
   }

}

function updateBullet(currentIndex){
   const bullets = document.querySelectorAll('bullets');
   bullets.forEach(bullet => bullet.style.color = 'black')
   const  bullet =  document.getElementById(`bullet-${currentIndex}`);
   bullet.style.color="red";

}

prev.addEventListener('click', ()=>{
   currentIndex=(currentIndex-1 + images.length)%images.length;
   modalimg.src = images[currentIndex];
   updateBullet(currentIndex);
  });

next.addEventListener('click',()=>{
       currentIndex = (currentIndex+1)%images.length;
       modalimg.src=images[currentIndex];
      updateBullet(currentIndex);
  });

  modal.addEventListener('click', (event) => {
   if (event.target === modal) {
       modal.style.display = "none"; 
   }
});





