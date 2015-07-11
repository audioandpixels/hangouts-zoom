function simple() {
  var metaEffect = gapi.hangout.av.effects.createMetaEffect();
  var effectChain = [];

  var bcsProps = {
    'target_brightness': 150, /* 0 .. 255 */
    'brightness': 0.5, /* -1 .. 1 */
    'constrast': 0.5, /* -1 .. 1 */
    'saturation': 1.0 /* -1 .. 1 */
  };

  var simpleEffect = metaEffect.createSubEffect('auto_bcs', bcsProps);
  effectChain.push(simpleEffect);

  var vignetteProps = {
    color: { 'r': 0, 'g': 0, 'b': 0},
    focus: { 'x': 0.5, 'y': 0.5 },
    size: 0.7
  };

  var extraEffect = metaEffect.createSubEffect('vignetting', vignetteProps);
  effectChain.push(extraEffect);

  metaEffect.initEffects(effectChain);
  metaEffect.pipelineEffects(effectChain);
  alert("This ran!")
}

function init() {
  gapi.hangout.onApiReady.add(function(eventObj) {
    console.log("everything ready");
    document.querySelector('#fullUI').style.visibility = 'visible';
  });
}

gadgets.util.registerOnLoadHandler(init);
