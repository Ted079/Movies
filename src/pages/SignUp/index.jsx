import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Header from "../../components/Header";
import { Paper } from "@mui/material";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import HeroSection from "../../components/HeroSection";

const Signup = () => {
  const navigate = useNavigate();
  const [formValues, setFromValues] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Box>
      <Header login />
      <HeroSection/>

      <Container component="main" maxWidth="xs" sx={{ position: 'relative'}}>
        <CssBaseline />
        <Paper>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 6,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>

          <Typography  component="h1" variant="h5" >
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
            onClick={handleSignIn}
          >
            Sign up
          </Button>
        </Box>
        </Paper>
      </Container>
    </Box>
  );
};



export default Signup;
