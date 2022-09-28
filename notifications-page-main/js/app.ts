interface User {
  name: string;
  image: string;
}

interface MyNotification {
  user: User;
  action: string;
  info: string | undefined;
  done: boolean;
  ago: string;
  photo: string | undefined;
  isGroup: boolean;
  message: string | undefined;
}

type NotificationsArray = Array<MyNotification>;

let notifications: NotificationsArray = [
  {
    user: {
      name: "Mark Webber",
      image: "avatar-angela-gray.webp",
    },
    action: "reacted to your recent photo",
    info: "My first tournement today!",
    done: false,
    ago: "1m ago",
    photo: "image-chess.webp",
    isGroup: false,
    message: undefined,
  },

  {
    user: {
      name: "Angela",
      image: "avatar-kimberly-smith.webp",
    },
    action: "followed you",
    info: "",
    done: false,
    ago: "3d ago",
    photo: undefined,
    isGroup: false,
    message: undefined,
  },

  {
    user: {
      name: "Jocob Thompson",
      image: "avatar-mark-webber.webp",
    },
    action: "has joined your group",
    isGroup: true,
    info: "Chess Club",
    ago: "1 day ago",
    photo: undefined,
    message: undefined,
    done: false,
  },

  {
    user: {
      name: "Rizky Hasanuddin",
      image: "avatar-rizky-hasanuddin.webp",
    },
    action: "sent you a private message",
    ago: "5 days ago",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game. ",
    done: true,
    isGroup: false,
    photo: undefined,
    info: undefined,
  },
];

function $(selector: string) {
  return document.querySelector(selector);
}

function createNotiItem(noti: MyNotification) {
  const notiItem = document.createElement("div");
  notiItem.classList.add("noti-item");
  notiItem.setAttribute("data-done", String(noti.done));

  /** Avatar */
  const notiAvatar = document.createElement("figure");
  notiAvatar.classList.add("noti-avatar");
  const notiAvatarImage = document.createElement("img");
  notiAvatarImage.src = `assets/images/${noti.user.image}`;
  notiAvatarImage.alt = noti.user.name;

  notiAvatar.append(notiAvatarImage);
  notiItem.append(notiAvatar);

  /** Content - About */
  const notiContent = document.createElement("div");
  notiContent.classList.add("noti-content");

  const notiAbout = document.createElement("div");
  notiAbout.classList.add("noti-about");
  const notiAboutUser = document.createElement("span");
  notiAboutUser.classList.add("h2", "noti-about__user");
  notiAboutUser.textContent = noti.user.name;

  const notiAboutActioni = document.createElement("span");
  notiAboutActioni.classList.add("para", "noti-about__action");
  notiAboutActioni.textContent = noti.action;

  notiAbout.append(notiAboutUser);
  notiAbout.append(notiAboutActioni);

  if (noti.info) {
    const notiAboutInfo = document.createElement("span");
    notiAboutInfo.classList.add("h2", "noti-about__info");
    notiAboutInfo.textContent = noti.info;
    if (noti.isGroup) {
      notiAboutInfo.classList.add("group");
    }
    notiAbout.append(notiAboutInfo);
  }

  if (!noti.done) {
    const notiRead = document.createElement("span");
    notiRead.classList.add("read");
    notiAbout.append(notiRead);
  }

  if (noti.photo) {
    const notiPhoto = document.createElement("figure");
    notiPhoto.classList.add("noti-photo");
    const notiImage = document.createElement("img");
    notiImage.src = "assets/images/" + noti.photo;
    notiPhoto.append(notiImage);
    notiAbout.append(notiPhoto);
  }

  const notiAgo = document.createElement("div");
  notiAgo.textContent = noti.ago;

  notiContent.append(notiAbout, notiAgo);

  if (noti.message) {
    const notiMessage = document.createElement("p");
    notiMessage.classList.add("noti-message");
    notiMessage.textContent = noti.message;
    notiContent.append(notiMessage);
  }

  notiItem.append(notiContent);
  return notiItem;
}

function renderNotiCount(count: string | number) {
  const notiBadge: any = $(".badge");
  notiBadge.textContent = count;
}

function renderNofications(notifications: NotificationsArray) {
  const notiList: any = $(".noti-list");

  notiList.innerHTML = "";

  notifications.forEach((el: MyNotification) => {
    const item = createNotiItem(el);
    notiList.appendChild(item);
  });

  renderNotiCount(notifications.length);
}

function markRead(notifications: NotificationsArray): NotificationsArray {
  return notifications.map((noti) => ({
    ...noti,
    done: noti.done ? noti.done : !noti.done,
  }));
}

const markReadButton = $(".mark");

renderNofications(notifications);

markReadButton?.addEventListener("click", () => {
  const leftToReadNoti = notifications.filter((noti) => !noti.done);

  if (leftToReadNoti.length > 0) {
    const notiList = markRead(notifications);
    renderNofications(notiList);
    notifications = notiList;
  }
});
