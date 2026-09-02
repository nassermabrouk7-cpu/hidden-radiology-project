import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Locale } from '@/lib/types'

import { arCourses } from '@/content/ar/courses'
import { enCourses } from '@/content/en/courses'

/* =========================================================
   ENGLISH — RADIOLOGY BASICS
========================================================= */

import { enLessonIntro } from '@/content/en/lessons/intro'
import { enLessonXrayPhysics } from '@/content/en/lessons/xray-physics'
import { enLessonImageFormation } from '@/content/en/lessons/image-formation'
import { enLessonImageQuality } from '@/content/en/lessons/image-quality'
import { enLessonRadiationSafety } from '@/content/en/lessons/radiation-safety'
import { enLessonPatientPositioning } from '@/content/en/lessons/patient-positioning'

/* =========================================================
   ENGLISH — CT MASTERY
========================================================= */

import { enLessonCTBasics } from '@/content/en/lessons/ct-basics'
import { enLessonCTProtocols } from '@/content/en/lessons/ct-protocols'
import { enLessonCTParameters } from '@/content/en/lessons/ct-parameters'
import { enLessonCTImageQuality } from '@/content/en/lessons/ct-image-quality'
import { enLessonContrastMedia } from '@/content/en/lessons/contrast-media'
import { enLessonCTArtifacts } from '@/content/en/lessons/ct-artifacts'

/* =========================================================
   ENGLISH — MRI BASICS
========================================================= */

import { enLessonMRIIntroduction } from '@/content/en/lessons/mri-introduction'
import { enLessonMRISafety } from '@/content/en/lessons/mri-safety'
import { enLessonMRISequences } from '@/content/en/lessons/mri-sequences'
import { enLessonMRIImageQuality } from '@/content/en/lessons/mri-image-quality'

/* =========================================================
   ENGLISH — CHEST X-RAY
========================================================= */

import { enLessonChestAnatomy } from '@/content/en/lessons/chest-anatomy'
import { enLessonPAAP } from '@/content/en/lessons/pa-ap'
import { enLessonChestImageQuality } from '@/content/en/lessons/chest-image-quality'
import { enLessonSystematicReview } from '@/content/en/lessons/systematic-review'
import { enLessonCommonSigns } from '@/content/en/lessons/common-signs'
import { enLessonClinicalApplication } from '@/content/en/lessons/clinical-application'

/* =========================================================
   ENGLISH — QUALITY & SAFETY
========================================================= */

import { enLessonQualityStandards } from '@/content/en/lessons/quality-standards'
import { enLessonQualityRadiationSafety } from '@/content/en/lessons/quality-radiation-safety'
import { enLessonCompliance } from '@/content/en/lessons/compliance'
import { enLessonQualityTraining } from '@/content/en/lessons/quality-training'

/* =========================================================
   ENGLISH — C-ARM
========================================================= */

import { enLessonCArmIntroduction } from '@/content/en/lessons/c-arm-introduction'
import { enLessonCArmComponents } from '@/content/en/lessons/c-arm-components'
import { enLessonCArmFluoroscopyPrinciples } from '@/content/en/lessons/fluoroscopy-principles'
import { enLessonCArmPositioningSurgicalApplications } from '@/content/en/lessons/c-arm-positioning-surgical-applications'
import { enLessonCArmRadiationSafety } from '@/content/en/lessons/c-arm-radiation-safety'
import { enLessonCArmImageQualityTroubleshooting } from '@/content/en/lessons/c-arm-image-quality-troubleshooting'

/* =========================================================
   ENGLISH — MAMMOGRAPHY
========================================================= */

import { enLessonMammographyIntroduction } from '@/content/en/lessons/mammography-introduction'
import { enLessonMammographyEquipment } from '@/content/en/lessons/mammography-equipment'
import { enLessonMammographyPositioningViews } from '@/content/en/lessons/mammography-positioning-views'
import { enLessonMammographyImageQualityCompression } from '@/content/en/lessons/mammography-image-quality-compression'
import { enLessonMammographyRadiationSafety } from '@/content/en/lessons/mammography-radiation-safety'
import { enLessonMammographyBasicFindings } from '@/content/en/lessons/mammography-basic-findings'

/* =========================================================
   ARABIC — RADIOLOGY BASICS
========================================================= */

import { arLessonIntro } from '@/content/ar/lessons/intro'
import { arLessonXrayPhysics } from '@/content/ar/lessons/xray-physics'
import { arLessonImageFormation } from '@/content/ar/lessons/image-formation'
import { arLessonImageQuality } from '@/content/ar/lessons/image-quality'
import { arLessonRadiationSafety } from '@/content/ar/lessons/radiation-safety'
import { arLessonPatientPositioning } from '@/content/ar/lessons/patient-positioning'

/* =========================================================
   ARABIC — CT MASTERY
========================================================= */

import { arLessonCTBasics } from '@/content/ar/lessons/ct-basics'
import { arLessonCTProtocols } from '@/content/ar/lessons/ct-protocols'
import { arLessonCTParameters } from '@/content/ar/lessons/ct-parameters'
import { arLessonCTImageQuality } from '@/content/ar/lessons/ct-image-quality'
import { arLessonContrastMedia } from '@/content/ar/lessons/contrast-media'
import { arLessonCTArtifacts } from '@/content/ar/lessons/ct-artifacts'

