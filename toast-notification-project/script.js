const notifications = document.querySelector(".notifications"),
  buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Success: This is a success toast. ",
  },
  error: {
    icon: "fa-circle-xmark",
    text: "Error: This is an error toast. ",
  },
  warning: {
    icon: "fa-triangle-exclamation",
    text: "Warning: This is a warning toast. ",
  },
  info: {
    icon: "fa-circle-info",
    text: "Info: This is an information toast. ",
  },
};

const removeToast = (toast) => {
  toast.classList.add("hide");
  if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
  setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
};
 
const createToast = (id) => {
  // Getting the icon and thte text for thr toast based in the id passed
  const { icon, text } = toastDetails[id];
  const toast = document.createElement("li"); // creating a new li element the toast
  toast.className = `toast ${id}`; // setting the classes for the toast
  toast.innerHTML = `<div class='column'>
                     <i class='fa-solid ${icon}'></i>
                     <span> ${text} </span>
                   </div>
                   <i class='fa-solid fa-xmark' onclick = "removeToast(this.parentElement)"></i>`;
  notifications.appendChild(toast); // Append the toast to the notification ul
  // Setting a timeout to remove the toast after the specified duration
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.id));
});
