export const enLessonCTParameters = {
  title: 'CT Parameters',
  duration: '22 minutes',

  introduction:
    'CT parameters determine how the scanner acquires and reconstructs data. Understanding these parameters is essential for controlling image quality, spatial resolution, image noise, scan speed, and radiation dose. Appropriate parameter selection should always be based on the clinical task and patient characteristics.',

  objectives: [
    'Explain the main technical parameters used in CT.',
    'Understand the relationship between tube voltage and image quality.',
    'Explain tube current and automatic exposure control.',
    'Understand collimation, slice thickness, and detector configuration.',
    'Explain pitch and its effect on CT acquisition.',
    'Understand rotation time and scan speed.',
    'Recognize the relationship between CT parameters, image noise, and radiation dose.',
  ],

  sections: [
    {
      title: 'Overview of CT Parameters',
      content:
        'CT acquisition depends on several interconnected parameters, including tube voltage, tube current, rotation time, detector configuration, collimation, pitch, and reconstruction settings. Changing one parameter may affect multiple aspects of the examination, so protocol optimization requires understanding their combined effects.',
    },

    {
      title: 'Tube Voltage (kVp)',
      content:
        'Tube voltage determines the energy of the X-ray beam. It influences beam penetration, image contrast, and radiation dose. Lower tube voltage can increase iodine contrast in appropriate examinations, while higher tube voltage provides greater beam penetration for larger patients and dense anatomical regions.',
    },

    {
      title: 'Tube Current (mA)',
      content:
        'Tube current determines the quantity of X-rays produced during acquisition. Increasing tube current generally increases the number of photons reaching the detectors and can reduce image noise, but it also increases radiation exposure. Appropriate tube current should therefore be selected according to patient size and diagnostic requirements.',
    },

    {
      title: 'Tube Current-Time Product (mAs)',
      content:
        'The tube current-time product represents the amount of tube current applied over a given exposure time. It is an important indicator of the total X-ray output during an acquisition. In general, increasing mAs reduces quantum noise but increases radiation dose.',
    },

    {
      title: 'Automatic Exposure Control',
      content:
        'Automatic exposure control systems adjust tube output according to patient attenuation and examination requirements. These systems can modulate tube current during the scan to maintain an appropriate image quality target while avoiding unnecessary radiation exposure.',
    },

    {
      title: 'Collimation',
      content:
        'Collimation defines the width of the X-ray beam or the detector configuration used for data acquisition. Modern multidetector CT systems use multiple detector rows to acquire a volume of anatomy during each rotation. Appropriate collimation supports efficient scanning and high-quality multiplanar reconstruction.',
    },

    {
      title: 'Slice Thickness',
      content:
        'Slice thickness describes the thickness of the reconstructed image. Thin slices provide improved spatial detail and reduce partial-volume effects but may contain more image noise. Thicker slices generally have lower noise and may be useful for routine review but provide less fine anatomical detail.',
    },

    {
      title: 'Pitch',
      content:
        'Pitch describes the relationship between table movement during one gantry rotation and the total nominal beam width. Pitch influences scan speed, data sampling, image quality, and radiation dose behavior. Its effect depends on the scanner design and the specific acquisition technique.',
    },

    {
      title: 'Rotation Time',
      content:
        'Rotation time is the time required for the gantry to complete one rotation. Shorter rotation times can reduce motion-related artifacts and improve temporal resolution, which is particularly useful in examinations involving rapidly moving anatomy or patients who have difficulty remaining still.',
    },

    {
      title: 'Reconstruction Interval',
      content:
        'Reconstruction interval determines the spacing between reconstructed images. Reconstructions may overlap when thin images are required for multiplanar or three-dimensional processing. The reconstruction interval should be selected according to the clinical purpose and downstream image-processing requirements.',
    },

    {
      title: 'Reconstruction Kernel',
      content:
        'Reconstruction kernels, also called reconstruction algorithms or filters, influence the appearance of CT images. Sharper kernels enhance edge detail and spatial resolution but can increase image noise, while smoother kernels reduce noise and may provide better low-contrast visualization.',
    },

    {
      title: 'Relationship Between Parameters',
      content:
        'CT parameters should not be considered independently. Tube output, slice thickness, pitch, reconstruction method, and patient size interact to determine image quality and radiation exposure. An optimized protocol balances these factors according to the diagnostic task.',
    },

    {
      title: 'Parameter Selection and Patient Size',
      content:
        'Patient size strongly influences CT image noise and radiation requirements. Protocols may need adjustment for pediatric patients, small adults, average-sized adults, and larger patients. Patient centering and automatic exposure control can help maintain consistent image quality across different body sizes.',
    },
  ],

  keyPoints: [
    'Tube voltage affects beam energy, tissue contrast, penetration, and radiation dose.',
    'Tube current and mAs influence photon quantity and image noise.',
    'Automatic exposure control adjusts tube output according to patient attenuation.',
    'Collimation and detector configuration determine how CT data are acquired.',
    'Thin slices improve detail but may increase image noise.',
    'Pitch influences table movement, acquisition speed, and dose behavior.',
    'Rotation time affects scan speed and temporal resolution.',
    'Reconstruction kernels influence the balance between spatial detail and image noise.',
    'CT parameters must be optimized together rather than considered individually.',
  ],
}
