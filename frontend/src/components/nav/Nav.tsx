import React, { useEffect, useState } from "react";
import { navItemsPublic, navItemsAuth } from "./NavItems";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface Props {
  isLogged: any;
}
const Nav = ({ isLogged }: Props) => {
  const [navItems, setNavItems] = useState<any>([]);
  useEffect(() => {
    if (isLogged) {
      setNavItems(navItemsAuth);
    } else {
      setNavItems(navItemsPublic);
    }
  }, [isLogged]);
  return (
    <Grid container justifyContent="space-between">
      <Grid container justifyContent="center" alignItems="center" item xs={2}>
        <Typography variant="h6">ReviewMyCode</Typography>
      </Grid>
      <Grid item container justifyContent="end" xs={10}>
        {navItems.map((item: any) => {
          return (
            <Link key={item.path} href={item.path}>
              <Button
                variant="outlined"
                style={{ backgroundColor: item.color, margin: "20px 10px" }}
                key={item.label}
                onClick={() => {}}
              >
                {item.label}
              </Button>
            </Link>
          );
        })}
      </Grid>
    </Grid>
  );
};
export default Nav;
