import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import style from "./latestCard.module.css";
import Link from "next/link";
import Image from "next/image";

export default function LatestCard({viewMode,blog}) {
  React.useEffect(() => {
    console.log(blog.photo)
  
   
  }, [])
  
  return (
    <Card
      sx={{ maxWidth: 345, backgroundColor: viewMode? "#3C3E50":"#E8E8E8", borderRadius: "20px", }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={blog.photo}
          alt="green iguana"
        />
        {/* <Image src={blog?.photo} width={100} height={100}/> */}
        <CardContent>
          <p className={viewMode?style.Text:style.TextLight}>
            {blog.title}
          </p>
          <p className={viewMode?style.grText:style.grTextLight}>{blog.createdAt}</p>
          <p  className={viewMode?style.largeP:style.largePLight}>
            {/* All players who enter the 5 $GOLD 3-max hyper-turbo SNG are entered
            into a drawing where 3 players win 500 $GOLD each.‌Winner 🏆:
            MoneyTu‌Winner 🏆: SethSyl‌‌‌Winner 🏆: whatzupe89Entry Data... */}
            {blog.description}
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={`/page/blogs/${blog.url}`}>
          <button className={style.latestCardBtn}>Read More</button>
        </Link>
      </CardActions>
    </Card>
  );
}
