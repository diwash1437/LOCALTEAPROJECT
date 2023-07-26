const instagallery = document.querySelector(".insta-gallery"),
firstImg = instagallery.querySelectorAll("img")[0];

// for the arrow icons 
const arrowIcons = document.querySelectorAll(".wrapper i")

// image slide according to mouse move 
let isDragStart = false, prevPageX, prevScrollleft;
let firstImgWidth = firstImg.clientWidth   ///getting the first img


arrowIcons.forEach(icon => 
   {
      icon.addEventListener("click", ()=>
      {
         // 14:40 
         // if clicked icon is left reduce width value from the carsoul scroll left else add to it
         instagallery.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
      })
   })


const dragstart = (e) =>
{
   // updating global variable value on mousedown  event 
   //by default isdragstart is false and i will only true if the mouse btn is clicked
   isDragStart = true;
   prevPageX = e.pageX;
   // scrollleft gives the number of px of element content scroll horizontally 
   prevScrollleft = instagallery.scrollLeft;
}

// e is the target 
const dragging = (e) =>
   {

      // scrolling images/ image gallery to left according to mouse pointer 
   if(!isDragStart) return;
   // preventing it's default behavior. now img won't be dragged
   e.preventDefault();
   let positionDiff = e.pageX - prevPageX;
   instagallery.scrollLeft = prevScrollleft - positionDiff;

   instagallery.classList.add("dragging");
   }

const dragstop =() =>
{
   isDragStart = false;

   instagallery.classList.remove("dragging");
}

   instagallery.addEventListener("mousemove", dragging)
   instagallery.addEventListener("mousedown", dragstart)
   instagallery.addEventListener("mouseup", dragstop)
   


// 16:30 
  //  https://www.youtube.com/watch?v=7HPsdVQhpRw&t=11s



