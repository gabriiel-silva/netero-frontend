document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {});


  
    var menuTrigger = document.getElementById('menu-trigger');
    menuTrigger.addEventListener('click', function() {
      var sidenavInstance = M.Sidenav.getInstance(document.getElementById('slide-out'));
      sidenavInstance.open();
    });
});