
function getElementById(elementId) {
    let element = document.getElementById(elementId)
    return element;
}

const navBar = getElementById('navbar'),
navHtml = `  <nav class="h-14 fixed w-full bg-teal  p-0 centre navigation-bar  bg-wth" id="nav-bar">
<div class="logo p-0 centre h-full w-16">
  <img src="../image/dot4tap.png" alt="selsia logo" id="logotap" class="h-10 height-val " />
</div>
<div class="search-bar p-0  h-full ml-0 mr-0 w-full  flex justify-between  item-centre" >
  <img src="../image/LOGO.png" alt="selsia logo" id="logimg" class="h-8 height-val " />
  <div id="search" class=" ml-0 w-full h-full centre hide ">
    <form class="w-full pl-1 pr-1 flex justify-centre ">
      <input type="search" id="search-box" name="firstname" placeholder="" class="w-3-5 h-8 pl-2 border-none bg-search-color  border-xs bg-wth">
      <button id="search-buton" class="w-10 h-8 bg-green pointer border-none">
        <i class="fa fa-search"></i>
      </button>
    </form>
  </div>
</div>
<div class="user p-0 centre h-full w-20 w-max" id="user">
  <div class="login-signup border-xs p-2 centre h-full height-val w-max rounded text-xxls">
  <a href="./login.html">

  log in
</a>
  </div>
</div>
</nav>`;

    navBar.innerHTML = navHtml;