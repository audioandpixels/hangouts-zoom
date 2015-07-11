function simple() {
  var metaEffect = gapi.hangout.av.effects.createMetaEffect();
  var effectChain = [];

  var zoomProps = {
    'height': 300,
    'preserve_aspect_ratio': true
  };

  var zoomEffect = metaEffect.createSubEffect('resize', zoomProps);
  effectChain.push(zoomEffect);

  metaEffect.initEffects(effectChain);
  metaEffect.pipelineEffects(effectChain);
}
