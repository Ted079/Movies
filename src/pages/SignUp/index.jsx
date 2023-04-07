import { Button, CssBaseline, Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";
import { StyledTextField } from "./style";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formValues, setFromValues] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    try {
      setError("");
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Box>
      <Header login />
      <HeroSection />
      <Box
        component="main"
        sx={{
          margin: "0 auto",
          maxWidth: { xs: "100%", sm: "100%", md: "450px" },
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: "#000000",
            opacity: { xs: "1", sm: "1", md: "0.9" },
            borderRadius: { xs: "0px", sm: "0px", md: "8px" },
            marginTop: { xs: 0, sm: 0, md: 8 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: { xs: 5, sm: 6, md: 6 },
            height: { xs: "70vh", sm: "80vh", md: "" },
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <StyledTextField
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder="Email Address"
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
          <StyledTextField
            margin="normal"
            required
            fullWidth
            name="password"
            placeholder="Password"
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

          <Box
            sx={{
              paddingBottom: "15px",
              height: "20px",
              minWidth: "350px",
            }}
          >
            {error ? (
              <Typography variant="subtitle2" sx={{ color: "#e87c03" }}>
                {error}
              </Typography>
            ) : null}
          </Box>
          <Button
            color="secondary"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, maxWidth: "450px" }}
            onClick={handleSignIn}
          >
            Sign up
          </Button>
        </Box>
      </Box>
      <hr />
      <br />
      <Footer />
    </Box>
  );
};

export default Signup;
