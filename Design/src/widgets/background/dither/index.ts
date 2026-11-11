// Spec
import type { Renderer } from 'design/widgets/background/spec';

// Partials
import { compile } from './compile';
import { pools } from './pools';
import { FRAGMENT, MAX_POOLS, VERTEX } from './shader';

function unpack(rgb: number): [number, number, number] {
  return [
    ((rgb >> 16) & 0xff) / 255,
    ((rgb >> 8) & 0xff) / 255,
    (rgb & 0xff) / 255,
  ];
}

function createRenderer(canvas: HTMLCanvasElement): Renderer | null {
  const gl = canvas.getContext('webgl', {
    antialias: false,
    premultipliedAlpha: false,
  });

  if (!gl) {
    return null;
  }

  const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
  const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
  const program = gl.createProgram();

  if (!vertex || !fragment || !program) {
    return null;
  }

  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    return null;
  }

  gl.useProgram(program);

  const buffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW
  );

  const position = gl.getAttribLocation(program, 'a_position');

  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  const uniform = (name: string) => {
    return gl.getUniformLocation(program, name);
  };

  const uniforms = {
    cell: uniform('u_cell'),
    count: uniform('u_count'),
    ink: uniform('u_ink[0]'),
    levels: uniform('u_levels'),
    paper: uniform('u_paper'),
    pool: uniform('u_pool[0]'),
    resolution: uniform('u_resolution'),
    shape: uniform('u_shape[0]'),
    time: uniform('u_time'),
  };

  const inks = new Float32Array(MAX_POOLS * 3);
  const poolData = new Float32Array(MAX_POOLS * 4);
  const shapeData = new Float32Array(MAX_POOLS * 2);

  return {
    dispose() {
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    },

    draw(seconds, palette, cell, levels) {
      const count = Math.min(palette.inks.length, MAX_POOLS);
      const layout = pools(seconds);

      inks.fill(0);
      poolData.fill(0);
      shapeData.fill(0);

      for (let i = 0; i < count; i++) {
        const pool = layout[i % layout.length];

        inks.set(unpack(palette.inks[i]), i * 3);
        poolData.set([pool.x, pool.y, pool.rx, pool.ry], i * 4);
        shapeData.set([pool.angle, pool.weight], i * 2);
      }

      gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
      gl.uniform1f(uniforms.time, seconds);
      gl.uniform1f(uniforms.cell, cell);
      gl.uniform1f(uniforms.levels, levels);
      gl.uniform3fv(uniforms.paper, unpack(palette.paper));
      gl.uniform1i(uniforms.count, count);
      gl.uniform3fv(uniforms.ink, inks);
      gl.uniform4fv(uniforms.pool, poolData);
      gl.uniform2fv(uniforms.shape, shapeData);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    },

    resize(width, height) {
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    },
  };
}

export { createRenderer };
