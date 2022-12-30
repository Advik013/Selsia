function getElementById(elementId) {
    let element = document.getElementById(elementId)
    return element;
}

const footer = getElementById('footer'),
footerHtml=`<div class="flex  p-0 w-full ">
<div class="w-16 hide"></div>

<div class="footer-container flex flex-col  w-full p-0 ">
  <div class="relevant-data flex p-0  flex-wrap justify-centre item-centre  d-f-r bg-teals">

    <div class="about-us w-full   p-1 centre">
      <div class="logo">
        <a href="/">

          <img src="../image/LOGO.png" alt="logo" class="h-8 height-val">
        </a>
      </div>
     


    </div>
    <div class="contactus w-full  mr-0 ml-0 p-1 ">
      <div class="header-abt font-bold text-2xl">Contact</div>
      <div class="data-about  font-serif w-4-5 p-1 font-bold ">
        <div class="email-address  mb-1 w-full ">
          <p class="mt-1 mb-1">Email</p>
          <i class="fa fa-envelope  m-0 font-bold"></i>
          company@gmail.com
        </div>
        <div class="contact-number  mb-1  ">
          <p class="mt-1 mb-1">Coustomer Care</p>
          <i class="fa fa-phone m-0 font-bold"></i>
          +91 9076345690
        </div>
      </div>
    </div>
    <div class="contactus w-full  mr-0 ml-0 p-1  ">
      <div class="header-abt font-bold text-2xl">Pages</div>
      <div class="data-about  font-serif w-4-5 p-1 font-bold text-xl ">
       <div class="tabs h-8">
        <a href="/">
          Home
        </a>
       </div>
       <div class="tabs h-8">
        <a href="/contact">
          Contact
        </a>
       </div>
       <div class="tabs h-8">
        <a href="/blog">
          Blog
        </a>
       </div>
       <div class="tabs h-8">
        <a href="/help">
          Help
        </a>
       </div>
      </div>
    </div>
  </div>
  <hr>
  <div class="social-icons h-10 flex justify-between 	item-centre p-2 bg-teals ">
    <div class="rgts">All rights reserved &#169;2022 </div>
    <div class=" flex">

    
    <div>
      <a href="./facebook">
        <i class="fa fa-facebook m-1 "></i>
      </a>
    </div>
    <div>
      <a href="./instagram">
        <i class="fa fa-instagram m-1 "></i>
      </a>
    </div>
    <div>
      <a href="./twitter">
        <i class="fa fa-twitter m-1 "></i>
      </a>
    </div>
    <div>
      <a href="./linkedin">
        <i class="fa fa-linkedin m-1 "></i>
      </a>
    </div>
  </div>
  </div>
</div>
</div>`;
function insertHtml(){
footer.innerHTML = footerHtml;
}

insertHtml()