/* =========================================================
   ARABIC — CHEST X-RAY
========================================================= */

import { arLessonChestAnatomy } from '@/content/ar/lessons/chest-anatomy'
import { arLessonPAAPView } from '@/content/ar/lessons/pa-ap-view'
import { arLessonChestImageQuality } from '@/content/ar/lessons/chest-image-quality'
import { arLessonSystematicApproach } from '@/content/ar/lessons/systematic-approach'
import { arLessonCommonFindings } from '@/content/ar/lessons/common-findings'

/* =========================================================
   ARABIC — QUALITY & SAFETY
========================================================= */

import { arLessonQualityStandards } from '@/content/ar/lessons/quality-standards'
import { arLessonRadiationSafety as arQualityRadiationSafety } from '@/content/ar/lessons/radiation-safety'
import { arLessonCompliance } from '@/content/ar/lessons/compliance'
import { arLessonQualityTraining } from '@/content/ar/lessons/quality-training'

/* =========================================================
   ARABIC — C-ARM
========================================================= */

import { arLessonCArmIntroduction } from '@/content/ar/lessons/c-arm-introduction'
import { arLessonCArmComponents } from '@/content/ar/lessons/c-arm-components'
import { arLessonCArmFluoroscopyPrinciples } from '@/content/ar/lessons/c-arm-fluoroscopy-principles'
import { arLessonCArmPositioningSurgicalApplications } from '@/content/ar/lessons/c-arm-positioning-surgical-applications'
import { arLessonCArmRadiationSafety } from '@/content/ar/lessons/c-arm-radiation-safety'
import { arLessonCArmClinicalApplicationsTroubleshooting } from '@/content/ar/lessons/c-arm-clinical-applications-troubleshooting'

/* =========================================================
   ARABIC — MAMMOGRAPHY
========================================================= */

import { arLessonMammographyIntroduction } from '@/content/ar/lessons/mammography-introduction'
import { arLessonMammographyEquipment } from '@/content/ar/lessons/mammography-equipment'
import { arLessonMammographyPositioningViews } from '@/content/ar/lessons/mammography-positioning-views'
import { arLessonMammographyImageQualityCompression } from '@/content/ar/lessons/mammography-image-quality-compression'
import { arLessonMammographyRadiationSafety } from '@/content/ar/lessons/mammography-radiation-safety'
import { arLessonMammographyImageReview } from '@/content/ar/lessons/mammography-image-review'

/* =========================================================
   ROUTE CONFIG
========================================================= */

export const dynamicParams = true

/* =========================================================
   TYPES
========================================================= */

type LessonSection = {
  title: string
  content: string
}

type LessonData = {
  title?: string
  duration?: string | number
  introduction?: string
  objectives?: string | string[]
  sections?: LessonSection[]
  practicalExample?: {
    title: string
    content: string
  }
  commonMistakes?: string | string[]
  keyPoints?: string | string[]
  takeaway?: string
  disclaimer?: string
}

/* =========================================================
   LESSON CONTENT MAPS
========================================================= */

const radiologyBasicsLessonsAr: Record<string, LessonData> = {
  intro: arLessonIntro,
  'xray-physics': arLessonXrayPhysics,
  'image-formation': arLessonImageFormation,
  'image-quality': arLessonImageQuality,
  'radiation-safety': arLessonRadiationSafety,
  'patient-positioning': arLessonPatientPositioning,
}

const radiologyBasicsLessonsEn: Record<string, LessonData> = {
  intro: enLessonIntro,
  'xray-physics': enLessonXrayPhysics,
  'image-formation': enLessonImageFormation,
  'image-quality': enLessonImageQuality,
  'radiation-safety': enLessonRadiationSafety,
  'patient-positioning': enLessonPatientPositioning,
}

const ctLessonsAr: Record<string, LessonData> = {
  'ct-basics': arLessonCTBasics,
  'ct-protocols': arLessonCTProtocols,
  'ct-parameters': arLessonCTParameters,
  'ct-image-quality': arLessonCTImageQuality,
  'contrast-media': arLessonContrastMedia,
  'ct-artifacts': arLessonCTArtifacts,
}

const ctLessonsEn: Record<string, LessonData> = {
  'ct-basics': enLessonCTBasics,
  'ct-protocols': enLessonCTProtocols,
  'ct-parameters': enLessonCTParameters,
  'ct-image-quality': enLessonCTImageQuality,
  'contrast-media': enLessonContrastMedia,
  'ct-artifacts': enLessonCTArtifacts,
}

const mriLessonsEn: Record<string, LessonData> = {
  'mri-introduction': enLessonMRIIntroduction,
  'mri-safety': enLessonMRISafety,
  'mri-sequences': enLessonMRISequences,
  'mri-image-quality': enLessonMRIImageQuality,
}

const chestLessonsAr: Record<string, LessonData> = {
  'chest-anatomy': arLessonChestAnatomy,
  'pa-ap-view': arLessonPAAPView,
  'chest-image-quality': arLessonChestImageQuality,
  'systematic-approach': arLessonSystematicApproach,
  'common-findings': arLessonCommonFindings,
}

