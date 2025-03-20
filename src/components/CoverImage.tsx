import {Image} from "@heroui/react";

export default function CoverImageComponent() {
  return (
    <Image style={{width:'70vw',height:'90vh'}}
    loading="lazy"
    src="https://firebasestorage.googleapis.com/v0/b/aangan-427bf.firebasestorage.app/o/AANGAN-images%2Fcover-image.jpg?alt=media&token=48009cf2-b99b-4a16-8037-fb4e861797cd"
    alt="AANGAN cover image"
    className="m-1"
    />
  );
}