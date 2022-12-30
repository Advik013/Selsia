function getElementById(elementId) {
    let element = document.getElementById(elementId)
    return element;
}

const sideBar = getElementById('side-bar'),
sibeBarHtml = `
<div class="side-bar w-16 h-screen side-screen fixed top z-2  p-0 
bg-wth
pb-2" id="sidebar">
<div class="flex flex-col" >

  <div class="nav  contaier hover-tab h-14 p-0 flex justify-start item-centre  rounded">
    <div class="icon h-12 w-12 p-1 centre " id="imgl">
      <a href="/">
      <i class="fa fa-home" ></i>
      </a>
    </div>
    <div class="icon h-12 disable  w-full centre tab" id="tab">
      <a href="/">
        Home</a>
    </div>
  </div>
  <div class="nav  contaier hover-tab h-14 p-0 flex justify-start item-centre  rounded">
    <div class="icon h-12 w-12 p-1 centre " id="imgl" >
      <a href="./cart.html">
      <i class="fa fa-shopping-cart" ></i>
      </a>
    </div>
    <div class="icon h-12 disable tab w-full centre" >
      <a href="./cart.html">
        Cart</a>
    </div>
  </div>
  <div class="nav  contaier hover-tab h-14 p-0 flex justify-start item-centre  rounded">
  <div class="icon h-12 w-12 p-1 centre " id="imgl" >
    <a href="./product.html">
    <i class="fa fa-search" ></i>
    </a>
  </div>
  <div class="icon h-12 disable tab w-full centre" >
    <a href="./product.html">
    Search</a>
  </div>
</div>
  <div class="nav  contaier hover-tab h-14 p-0 flex justify-start item-centre  rounded">
    <div class="icon h-12 w-12 p-1 centre " >
      <a href="./cart.html">
      <i class="fa fa-first-order" ></i>
      </a>
    </div>
    <div class="icon h-12 disable tab w-full centre" >
      <a href="./cart.html">
        Order</a>
    </div>
  </div>
  <div class="nav  contaier hover-tab h-14 p-0 flex justify-start item-centre  rounded">
    <div class="icon h-12 w-12 p-1 centre " >
      <a href="/">
      <i class="fa fa-question-circle" ></i>
      </a>
    </div>
    <div class="icon h-12 disable tab  w-full centre" >
      <a href="/">
        Help</a>
    </div>
  </div>
  <div class="nav  contaier hover-tab h-14 p-0 flex justify-start item-centre  rounded">
    <div class="icon h-12 w-12 p-1 centre " >
      <a href="/">
      <i class="fa fa-user" ></i>
      </a>
    </div>
    <div class="icon h-12 disable tab  w-full centre" >
      <a href="/">
       user</a>
    </div>
  </div>
</div>

</div>


`;
function insertHtml(){
sideBar.innerHTML = sibeBarHtml;
}

insertHtml()