const chestLessonsEn: Record<string, LessonData> = {
  'chest-anatomy': enLessonChestAnatomy,
  'pa-ap': enLessonPAAP,
  'chest-image-quality': enLessonChestImageQuality,
  'systematic-review': enLessonSystematicReview,
  'common-signs': enLessonCommonSigns,
  'clinical-application': enLessonClinicalApplication,
}

const qualitySafetyLessonsAr: Record<string, LessonData> = {
  'quality-standards': arLessonQualityStandards,
  'radiation-safety': arQualityRadiationSafety,
  compliance: arLessonCompliance,
  'quality-training': arLessonQualityTraining,
}

const qualitySafetyLessonsEn: Record<string, LessonData> = {
  'quality-standards': enLessonQualityStandards,
  'radiation-safety': enLessonQualityRadiationSafety,
  compliance: enLessonCompliance,
  'quality-training': enLessonQualityTraining,
}

const cArmLessonsAr: Record<string, LessonData> = {
  'c-arm-introduction': arLessonCArmIntroduction,
  'c-arm-components': arLessonCArmComponents,
  'c-arm-fluoroscopy-principles': arLessonCArmFluoroscopyPrinciples,
  'c-arm-positioning-surgical-applications':
    arLessonCArmPositioningSurgicalApplications,
  'c-arm-radiation-safety': arLessonCArmRadiationSafety,
  'c-arm-clinical-applications-troubleshooting':
    arLessonCArmClinicalApplicationsTroubleshooting,
}

const cArmLessonsEn: Record<string, LessonData> = {
  'c-arm-introduction': enLessonCArmIntroduction,
  'c-arm-components': enLessonCArmComponents,
  'fluoroscopy-principles': enLessonCArmFluoroscopyPrinciples,
  'c-arm-positioning-surgical-applications':
    enLessonCArmPositioningSurgicalApplications,
  'c-arm-radiation-safety': enLessonCArmRadiationSafety,
  'c-arm-image-quality-troubleshooting':
    enLessonCArmImageQualityTroubleshooting,
}

const mammographyLessonsAr: Record<string, LessonData> = {
  'mammography-introduction': arLessonMammographyIntroduction,
  'mammography-equipment': arLessonMammographyEquipment,
  'mammography-positioning-views': arLessonMammographyPositioningViews,
  'mammography-image-quality-compression':
    arLessonMammographyImageQualityCompression,
  'mammography-radiation-safety':
    arLessonMammographyRadiationSafety,
  'mammography-image-review':
    arLessonMammographyImageReview,
}

const mammographyLessonsEn: Record<string, LessonData> = {
  'mammography-introduction': enLessonMammographyIntroduction,
  'mammography-equipment': enLessonMammographyEquipment,
  'mammography-positioning-views':
    enLessonMammographyPositioningViews,
  'mammography-image-quality-compression':
    enLessonMammographyImageQualityCompression,
  'mammography-radiation-safety':
    enLessonMammographyRadiationSafety,
  'mammography-basic-findings':
    enLessonMammographyBasicFindings,
}

/* =========================================================
   IMAGE MAPS
========================================================= */

const radiologyBasicsImagesAr: Record<string, string[]> = {
  intro: [
    'RB_L01_01_Radiology_Overview.webp',
    'RB_L01_02_Radiology_Modalities.webp',
    'RB_L01_03_Radiology_Departments.webp',
    'RB_L01_04_Radiology_Workflow.webp',
  ],

  'xray-physics': [
    'RB_L02_01_Xray_Generation.webp',
    'RB_L02_02_Xray_Tube.webp',
    'RB_L02_03_Electron_Interaction.webp',
    'RB_L02_04_Xray_Beam.webp',
    'RB_L02_05_Attenuation.webp',
  ],

  'image-formation': [
    'RB_L03_01_Image_Formation.webp',
    'RB_L03_02_Attenuation_Path.webp',
    'RB_L03_03_Digital_Detector.webp',
  ],

  'image-quality': [
    'RB_L04_01_Image_Quality.webp',
    'RB_L04_02_Spatial_Resolution.webp',
    'RB_L04_03_Contrast_Resolution.webp',
    'RB_L04_04_Image_Noise.webp',
    'RB_L04_05_Exposure_Quality.webp',
  ],

  'radiation-safety': [
    'RB_L05_01_Radiation_Safety.webp',
    'RB_L05_02_Time_Distance_Shielding.webp',
    'RB_L05_03_Personal_Protection.webp',
    'RB_L05_04_Dosimetry.webp',
    'RB_L05_05_Safety_Workflow.webp',
  ],

  'patient-positioning': [
    'RB_L06_01_Patient_Positioning.webp',
    'RB_L06_02_AP_PA_Position.webp',
    'RB_L06_03_Lateral_Position.png',
    'RB_L06_04_Centering.webp',
    'RB_L06_05_Collimation.webp',
  ],
}

const radiologyBasicsImagesEn: Record<string, string[]> = {
  intro: [
    'RB_EN_L01_01_Radiology_Overview.webp',
    'RB_EN_L01_02_Imaging_Modalities.webp',
    'RB_EN_L01_03_Radiology_Departments.webp',
    'RB_EN_L01_04_Radiology_Workflow.webp',
  ],

  'xray-physics': [],
  'image-formation': [],
  'image-quality': [],
  'radiation-safety': [],
  'patient-positioning': [],
}

