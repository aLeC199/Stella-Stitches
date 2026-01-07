document.addEventListener("DOMContentLoaded", () => {


  const WHATSAPP_NUMBER = "+2348126256092";

  /* =======================
  STAGGERED PRODUCT ANIMATION
======================= */

  const productItems = document.querySelector(".heroH1");
  const heroP = document.querySelector(".heroP");
  const heroImg = document.querySelector(".heroImg");
  const featuredAnim = document.querySelector(".featured-items");
  const collectionP = document.querySelector(".left-collecttion-content");
  const myVid = document.querySelector("#myVid");
  const CustomBox = document.querySelector(".Custom-box");
  const About = document.querySelector(".Our-story");
  const iconAnim = document.querySelectorAll(".icon-img");
  const location = document.querySelector(".location > p");
  const cards = document.querySelectorAll(".card");
  const contact = document.querySelector(".contact");

  setTimeout(() => {
    productItems.classList.add("animate");
    heroP.classList.add("animate-hero-p");
    heroImg.classList.add("animate-hero-img");

  }, 700);

  //for second animation on hero section
  function revealProducts() {
    const featured = featuredAnim.getBoundingClientRect().top;
    const collection = collectionP.getBoundingClientRect().top;
    const vid = myVid.getBoundingClientRect().top;
    const custom = CustomBox.getBoundingClientRect().top;
    const about = About.getBoundingClientRect().top;
    const locationAnim = location.getBoundingClientRect().top;
    const contactAnim = contact.getBoundingClientRect().top;

    if (featured < window.innerHeight * 0.92) {
      setTimeout(() => {
        featuredAnim.classList.add("animate-featureImg");
      }, 500);
    }

    if (collection < window.innerHeight * 0.9) {
      setTimeout(() => {
        collectionP.classList.add("animate-collectionText");
      }, 500);
    }
    if (vid < window.innerHeight * 0.9) {
      setTimeout(() => {
        myVid.classList.add("myVidAnim");
      }, 500);
    }
    if (custom < window.innerHeight * 0.9) {
      setTimeout(() => {
        CustomBox.classList.add("animate-customBox");
      }, 500);
    }
    if (about < window.innerHeight * 0.9) {
      setTimeout(() => {
        About.classList.add("animate-aboutText");
      }, 500);
    }
    iconAnim.forEach((ico)=>{
      const icon = ico.getBoundingClientRect().top;

      if (icon < window.innerHeight * 0.9) {
        setTimeout(() => {
          ico.classList.add("animate-icons");
        }, 500);
      }
    });
   
    if (locationAnim < window.innerHeight * 0.9) {
      setTimeout(() => {
        location.classList.add("locationAnim");
      }, 500);
    }
    cards.forEach((cardio)=>{
      const cardAnim = cardio.getBoundingClientRect().top;

      if (cardAnim < window.innerHeight * 0.9) {
        setTimeout(() => {
          cardio.classList.add("animate-card");
        }, 500);
      }
    })
   
    if (contactAnim < window.innerHeight * 0.9) {
      setTimeout(() => {
        contact.classList.add("animate-contact");
      }, 500);
    }
  }


  window.addEventListener("scroll", revealProducts);
  window.addEventListener("load", revealProducts);









  const featured = [
    "../assets/images/pinkankaraback.jpg",
    "../assets/images/blackFront.jpg",
    "../assets/images/anchorankara.jpg",
    "../assets/images/stripsankara.jpg",
    "../assets/images/blueside2.jpg",
    "../assets/images/bluepatteern.jpg",
    "../assets/images/upskirtblueankara.jpg",
    "../assets/images/braankara.jpg",
  ];
  const customStyles = [
    "../assets/images/blueFit1.jpg",
    "../assets/images/bluefit2.png",
    "../assets/images/blueGown1.jpg",
    "../assets/images/bluepatteern.jpg",
    "../assets/images/blueside2.jpg",
    "../assets/images/bluestarankara.jpg",
    "../assets/images/blueStone.jpg",
    "../assets/images/bluestone2.jpg",
    "../assets/images/braankara.jpg",
    "../assets/images/brown.jpg",
    "../assets/images/brown2.jpg",
    "../assets/images/brownankara.jpg",
    "../assets/images/bustankara.jpg",
    "../assets/images/bustyankara.jpg",
    "../assets/images/cropankara.jpg",
    "../assets/images/cutieankara.jpg",
    "../assets/images/damnskimpyankara.jpg",
    "../assets/images/excessmakeupankara.jpg",
    "../assets/images/fatankara.jpg",
    "../assets/images/freshankara.jpg",
    "../assets/images/gown.jpg",
    "../assets/images/hero.webp",
    "../assets/images/IMG-4369_340x.webp",
    "../assets/images/lilac.jpg",
    "../assets/images/lilac2.jpg",
    "../assets/images/lilac-side.jpg",
    "../assets/images/localankara.jpg",
    "../assets/images/one-sideankara.jpg",
    "../assets/images/orangeBack.png",
    "../assets/images/orangeGown.jpg",
    "../assets/images/pantlessankara.jpg",
    "../assets/images/pinkankaraback.jpg",
    "../assets/images/PURPLE.png",
    "../assets/images/purplefold.jpg",
    "../assets/images/purpleGown.png",
    "../assets/images/purplemyraid4.png",
    "../assets/images/purpleMyriad1.jpg",
    "../assets/images/purpleMyriad2.jpg",
    "../assets/images/purplemyriad3.jpg",
    "../assets/images/purpleNetGown.jpg",
    "../assets/images/purplrnetfront.png",
    "../assets/images/red2.jpg",
    "../assets/images/red3.jpg",
    "../assets/images/redFlare1.jpg",
    "../assets/images/redwine.jpg",
    "../assets/images/royalankara.jpg",
    "../assets/images/shiny.jpg",
    "../assets/images/shiny3.jpg",
    "../assets/images/shinyblue.png",
    "../assets/images/sideGown.jpg",
    "../assets/images/skimpyankara.jpg",
    "../assets/images/slimankara.jpg",
    "../assets/images/slitankara.jpg",
    "../assets/images/smartankara.jpg",
    "../assets/images/spiral.jpg",
    "../assets/images/spiralblack.png",
    "../assets/images/stripsankara.jpg",
    "../assets/images/teethankara.jpg",
    "../assets/images/uglygirlankara.jpg",
    "../assets/images/uglypurple.webp",
    "../assets/images/unfitankara.jpg",
    "../assets/images/upskirtblueankara.jpg",
    "../assets/images/yanshankara.jpg",
    "../assets/images/yellow.png",
    "../assets/images/yellowankara.jpg",
    "../assets/images/yellowside.jpg",
    "../assets/images/anchorankara.jpg",
    "../assets/images/anchorneckankara.jpg",
    "../assets/images/baggyarmankara.jpg",
    "../assets/images/ballonankara.jpg",
    "../assets/images/blaackcloseup.jpg",
    "../assets/images/black.jpg",
    "../assets/images/blackankara.jpg",
    "../assets/images/blackFront.jpg",
    "../assets/images/blue1.webp",
    "../assets/images/blueankara.jpg",
  ];
  let index = -1;

  const featuredItems = document.querySelectorAll(".item");
  if (featuredItems) {
    let index = -1;
    featuredItems.forEach((item) => {
      index++;
      item.style.backgroundImage = `url(${featured[index]})`;
      item.style.backgroundSize = "cover";
      item.style.backgroundPosition = "center";
    });
  }

  let selectedStyle = null;
  const previewImg = document.getElementById("selectedStylePreview");

  const customTabs = document.querySelector(".custom-styles");

  if (customTabs) {
    customStyles.forEach((src, i) => {
      const stylesImg = document.createElement("img");
      stylesImg.className = "style";
      stylesImg.src = src;
      stylesImg.dataset.index = i;

      customTabs.appendChild(stylesImg);

      stylesImg.addEventListener("click", () => {
        selectedStyle = {
          type: "preset",
          src: src,
        };

        previewImg.style.backgroundImage = `url(${src})`;
        console.log("Selected preset:", selectedStyle);
      });
    });
  }

  const uploadInput = document.getElementById("styleUpload");

  uploadInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      selectedStyle = {
        type: "upload",
        file: file,
        src: reader.result,
      };

      uploadInput.style.backgroundImage = `url(${selectedStyle.src})`;
      uploadInput.style.display = "block";

      console.log("Uploaded style:", selectedStyle);
    };

    reader.readAsDataURL(file);
  });

  document.getElementById("submitOrder").addEventListener("click", () => {
    if (!selectedStyle) {
      alert("Please select or upload a style");
      return;
    }

    console.log("Submitting order with:", selectedStyle);

    // later:
    // send selectedStyle via fetch / formData
  });

  const windowSize = window.innerWidth;
  const header = document.querySelector("header");
  if (windowSize < 860) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        // When user scrolls below 60% of hero page
        header.classList.add("remove-header");
      } else {
        header.classList.remove("remove-header");
      }
    });
  }

  console.log(windowSize);


  document.getElementById("submitOrder").addEventListener("click", () => {
    if (!selectedStyle) {
      alert("Please select or upload a style");
      return;
    }

    const description = document.getElementById("styleDescription").value.trim();

    let message = `Hello 👋, I want to place a custom fashion order.%0A%0A`;

    if (selectedStyle.type === "preset") {
      message += `🧵 Selected Style (from your catalog):%0A`;
      message += `${selectedStyle.src}%0A%0A`;
    }

    if (selectedStyle.type === "upload") {
      message += `📸 I uploaded my own style image.%0A`;
      message += `I will send the image here.%0A%0A`;
    }

    if (description) {
      message += `📝 Description:%0A${description}%0A%0A`;
    }

    message += `Thank you 🙏`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    window.open(whatsappURL, "_blank");
  });
  
});
