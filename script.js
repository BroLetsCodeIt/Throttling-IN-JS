// Throttling Function
const throttleFunction=(func, delay)=>{
 
  // Previously called time of the function
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();
 
    // Logging the difference between previously
    // called and current called timings
    // console.log(now-prev, delay);
     
    // If difference is greater than delay call
    // the function again.
    if(now - prev> delay){
      prev = now;
 
      // "..." is the spread operator here
      // returning the function with the
      // array of arguments
      return func(...args); 
    }
  }
}
document.querySelector('.container')
.addEventListener("mousemove", throttleFunction((dets)=>{
      const div = document.createElement('div');
      div.classList.add('imagediv');
      div.style.left = dets.clientX + 'px';
      div.style.top = dets.clientY + 'px';
      
      const img = document.createElement('img');
      img.setAttribute('src','https://images.unsplash.com/photo-1694164108456-e21c7e575a73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80');
     
      div.appendChild(img);
      document.body.appendChild(div);
      
      gsap.to(img , {
        y:'0',
        ease:'sine',
        opacity:'0.2',
        yoyo:'true'
      })

      setTimeout(() =>{
    
       document.body.removeChild(div);
      },700)
}, 100));