import Box from "@mui/material/Box";

function HeroImg({ src }) {
  return (
    <Box
      component="img"
      src={src}
      sx={{
        height: "85vh",
      }}
    />
  );
}

export default HeroImg;
