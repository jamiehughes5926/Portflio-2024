export const handleHomeClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const handleInfoClick = () => {
  const screenHeight = window.innerHeight;

  let scrollPercentage;
  if (screenHeight <= 768) {
    // HD (1366x768) and similar
    scrollPercentage = 0.4;
  } else if (screenHeight <= 900) {
    // HD+ (1440x900)
    scrollPercentage = 0.45;
  } else if (screenHeight <= 1080) {
    // Full HD (1920x1080)
    scrollPercentage = 0.5;
  } else if (screenHeight <= 1440) {
    // QHD (2560x1440)
    scrollPercentage = 0.4;
  } else {
    // 4K UHD (3840x2160) and larger
    scrollPercentage = 0.6;
  }

  const scrollDistance = screenHeight * scrollPercentage;
  window.scrollTo({
    top: scrollDistance,
    behavior: "smooth",
  });
};

export const handleProjectsClick = () => {
  const screenHeight = window.innerHeight;

  let scrollPercentage;
  if (screenHeight <= 768) {
    // HD (1366x768) and similar
    scrollPercentage = 1.3;
  } else if (screenHeight <= 900) {
    // HD+ (1440x900)
    scrollPercentage = 1.15;
  } else if (screenHeight <= 1080) {
    // Full HD (1920x1080)
    scrollPercentage = 1;
  } else if (screenHeight <= 1440) {
    // QHD (2560x1440)
    scrollPercentage = 0.75;
  } else {
    // 4K UHD (3840x2160) and larger
    scrollPercentage = 1.2;
  }

  const scrollDistance = screenHeight * scrollPercentage;
  window.scrollTo({
    top: scrollDistance,
    behavior: "smooth",
  });
};
