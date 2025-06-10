import { AlertTriangle } from "lucide-react";
import { useTranslation } from 'react-i18next';

const UnderConstructionBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed top-16 w-full z-50 animate-slide-in">
      <div className="bg-[#cd8500] text-white py-3 px-6 flex items-center justify-center shadow-lg blink">
        <AlertTriangle className="mr-3 h-6 w-6 animate-spin" />
        <span className="text-md font-semibold">
          {t('underConstruction')}
        </span>
      </div>
    </div>
  );
};

export default UnderConstructionBanner;
