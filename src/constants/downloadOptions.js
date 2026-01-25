// Single source of truth for download options
// Labels are added dynamically using translations in components

const VERSION = "0.3.0";

export const downloadOptionsData = [
  {
    id: "windows",
    size: "8 MB",
    icon: "/windows.svg",
    url: "https://github.com/tonyantony300/alt-sendme/releases/download/v" + VERSION + "/AltSendme_" + VERSION + "_x64-setup.exe",
    translationKey: "hero.downloadForWindows",
  },
  {
    id: "mac",
    size: "26 MB",
    icon: "/applelogo.svg",
    url: "https://github.com/tonyantony300/alt-sendme/releases/download/v" + VERSION + "/AltSendme_" + VERSION + "_universal.dmg",
    translationKey: "hero.downloadForMac",
  },
  {
    id: "linux-appimage",
    size: "87 MB",
    icon: "/linuxlogo.svg",
    url: "https://github.com/tonyantony300/alt-sendme/releases/download/v" + VERSION + "/AltSendme_" + VERSION + "_amd64.AppImage",
    translationKey: "hero.downloadForLinux",
  },
];


// Helper function to get download options with translated labels
export function getDownloadOptions(t) {
  return downloadOptionsData.map((option) => ({
    ...option,
    label: t(option.translationKey),
  }));
}

