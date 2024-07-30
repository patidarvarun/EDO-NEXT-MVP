// sidebarItems.ts
export interface SidebarItem {
  name: string;
  icon: string;
  hoverIcon: string;
  alt: string;
}
export interface InnerThemes {
  name: string;
}
export const sidebarItems: SidebarItem[] = [
  {
    name: "Text",
    icon: "/assets/images/text.svg",
    hoverIcon: "/assets/images/text-hover.svg",
    alt: "T",
  },
  {
    name: "Images",
    icon: "/assets/images/gallery.svg",
    hoverIcon: "/assets/images/gallery-hover.svg",
    alt: "Images",
  },
  {
    name: "Themes",
    icon: "/assets/images/document-text.svg",
    hoverIcon: "/assets/images/document-text-hover.svg",
    alt: "Themes",
  },
  {
    name: "Layouts",
    icon: "/assets/images/music-playlist.svg",
    hoverIcon: "/assets/images/music-playlist-hover.svg",
    alt: "Layouts",
  },
  {
    name: "Elements",
    icon: "/assets/images/media_24.svg",
    hoverIcon: "/assets/images/media_light.svg",
    alt: "Elements",
  },
  {
    name: "People",
    icon: "/assets/images/profile-2user.svg",
    hoverIcon: "/assets/images/profile-2user.svg",
    alt: "People",
  },
  {
    name: "Ads",
    icon: "/assets/images/advertising_outline_28.svg",
    hoverIcon: "/assets/images/advertising_outline_28-hover.svg",
    alt: "Ads",
  },
  {
    name: "Photo grid",
    icon: "/assets/images/element-3.svg",
    hoverIcon: "/assets/images/element-3-hover.svg",
    alt: "Photogrid",
  },
];

export const forYouArray: InnerThemes[] = [
  {
    name: "All themes",
  },
  {
    name: "Used recently",
  },
  {
    name: "Most popular",
  },
  {
    name: "Favorites",
  },
];
export const categoriesArray: InnerThemes[] = [
  {
    name: "BookFlix",
  },
  {
    name: "Comicbook",
  },
  {
    name: "Gamezone",
  },
  {
    name: "Geometric",
  },
  {
    name: "Jungle",
  },
  {
    name: "Out of this world",
  },
  {
    name: "Retro",
  },
  {
    name: "Story book",
  },
  {
    name: "Tech",
  },
  {
    name: "Unbound",
  },
  {
    name: "Varsity",
  },
];
