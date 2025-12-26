import { Box, Typography, Link, AvatarGroup, Avatar, Paper, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AuthJsCredentialsSignInForm from '@auth/forms/AuthJsCredentialsSignInForm';
import AuthJsProviderSelect from '@auth/forms/AuthJsProviderSelect';

function SignInPage() {
  const theme = useTheme();
  const demoCredentials = {
    username: 'guest@singularitythemes.com',
    password: 'guest',
  };

  const modernBoxShadowSx = {
    backgroundColor: theme.palette.grey[50],
    backdropFilter: 'blur(20px)',
    boxShadow: `
      0 25px 50px -12px rgba(0, 0, 0, 0.25),
      0 0 0 1px rgba(255, 255, 255, 0.2),
      0 10px 30px -8px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.8)
    `,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `linear-gradient(135deg, 
        rgba(255, 255, 255, 0.1) 0%, 
        transparent 50%)`,
      zIndex: 0,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '2px',
      background: `linear-gradient(90deg, 
        transparent, 
        ${theme.palette.primary.main}80, 
        transparent)`,
      transition: 'left 0.6s ease',
    },
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: `
        0 35px 70px -15px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.3),
        0 15px 40px -10px rgba(0, 0, 0, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 1)
      `,
      '&:after': {
        left: '100%',
      },
    },
    '& .MuiCardContent-root': {
      position: 'relative',
      zIndex: 1,
    },
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div
      className="flex flex-col items-center relative min-h-screen"
      style={{ backgroundColor: 'transparent' }}
      sx={{
        px: { xs: 2, sm: 0 },
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <style>
        {`
          body {
            background-color: white;
            overflow-x: hidden;
          }
          html {
            overflow-x: hidden;
          }
          .sign-in-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          .animated-gradient-text {
            background: linear-gradient(
              45deg,
              ${theme.palette.primary.main},
              ${theme.palette.secondary.main},
              #FF0080, #00F5FF, #FFD700,
              ${theme.palette.primary.main}
            );
            background-size: 300% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: sweep 8s ease-in-out infinite;
            font-weight: 900;
          }
          @keyframes sweep {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animated-button-gradient {
            background: linear-gradient(90deg, ${theme.palette.primary.main} 0%, #FF0080 25%, ${theme.palette.secondary.main} 50%, #00F5FF 75%, ${theme.palette.primary.main} 100%);
            background-size: 300% auto;
            transition: background-position 0.5s cubic-bezier(0.25, 0.8, 0.5, 1);
            color: white !important;
            border: none !important;
            font-weight: 600;
          }
          .animated-button-gradient:hover {
            background-position: -200% 0;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }
          .social-button-aligned {
            justify-content: flex-start !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .social-button-aligned .MuiButton-startIcon {
            margin-right: 12px !important;
          }
          .authjs-credentials-form .MuiButton-contained {
            background: linear-gradient(90deg, ${theme.palette.primary.main} 0%, #FF0080 25%, ${theme.palette.secondary.main} 50%, #00F5FF 75%, ${theme.palette.primary.main} 100%);
            background-size: 300% auto;
            transition: background-position 0.5s cubic-bezier(0.25, 0.8, 0.5, 1);
            color: white !important;
            border: none !important;
            font-weight: 600;
          }
          .authjs-credentials-form .MuiButton-contained:hover {
            background-position: -200% 0;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }
          /* EXACT SAME FLOAT ANIMATION - NO BLUR! */
          @keyframes shapeFloat {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-5px) translateX(3px); }
            50% { transform: translateY(2px) translateX(-2px); }
            75% { transform: translateY(-2px) translateX(1px); }
          }
          @media (max-width: 640px) {
            .flex-col-sm\\:flex-row { flex-direction: column !important; gap: 1rem !important; }
            .max-w-\\[90\\%\\] { max-width: 95% !important; }
          }
        `}
      </style>

      <svg
        className="absolute inset-0 z-[-1] w-full h-full pointer-events-none"
        viewBox="0 0 1200 1200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%">
              <animate attributeName="stop-color" values="#635BFF;#FF0080;#FF6B6B;#00F5FF;#39FF14;#FFD700;#FF8C00;#1E90FF;#635BFF" dur="8s" repeatCount="indefinite"/>
            </stop>
            <stop offset="50%">
              <animate attributeName="stop-color" values="#FF0080;#FF6B6B;#00F5FF;#39FF14;#FFD700;#FF8C00;#1E90FF;#635BFF;#FF0080" dur="8s" repeatCount="indefinite" begin="2s"/>
            </stop>
            <stop offset="100%">
              <animate attributeName="stop-color" values="#FF6B6B;#00F5FF;#39FF14;#FFD700;#FF8C00;#1E90FF;#635BFF;#FF0080;#FF6B6B" dur="8s" repeatCount="indefinite" begin="4s"/>
            </stop>
          </linearGradient>

          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%">
              <animate attributeName="stop-color" values="#FF0080;#FF6B6B;#00F5FF;#39FF14;#FFD700;#FF8C00;#1E90FF;#635BFF;#FF0080" dur="8s" repeatCount="indefinite" begin="1s"/>
            </stop>
            <stop offset="50%">
              <animate attributeName="stop-color" values="#00F5FF;#39FF14;#FFD700;#FF8C00;#1E90FF;#635BFF;#FF0080;#FF6B6B;#00F5FF" dur="8s" repeatCount="indefinite" begin="3s"/>
            </stop>
            <stop offset="100%">
              <animate attributeName="stop-color" values="#39FF14;#FFD700;#FF8C00;#1E90FF;#635BFF;#FF0080;#FF6B6B;#00F5FF;#39FF14" dur="8s" repeatCount="indefinite" begin="5s"/>
            </stop>
          </linearGradient>

          <linearGradient id="gradient3" x1="45%" y1="45%" x2="55%" y2="55%">
            <stop offset="0%">
              <animate attributeName="stop-color" values="#FFD700;#FF8C00;#1E90FF;#635BFF;#FF0080;#FF6B6B;#00F5FF;#39FF14;#FFD700" dur="8s" repeatCount="indefinite" begin="6s"/>
            </stop>
            <stop offset="100%">
              <animate attributeName="stop-color" values="#FF8C00;#1E90FF;#635BFF;#FF0080;#FF6B6B;#00F5FF;#39FF14;#FFD700;#FF8C00" dur="8s" repeatCount="indefinite" begin="0s"/>
            </stop>
          </linearGradient>
        </defs>

        {/* BIG TRIANGLES - UNCHANGED */}
        <polygon points="0,1200 1200,1200 0,0" fill="url(#gradient1)" opacity="0.15">
          <animateTransform attributeName="transform" type="rotate" from="0 600 600" to="360 600 600" dur="60s" repeatCount="indefinite"/>
        </polygon>

        <polygon points="1200,1200 0,1200 1200,0" fill="url(#gradient2)" opacity="0.12">
          <animateTransform attributeName="transform" type="rotate" from="0 600 600" to="-360 600 600" dur="45s" repeatCount="indefinite"/>
        </polygon>

        <polygon points="300,200 900,200 600,800" fill="url(#gradient3)" opacity="0.20">
          <animateTransform attributeName="transform" type="rotate" from="0 600 400" to="720 600 400" dur="30s" repeatCount="indefinite"/>
        </polygon>

        <polygon points="0,800 1200,400 0,1200" fill="url(#gradient1)" opacity="0.08">
          <animateTransform attributeName="transform" type="rotate" from="0 600 600" to="360 600 600" dur="80s" repeatCount="indefinite"/>
        </polygon>

        {/* ✨ 12 MIXED SHAPES - SAME POSITIONS, SAME FLOAT, CRISP! */}
        {[
          // 0: Square
          `polygon(200,100 230,100 230,130 200,130)`,
          // 1: Circle (8 sides)
          `polygon(225,105 228,108 228,122 225,125 222,122 222,108 225,105)`,
          // 2: X
          `polygon(205,140 225,160) polygon(225,140 205,160)`,
          // 3: Diamond
          `polygon(217,175 230,187 217,200 205,187)`,
          // 4: Triangle (original style)
          `polygon(200,235 250,235 225,185)`,
          // 5: Star (5pt)
          `polygon(210,270 220,270 213,285 223,285 216,297)`,
          // 6: Hexagon
          `polygon(215,310 230,310 235,320 230,330 215,330 210,320)`,
          // 7: Square rotated
          `polygon(200,365 215,350 230,365 215,380)`,
          // 8: Circle small
          `polygon(222,400 225,403 225,413 222,416 219,413 219,403)`,
          // 9: X small
          `polygon(208,435 218,445) polygon(218,435 208,445)`,
          // 10: Diamond small
          `polygon(217,470 223,476 217,482 212,476)`,
          // 11: Triangle upside down
          `polygon(225,515 200,565 250,565)`
        ].map((points, i) => (
          <polygon
            key={i}
            points={points}
            fill={`hsl(${(i * 30) % 360}, 70%, 60%)`}
            opacity="0.4"
            style={{ 
              animation: `shapeFloat ${6 + i * 0.5}s ease-in-out infinite`
            }}
          >
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur={`${6 + i * 0.5}s`} repeatCount="indefinite"/>
          </polygon>
        ))}
      </svg>

      {/* LOGO SECTION */}
      <div className="mt-8 relative z-10">
        <img className="w-12 mx-auto" src="/assets/images/logo/logo.svg" alt="logo" />
      </div>

      {/* HERO SECTION */}
      <Box className="relative w-full flex items-center justify-center py-8" sx={{ color: theme.palette.text.primary, px: { xs: 2, sm: 0 } }}>
        <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center">
          <AvatarGroup sx={{ '& .MuiAvatar-root': { borderColor: theme.palette.primary.main } }} className="mb-4">
            <Avatar src="/assets/images/avatars/female-18.jpg" />
            <Avatar src="/assets/images/avatars/female-11.jpg" />
            <Avatar src="/assets/images/avatars/male-09.jpg" />
            <Avatar src="/assets/images/avatars/male-16.jpg" />
          </AvatarGroup>
          <div className="text-center animated-gradient-text" style={{ fontSize: '42px' }}>
            Enjoy the Singularity
          </div>
          <Typography className="mt-6 text-center" sx={{ px: { xs: 2, sm: 0 }, fontSize: '16px', fontWeight: 500, color: theme.palette.grey[900], maxWidth: '500px', lineHeight: 1.40 }}>
            Join the vast community of professionals using the fastest growing React theme on the market.
          </Typography>
        </div>
      </Box>

      {/* LOGIN FORMS SECTION */}
      <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center gap-6 pt-6 pb-8 w-full max-w-[90%] sm:max-w-5xl relative z-10" sx={{ px: { xs: 0, sm: 4 }, mx: 'auto' }}>
        <Paper className="w-full max-w-[340px] p-4 sm:p-6 rounded-xl authjs-credentials-form" sx={modernBoxShadowSx}>
          <CardContent className="flex flex-col">
            <Typography className="text-3xl sm:text-4xl font-extrabold leading-[1.25] tracking-tight">Sign in</Typography>
            <div className="mt-0.5 flex items-baseline font-medium">
              <Typography>Need an account?</Typography>
              <Link className="ml-1" to="/sign-up">Sign up</Link>
            </div>
            <AuthJsCredentialsSignInForm defaultUsername={demoCredentials.username} defaultPassword={demoCredentials.password} />
          </CardContent>
        </Paper>

        <Paper className="w-full max-w-[340px] p-4 sm:p-6 rounded-xl" sx={modernBoxShadowSx}>
          <CardContent className="flex flex-col">
            <Box className="flex flex-col space-y-4">
              <AuthJsProviderSelect sx={{ '& img': { width: '48px', height: '48px' } }} />
              <Paper className="p-3 mt-4 rounded-lg" elevation={0} sx={{ backgroundColor: (theme) => theme.palette.action.hover, border: (theme) => `1px solid ${theme.palette.grey[300]}` }}>
                <Typography variant="body1" display="block" align="center" color="textPrimary" sx={{ lineHeight: 1.4 }}>
                  This is the <strong>Singularity React Demo</strong>. Click on the 
                  <Typography component="span" variant="body1" sx={{ fontWeight: 'bold', color: (theme) => theme.palette.text.secondary }}>
                    "Sign In"
                  </Typography> button for immediate access.
                </Typography>
              </Paper>
            </Box>
          </CardContent>
        </Paper>
      </div>

      {/* FOOTER SECTION */}
      <Box className="w-full py-6 flex justify-center gap-8 relative z-20 mb-8" sx={{ backgroundColor: 'transparent', color: theme.palette.text.secondary, px: { xs: 2, sm: 0 }, borderTop: '1px solid', borderColor: 'divider', flexShrink: 0 }}>
        <Link href="https://singularitythemes.com/pages/terms-legal" target="_blank" rel="noopener noreferrer" sx={{ color: theme.palette.text.secondary, textDecoration: 'none', fontSize: '0.85rem', '&:hover': { color: '#6BC9F7', textDecoration: 'underline' } }}>
          Terms of Service
        </Link>
        <Link href="https://singularitythemes.com/pages/privacy" target="_blank" rel="noopener noreferrer" sx={{ color: theme.palette.text.secondary, textDecoration: 'none', fontSize: '0.85rem', '&:hover': { color: '#6BC9F7', textDecoration: 'underline' } }}>
          Privacy Policy
        </Link>
      </Box>
    </div>
  );
}

export default SignInPage;