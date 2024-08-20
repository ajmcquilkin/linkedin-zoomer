import { useEffect, useState } from "react"

function injectedFunction() {
  console.log("injected")

  const profileContainer1 = document.querySelector(
    ".pv-top-card-profile-picture__container"
  ) as HTMLElement

  const profileContainer2 = document.querySelector(
    ".profile-photo-edit"
  ) as HTMLElement

  for (const photoElement of [profileContainer1, profileContainer2]) {
    if (photoElement) {
      photoElement.style.borderRadius = "50% !important"
      photoElement.style.overflow = "hidden"
      photoElement.style.border = "6px solid white"
    }
  }

  const profilePicture1 = document.querySelector(
    "img.pv-top-card-profile-picture__image--show"
  ) as HTMLElement

  const profilePicture2 = document.querySelector(
    ".profile-photo-edit__edit-btn"
  ) as HTMLElement

  for (const photoElement of [profilePicture1, profilePicture2]) {
    if (photoElement) {
      photoElement.style.transform = "scale(4, 1.4)"
    }
  }
}

export const useInjectListeners = () => {
  const [hasInjectionRun, setHasInjectionRun] = useState(false)

  useEffect(() => {
    const onTabsUpdatedListener: Parameters<
      typeof chrome.tabs.onUpdated.addListener
    >["0"] = (tabId, changeInfo, tab) => {
      console.log("tab updated", tabId, changeInfo, tab)
      // TODO optimize to check for URL change only
      setHasInjectionRun(false)
    }

    chrome.tabs.onUpdated.addListener(onTabsUpdatedListener)

    const runner = async () => {
      setHasInjectionRun(true) // immediately set to true to prevent multiple injections

      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
      })

      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: injectedFunction
      })
    }

    if (!hasInjectionRun) {
      runner()
    }

    return () => {
      chrome.tabs.onUpdated.removeListener(onTabsUpdatedListener)
    }
  }, [hasInjectionRun])
}
