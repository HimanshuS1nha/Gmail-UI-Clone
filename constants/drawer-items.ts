import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

export const drawerItems: {
  title: string;
  items: {
    Icon: any;
    iconName: string;
    title: string;
    url?: string;
  }[];
  showBorder?: boolean;
}[] = [
  {
    title: "",
    items: [
      {
        Icon: MaterialCommunityIcons,
        iconName: "inbox-multiple-outline",
        title: "All inboxes",
        url: "/all-inboxes",
      },
    ],
    showBorder: true,
  },
  {
    title: "",
    items: [
      {
        Icon: FontAwesome,
        iconName: "inbox",
        title: "Primary",
        url: "/primary",
      },
      {
        Icon: AntDesign,
        iconName: "tago",
        title: "Promotions",
        url: "/promotions",
      },
      {
        Icon: Feather,
        iconName: "users",
        title: "Social",
        url: "/social",
      },
      {
        Icon: Feather,
        iconName: "info",
        title: "Updates",
        url: "/updates",
      },
    ],
  },
  {
    title: "All labels",
    items: [
      {
        Icon: Entypo,
        iconName: "star-outlined",
        title: "Starred",
        url: "/starred",
      },
      {
        Icon: Feather,
        iconName: "clock",
        title: "Snoozed",
        url: "/snoozed",
      },
      {
        Icon: MaterialCommunityIcons,
        iconName: "gate-or",
        title: "Important",
        url: "/important",
      },
      {
        Icon: Octicons,
        iconName: "paper-airplane",
        title: "Sent",
        url: "/sent",
      },
      {
        Icon: MaterialIcons,
        iconName: "schedule-send",
        title: "Scheduled",
        url: "/scheduled",
      },
      {
        Icon: MaterialIcons,
        iconName: "outbox",
        title: "Outbox",
        url: "/outbox",
      },
      {
        Icon: Feather,
        iconName: "file",
        title: "Drafts",
        url: "/drafts",
      },
      {
        Icon: MaterialCommunityIcons,
        iconName: "email-multiple-outline",
        title: "All mail",
        url: "/all-mail",
      },
      {
        Icon: AntDesign,
        iconName: "exclamationcircleo",
        title: "Spam",
        url: "/spam",
      },
      {
        Icon: FontAwesome,
        iconName: "trash-o",
        title: "Trash",
        url: "/trash",
      },
      {
        Icon: MaterialCommunityIcons,
        iconName: "arrow-right-bold-outline",
        title: "[|map]/trash",
        url: "/map-trash",
      },
    ],
  },
  {
    title: "Google apps",
    items: [
      {
        Icon: Entypo,
        iconName: "calendar",
        title: "Calendar",
      },
      {
        Icon: FontAwesome6,
        iconName: "user-circle",
        title: "Contacts",
      },
    ],
    showBorder: true,
  },
  {
    title: "",
    items: [
      {
        Icon: Feather,
        iconName: "settings",
        title: "Settings",
        url: "/settings",
      },
      {
        Icon: Feather,
        iconName: "help-circle",
        title: "Help & Feedback",
      },
    ],
  },
];
