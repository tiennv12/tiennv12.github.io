// Have webpack 5 set the fallbacks for the resolver for Mui 5 to be false
config.resolve.fallback = { '@mui/material': false, '@mui/icons-material': false };


// Have webpack 5 set the fallbacks for the resolver for Mui 4 to be false
config.resolve.fallback = { '@material-ui/core': false, '@material-ui/icons': false };