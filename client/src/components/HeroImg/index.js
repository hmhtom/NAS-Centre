import Box from "@mui/material/Box";

function HeroImg() {
  return (
    <Box
      sx={{
        height: "85vh",
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}

export default HeroImg;
