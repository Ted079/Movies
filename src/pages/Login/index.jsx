import { Button, CssBaseline, Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import { useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import LoginBackground from "../../components/LoginBackground";
import Footer from "../../components/Footer";
import { StyledTextField } from "../SignUp/style";
import { StyTyp } from "../SignUp/style";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [formValues, setFromValues] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      setError("");
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Box showPassword={showPassword}>
      <Header />
      <LoginBackground />
      <Box
        component="main"
        sx={{
          margin: "0 auto",
          maxWidth: { xs: "100%", sm: "100%", md: "950px" },
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
            height: { xs: "100vh", sm: "100vh", md: "" },
          }}
        >
          <StyTyp component="h1" variant="h4" fontWeight={"bold"}>
            Unlimited movies, TV shows, and more
          </StyTyp>
          <StyTyp variant="h6">Watch anywhere. Cancel anytime.</StyTyp>
          <StyTyp component="h1" variant="h6">
            Enter your email to create or restart your membership.
          </StyTyp>

          {showPassword && (
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
          )}

          {showPassword && (
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
          )}
          <Box
            sx={{
              paddingBottom: "15px",
              height: "20px",
              maxWidth: "400px",
            }}
          >
            {error ? (
              <Typography variant="subtitle2" sx={{ color: "#e87c03" }}>
                Please enter a valid email and pass
              </Typography>
            ) : null}
          </Box>
          {showPassword && (
            <Button
              color="secondary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
          )}

          {!showPassword && (
            <Button
              color="secondary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => setShowPassword(true)}
            >
              Get Started
            </Button>
          )}
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Login;
