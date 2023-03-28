import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../../components/Header";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";

// const theme = createTheme({
//     palette: {
//         mode: 'light',
//         primary: {
//           main: '#413543',
//         },
//         secondary: {
//           main: '#f50057',
//         },
//         background: {
//           default: '#E4DCCF',
//           paper: '#413543',
//         },
//         text: {
//           primary: 'rgba(74,74,74,0.87)',
//           secondary: 'rgba(74,74,74,0.87)',
//           hint: 'rgba(0, 0, 0, 0.38)',
//           disabled: 'rgba(0, 0, 0, 0.38)',
//         },
//       },

// });
const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFromValues] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    // <ThemeProvider theme={theme}>
    <div>
      <Header />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formValues.email}
            onChange={(event) =>
              setFromValues({
                ...formValues,
                [event.target.name]: event.target.value,
              })
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formValues.password}
            onChange={(event) =>
              setFromValues({
                ...formValues,
                [event.target.name]: event.target.value,
              })
            }
          />
          <Button color="secondary" 
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Container>
    </div>
    // </ThemeProvider>
  );
};

export default Login;