const chestImagesAr: Record<string, string[]> = {
  'chest-anatomy': [
    'RB_CXR_L01_01_Chest_Anatomy.webp',
    'RB_CXR_L01_02_Lung_Zones.png',
    'RB_CXR_L01_03_Heart_Mediastinum.png',
    'RB_CXR_L01_04_Diaphragm_Costophrenic_Angles.png',
    'RB_CXR_L01_05_Anatomical_Landmarks.png',
  ],

  'pa-ap-view': [],
  'chest-image-quality': [],
  'systematic-approach': [],
  'common-findings': [],
}

const chestImagesEn: Record<string, string[]> = {
  'chest-anatomy': [],
  'pa-ap': [],
  'chest-image-quality': [],
  'systematic-review': [],
  'common-signs': [],
  'clinical-application': [],
}

const ctImagesAr: Record<string, string[]> = {
  'ct-basics': [
    'ct_L01_01_CT_scanner-anatomy.png',
    'CT_L01_02_ct_image_formation.png',
    'CT_L01_03_Pixel_vs_Voxel.png',
    'CT_L01_04_ct_axial_coronal_sagittal.png',
    'CT_L01_05_Hounsfield_Units.png',
    'CT_L01_06_Window_Width_Level.png',
    'CT_L01_07_CT_Workflow.png',
  ],

  'ct-protocols': [
    'CT_L02_01_Protocol_Selection_HR.png',
    'CT_L02_02_Head_CT_Protocol_HR.png',
    'CT_L02_03_Chest_CT_Protocol_HR.png',
    'CT_L02_04_Abdomen_Pelvis_Protocol_HR.png',
    'CT_L02_05_CTA_Protocol_HR.png',
    'CT_L02_06_CT_Dose_HR.png',
    'CT_L02_07_Protocol_Optimization_HR.webp',
  ],

  'ct-parameters': [
    'CT_L03_01_Pitch.png',
    'CT_L03_02_Slice_Thickness.png',
    'CT_L03_03_Matrix FOV pixel size.webp',
    'CT_L03_04_kVp_mAs.webp',
    'CT_L03_05_Rotation_Time.webp',
    'CT_L03_06_Scan_Parameters_Overview.webp',
  ],

  'ct-image-quality': [
    'CT_L04_01_Spatial_Resolution.png',
    'CT_L04_02_MPR.png',
    'CT_L04_03_Image_Reconstruction.png',
    'CT_L04_04_Image_Quality.png',
    'CT_Masterclass_L04_04_Reconstruction_Display.webp',
    'CT_Masterclass_L04_IMG07_Image_Quality.webp',
    'CT_Masterclass_L04_IMG09_Dose_Optimization.webp',
  ],

  'contrast-media': [
    'CT_L05_01_Contrast_Media_Types.webp',
    'CT_L05_02_IV_Contrast_Injection.webp',
    'CT_L05_03_Contrast_Timing_Bolus_Tracking.webp',
    'CT_L05_04_CTA_Contrast_Enhancement.webp',
    'CT_L05_05_Contrast_Safety_Patient_Preparation.webp',
    'CT_Masterclass_L02_IMG11_Final_Review.webp',
    'CT_Masterclass_L02_IMG12_Lesson_Summary.webp',
  ],

  'ct-artifacts': [
    'CT_L06_01_CT_Artifacts.png',
    'CT_L06_02_CT_Artifacts.webp',
  ],
}

const ctImagesEn: Record<string, string[]> = {
  'ct-basics': [
    'CT_L01_01.webp',
    'CT_L01_02.webp',
    'CT_L01_03.webp',
    'CT_L01_04.webp',
    'CT_L01_05.webp',
  ],

  'ct-protocols': [
    'CT_L02_01.webp',
    'CT_L02_02.webp',
    'CT_L02_03.webp',
    'CT_L02_04.webp',
    'CT_L02_05.webp',
  ],

  'ct-parameters': [
    'CT_L03_01.webp',
    'CT_L03_02.webp',
    'CT_L03_03.webp',
    'CT_L03_04.webp',
    'CT_L03_05.webp',
  ],

  'ct-image-quality': [
    'CT_L04_01.webp',
    'CT_L04_02.webp',
    'CT_L04_03.webp',
    'CT_L04_04.webp',
    'CT_L04_05.webp',
  ],

  'contrast-media': [
    'CT_L05_01.webp',
    'CT_L05_02.webp',
    'CT_L05_03.webp',
    'CT_L05_04.webp',
    'CT_L05_05.webp',
  ],

  'ct-artifacts': [
    'CT_L06_01.webp',
    'CT_L06_02.webp',
    'CT_L06_03.webp',
    'CT_L06_04.webp',
    'CT_L06_05.webp',
  ],
}

