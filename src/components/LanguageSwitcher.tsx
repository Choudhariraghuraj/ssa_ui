// src/components/LanguageSwitcher.tsx
import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
  { code: 'ml', label: 'മലയാളം' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'hi', label: 'हिंदी' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: any) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem('i18nextLng', selectedLang);
  };

  return (
        <Select
        value={i18n.language}
        onChange={handleChange}
        variant="outlined"
        size="small"
        sx={{
          backgroundColor: '#fff',
          color: '#cd8500',
          borderRadius: 1,
          fontWeight: 600,
          minWidth: 100,
          '& .MuiSelect-icon': { color: '#cd8500' },
        }}
      >
             {languages.map((lang) => (
          <MenuItem key={lang.code} value={lang.code}>
            {lang.label}
          </MenuItem>
        ))}
      </Select>
  );
};

export default LanguageSwitcher;
