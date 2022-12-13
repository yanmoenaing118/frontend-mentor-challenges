
/** Content Card Mobile Header Component start */
function createContentCardMobileHeader() {
  const steps = {
    1: {
      title: "Personal  Info",
      desc: "Please provide your name, email address, and phone number.",
    },
    2: {
      title: "Select Your Plan",
      desc: "You have the option of monthly or yearly billing.",
    },
    3: {
      title: "Pick add-ons",
      desc: "Add-ons help enhance your gaming experience.",
    },
    4: {
      title: "Finishing up",
      desc: "Double-check everything looks OK before confirming.",
    },
  };
  const contentCardMobileHeader = document.querySelector(".content-header");
  const contentCardMobileHeaderTitle =
    contentCardMobileHeader.querySelector("h1");
  const contentCardMobileHeaderDesc =
    contentCardMobileHeader.querySelector("p");
  const publicAPI = {
    activeStep: 1,
    setActiveStep(index) {
        this.activeStep  = index;
        this.render();
    },
    render() {
        contentCardMobileHeaderTitle.textContent = steps[this.activeStep].title;
        contentCardMobileHeaderDesc.textContent = steps[this.activeStep].desc;
    }
  }

  return publicAPI;
}

const contentCardMobile = createContentCardMobileHeader();

/** Content Card Mobile Header Component End */

