import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const navItems = [
    { text: t('nav.home'), path: '/' },
    { text: t('nav.schedule'), path: '/schedule' },
    { text: t("nav.events"), path: '/events' },
    { text: t('nav.gallery'), path: '/gallery' },
    { text: t('nav.donate'), path: '/donate' },
    { text: t('nav.contact'), path: '/contact' },
    { text: t("nav.about"), path: '/about' },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#cd8500',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          zIndex: 999,
        }}
      >
        <Toolbar
          sx={{
            px: { xs: 2, md: 10 },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: '64px',
          }}
        >
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden bg-white shadow-md">
              <img
                src="/assets/ayyappa_swamy.png"
                alt="Temple Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              className="text-white no-underline"
              sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}
            >
              {t('title')}
            </Typography>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center gap-8">
              {navItems.map(({ text, path }) => (
                <motion.div key={path} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={path}
                    style={{
                      color: location.pathname === path ? '#000' : '#fff',
                      textDecoration: location.pathname === path ? 'underline' : 'none',
                      fontWeight: location.pathname === path ? 600 : 500,
                      transition: 'all 0.3s ease-in-out',
                      fontSize: '1rem',
                    }}
                  >
                    {text}
                  </Link>
                </motion.div>
              ))}
              <LanguageSwitcher />
            </div>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton edge="start" onClick={toggleDrawer}>
              <MenuIcon sx={{ color: '#fff' }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <div className="w-64 h-full bg-[#cd8500] text-white p-6 flex flex-col justify-between">
            <List>
              {navItems.map(({ text, path }) => (
                <ListItem key={path} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={path}
                    onClick={toggleDrawer}
                    selected={location.pathname === path}
                    sx={{
                      color: location.pathname === path ? '#000' : '#fff',
                      fontWeight: location.pathname === path ? 600 : 500,
                      '&.Mui-selected': {
                        backgroundColor: '#fff',
                        color: '#cd8500',
                      },
                      '&:hover': {
                        backgroundColor: '#fff',
                        color: '#cd8500',
                      },
                    }}
                  >
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <div className="pt-4 border-t border-white">
              <LanguageSwitcher />
            </div>
          </div>
        </Drawer>
      )}
    </>
  );
};

export default Navbar;
