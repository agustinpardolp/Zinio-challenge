export const handleVariant = (variant) => {
  let settings = {
    borderColor: "var(--emerald)",
  };
  switch (variant) {
    case "confirm":
      settings = {
        borderColor: "var(--emerald)",
      };
      break;
    case "cancel":
      settings = {
        borderColor: "var(--cardinal)",
      };
      break;
    case "disabled":
      settings = {
        borderColor: "var(--silver)",
      };
      break;
    default:
      return settings;
  }

  return settings;
};