const qualitySafetyImagesAr: Record<string, string[]> = {
  'quality-standards': [
    'RB_QS_L01_01_Radiology_Quality_Fundamentals.webp.jpg',
    'RB_QS_L01_02_Quality_Indicators.jpg',
    'RB_QS_L01_03_Image_Quality_Standards.jpg',
    'RB_QS_L01_04_Patient_Safety_Service_Quality.webp.jpg',
    'RB_QS_L01_05_Continuous_Quality_Improvement.webp.webp',
  ],

  'radiation-safety': [
    'RB_L02_01_Radiation_Safety_Fundamentals.jpg',
    'RB_L02_02_Radiation_Exposure_Principles.jpg',
    'RB_L02_03_ALARA_Principle.jpg',
    'RB_L02_04_Personal_Protection.jpg',
    'RB_L02_05_Radiation_Safety_Workflow.jpg',
  ],

  compliance: [
    'RB_QS_L03_01_Compliance_Fundamentals.jpg',
    'RB_QS_L03_02_Regulatory_Standards.jpg',
    'RB_QS_L03_03_Documentation_Audit.jpg',
    'RB_QS_L03_04_Compliance_Monitoring.jpg',
    'RB_QS_L03_05_Continuous_Compliance_Improvement.jpg',
  ],

  'quality-training': [
    'RB_QS_L04_01_Quality_Safety_Training.jpg',
    'RB_QS_L04_02_Staff_Competency_Assessment.jpg',
    'RB_QS_L04_03_Safety_Protocols_Training.jpg',
    'RB_QS_L04_04_Quality_Control_Workflow.jpg',
    'RB_QS_L04_05_Training_Quality_Improvement.jpg',
  ],
}

const qualitySafetyImagesEn: Record<string, string[]> = {
  'quality-standards': [],
  'radiation-safety': [],
  compliance: [],
  'quality-training': [],
}

const cArmImagesAr: Record<string, string[]> = {
  'c-arm-introduction': [
    'RB_CA_L01_01_C_Arm_Introduction_AR.jpg',
    'RB_CA_L01_02_C_Arm_Basic_Components_AR.jpg',
    'RB_CA_L01_03_C_Arm_Operating_Room_AR.jpg',
  ],

  'c-arm-components': [
    'RB_CA_L02_01_C_Arm_Components_AR.jpg',
    'RB_CA_L02_02_Xray_Tube_Detector_AR.jpg',
    'RB_CA_L02_03_C_Arm_Movements_Controls_AR.jpg',
  ],

  'c-arm-fluoroscopy-principles': [
    'RB_CA_L03_01_Fluoroscopy_Principle_AR.jpg',
    'RB_CA_L03_02_Real_Time_Imaging_AR.jpg',
    'RB_CA_L03_03_Fluoroscopy_Image_Chain_AR.jpg',
  ],

  'c-arm-positioning-surgical-applications': [
    'RB_CA_L04_01_Surgical_Positioning_AR.jpg',
    'RB_CA_L04_02_Orthopedic_Surgical_Applications_AR.jpg',
    'RB_CA_L04_03_Surgical_Imaging_Views_AR.jpg',
  ],

  'c-arm-radiation-safety': [
    'RB_CA_L05_01_Radiation_Safety_Fundamentals_AR.jpg',
    'RB_CA_L05_02_Exposure_Reduction_AR.jpg',
    'RB_CA_L05_03_Protective_Equipment_Positioning_AR.jpg',
  ],

  'c-arm-clinical-applications-troubleshooting': [
    'RB_CA_L06_01_Clinical_Applications_AR.jpg',
    'RB_CA_L06_02_Common_Troubleshooting_AR.jpg',
    'RB_CA_L06_03_Image_Quality_Troubleshooting_AR.jpg',
  ],
}

const cArmImagesEn: Record<string, string[]> = {
  'c-arm-introduction': [],
  'c-arm-components': [],
  'fluoroscopy-principles': [],
  'c-arm-positioning-surgical-applications': [],
  'c-arm-radiation-safety': [],
  'c-arm-image-quality-troubleshooting': [],
}

const mammographyImagesAr: Record<string, string[]> = {
  'mammography-introduction': [
    'RB_MAM_L01_01_Mammography_Introduction_AR.jpg',
    'RB_MAM_L01_02_Why_Mammography_Is_Specialized_AR.jpg',
    'RB_MAM_L01_03_Mammography_Examination_Workflow_AR.jpg',
  ],

  'mammography-equipment': [
    'RB_MAM_L02_01_Mammography_Equipment_AR.jpg',
    'RB_MAM_L02_02_Compression_System_AR.jpg',
    'RB_MAM_L02_03_Image_Receptor_Digital_Imaging_AR.jpg',
  ],

  'mammography-positioning-views': [
    'RB_MAM_L03_01_CC_MLO_Views_AR.jpg',
    'RB_MAM_L03_02_Correct_Breast_Positioning_AR.jpg',
    'RB_MAM_L03_03_Common_Positioning__AR.jpg',
  ],

  'mammography-image-quality-compression': [
    'RB_MAM_L04_01_Mammography_Image_Quality_AR.jpg',
    'RB_MAM_L04_02_Compression_Image_Quality_AR.jpg',
    'RB_MAM_L04_03_Common_Mammography_Artifacts_AR.jpg',
  ],

  'mammography-radiation-safety': [
    'RB_MAM_L05_01_Mammography_Radiation_Safety_AR.jpg',
    'RB_MAM_L05_02_Patient_Radiation_Protection_AR.jpg',
    'RB_MAM_L05_03_Radiation_Safety_Workflow_AR.jpg',
  ],

  'mammography-image-review': [
    'RB_MAM_L06_01_Mammography_Image_Review_AR.jpg',
    'RB_MAM_L06_02_Common_Mammographic_Findings_AR.jpg',
    'RB_MAM_L06_03_Mammography_Comparison_Follow_Up_AR.jpg',
  ],
}

