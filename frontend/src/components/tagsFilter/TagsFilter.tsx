import React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import js from "../../../public/js.png";
import react from "../../../public/react.png";
import node from "../../../public/node.png";
import html from "../../../public/htmll.png";
import sql from "../../../public/sql.png";
import mysql from "../../../public/mysql.png";
import java from "../../../public/java.png";
import python from "../../../public/python.png";
import CSS_icon from "../../../public/CSS.png";

import Image from "next/image";
import { component_margin } from "@/config/consts";
interface Props {
  setSelectedFilters: any;
  selectedFilters: any;
}
export const TagsFilter = ({ setSelectedFilters, selectedFilters }: Props) => {
  const tags = [
    "Javascript",
    "Node",
    "React",
    "CSS",
    "HTML",
    "Python",
    "Java",
    "MySQL",
    "SQL",
  ];
  const icons = {
    Javascript: js,
    Node: node,
    React: react,
    CSS: CSS_icon,
    HTML: html,
    Python: python,
    Java: java,
    SQL: sql,
    MySQL: mysql,
  };
  return (
    <Paper elevation={0} style={{ padding: component_margin }}>
      <Typography variant="h6">Popular Tags</Typography>
      <MenuList style={{ padding: 0 }}>
        {tags.map((tag: string) => {
          return (
            <MenuItem
              key={tag}
              style={{
                backgroundColor: selectedFilters.includes(tag)
                  ? "grey"
                  : "white",
              }}
              onClick={() => {
                if (selectedFilters.includes(tag)) {
                  setSelectedFilters(
                    selectedFilters.filter((item: any) => item != tag)
                  );
                } else {
                  setSelectedFilters([...selectedFilters, tag]);
                }
              }}
            >
              <ListItemIcon>
                <Image
                  src={icons[tag]}
                  alt="Picture of the author"
                  width={24}
                  height={24}
                />
              </ListItemIcon>
              <ListItemText>{tag}</ListItemText>
              {/* <Typography variant="body2" color="text.secondary">
                ⌘X
              </Typography> */}
            </MenuItem>
          );
        })}
      </MenuList>
    </Paper>
  );
};
