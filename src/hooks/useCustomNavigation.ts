import { useNavigate } from "react-router-dom";

interface useCustomNavigationReturn {
  goToPrevious: () => void;
  goToPath: (path: string, state?: unknown) => void;
}

const useCustomNavigation = (): useCustomNavigationReturn => {
  const navigate = useNavigate();

  const goToPrevious = () => {
    navigate(-1);
  };

  const goToPath = (path: string, state?: unknown) => {
    navigate(path, { state });
  };

  return {
    goToPrevious,
    goToPath,
  };
};

export default useCustomNavigation;
