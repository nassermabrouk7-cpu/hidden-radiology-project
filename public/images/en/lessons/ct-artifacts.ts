export const enLessonCTArtifacts = {
  title: 'CT Artifacts',
  duration: '20 minutes',

  introduction:
    'CT artifacts are unwanted structures or distortions that can reduce diagnostic image quality and sometimes mimic pathology. Understanding their appearance, causes, and prevention is essential for accurate CT interpretation and effective troubleshooting.',

  objectives: [
    'Define CT artifacts and explain their effect on image quality.',
    'Recognize common types of CT artifacts.',
    'Understand the causes of motion artifacts.',
    'Explain beam hardening and its typical appearance.',
    'Recognize metal-related artifacts.',
    'Understand partial-volume artifacts.',
    'Identify ring artifacts and possible causes.',
    'Recognize helical and interpolation-related artifacts.',
    'Understand practical methods for reducing common CT artifacts.',
  ],

  sections: [
    {
      title: 'What Are CT Artifacts?',
      content:
        'A CT artifact is an image feature that does not accurately represent the anatomical structures being examined. Artifacts may appear as streaks, bands, rings, shading, blurring, or distorted anatomy. They can result from patient motion, scanner limitations, physical interactions of X-rays, metal, reconstruction processes, or incorrect examination technique.',
    },

    {
      title: 'Why Artifacts Matter',
      content:
        'Artifacts can obscure important anatomy and reduce diagnostic confidence. In some situations they may simulate disease or hide a real abnormality. Recognizing characteristic artifact patterns helps distinguish technical limitations from true pathology.',
    },

    {
      title: 'Motion Artifacts',
      content:
        'Patient motion during acquisition can produce blurring, streaks, duplicated structures, or misregistration. Motion is particularly problematic when scanning the chest, abdomen, heart, or uncooperative patients. Clear patient instructions, appropriate positioning, immobilization when necessary, and fast acquisition can help reduce motion artifacts.',
    },

    {
      title: 'Beam Hardening',
      content:
        'Beam hardening occurs because lower-energy photons are preferentially absorbed as an X-ray beam passes through the patient. This changes the energy spectrum of the beam and can produce dark bands, streaks, or cupping effects, particularly between dense structures such as the skull base or shoulders.',
    },

    {
      title: 'Metal Artifacts',
      content:
        'Metal objects strongly attenuate X-rays and can produce severe streaking and distortion. Common sources include dental fillings, surgical hardware, prostheses, and external metallic objects. Removing unnecessary external metal and using appropriate positioning and metal artifact reduction techniques can improve image quality.',
    },

    {
      title: 'Partial Volume Artifact',
      content:
        'Partial volume effects occur when different tissues are included within the same voxel and their attenuation values are averaged. This may cause small structures to appear less distinct or produce inaccurate attenuation measurements. Thin-section reconstruction can reduce the effect when high-resolution assessment is required.',
    },

    {
      title: 'Ring Artifacts',
      content:
        'Ring artifacts appear as circular or concentric patterns around the center of rotation and are commonly associated with detector calibration problems or detector element abnormalities. Persistent ring artifacts should be investigated through appropriate scanner quality-control procedures.',
    },

    {
      title: 'Stair-Step Artifacts',
      content:
        'Stair-step artifacts may occur when multiplanar or three-dimensional images are reconstructed from data with insufficient spatial resolution or inappropriate acquisition and reconstruction settings. Thin, overlapping reconstructions can improve the appearance of curved or oblique structures.',
    },

    {
      title: 'Windmill and Helical Artifacts',
      content:
        'Helical scanning can produce characteristic interpolation-related artifacts, particularly when acquisition parameters and reconstruction techniques are not optimized for the clinical task. Their appearance can vary according to pitch, detector configuration, reconstruction method, and anatomical region.',
    },

    {
      title: 'Photon Starvation',
      content:
        'Photon starvation occurs when very few X-ray photons reach the detectors after passing through highly attenuating anatomy. It can produce severe streaks and increased noise, particularly in large patients or through dense anatomical regions such as the shoulders. Appropriate exposure modulation and reconstruction techniques can help reduce the effect.',
    },

    {
      title: 'Out-of-Field Artifacts',
      content:
        'Structures extending beyond the selected field of view may produce truncation or shading artifacts. Correct patient positioning and selection of an appropriate scan and reconstruction field of view can reduce these problems.',
    },

    {
      title: 'Motion Versus Pathology',
      content:
        'Artifacts should not automatically be interpreted as disease. Comparing multiple image planes, reviewing the raw acquisition when available, and considering the expected appearance and location of the artifact can help distinguish technical effects from genuine anatomical abnormalities.',
    },

    {
      title: 'Reducing CT Artifacts',
      content:
        'Artifact reduction begins with appropriate patient preparation, positioning, acquisition parameters, and scanner calibration. Depending on the artifact, solutions may include reducing motion, changing scan direction, modifying reconstruction settings, using iterative or model-based reconstruction, applying metal artifact reduction, or repeating an examination only when clinically justified.',
    },

    {
      title: 'Quality Control and Troubleshooting',
      content:
        'Repeated or unusual artifacts should be documented and investigated. Quality-control testing can identify detector, calibration, mechanical, or reconstruction problems. Technologists should recognize when an artifact is related to patient factors and when technical service or further system evaluation may be required.',
    },
  ],

  keyPoints: [
    'CT artifacts are image features that do not accurately represent anatomy.',
    'Motion can produce blurring, streaks, and duplicated structures.',
    'Beam hardening commonly produces shading or streaking near dense anatomy.',
    'Metal can cause severe streaking and image distortion.',
    'Partial-volume effects can obscure small structures and alter attenuation measurements.',
    'Ring artifacts may indicate detector or calibration problems.',
    'Photon starvation can produce severe streak artifacts and increased noise.',
    'Correct positioning, protocol optimization, and appropriate reconstruction can reduce many artifacts.',
    'Persistent or unusual artifacts should be investigated through quality-control procedures.',
  ],
}
