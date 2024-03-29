import { Box, Link, Stack} from "@mui/material";

const wrapperStyle = {
  width: "100%",
  backgroundColor: "#184f90",
};

const containerStyle = {
  maxWidth: "1185px",
  padding: "32px 12px 12px 12px",
  margin: "0 auto",
};

export default function HomeHeader() {
  return (
    <Box sx={wrapperStyle}>
      <Stack sx={containerStyle}>
        <Link href="/">
          
          <Box
            sx={{
              maxWidth: "130px",
              maxHeight: "36px",
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402 114">
              <circle cx="57.33" cy="57" r="54" fill="#1896a4" />
              <path
                d="M64.08 73.88c-2.06.82-4.29 1.29-6.64 1.29-9.88 0-17.89-8.01-17.89-17.89 0-.73.06-1.45.14-2.16l-18.02-2.93a36.31 36.31 0 00-.33 4.81c0 19.88 16.12 36 36 36 6.97 0 13.47-1.99 18.98-5.42l-12.24-13.7zm10.19-22.7l-23.94 5.28 42.05 8.74c.61-2.63.95-5.38.95-8.2 0-19.88-16.12-36-36-36-7.98 0-15.34 2.6-21.31 6.99l12.44 13.82a17.75 17.75 0 018.98-2.43c7.74 0 14.34 4.92 16.83 11.8m65.29-31.19v74.02h17.94V52.58l15.41 29.3h9.35l16.17-29.3v41.43h17.68V19.99h-17.68l-20.59 37.37-19.58-37.37zm88.52 0h52.96v15.16h-35.62V48.6h30.69v14.49h-30.6v14.78h36.38v16.14h-53.81zm59.53 0h17.67l24.38 50.65L335.97 57l-17.43-37.01h16.68l7.83 15.92 6.06-15.92h19.2l-15.16 37.37 6.57 13.28 19.33-50.65h19.62l-30.86 74.02h-14.53l-8.21-17.94-7.08 17.94h-15.02z"
                fill="#fff"
              />
            </svg>
          </Box>
  
        </Link>
        
      </Stack>
    </Box>
  );
}