const mammographyImagesEn: Record<string, string[]> = {
  'mammography-introduction': [],
  'mammography-equipment': [],
  'mammography-positioning-views': [],
  'mammography-image-quality-compression': [],
  'mammography-radiation-safety': [],
  'mammography-basic-findings': [],
}

/* =========================================================
   LESSON FOLDERS
========================================================= */

const lessonFolders: Record<
  string,
  Record<string, string>
> = {
  'radiology-basics': {
    intro: 'lesson-01',
    'xray-physics': 'lesson-02',
    'image-formation': 'lesson-03',
    'image-quality': 'lesson-04',
    'radiation-safety': 'lesson-05',
    'patient-positioning': 'lesson-06',
  },

  'ct-mastery': {
    'ct-basics': 'lesson-01',
    'ct-protocols': 'lesson-02',
    'ct-parameters': 'lesson-03',
    'ct-image-quality': 'lesson-04',
    'contrast-media': 'lesson-05',
    'ct-artifacts': 'lesson-06',
  },

  'chest-xray': {
    'chest-anatomy': 'lesson-01',
    'pa-ap-view': 'lesson-02',
    'chest-image-quality': 'lesson-03',
    'systematic-approach': 'lesson-04',
    'common-findings': 'lesson-05',
  },

  'quality-safety': {
    'quality-standards': 'lesson-01',
    'radiation-safety': 'lesson-02',
    compliance: 'lesson-03',
    'quality-training': 'lesson-04',
  },

  'c-arm': {
    'c-arm-introduction': 'lesson-01',
    'c-arm-components': 'lesson-02',
    'c-arm-fluoroscopy-principles': 'lesson-03',
    'c-arm-positioning-surgical-applications': 'lesson-04',
    'c-arm-radiation-safety': 'lesson-05',
    'c-arm-clinical-applications-troubleshooting': 'lesson-06',
  },

  'c-arm-imaging': {
    'c-arm-introduction': 'lesson-01',
    'c-arm-components': 'lesson-02',
    'fluoroscopy-principles': 'lesson-03',
    'c-arm-positioning-surgical-applications': 'lesson-04',
    'c-arm-radiation-safety': 'lesson-05',
    'c-arm-image-quality-troubleshooting': 'lesson-06',
  },

  mammography: {
    'mammography-introduction': 'lesson-01',
    'mammography-equipment': 'lesson-02',
    'mammography-positioning-views': 'lesson-03',
    'mammography-image-quality-compression': 'lesson-04',
    'mammography-radiation-safety': 'lesson-05',
    'mammography-image-review': 'lesson-06',
    'mammography-basic-findings': 'lesson-06',
  },
}

/* =========================================================
   LESSON DATA SELECTOR
========================================================= */

function getLessonData(
  locale: Locale,
  slug: string,
  lesson: string
): LessonData | null {
  if (locale === 'ar') {
    if (slug === 'radiology-basics') {
      return radiologyBasicsLessonsAr[lesson] ?? null
    }

    if (slug === 'ct-mastery') {
      return ctLessonsAr[lesson] ?? null
    }

    if (slug === 'chest-xray') {
      return chestLessonsAr[lesson] ?? null
    }

    if (slug === 'quality-safety') {
      return qualitySafetyLessonsAr[lesson] ?? null
    }

    if (slug === 'c-arm') {
      return cArmLessonsAr[lesson] ?? null
    }

    if (slug === 'mammography') {
      return mammographyLessonsAr[lesson] ?? null
    }

    return null
  }

  if (slug === 'radiology-basics') {
    return radiologyBasicsLessonsEn[lesson] ?? null
  }

  if (slug === 'ct-mastery') {
    return ctLessonsEn[lesson] ?? null
  }

  if (slug === 'mri-basics') {
    return mriLessonsEn[lesson] ?? null
  }

  if (slug === 'chest-xray') {
    return chestLessonsEn[lesson] ?? null
  }

  if (slug === 'quality-safety') {
    return qualitySafetyLessonsEn[lesson] ?? null
  }

  if (slug === 'c-arm-imaging') {
    return cArmLessonsEn[lesson] ?? null
  }

  if (slug === 'mammography') {
    return mammographyLessonsEn[lesson] ?? null
  }

  return null
}

/* =========================================================
   IMAGE SELECTOR
========================================================= */

