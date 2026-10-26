// Mock demonstration data for FAIRS client-side execution on GitHub Pages
// Modeled directly on the Bitcamp 2026 dual-axis neuroscience retrieval architecture.

export const MOCK_PARCELLATION = {
  regions: [
    {
      name: "Visual Cortex",
      start: 0,
      stop: 3200,
      description: "Processes what you see — shape, motion, color, and scene layout. Strong activation here indicates rich visual stimulation.",
    },
    {
      name: "Auditory Cortex",
      start: 3200,
      stop: 5400,
      description: "Processes sound — pitch, rhythm, timbre, and speech. Strong activation indicates acoustic and musical engagement.",
    },
    {
      name: "Language Network",
      start: 5400,
      stop: 8200,
      description: "Handles word meaning, dialogue, and narrative semantics. Activation reflects linguistic content.",
    },
    {
      name: "Default Mode Network",
      start: 8200,
      stop: 10800,
      description: "Engages during self-referential thought, memory recall, and introspection. Reflects emotional resonance.",
    },
    {
      name: "Attention Network",
      start: 10800,
      stop: 13400,
      description: "Directs focused attention and cognitive control. Signals demanding, immersive focus.",
    },
    {
      name: "Motor Cortex",
      start: 13400,
      stop: 15200,
      description: "Plans and simulates physical motion and kinetic rhythm.",
    },
    {
      name: "Salience Network",
      start: 15200,
      stop: 17400,
      description: "Detects emotional significance and highlights perceptual events that stand out.",
    },
    {
      name: "Association Cortex",
      start: 17400,
      stop: 20484,
      description: "Integrates information across sensory modalities, memory, and high-level conceptual meaning.",
    },
  ],
}

export const MOCK_QUERY_RESULT = {
  input_a_item: {
    id: "anchor-melancholy",
    title: "Melancholy Rain & Distant Thunder",
    item_type: "audio",
    modalities: ["audio"],
    source: "Bitcamp Audio Corpus",
    description: "Slow ambient rainfall with deep, low-frequency acoustic rumble and sustained minor chords.",
    vibe_label: "Melancholic, introspective, rainy solitude",
  },
  input_b_item: {
    id: "topic-jazz",
    title: "1958 Harlem Jazz Documentary Footage",
    item_type: "video",
    modalities: ["video"],
    source: "Archival Film Vault",
    description: "Black and white historical archival film documenting jazz musicians in mid-century New York.",
    vibe_label: "Historical documentary archive",
  },
  results: [
    {
      item: {
        id: "res-nocturne-solitude",
        title: "Nocturne in C# Minor — Solitude & Echo",
        item_type: "video",
        modalities: ["video", "audio"],
        source_url: "https://github.com/rkohnmn/fairs-bitcamp",
        description: "A solo pianist in an empty hall during twilight; acoustic reverberation matches the introspective tension of the feel anchor while footage captures authentic jazz phrasing.",
        excerpt_text: "Solo grand piano with sustained dampening and melancholic chord progressions.",
      },
      total_score: 0.94,
      neural_score: 0.94,
      content_score: 0.88,
      diversity_score: 0.85,
      resultLabel: "Strong alignment across Auditory Cortex and Default Mode Network (94% neural match).",
    },
    {
      item: {
        id: "res-autumn-drift",
        title: "Autumn Overcast — Monologue & Tenor Sax",
        item_type: "audio",
        modalities: ["audio"],
        source_url: "https://github.com/rkohnmn/fairs-bitcamp",
        description: "Subdued tenor saxophone improvisations recorded in an acoustic resonant church under falling autumn leaves.",
        excerpt_text: "Warm acoustic breath, subtle vinyl hiss, and reflective phrasing.",
      },
      total_score: 0.89,
      neural_score: 0.89,
      content_score: 0.91,
      diversity_score: 0.82,
      resultLabel: "Balanced sensory resonance in Association Cortex and Salience Network.",
    },
    {
      item: {
        id: "res-midnight-drift",
        title: "Twilight Noir — Streetlamp Reverie",
        item_type: "video",
        modalities: ["video"],
        source_url: "https://github.com/rkohnmn/fairs-bitcamp",
        description: "Slow tracking shots down glistening wet asphalt reflections accompanied by muted trumpet harmonies.",
        excerpt_text: "Cinematic visuals, neon reflections, and low-tempo rhythmic pulses.",
      },
      total_score: 0.82,
      neural_score: 0.82,
      content_score: 0.85,
      diversity_score: 0.79,
      resultLabel: "High visual-auditory cross-activation with reflective affective tension.",
    },
  ],
}

