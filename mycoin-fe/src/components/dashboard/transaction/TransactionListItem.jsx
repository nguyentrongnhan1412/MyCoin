import {Avatar,Box,Chip,Link,ListItem,ListItemIcon,ListItemText,Typography,typographyClasses,} from "@mui/material";
  
const smallTextStyle = {
    [`& .${typographyClasses.root}`]: {
      fontSize: "11px",
      marginTop: "8.5px",
    },
};
  
const normalTextStyle = {
    [`& .${typographyClasses.root}`]: {
      fontSize: "14px",
    },
};
  
const transactionIdWrapperStyle = {
    maxWidth: "425px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
};
  
const addressesContainerStyle = {
    marginLeft: "35px",
};
  
const chipWrapperStyle = {
    marginLeft: "auto",
};
  
export default function TransactionListItem() {
    return (
      <ListItem key={`item-`}>

        <ListItemIcon>
          <Avatar>Avatar</Avatar>
        </ListItemIcon>

        <Box sx={transactionIdWrapperStyle}>
          <ListItemText
            primary={
              <Typography>
                <Link href="#" underline="none">
                  Lorem ipsum
                </Link>
              </Typography>
            }
            sx={normalTextStyle}/>
          <ListItemText primary={"5 seconds ago"} sx={smallTextStyle}/>
        </Box>

        <Box sx={addressesContainerStyle}>
          <ListItemText
            primary={
              <Typography>
                From{" "}
                <Link href="#" underline="none">
                  Lorem ipsum
                </Link>
              </Typography>
            }
            sx={normalTextStyle}/>

          <ListItemText
            primary={
              <Typography>
                To{" "}
                <Link href="#" underline="none">
                  Lorem ipsum
                </Link>
              </Typography>
            }
            sx={normalTextStyle}/>
        </Box>

        <Box sx={chipWrapperStyle}>
          <Chip label="0 LMAO" />
        </Box>
      </ListItem>
    );
}