function getLessonImages(
  locale: Locale,
  slug: string,
  lesson: string
) {
  if (locale === 'ar') {
    if (slug === 'radiology-basics') {
      return {
        images: radiologyBasicsImagesAr[lesson] ?? [],
        basePath:
          '/images/ar/courses/radiology-basics',
      }
    }

    if (slug === 'ct-mastery') {
      return {
        images: ctImagesAr[lesson] ?? [],
        basePath:
          '/images/ar/courses/ct-mastery',
      }
    }

    if (slug === 'chest-xray') {
      return {
        images: chestImagesAr[lesson] ?? [],
        basePath:
          '/images/ar/courses/chest-xray',
      }
    }

    if (slug === 'quality-safety') {
      return {
        images: qualitySafetyImagesAr[lesson] ?? [],
        basePath:
          '/images/ar/courses/quality-safety',
      }
    }

    if (slug === 'c-arm') {
      return {
        images: cArmImagesAr[lesson] ?? [],
        basePath:
          '/images/ar/courses/C_Arm',
      }
    }

    if (slug === 'mammography') {
      return {
        images:
          mammographyImagesAr[lesson] ?? [],
        basePath:
          '/images/ar/courses/Mammography',
      }
    }
  }

  if (locale === 'en') {
    if (slug === 'radiology-basics') {
      return {
        images: radiologyBasicsImagesEn[lesson] ?? [],
        basePath:
          '/images/en/courses/radiology-basics',
      }
    }

    if (slug === 'ct-mastery') {
      return {
        images: ctImagesEn[lesson] ?? [],
        basePath:
          '/images/en/courses/ct-mastery',
      }
    }

    if (slug === 'chest-xray') {
      return {
        images: chestImagesEn[lesson] ?? [],
        basePath:
          '/images/en/courses/chest-xray',
      }
    }

    if (slug === 'quality-safety') {
      return {
        images: qualitySafetyImagesEn[lesson] ?? [],
        basePath:
          '/images/en/courses/quality-safety',
      }
    }

    if (slug === 'c-arm-imaging') {
      return {
        images: cArmImagesEn[lesson] ?? [],
        basePath:
          '/images/en/courses/C_Arm',
      }
    }

    if (slug === 'mammography') {
      return {
        images:
          mammographyImagesEn[lesson] ?? [],
        basePath:
          '/images/en/courses/Mammography',
      }
    }
  }

  return {
    images: [],
    basePath: '',
  }
}

/* =========================================================
   LIST RENDERER
========================================================= */

function renderList(
  value: string | string[]
) {
  if (Array.isArray(value)) {
    return (
      <div className="space-y-2">
        {value.map((item, index) => (
          <p key={index}>
            • {item}
          </p>
        ))}
      </div>
    )
  }

  return <p>{value}</p>
}

/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  const params: Array<{
    locale: string
    slug: string
    lesson: string
  }> = []

  for (const course of arCourses) {
    for (const lesson of course.lessons) {
      params.push({
        locale: 'ar',
        slug: course.slug,
        lesson: lesson.slug,
      })
    }
  }

  for (const course of enCourses) {
    for (const lesson of course.lessons) {
      params.push({
        locale: 'en',
        slug: course.slug,
        lesson: lesson.slug,
      })
    }
  }

  return params
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: {
  params: {
    locale: string
    slug: string
    lesson: string
  }
}) {
  const {
    locale,
    slug,
    lesson,
  } = params

  const courses =
    locale === 'ar'
      ? arCourses
      : enCourses

  const course = courses.find(
    item => item.slug === slug
  )

  if (!course) {
    return {}
  }

  const lessonInfo =
    course.lessons.find(
      item => item.slug === lesson
    )

  if (!lessonInfo) {
    return {}
  }

  return {
    title:
      `${lessonInfo.title} | Hidden Radiology`,
    description:
      lessonInfo.title,
  }
}

/* =========================================================
   LESSON PAGE
========================================================= */