export const MOCK_EXPLANATIONS = {
  "res-nocturne-solitude": {
    summary:
      "The neural activation signature exhibits intense overlap in Auditory Cortex (96%) and the Default Mode Network (91%), mirroring the introspective, melancholic tension of the feel anchor within a classical jazz setting.",
    regions: [
      { name: "Auditory Cortex", score: 0.96 },
      { name: "Default Mode Network", score: 0.91 },
      { name: "Salience Network", score: 0.84 },
      { name: "Association Cortex", score: 0.79 },
      { name: "Language Network", score: 0.72 },
      { name: "Attention Network", score: 0.65 },
      { name: "Visual Cortex", score: 0.58 },
      { name: "Motor Cortex", score: 0.42 },
    ],
  },
  "res-autumn-drift": {
    summary:
      "Acoustic resonance drives high Salience (88%) and Association Cortex (87%) scores, successfully isolating the ambient melancholy requested by the emotional anchor.",
    regions: [
      { name: "Auditory Cortex", score: 0.92 },
      { name: "Salience Network", score: 0.88 },
      { name: "Association Cortex", score: 0.87 },
      { name: "Default Mode Network", score: 0.81 },
      { name: "Attention Network", score: 0.74 },
      { name: "Language Network", score: 0.63 },
      { name: "Visual Cortex", score: 0.49 },
      { name: "Motor Cortex", score: 0.38 },
    ],
  },
  "res-midnight-drift": {
    summary:
      "Cinematic night visuals combined with muted horn arrangements drive primary activation across Visual Cortex (89%) and Auditory Cortex (84%).",
    regions: [
      { name: "Visual Cortex", score: 0.89 },
      { name: "Auditory Cortex", score: 0.84 },
      { name: "Salience Network", score: 0.78 },
      { name: "Default Mode Network", score: 0.76 },
      { name: "Association Cortex", score: 0.71 },
      { name: "Attention Network", score: 0.69 },
      { name: "Motor Cortex", score: 0.52 },
      { name: "Language Network", score: 0.41 },
    ],
  },
}

export function generateMockActivations(itemId, totalVertices = 20484) {
  const activations = new Float32Array(totalVertices)

  // Configure hotspot regions depending on the item
  let primaryStart = 3200
  let primaryStop = 5400
  let secondaryStart = 8200
  let secondaryStop = 10800

  if (itemId === "res-autumn-drift") {
    primaryStart = 15200
    primaryStop = 17400
    secondaryStart = 17400
    secondaryStop = 20484
  } else if (itemId === "res-midnight-drift") {
    primaryStart = 0
    primaryStop = 3200
    secondaryStart = 3200
    secondaryStop = 5400
  }

  for (let i = 0; i < totalVertices; i++) {
    // Subtle anatomical background ripple
    let val = 0.08 + 0.08 * Math.sin(i * 0.05) * Math.cos(i * 0.02)

    if (i >= primaryStart && i < primaryStop) {
      const mid = (primaryStart + primaryStop) / 2
      const dist = Math.abs(i - mid) / ((primaryStop - primaryStart) / 2)
      const bump = Math.max(0, 1 - dist)
      val = Math.max(val, 0.45 + 0.52 * bump + 0.06 * Math.sin(i * 0.1))
    } else if (i >= secondaryStart && i < secondaryStop) {
      const mid = (secondaryStart + secondaryStop) / 2
      const dist = Math.abs(i - mid) / ((secondaryStop - secondaryStart) / 2)
      const bump = Math.max(0, 1 - dist)
      val = Math.max(val, 0.35 + 0.48 * bump + 0.05 * Math.cos(i * 0.1))
    }

    activations[i] = Math.min(1.0, Math.max(0.0, val))
  }

  return activations
}
