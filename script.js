function randomarray(a) {
  for (let i = a.length; i--;) {
    const j = Math.floor((i + 1) * Math.random());
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  return a;
}

function buzzword() {
  const adverbs = ['appropriately', 'assertively', 'authoritatively', 'collaboratively', 'compellingly', 'competently', 'completely', 'continually', 'conveniently', 'credibly', 'distinctively', 'dramatically', 'dynamically', 'efficiently', 'energistically', 'enthusiastically', 'globally', 'holisticly', 'interactively', 'intrinsically', 'monotonectally', 'objectively', 'phosfluorescently', 'proactively', 'professionally', 'progressively', 'quickly', 'rapidiously', 'seamlessly', 'synergistically', 'uniquely', 'fungibly'];
  const verbs = ['actualize', 'administrate', 'aggregate', 'architect', 'benchmark', 'brand', 'build', 'communicate', 'conceptualize', 'coordinate', 'create', 'cultivate', 'customize', 'deliver', 'deploy', 'develop', 'disintermediate', 'disseminate', 'drive', 'embrace', 'e-enable', 'empower', 'enable', 'engage', 'engineer', 'enhance', 'envisioneer', 'evisculate', 'evolve', 'expedite', 'exploit', 'extend', 'fabricate', 'facilitate', 'fashion', 'formulate', 'foster', 'generate', 'grow', 'harness', 'impact', 'implement', 'incentivize', 'incubate', 'initiate', 'innovate', 'integrate', 'iterate', 'leverage existing', 'leverage other\'s', 'maintain', 'matrix', 'maximize', 'mesh', 'monetize', 'morph', 'myocardinate', 'negotiate', 'network', 'optimize', 'orchestrate', 'parallel task', 'plagiarize', 'pontificate', 'predominate', 'procrastinate', 'productivate', 'productize', 'promote', 'provide access to', 'pursue', 'recaptiualize', 'reconceptualize', 'redefine', 're-engineer', 'reintermediate', 'reinvent', 'repurpose', 'restore', 'revolutionize', 'scale', 'seize', 'simplify', 'strategize', 'streamline', 'supply', 'syndicate', 'synergize', 'synthesize', 'target', 'transform', 'transition', 'underwhelm', 'unleash', 'utilize', 'visualize', 'whiteboard', 'cloudify', 'right-shore', 'incept', 'onboard'];
  const adjectives = ['24/7', '24/365', 'accurate', 'adaptive', 'alternative', 'an expanded array of', 'B2B', 'B2C', 'backend', 'backward-compatible', 'best-of-breed', 'bleeding-edge', 'bricks-and-clicks', 'business', 'clicks-and-mortar', 'client-based', 'client-centered', 'client-centric', 'client-focused', 'collaborative', 'compelling', 'competitive', 'cooperative', 'corporate', 'cost effective', 'covalent', 'cross functional', 'cross-media', 'cross-platform', 'cross-unit', 'customer directed', 'customized', 'cutting-edge', 'distinctive', 'distributed', 'diverse', 'dynamic', 'e-business', 'economically sound', 'effective', 'efficient', 'emerging', 'empowered', 'enabled', 'end-to-end', 'enterprise', 'enterprise-wide', 'equity invested', 'error-free', 'ethical', 'excellent', 'exceptional', 'extensible', 'extensive', 'flexible', 'focused', 'frictionless', 'front-end', 'fully researched', 'fully tested', 'functional', 'functionalized', 'future-proof', 'global', 'go forward', 'goal-oriented', 'granular', 'high standards in', 'high-payoff', 'high-quality', 'highly efficient', 'holistic', 'impactful', 'inexpensive', 'innovative', 'installed base', 'integrated', 'interactive', 'interdependent', 'intermandated', 'interoperable', 'intuitive', 'just in time', 'leading-edge', 'leveraged', 'long-term high-impact', 'low-risk high-yield', 'magnetic', 'maintainable', 'market positioning', 'market-driven', 'mission-critical', 'multidisciplinary', 'multifunctional', 'multimedia based', 'next-generation', 'one-to-one', 'open-source', 'optimal', 'orthogonal', 'out-of-the-box', 'pandemic', 'parallel', 'performance based', 'plug-and-play', 'premier', 'premium', 'principle-centered', 'proactive', 'process-centric', 'professional', 'progressive', 'prospective', 'quality', 'real-time', 'reliable', 'resource-sucking', 'resource-maximizing', 'resource-leveling', 'revolutionary', 'robust', 'scalable', 'seamless', 'stand-alone', 'standardized', 'standards compliant', 'state of the art', 'sticky', 'strategic', 'superior', 'sustainable', 'synergistic', 'tactical', 'team building', 'team driven', 'technically sound', 'timely', 'top-line', 'transparent', 'turnkey', 'ubiquitous', 'unique', 'user-centric', 'user friendly', 'value-added', 'vertical', 'viral', 'virtual', 'visionary', 'web-enabled', 'wireless', 'world-class', 'worldwide', 'fungible', 'cloud-ready', 'elastic', 'hyper-scale', 'on-demand', 'cloud-based', 'cloud-centric', 'cloudified', 'agile'];
  const nouns = ['action items', 'alignments', 'applications', 'architectures', 'bandwidth', 'benefits', 'best practices', 'catalysts for change', 'channels', 'collaboration and idea-sharing', 'communities', 'content', 'convergence', 'core competencies', 'customer service', 'data', 'deliverables', 'e-business', 'e-commerce', 'e-markets', 'e-tailers', 'e-services', 'experiences', 'expertise', 'functionalities', 'growth strategies', 'human capital', 'ideas', 'imperatives', 'infomediaries', 'information', 'infrastructures', 'initiatives', 'innovation', 'intellectual capital', 'interfaces', 'internal or "organic" sources', 'leadership', 'leadership skills', 'manufactured products', 'markets', 'materials', 'meta-services', 'methodologies', 'methods of empowerment', 'metrics', 'mindshare', 'models', 'networks', 'niches', 'niche markets', 'opportunities', '"outside the box" thinking', 'outsourcing', 'paradigms', 'partnerships', 'platforms', 'portals', 'potentialities', 'process improvements', 'processes', 'products', 'quality vectors', 'relationships', 'resources', 'results', 'ROI', 'scenarios', 'schemas', 'services', 'solutions', 'sources', 'strategic theme areas', 'supply chains', 'synergy', 'systems', 'technologies', 'technology', 'testing procedures', 'total linkage', 'users', 'value', 'vortals', 'web-readiness', 'web services', 'fungibility', 'clouds', 'nosql', 'storage', 'virtualization', 'scrums', 'sprints', 'wins', 'adoption'];

  randomarray(adverbs);
  randomarray(verbs);
  randomarray(adjectives);
  randomarray(nouns);

  return `${adverbs.pop()} ${verbs.pop()} ${adjectives.pop()} ${nouns.pop()}`;
}

function process(e) {
  const statement = buzzword();
  document.getElementById('output').innerText = statement;
  document.getElementById('bullshit').value = statement;
  poopShower(e);
}

function poopShower(e) {
  const count = 35;
  const rect = e.target.getBoundingClientRect();
  
  // Starting point (the button)
  const startX = rect.left + rect.width / 2;
  const startY = rect.top + rect.height / 2;

  // Physics Constants
  const gravity = 0.6; // Higher = heavier poop
  const friction = 0.99; // Air resistance

  for (let i = 0; i < count; i++) {
    const poop = document.createElement('div');
    poop.innerText = '💩';
    poop.style.position = 'fixed';
    poop.style.fontSize = '2rem';
    poop.style.pointerEvents = 'none';
    poop.style.zIndex = '9999';
    poop.style.left = '0px';
    poop.style.top = '0px';
    document.body.appendChild(poop);

    // Initial state
    let posX = startX;
    let posY = startY;
    
    // Initial velocity (Inertia)
    // Horizontal: Random spread left/right
    let vx = (Math.random() - 0.5) * 20; 
    // Vertical: Strong burst upwards (negative Y)
    let vy = (Math.random() - 1.2) * 25; 

    const rotationSpeed = (Math.random() - 0.5) * 20;
    let rotation = 0;

    // Animation Step
    function update() {
      // Apply Physics
      vy += gravity; // Pull down
      vx *= friction; // Slow down horizontally
      vy *= friction; // Slow down vertically
      
      posX += vx;
      posY += vy;
      rotation += rotationSpeed;

      // Update Styles
      poop.style.transform = `translate(${posX}px, ${posY}px) rotate(${rotation}deg)`;

      // Remove if it falls off screen
      if (posY < window.innerHeight + 100) {
        requestAnimationFrame(update);
      } else {
        poop.remove();
      }
    }

    requestAnimationFrame(update);
  }
}

document.querySelector('.btn-nav').addEventListener('click', function(e) {
    e.preventDefault();
    const excuses = [
        "Aligning stakeholder calendars...",
        "Buffering executive presence...",
        "Synergizing time zones...",
        "Error 418: I'm a teapot (and too busy for demos)."
    ];
    alert(excuses[Math.floor(Math.random() * excuses.length)]);
});