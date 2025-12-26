import _ from 'lodash';
import { PartialDeep } from 'type-fest';

/**
 * FileManager Item Model
 */
export type FileManagerItem = {
  id: string;
  folderId: string;
  name: string;
  createdBy: string;
  createdAt: string;
  modifiedAt: string;
  size: string;
  type: string;
  contents?: string;
  description?: string;
  thumbnailUrl?: string; // Optional for image thumbnails
};

const FileManagerItemModel = (data: PartialDeep<FileManagerItem>) =>
  _.defaults(data || {}, {
    id: _.uniqueId(),
    folderId: '',
    name: '',
    createdBy: '',
    createdAt: '',
    modifiedAt: '',
    size: '',
    type: '',
    contents: '',
    description: '',
    thumbnailUrl: '',
  });

export default FileManagerItemModel;