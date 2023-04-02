import {Button, CssBaseline,TextField, Box, Typography, styled} from "@mui/material";
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

const StyledTextField = styled(TextField)({
  backgroundColor: "#333333",
  borderRadius: "5px",
  position: "relative",
  "& input": {
    color: "#fff",
  },
});

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
          justifyContent: "center",
          margin: "0 auto",
          maxWidth: { xs: "100%", sm: "450px", md: "450px" },
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: "#000000",
            opacity: { xs: "1", sm: "0.9", md: "0.9" },
            borderRadius: { xs: "0px", sm: "8px", md: "8px" },
            marginTop: { xs: 0, sm: 8, md: 8 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: { xs: 3, sm: 6, md: 6 },
            height: { xs: "100vh", sm: "" },
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>

          <Typography color={"background.default"} component="h1" variant="h5">
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
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignIn}
          >
            Sign up
          </Button>
        </Box>
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default Signup;
