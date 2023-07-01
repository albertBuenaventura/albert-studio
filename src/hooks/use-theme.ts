import { Theme } from "../types/theme";
import createPersistedState from "use-persisted-state";

const useThemeState = createPersistedState<Theme>("studio-theme");

export const useTheme = () => {
  const [theme, setTheme] = useThemeState(Theme.Light);

  return {
    theme,
    setTheme,
  };
};

export default useTheme;
