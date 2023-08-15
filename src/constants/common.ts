import { convertByteToMb } from "@/util/common";
export const MAX_IMAGE = 10;
export const EXTERNAL_LINK = '';
export const LINK_AFTER_COMPLETE = 'https://lp.civicpics.jp/area';
export const FILE_SIZE_LIMIT = (10 * 1024 * 1024) as number;
export const FILE_SIZE_LIMIT_DISPLAY = convertByteToMb(FILE_SIZE_LIMIT, 0) + 'MB';
