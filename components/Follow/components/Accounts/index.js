import React from "react";
import { colorValues, fontSizes, spacing } from "utils/theme";
import Anchor from "components/Anchor";
import Icon from "components/Icon";

const accounts = [
  {
    iconType: "rss",
    label: "RSS",
    href: "https://trevordmiller.com/blog/feed"
  },

  {
    iconType: "twitter",
    label: "Twitter",
    href: "https://twitter.com/trevordmiller"
  },

  {
    iconType: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/trevordmiller"
  },

  {
    iconType: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/trevordmillercom/"
  },

  {
    iconType: "reddit",
    label: "Reddit",
    href: "https://www.reddit.com/user/trevordmiller/"
  },

  {
    iconType: "hackerNews",
    label: "Hacker News",
    href: "https://news.ycombinator.com/user?id=trevordmiller"
  },

  {
    iconType: "github",
    label: "GitHub",
    href: "https://github.com/trevordmiller"
  }
];

const Accounts = () => (
  <nav
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    }}
  >
    {accounts.map((account, index) => (
      <Anchor key={index} href={account.href}>
        <div
          style={{
            padding: spacing.small
          }}
        >
          <Icon
            type={account.iconType}
            fill={colorValues.colors.blue}
            size={fontSizes.xlarge}
          />
        </div>
      </Anchor>
    ))}
  </nav>
);

export default Accounts;
