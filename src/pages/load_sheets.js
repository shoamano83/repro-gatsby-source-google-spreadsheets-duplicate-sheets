import * as React from 'react';
import { graphql } from 'gatsby';

const LoadSheets = ({data}) => {
  console.log('Data from SheetA:');
  console.log(data.allGoogleSheetASheet.edges);

  console.log('Data from SheetB:');
  console.log(data.allGoogleSheetBSheet.edges);

  return (
    <p>Please inspect the console log.</p>
  )
}

export default LoadSheets

export const query = graphql`
  query {
    allGoogleSheetASheet {
      edges {
        node {
          name
          age
        }
      }
    }
    allGoogleSheetBSheet {
      edges {
        node {
          name
          age
        }
      }
    }
  }
`;
