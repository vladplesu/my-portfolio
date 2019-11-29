import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const BGImage = ({ imgName, className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: allImageSharp {
          edges {
            node {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.edges.find(image => {
        return image.node.fluid.originalName === imgName;
      });
      return (
        <BackgroundImage
          Tag='div'
          className={className}
          fluid={imageData.node.fluid}>
          {children}
        </BackgroundImage>
      );
    }}
  />
);

const StyledBGImage = styled(BGImage)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default StyledBGImage;
