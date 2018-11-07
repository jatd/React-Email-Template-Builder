import React from 'react';
import { Image } from 'react-html-email'

export default function CircleImage(props) {
  const {
    alt,
    src,
  } = props;

  return (
    <Image
      alt={alt}
      src={src}
      style={{
        borderRadius: '50%',
      }}
      width={80}
      height={80}
    />
  );
}
