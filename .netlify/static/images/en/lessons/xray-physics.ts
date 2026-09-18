export const enLessonXrayPhysics = {
  title: 'X-Ray Physics',
  duration: '20 minutes',

  introduction:
    'Understanding X-ray physics is essential for every radiographer. This lesson explains how X-rays are produced, how the X-ray tube works, how X-rays interact with matter, and how these principles affect the resulting radiographic image.',

  objectives: [
    'Explain the basic process of X-ray production.',
    'Identify the main components of the X-ray tube.',
    'Understand the role of electrons in X-ray production.',
    'Explain how X-rays interact with matter.',
    'Understand the relationship between exposure factors and image production.',
    'Recognize the importance of radiation protection during X-ray imaging.',
  ],

  sections: [
    {
      title: 'What Are X-Rays?',
      content:
        'X-rays are a form of electromagnetic radiation with enough energy to pass through the body and produce a radiographic image. Their ability to penetrate tissues depends on their energy and the properties of the material they encounter.',
    },
    {
      title: 'How X-Rays Are Produced',
      content:
        'X-rays are produced inside the X-ray tube when electrons are released from the cathode, accelerated across a high potential difference, and directed toward the anode target. When the high-speed electrons interact with the target material, their energy is converted primarily into heat and a small amount of X-ray radiation.',
    },
    {
      title: 'The X-Ray Tube',
      content:
        'The X-ray tube contains two main electrodes: the cathode and the anode. The cathode produces and focuses electrons, while the anode provides the target where the electrons interact to produce X-rays. The tube housing provides protection and helps maintain the required operating environment.',
    },
    {
      title: 'Electron Interaction With the Target',
      content:
        'When high-speed electrons reach the target, they may interact with atoms in different ways. These interactions can produce X-rays through processes such as bremsstrahlung and characteristic radiation. Most of the electron energy is converted into heat, which is why heat management is an important consideration in X-ray tube design.',
    },
    {
      title: 'X-Ray Beam and Attenuation',
      content:
        'The X-ray beam passes through the patient and is attenuated by tissues. Different tissues absorb and transmit different amounts of radiation. The differences in transmitted radiation form the basis of radiographic image contrast.',
    },
    {
      title: 'Exposure Factors',
      content:
        'The main exposure factors include tube voltage (kVp) and tube current-time product (mAs). These factors influence the quantity and energy of the X-ray beam and therefore affect image exposure, contrast, and patient radiation dose.',
    },
  ],

  practicalExample: {
    title: 'Changing the Exposure',
    content:
      'If the mAs is increased while other factors remain unchanged, more X-ray photons are produced. This increases the quantity of radiation reaching the detector and can increase image receptor exposure. Appropriate technique selection is therefore important for obtaining diagnostic images while avoiding unnecessary radiation exposure.',
  },

  commonMistakes: [
    'Confusing kVp with mAs.',
    'Assuming that all energy from the electron beam becomes X-rays.',
    'Ignoring the role of the X-ray tube target.',
    'Changing exposure factors without considering image quality and patient dose.',
    'Failing to apply radiation protection principles.',
  ],

  keyPoints: [
    'X-rays are electromagnetic radiation used to create diagnostic images.',
    'X-rays are produced when high-speed electrons interact with an anode target.',
    'The cathode produces and focuses electrons.',
    'The anode provides the target for electron interaction.',
    'Most electron energy is converted into heat.',
    'X-ray attenuation through tissues creates differences that contribute to image contrast.',
    'kVp and mAs are important exposure factors.',
  ],

  takeaway:
    'A basic understanding of X-ray production and radiation interaction helps the radiographer understand image formation, image quality, exposure selection, and radiation protection.',

  disclaimer:
    'This educational material is intended for learning and training purposes. It does not replace institutional protocols, professional training, clinical supervision, or applicable regulations.',
}
