import React, { useCallback } from 'react';
import { GLView, ExpoWebGLRenderingContext } from 'expo-gl';
import { render } from '../gl/renderer';

export default function CustomGLView() {
  const onContextCreate = useCallback((gl: ExpoWebGLRenderingContext) => {
    render(gl);
  }, []);

  return (
    <GLView
      style={{ flex: 1, width: '100%', height: '100%' }}
      onContextCreate={onContextCreate}
    />
  );
}
