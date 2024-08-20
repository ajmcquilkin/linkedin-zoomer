// Function to apply styles to an element
function applyStyles(element, styles) {
  Object.entries(styles).forEach(([property, value]) => {
    element.style.setProperty(property, value)
  })
}

// Styles for the image
const imageStyles = {
  transition: "transform 150ms ease-in-out",
  transform: "scale(4, 1.4)"
}

// Styles for the image container
const containerStyles = {
  "border-radius": "9999px",
  overflow: "hidden"
}

// Selectors for profile images
const profileImageSelectors = [
  ".global-nav__me-photo",
  ".pv-top-card-profile-picture__container",
  ".feed-identity-module__member-photo",
  ".share-box-feed-entry__avatar .EntityPhoto-circle-3",
  ".update-components-actor__avatar-image.EntityPhoto-circle-3",
  ".content-admin-identity-toggle-button__image-and-caret-wrapper .EntityPhoto-circle-0",
  ".presence-entity__image.EntityPhoto-circle-1",
  ".EntityPhoto-circle-0",
  ".EntityPhoto-circle-1",
  ".EntityPhoto-circle-3",
  ".EntityPhoto-circle-5",
  ".profile-photo-edit__edit-btn"
]

// Function to apply styles to profile images and their containers
function styleProfileImages() {
  const selector = profileImageSelectors.join(", ")
  const profileImages = document.querySelectorAll(selector)

  profileImages.forEach((img) => {
    // Apply styles to the image
    applyStyles(img, imageStyles)

    // Find the parent container (assuming it's the immediate parent)
    const container = img.parentElement

    // if (container) {
    applyStyles(container, containerStyles)
    // }
  })
}

// Run the styling function when the page loads
styleProfileImages()

setInterval(() => {
  styleProfileImages()
}, 1000)

// const injectedFunction = () => {
//   console.log("injected")

//   const defaultProfileContainers = document.querySelectorAll(
//     ".pv-top-card-profile-picture__container"
//   )

//   const defaultProfilePhotos = document.querySelectorAll(
//     "img.pv-top-card-profile-picture__image--show"
//   )

//   const yourProfileContainers = document.querySelectorAll(".profile-photo-edit")

//   const yourProfilePhotos = document.querySelectorAll(
//     ".profile-photo-edit__edit-btn"
//   )

//   const smallProfileContainers = document.querySelectorAll(
//     ".ivm-view-attr__img-wrapper"
//   )

//   const smallProfilePhotos = document.querySelectorAll(
//     'img.ivm-view-attr__img--centered:not([alt="Image preview"])'
//   )

//   const presenceEntityContainers = document.querySelectorAll(".presence-entity")

//   const presenceEntityPhotos = document.querySelectorAll(
//     'img[class^="EntityPhoto-circle-"]'
//   )

//   const shareBoxAvatarContainers = document.querySelectorAll(
//     ".share-box-feed-entry__avatar"
//   )

//   for (const photoElement of [
//     ...defaultProfileContainers,
//     ...yourProfileContainers,
//     ...smallProfileContainers,
//     ...presenceEntityContainers
//   ]) {
//     if (photoElement) {
//       const element = photoElement as HTMLElement
//       element.style.setProperty("border-radius", "9999px")
//       element.style.setProperty("overflow", "hidden")
//       // photoElement.style.border = "6px solid white"
//     }
//   }

//   for (const photoElement of [
//     ...defaultProfilePhotos,
//     ...yourProfilePhotos,
//     ...smallProfilePhotos,
//     ...presenceEntityPhotos
//   ]) {
//     if (photoElement) {
//       const element = photoElement as HTMLElement
//       element.style.setProperty("transition", "transform 150ms ease-in-out")
//       element.style.setProperty("transform", "scale(4, 1.4)")
//     }
//   }
// }

// injectedFunction()
