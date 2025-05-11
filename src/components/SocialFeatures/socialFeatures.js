import React from 'react';
import './SocialLinks.css'; // Optional: Use a CSS file for styling

const socialMediaLinks = [
  {
    platform: 'BlueSky',
    url: 'https://bsky.app/profile/tomstimecapsule.bsky.social',
    icon: '/img/icon_bluesky.svg', // Add your icon path
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/tomstimecapsule',
    icon: '/img/icon_instagram.svg', // Add your icon path
  },
];

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socialMediaLinks.map(({ platform, url, icon }) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={icon} alt={`${platform} icon`} className="social-icon" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
