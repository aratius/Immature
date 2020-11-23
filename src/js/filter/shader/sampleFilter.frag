precision mediump float;

varying vec2 vTextureCoord;
varying vec2 vScreenCoord;
varying vec2 vTextureToScreen;
varying vec2 vScreenSize;

uniform sampler2D uSampler;
varying vec4 vColor;

void main(void) {

    vec2 pos = vScreenCoord;
    vec2 cord = vTextureCoord;

    vec4 color = texture2D(uSampler, cord);

    gl_FragColor = color;//色の反映
}