import "./App.css";
// import CardStyled from "./components/CardStyled";
// import CardSass from "./components/CardSass";
// import CardLess from "./components/CardLess";
import Button from "@mui/material/Button";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Paper,
  Grid,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  BottomNavigation,
  BottomNavigationAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LayersIcon from "@mui/icons-material/Layers";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import cover from "./images/web_mui.jpg";
import { useState } from "react";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const [value, setValue] = useState("recents");
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }} // margin-right: theme.spacing(2)
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Web developer blog
            </Typography>
            <Box mr={3}>
              <Button
                color="inherit"
                variant="outlined"
                onClick={handleClickOpen}
              >
                Log In
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to see videos</DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Adress"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Log in
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color="secondary" variant="contained">
              Sign Up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper
          sx={{
            position: "relative",
            color: "common.white",
            mb: 4,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${cover})`,
          }}
        >
          <Container fixed>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
            />
            <Grid container>
              <Grid item md={6}>
                <Box
                  sx={{
                    position: "relative",
                    padding: (theme) => theme.spacing(9),
                    marginTop: (theme) => theme.spacing(9),
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Web Developer Blog
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Material UI — це сучасна, гнучка бібліотека компонентів для
                    React, створена за принципами Material Design від Google.
                    Вона надає сотні готових UI-елементів, включаючи кнопки,
                    форми, модальні вікна, таблиці, меню, навігацію та багато
                    іншого. Завдяки підтримці темізації, ти можеш легко
                    створювати як світлі, так і темні інтерфейси. Бібліотека має
                    потужні інструменти стилізації: від простого `sx` до
                    повноцінного `styled()` API. MUI також має чудову
                    адаптивність, що дозволяє створювати інтерфейси, які
                    виглядають добре на будь-якому екрані. Це ідеальний вибір
                    для розробників, які хочуть швидко створювати красиві,
                    функціональні та доступні інтерфейси з мінімальними
                    зусиллями.
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <Box component="main" sx={{ mt: 4 }}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Web Developer Blog
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Material UI — це сучасна, гнучка бібліотека компонентів для React,
              створена за принципами Material Design від Google. Вона надає
              сотні готових UI-елементів, включаючи кнопки, форми, модальні
              вікна, таблиці, меню, навігацію та багато іншого. Завдяки
              підтримці темізації, ти можеш легко створювати як світлі.
            </Typography>

            <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
              <Grid item>
                <Button variant="contained" color="primary">
                  Start Now
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Learn more
                </Button>
              </Grid>
            </Grid>
          </Container>

          <Container sx={{ mt: 6 }} maxWidth="lg">
            <Grid container spacing={4} justifyContent="center">
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      width: 300,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={cover}
                      title="Image Title"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" gutterBottom>
                        Blog post
                      </Typography>
                      <Typography>
                        Blog post. Web developer blog. Blog post
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                      <LayersIcon />
                      <PlayCircleFilledIcon />
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          sx={{ width: "100%", bottom: 0 }}
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
        <Typography
          align="center"
          color="textSecondary"
          component="p"
          variant="subtitle1"
        >
          Web Developer Blog React js Material ui site
        </Typography>
      </footer>
    </>
  );
}

export default App;
