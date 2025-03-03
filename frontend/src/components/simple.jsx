import Rive from '@rive-app/react-canvas';
import React from 'react';
import Panu from '../panu.riv';
import '../App.css';

export default function Simple() {

  return (
    <div className="panuAnim">
    <Rive src={Panu} />
  </div>
  )
}