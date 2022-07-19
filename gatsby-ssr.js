import React from 'react';

export const onRenderBody = ({setPostBodyComponents})=>{
  setPostBodyComponents([
    <script
      key="https://cdn.jsdelivr.net/npm/snapsvg@0.5.1/dist/snap.svg.min.js"
      src= "https://cdn.jsdelivr.net/npm/snapsvg@0.5.1/dist/snap.svg.min.js"
      crossOrigin="anonymous"
    />
  ])
}