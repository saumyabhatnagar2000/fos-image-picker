export type Callback = (response: ImagePickerResponse) => any;

export interface OptionsCommon {
  mediaType: MediaType;
  maxWidth?: number;
  maxHeight?: number;
  quality?: PhotoQuality;
  videoQuality?: AndroidVideoOptions | iOSVideoOptions;
  includeBase64?: boolean;
  includeExtra?: boolean;
  formatAsMp4?: boolean;
  presentationStyle?:
    | 'currentContext'
    | 'fullScreen'
    | 'pageSheet'
    | 'formSheet'
    | 'popover'
    | 'overFullScreen'
    | 'overCurrentContext';
  assetRepresentationMode?: 'auto' | 'current' | 'compatible';
}

export interface ImageLibraryOptions extends OptionsCommon {
  selectionLimit?: number;
}

export interface CameraOptions extends OptionsCommon {
  durationLimit?: number;
  saveToPhotos?: boolean;
  cameraType?: CameraType;
}

interface ExifData {
  DateTime: string;
  DateTimeDigitized: string;
  ExposureTime: string | null;
  FNumber: string | null;
  Flash: string | null;
  FocalLength: string;
  GPSAltitude: string | null;
  GPSAltitudeRef: string | null;
  GPSDateStamp: string;
  GPSLatitude: string | null;
  GPSLatitudeRef: string | null;
  GPSLongitude: string | null;
  GPSLongitudeRef: string | null;
  GPSProcessingMethod: string | null;
  GPSTimeStamp: string | null;
  ISOSpeedRatings: string;
  ImageLength: string;
  ImageWidth: string;
  Latitude: Number;
  Longitude: Number;
  Make: string;
  Model: string;
  Orientation: string | null;
  SubSecTime: string | null;
  SubSecTimeDigitized: string | null;
  SubSecTimeOriginal: string | null;
  WhiteBalance: string;
}

export interface Asset {
  base64?: string;
  uri?: string;
  width?: number;
  height?: number;
  fileSize?: number;
  type?: string;
  fileName?: string;
  duration?: number;
  bitrate?: number;
  timestamp?: string;
  id?: string;
  exif?: ExifData;
}

export interface ImagePickerResponse {
  didCancel?: boolean;
  errorCode?: ErrorCode;
  errorMessage?: string;
  assets?: Asset[];
}

export type PhotoQuality =
  | 0
  | 0.1
  | 0.2
  | 0.3
  | 0.4
  | 0.5
  | 0.6
  | 0.7
  | 0.8
  | 0.9
  | 1;
export type CameraType = 'back' | 'front';
export type MediaType = 'photo' | 'video' | 'mixed';
export type AndroidVideoOptions = 'low' | 'high';
export type iOSVideoOptions = 'low' | 'medium' | 'high';
export type ErrorCode = 'camera_unavailable' | 'permission' | 'others';
