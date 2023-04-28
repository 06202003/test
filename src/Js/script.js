import $ from 'jquery';
import { Offcanvas, Ripple, Dropdown, initTE } from 'tw-elements';

initTE({ Offcanvas, Ripple, Dropdown });
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('logo').className = 'w-12';
    document.getElementById('navbar').style.filter = 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))';
    document.getElementById('navbar').style.backgroundColor = 'white';
    document.getElementById('navbar').style.color = 'black';
  } else {
    document.getElementById('logo').className = 'w-14';
    document.getElementById('navbar').style.filter = 'drop-shadow(0 0 #0000)';
    document.getElementById('navbar').style.backgroundColor = 'white';
    document.getElementById('navbar').style.color = 'black';
  }
}

$(function () {
  $('.genealogy-tree ul').hide();
  $('.genealogy-tree>ul').show();
  $('.genealogy-tree ul.active').show();
  $('.genealogy-tree li').on('click', function (e) {
    var children = $(this).find('> ul');
    if (children.is(':visible')) children.hide('fast').removeClass('active');
    else children.show('fast').addClass('active');
    e.stopPropagation();
  });
});
