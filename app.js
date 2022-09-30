const markRead = document.querySelector(".mark-read");
let notifyUnopened = document.querySelectorAll(".notify-unopened");
const unreadIcon = document.getElementsByClassName("unread-icon");
const unreadCount = document.querySelector(".header-span");

markRead.addEventListener("click", function () {

  for (let i = 0; i < notifyUnopened.length; i++) {
      notifyUnopened[i].classList.remove("notify-unopened")
    notifyUnopened[i].classList.add("notify-opened");
  }
  for(let i = 0; i < unreadIcon.length; i++){
    unreadIcon[i].textContent= "";
  }
unreadCount.textContent = 0

});