export default async function LessonPage({
  params,
}: {
  params: {
    locale: string
    slug: string
    lesson: string
  }
}) {
  const {
    locale: localeParam,
    slug,
    lesson,
  } = params

  /* -------------------------------------------------------
     VALIDATE LOCALE
  ------------------------------------------------------- */

  if (
    localeParam !== 'ar' &&
    localeParam !== 'en'
  ) {
    notFound()
  }

  const locale =
    localeParam as Locale

  const isAr =
    locale === 'ar'

  /* -------------------------------------------------------
     SELECT COURSES
  ------------------------------------------------------- */

  const courses =
    isAr
      ? arCourses
      : enCourses

  /* -------------------------------------------------------
     FIND COURSE
  ------------------------------------------------------- */

  const course =
    courses.find(
      item => item.slug === slug
    )

  if (!course) {
    notFound()
  }

  /* -------------------------------------------------------
     FIND LESSON
  ------------------------------------------------------- */

  const lessonInfo =
    course.lessons.find(
      item => item.slug === lesson
    )

  if (!lessonInfo) {
    notFound()
  }

  /* -------------------------------------------------------
     LESSON CONTENT
  ------------------------------------------------------- */

  const lessonData =
    getLessonData(
      locale,
      slug,
      lesson
    )

  /* -------------------------------------------------------
     IMAGES
  ------------------------------------------------------- */

  const {
    images,
    basePath,
  } =
    getLessonImages(
      locale,
      slug,
      lesson
    )

  /* -------------------------------------------------------
     FOLDER
  ------------------------------------------------------- */

  const folder =
    lessonFolders[slug]?.[lesson] ?? ''

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main
      dir={isAr ? 'rtl' : 'ltr'}
      className="min-h-screen py-12"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* BACK */}

        <Link
          href={`/${locale}/courses/${course.slug}`}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-cyan mb-8 transition-colors"
        >
          <span>
            {isAr ? '←' : '←'}
          </span>

          {isAr
            ? 'العودة إلى الدورة'
            : 'Back to Course'}
        </Link>

        {/* CARD */}

        <article className="bg-brand-card border border-brand-border rounded-2xl p-8">

          {/* LABEL */}

          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-lg text-xs font-medium bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
              {isAr
                ? 'الدرس'
                : 'Lesson'}
            </span>
          </div>

          {/* TITLE */}

          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {lessonData?.title ??
              lessonInfo.title}
          </h1>

          {/* DURATION */}

          <p className="text-slate-400 mb-10">
            {isAr
              ? 'مدة الدرس: '
              : 'Duration: '}

            {lessonData?.duration ??
              lessonInfo.duration}
          </p>

          {/* =================================================
             CONTENT
          ================================================= */}

          {lessonData ? (
            <div className="space-y-10">

              {/* INTRODUCTION */}

              {lessonData.introduction && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {isAr
                      ? 'مقدمة'
                      : 'Introduction'}
                  </h2>

                  <p className="text-slate-300 leading-8">
                    {lessonData.introduction}
                  </p>
                </section>
              )}

              {/* OBJECTIVES */}

              {lessonData.objectives && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {isAr
                      ? 'أهداف الدرس'
                      : 'Lesson Objectives'}
                  </h2>

                  <div className="text-slate-300 leading-8">
                    {renderList(
                      lessonData.objectives
                    )}
                  </div>
                </section>
              )}

              {/* SECTIONS */}

              {lessonData.sections &&
                lessonData.sections.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-6">
                      {isAr
                        ? 'شرح الدرس'
                        : 'Lesson Content'}
                    </h2>

                    <div className="space-y-8">

                      {lessonData.sections.map(
                        (
                          section,
                          index
                        ) => (
                          <div
                            key={index}
                            className={
                              isAr
                                ? 'border-r-2 border-brand-cyan/30 pr-5'
                                : 'border-l-2 border-brand-cyan/30 pl-5'
                            }
                          >
                            <h3 className="text-xl font-bold text-white mb-3">
                              {section.title}
                            </h3>

                            <p className="text-slate-300 leading-8">
                              {section.content}
                            </p>
                          </div>
                        )
                      )}

                    </div>
                  </section>
                )}

              {/* PRACTICAL EXAMPLE */}

              {lessonData.practicalExample && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {isAr
                      ? 'مثال عملي'
                      : 'Practical Example'}
                  </h2>

                  <div className="bg-slate-900/40 border border-brand-border rounded-xl p-5">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {
                        lessonData
                          .practicalExample
                          .title
                      }
                    </h3>

                    <p className="text-slate-300 leading-8">
                      {
                        lessonData
                          .practicalExample
                          .content
                      }
                    </p>
                  </div>
                </section>
              )}

              {/* =================================================
                 EDUCATIONAL IMAGES
              ================================================= */}

              {images.length > 0 &&
                folder &&
                basePath && (
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-6">
                      {isAr
                        ? 'الصور التعليمية'
                        : 'Educational Images'}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      {images.map(
                        (
                          image,
                          index
                        ) => (
                          <div
                            key={`${image}-${index}`}
                            className="overflow-hidden rounded-xl border border-brand-border bg-slate-900"
                          >
                            <img
                              src={`${basePath}/${folder}/${encodeURIComponent(image)}`}
                              alt={`${lessonInfo.title} - ${index + 1}`}
                              className="w-full h-auto object-contain"
                              loading="lazy"
                            />
                          </div>
                        )
                      )}

                    </div>
                  </section>
                )}

              {/* COMMON MISTAKES */}

              {lessonData.commonMistakes && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {isAr
                      ? 'الأخطاء الشائعة'
                      : 'Common Mistakes'}
                  </h2>

                  <div className="text-slate-300 leading-8">
                    {renderList(
                      lessonData.commonMistakes
                    )}
                  </div>
                </section>
              )}

              {/* KEY POINTS */}

              {lessonData.keyPoints && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {isAr
                      ? 'أهم النقاط'
                      : 'Key Points'}
                  </h2>

                  <div className="text-slate-300 leading-8">
                    {renderList(
                      lessonData.keyPoints
                    )}
                  </div>
                </section>
              )}

              {/* TAKEAWAY */}

              {lessonData.takeaway && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {isAr
                      ? 'الخلاصة'
                      : 'Takeaway'}
                  </h2>

                  <div className="bg-brand-cyan/5 border border-brand-cyan/20 rounded-xl p-5">
                    <p className="text-slate-200 leading-8">
                      {lessonData.takeaway}
                    </p>
                  </div>
                </section>
              )}

              {/* DISCLAIMER */}

              {lessonData.disclaimer && (
                <section>
                  <p className="text-sm text-slate-500 leading-7">
                    {lessonData.disclaimer}
                  </p>
                </section>
              )}

            </div>
          ) : (
            <div className="text-slate-300 leading-8">
              {isAr
                ? 'محتوى هذا الدرس قيد الإعداد.'
                : 'This lesson content is being prepared.'}
            </div>
          )}

        </article>
      </div>
    </main>
  )
}