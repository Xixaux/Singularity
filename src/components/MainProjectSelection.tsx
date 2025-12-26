'use client';


import { MenuItem, Select, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import { useState } from 'react';


type ProjectOption = {
  value: string;
  logo: string;
  darkLogo: string;
  name: string;
  url: string;
};


const projectOptions: ProjectOption[] = [
  {
    value: 'Nextjs',
    logo: '/assets/images/logo/nextjs.svg',
    darkLogo: '/assets/images/logo/nextjs-dark.svg',
    name: 'Nextjs',
    url: 'https://nextjs.singularitythemes.com',
  },
  {
    value: 'Vitejs',
    logo: '/assets/images/logo/vite.svg',
    darkLogo: '/assets/images/logo/vite.svg',
    name: 'Vitejs',
    url: 'https://singularity-react-vitejs-demo.singularitythemes.com',
  },
  {
    value: 'Remix',
    logo: '/assets/images/logo/Remix_light.svg',
    darkLogo: '/assets/images/logo/Remix_dark.svg',
    name: 'Remix',
    url: 'https://singularity-react-remix-demo.singularitythemes.com',
  },
  {
    value: 'Astro',
    logo: '/assets/images/logo/Astro_light.svg',
    darkLogo: '/assets/images/logo/Astro_dark.svg',
    name: 'Astro',
    url: 'https://singularity-react-astro-demo.singularitythemes.com',
  },
  {
    value: 'Gatsby',
    logo: '/assets/images/logo/gatsby.svg',
    darkLogo: '/assets/images/logo/gatsby.svg',
    name: 'Gatsby',
    url: 'https://singularity-react-gatsby-demo.singularitythemes.com',
  },
];


function MainProjectSelection() {
  const theme = useTheme();
  const [selectedProjectValue, setSelectedProject] = useState<string>(projectOptions[0].value);
  const selectedProject = projectOptions.find((project) => project.value === selectedProjectValue);


  const handleMenuItemClick = (projectValue: string) => {
    setSelectedProject(projectValue);


    const selectedProjectUrl = projectOptions.find((project) => project.value === projectValue)?.url;


    if (typeof window !== 'undefined' && selectedProjectUrl) {
      const currentUrl = new URL(window.location.href);
      const newUrl = selectedProjectUrl + currentUrl.pathname;
      window.location.href = newUrl;
    }
  };


  return (
    <Select
      // The name prop is now correctly written as a standard JSX attribute:
      name="main-project-selection"
      value={selectedProjectValue}
      onChange={(event) => handleMenuItemClick(event.target.value)}
      displayEmpty
      renderValue={(_selectedValue) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={theme.palette.mode === 'dark' ? selectedProject?.darkLogo : selectedProject?.logo}
            alt={`${selectedProject?.name} Logo`}
            width={20}
            height={20}
            style={{ marginRight: 8 }}
          />
          <Typography variant="body2" sx={{ fontWeight: 'medium', color: theme.palette.text.primary }}>
            {selectedProject?.name}
          </Typography>
        </div>
      )}
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        PaperProps: {
          sx: {
            marginTop: '2px',
            maxHeight: '200px',
            width: '150px',
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
          },
        },
      }}
      sx={{
        height: '36px',
        width: '120px',
        borderRadius: '4px',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        '& .MuiInputBase-input': {
          padding: '6px 24px 6px 8px',
          display: 'flex',
          alignItems: 'center',
        },
        '& .MuiSelect-icon': {
          color: theme.palette.text.primary,
        },
      }}
      size="small"
    >
      {projectOptions.map((project) => (
        <MenuItem key={project.value} value={project.value}>
          <ListItemIcon>
            <img
              src={theme.palette.mode === 'dark' ? project.darkLogo : project.logo}
              alt={`${project.name} Logo`}
              width={20}
              height={20}
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.primary, fontWeight: 'medium' }}
                >
                  {project.name}
                </Typography>
                {project.value !== 'Nextjs' && (
                  <Typography
                    variant="caption"
                    sx={{
                      ml: 1,
                      px: 1,
                      py: 0.25,
                      backgroundColor: '#333333',
                      color: 'var(--mui-palette-common-white)',
                      borderRadius: '4px',
                      fontWeight: 'medium',
                      fontSize: '0.60rem',
                    }}
                  >
                    Soon
                  </Typography>
                )}
              </div>
            }
            classes={{ primary: 'text-md font-semibold' }}
          />
        </MenuItem>
      ))}
    </Select>
  );
}


export default MainProjectSelection;