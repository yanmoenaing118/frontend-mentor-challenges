/** Content Card Mobile Header Component start */
function setUpContentCardMobileHeader() {
  const steps = [
    {
      title: "Personal  Info",
      desc: "Please provide your name, email address, and phone number.",
    },
    {
      title: "Select Your Plan",
      desc: "You have the option of monthly or yearly billing.",
    },
    {
      title: "Pick add-ons",
      desc: "Add-ons help enhance your gaming experience.",
    },
    {
      title: "Finishing up",
      desc: "Double-check everything looks OK before confirming.",
    },
  ];
  const contentCardMobileHeader = document.querySelector(".content-header");
  const contentCardMobileHeaderTitle =
    contentCardMobileHeader.querySelector("h1");
  const contentCardMobileHeaderDesc =
    contentCardMobileHeader.querySelector("p");
  const publicAPI = {
    activeStep: 0,
    setActiveStep(index) {
      this.activeStep = index;
      this.render();
    },
    render() {
      contentCardMobileHeaderTitle.textContent = steps[this.activeStep].title;
      contentCardMobileHeaderDesc.textContent = steps[this.activeStep].desc;
    },
  };

  return publicAPI;
}
const contentCardMobile = setUpContentCardMobileHeader();
contentCardMobile.render();
/** Content Card Mobile Header Component End */

/** Mobile Steps start */
function setUpMobileSteps() {
  const mobileSteps = document.querySelectorAll(".steps-mobile ul li");
  const publicAPI = {
    activeStep: 0,
    setActiveStep(index) {
      this.activeStep = index;
      this.render();
    },
    render() {
      mobileSteps.forEach((stepLi, i) => {
        stepLi.classList.remove("active");
        if (this.activeStep == i) {
          stepLi.classList.add("active");
        }
        stepLi.addEventListener("click", () => this.setActiveStep(i));
      });
    },
  };
  return publicAPI;
}
const mobileSteps = setUpMobileSteps();
mobileSteps.render();
/** Mobile Steps End */

/** Action Triggers */
const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", () => {
  contentCardMobile.setActiveStep(contentCardMobile.activeStep + 1);
  mobileSteps.setActiveStep(mobileSteps.activeStep + 1);
});
