var notifications = [
    {
        user: {
            name: "Mark Webber",
            image: "avatar-angela-gray.webp"
        },
        action: "reacted to your recent photo",
        info: "My first tournement today!",
        done: false,
        ago: "1m ago",
        photo: "image-chess.webp",
        isGroup: false,
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game. "
    },
];
function $(selector) {
    return document.querySelector(selector);
}
function createNotiItem(noti) {
    var notiItem = document.createElement("div");
    notiItem.classList.add("noti-item");
    notiItem.setAttribute("data-done", String(noti.done));
    /** Avatar */
    var notiAvatar = document.createElement("figure");
    notiAvatar.classList.add("noti-avatar");
    var notiAvatarImage = document.createElement("img");
    notiAvatarImage.src = "assets/images/".concat(noti.user.image);
    notiAvatarImage.alt = noti.user.name;
    notiAvatar.append(notiAvatarImage);
    notiItem.append(notiAvatar);
    /** Content - About */
    var notiContent = document.createElement("div");
    notiContent.classList.add("noti-content");
    var notiAbout = document.createElement("div");
    notiAbout.classList.add("noti-about");
    var notiAboutUser = document.createElement("span");
    notiAboutUser.classList.add("h2", "noti-about__user");
    notiAboutUser.textContent = noti.user.name;
    var notiAboutActioni = document.createElement("span");
    notiAboutActioni.classList.add("para", "noti-about__action");
    notiAboutActioni.textContent = noti.action;
    notiAbout.append(notiAboutUser);
    notiAbout.append(notiAboutActioni);
    if (!noti.done) {
        var notiRead = document.createElement("span");
        notiRead.classList.add("read");
        notiAbout.append(notiRead);
    }
    if (noti.photo) {
        var notiPhoto = document.createElement("figure");
        notiPhoto.classList.add("noti-photo");
        var notiImage = document.createElement("img");
        notiImage.src = "assets/images/" + noti.photo;
        notiPhoto.append(notiImage);
        notiAbout.append(notiPhoto);
    }
    var notiAgo = document.createElement("div");
    notiAgo.textContent = noti.ago;
    var notiMessage = document.createElement("p");
    notiMessage.classList.add("noti-message");
    notiMessage.textContent = noti.message;
    notiContent.append(notiAbout, notiAgo, notiMessage);
    notiItem.append(notiContent);
    return notiItem;
}
var notiList = $(".noti-list");
notifications.forEach(function (el) {
    var item = createNotiItem(el);
    notiList.appendChild(item);
});
