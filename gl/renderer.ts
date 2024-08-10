import { ExpoWebGLRenderingContext } from 'expo-gl';

export function render(gl: ExpoWebGLRenderingContext) {
  if (!gl) {
    console.error('WebGL context is not available');
    return;
  }

  function renderFrame() {
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.flush();
    gl.endFrameEXP();
    requestAnimationFrame(renderFrame);
  }

  renderFrame();
}
