import React from 'react'
import styled from 'styled-components';

interface ImageBoxProps {
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  src: string;
  alt: string;
  objectFit?: React.CSSProperties['objectFit']
}

const Img = styled('img')<Pick<ImageBoxProps, 'objectFit'>>(({ objectFit }) => ({
  objectFit: objectFit || 'contain',
}))

const ImageBox: React.FC<ImageBoxProps> = ({ width, height, src, alt, objectFit }) => {
  return (
    <Img 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      objectFit={objectFit} 
    />
  )
}

export default ImageBox
